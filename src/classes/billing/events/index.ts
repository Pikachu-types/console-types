import { DocumentSchema } from "../../..";
import { Model } from "../../model";


/**
 * Every request should generate an immutable billing/analytics event 
 * regardless of whether it was signed.
 * persist all in billingEvents/[year]/[month]/[eventId]
 * 
 * This gives you ground truth for billing + analytics.
 * 
 * You can still delete short-lived requests docs to keep performance,
 * but billingEvents stays permanent.
 */

export type TBillingEvent = {
  consumer: string;        // bcn_xxx (B2B customer id)
  app: string;             // app_xxx
  user: string | null;     // bid_xxx if known
  type: "authentication" | "signature";
  status: "success" | "failed" | "cancelled" | "expired";
  timestamp: number;
  ip: string;
  useragent: string;
  requestId: string;       // tie back to request
} & DocumentSchema;

export type BillingEvent = {
  // both forms included to ensure BQ clustering and compatibility
  eventId: string;     // camelCase (internal)
  event_id: string;    // snake_case (BigQuery extension clustering expects event_id)
  requestId: string;   // original request doc id
  document_id?: string; // alias to requestId (extension exposes document_id)
  consumerId?: string; // bcn_xxx
  appId?: string;      // app_xxx
  sandbox?: boolean;
  userId?: string | null; // bid_xxx or null
  eventType: string;   // "request.created" | "request.updated" | "request.deleted"
  eventSubType?: string; // "auth_attempt" | "signature" | "onsession" | "user_assigned" ...
  status?: string;     // "success" | "failed" | "cancelled" | "expired" | "suspicious"
  signed?: boolean;
  signedAt?: number | null; // epoch seconds
  // BigQuery-friendly time field (top-level)
  timestamp: Date | null | number | string; // prefer Firestore Timestamp
  ip?: string | null;
  useragent?: string | null;
  details?: Record<string, unknown>;
  // Top-level fields used by BigQuery extension for clustering
  operation?: string; // same as eventType or condensed op e.g. "signed","auth"
  // raw request payload (small)
  requestPayload?: Record<string, unknown>;
};

export type BillingStatements = {
  id: string;
  consumer: string;
  month: string;
  month_ts: number;
  billableSignatures: number;
  billableAuths: number;
  totalBillable: number;
  status: "draft" | "handled" | "failed";
  created: number;
  lut?: number;
};


export class BillingEventModel extends Model<TBillingEvent> {
}
