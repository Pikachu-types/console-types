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
    consumer: string;
    app: string;
    user: string | null;
    type: "authentication" | "signature";
    status: "success" | "failed" | "cancelled" | "expired";
    timestamp: number;
    ip: string;
    useragent: string;
    requestId: string;
} & DocumentSchema;
export type BillingEvent = {
    eventId: string;
    event_id: string;
    requestId: string;
    document_id?: string;
    consumerId?: string;
    appId?: string;
    userId?: string | null;
    eventType: string;
    eventSubType?: string;
    status?: string;
    signed?: boolean;
    signedAt?: number | null;
    timestamp: Date | null | number | string;
    ip?: string | null;
    useragent?: string | null;
    details?: Record<string, unknown>;
    operation?: string;
    requestPayload?: Record<string, unknown>;
};
export declare class BillingEventModel extends Model<TBillingEvent> {
}
