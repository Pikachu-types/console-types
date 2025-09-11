"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingLogicModel = void 0;
exports.determineTier = determineTier;
exports.calculateBilling = calculateBilling;
const model_1 = require("../model");
class PricingLogicModel extends model_1.Model {
}
exports.PricingLogicModel = PricingLogicModel;
function determineTier(usage, serviceType, pricing) {
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
function calculateBilling(billingStatement, pricing) {
    const authTier = determineTier(billingStatement.billableAuths, 'authentication', pricing);
    const signatureTier = determineTier(billingStatement.billableSignatures, 'signature', pricing);
    const result = {
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
//# sourceMappingURL=index.js.map