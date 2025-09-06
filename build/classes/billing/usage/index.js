"use strict";
/**
 * 1. Level of Monthly Active User Tracking
 *
 * MAU is always counted per app.
 * - Because App A may have 500 activities and App B may have 3,0000 activities - they belong to the same consumer but shouldn't be merged at the usage level.
 * - This also prevents double-counting the same user if they use both apps in the same month.
 *
 * 2. Invoice Level
 * - Invoices are issued per consumer (organization)
 * - Each invoice line item shows app-level usage so the org can reconcile internally
 *
 * Instead of lumping all into usage/{consumerId}/{yyyy-mm}, you make it hierarchical:
 *
 * App level usage - usage/{consumerId}/{yyyy-mm}/{appId}
 *
 * Consumer-level rollup (auto-compute on changes to app level usage) - usage/{consumerId}/{yyyy-mm}/summary
 *
 * App-level doc = source of truth.
 * Summary doc = consolidated view used for invoices.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageSummaryModel = exports.AppLevelUsageModel = void 0;
const model_1 = require("../../model");
class AppLevelUsageModel extends model_1.Model {
}
exports.AppLevelUsageModel = AppLevelUsageModel;
class UsageSummaryModel extends model_1.Model {
}
exports.UsageSummaryModel = UsageSummaryModel;
//# sourceMappingURL=index.js.map