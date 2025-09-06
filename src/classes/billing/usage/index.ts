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

import { DocumentSchema } from "../../..";
import { Model } from "../../model";


export type AppLevelUsage = {
  consumer: string;
  app: string;
  month: string;
  activeUsers: number;
  signatures: number;
  failedAuths: number;
  cancelledAuths: number;
  suspicious: number;
} & DocumentSchema;


export type UsageSummary = {
  consumer: string;
  month: string;
  totalActiveUsers: number;
  totalSignatures: number;
  apps: {
    [appId: string]: {
      activeUsers: number;
      signatures: number;
    },
  },
} & DocumentSchema;


export class AppLevelUsageModel extends Model<AppLevelUsage> {
}


export class UsageSummaryModel extends Model<UsageSummary> {
}