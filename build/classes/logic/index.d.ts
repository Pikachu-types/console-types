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
        price: number;
        linter: {
            min: number;
            max: number | null;
        };
    };
};
export type PricingLogic = {
    authentication: {
        starter: {
            price: 25;
            linter: {
                min: 0;
                max: 1000;
            };
        };
        growth: {
            price: 50;
            linter: {
                min: 1001;
                max: 10000;
            };
        };
        enterprise: {
            price: 150;
            linter: {
                min: 10001;
                max: null;
            };
        };
    };
    signature: {
        standard: {
            price: 200;
            linter: {
                min: 0;
                max: 1000;
            };
        };
        business: {
            price: 150;
            linter: {
                min: 1001;
                max: 10000;
            };
        };
        enterprise: {
            price: 150;
            linter: {
                min: 1001;
                max: 10000;
            };
        };
    };
} & DocumentSchema;
export declare class PricingLogicModel extends Model<PricingLogic> {
}
export type BillingCalculation = {
    authentication: TierInfo;
    signature: TierInfo;
    totalPrice: number;
    totalDue: number;
};
export declare function determineTier(usage: number, serviceType: ServiceType, pricing: {
    authentication: Tier;
    signature: Tier;
}): {
    tier: string;
    price: number;
};
export declare function calculateBilling(billingStatement: BillingStatements, pricing: {
    authentication: Tier;
    signature: Tier;
}): BillingCalculation;
