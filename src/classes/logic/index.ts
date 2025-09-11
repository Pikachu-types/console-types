import { BillingStatements, DocumentSchema } from "../..";
import { Model } from "../model";

export type ServiceType = 'authentication' | 'signature';

export type TierInfo = {
  tier: string;
  price: number;
  usage: number;
};

export type Tier = {
  [key: string]: {
    price: number,
    linter: {
      min: number,
      max: number | null
    }
  }
};

export type PricingLogic = {
  authentication: {
    starter: {
      price: 25,
      linter: {
        min: 0,
        max: 1000
      }
    },
    growth: {
      price: 50,
      linter: {
        min: 1001,
        max: 10000
      }
    },
    enterprise: {
      price: 150, // custom pricing
      linter: {
        min: 10001,
        max: null
      }
    },
  },
  signature: {
    standard: {
      price: 200,
      linter: {
        min: 0,
        max: 1000
      }
    },
    business: {
      price: 150,
      linter: {
        min: 1001,
        max: 10000
      }
    },
    enterprise: { // custom bulk pricing
      price: 150,
      linter: {
        min: 1001,
        max: 10000
      }
    },
  }
} & DocumentSchema;


export class PricingLogicModel extends Model<PricingLogic> {

}

export type BillingCalculation = {
  authentication: TierInfo;
  signature: TierInfo;
  totalPrice: number; // from our pricing
  totalDue: number; // after overall calculation
};

export function determineTier(usage: number, serviceType: ServiceType, pricing: {
  authentication: Tier,
  signature: Tier,
}): { tier: string; price: number } {
  const tiers = pricing[serviceType];

  for (const [tierName, tierConfig] of Object.entries(tiers)) {
    const { min, max } = tierConfig.linter;

    if (usage >= min && (max === null || usage <= max)) {
      return {
        tier: tierName,
        price: tierConfig.price
      };
    }
  }

  // Fallback - this shouldn't happen with proper tier configuration
  throw new Error(`No tier found for ${serviceType} with usage: ${usage}`);
}

export function calculateBilling(billingStatement: BillingStatements, pricing: {
  authentication: Tier,
  signature: Tier,
}): BillingCalculation {
  const authTier = determineTier(billingStatement.billableAuths, 'authentication', pricing);
  const signatureTier = determineTier(billingStatement.billableSignatures, 'signature', pricing);

  const result: BillingCalculation = {
    authentication: {
      tier: authTier.tier,
      price: authTier.price,
      usage: billingStatement.billableAuths
    },
    signature: {
      tier: signatureTier.tier,
      price: signatureTier.price,
      usage: billingStatement.billableSignatures
    },
    totalPrice: authTier.price + signatureTier.price,
    totalDue: (authTier.price * billingStatement.billableAuths) +
      (signatureTier.price * billingStatement.billableSignatures),
  };

  return result;
}
