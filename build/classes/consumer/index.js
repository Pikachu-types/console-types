"use strict";
/**
 * Invoice Logic
 *
 * 1. At invoice time (every 1st of new month)
 * - Fetch all usage/{consumer}/{yyyy-mm}/{appId} for that consumer.
 * - Calculate MAU price per app based on tier (Starter/Growth/Enterprise).
 * - Add signature charges.
 *
 * 2. Consolidate into one invoice per consumer with line items:
 * Invoice #2025-09-BILL-123
Consumer: ACME Bank Ltd (bcn_123)

Line Items:
- App A (app_abc) → 1,842 MAU @ ₦50 = ₦92,100
- App B (app_xyz) → 3,578 MAU @ ₦50 = ₦178,900
- App B (app_xyz) Signatures → 695 @ ₦20 = ₦13,900

Total Due: ₦284,900
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerModel = void 0;
const model_1 = require("../model");
class ConsumerModel extends model_1.Model {
    hasApiKeys() {
        var _a, _b, _c, _d;
        return ((_b = (_a = this.schema.apis) === null || _a === void 0 ? void 0 : _a.live.length) !== null && _b !== void 0 ? _b : 0) > 1 && ((_d = (_c = this.schema.apis) === null || _c === void 0 ? void 0 : _c.test.length) !== null && _d !== void 0 ? _d : 0) > 1;
    }
    static initiateDetails() {
        return {
            type: 'llc',
            status: 'stale',
        };
    }
    userRole(uid) {
        return this.schema.members[uid].role;
    }
    findApiKey(env) {
        if (env === 'production' && this.schema.apis) {
            return this.schema.apis.live;
        }
        else if (env === 'test' && this.schema.apis) {
            return this.schema.apis.test;
        }
        else {
            return "";
        }
    }
}
exports.ConsumerModel = ConsumerModel;
//# sourceMappingURL=index.js.map