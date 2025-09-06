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
/**
 * Signature Billing

Count directly from billingEvents with type="signature" AND status="success".

Store aggregated totals in the same usage docs as above.
 *
 */
/**
 * ⚡ Implementation Flow

billingEvents → always log with consumerId + appId.

Monthly aggregation job →

group by appId → usage/{consumer}/{month}/{appId}

group by consumerId → usage/{consumer}/{month}/summary

Invoice generator reads summary docs and formats invoice.
 */
/**
 * Billing happens per app (for accuracy) but invoice is consolidated per consumer (for simplicity)
 */
/**
 * Analytics Provision

With billingEvents as the immutable audit trail, your dashboard can now surface:

User-level insights: How many times user X logged in, which device, where from.

App-level insights: Monthly auth trends, top devices, fail ratios.

Fraud/compliance signals: Same IP logging in as 50 users, impossible travel (Lagos → London in 2 mins).

This makes the dashboard add-on not just a reporting tool but a compliance product.
 *
 */
/**
 * Revenue Alignment

Auth → MAU counted via unique successful user authentications per consumer/app/month.

Signatures → per doc signed, directly logged in billingEvents.

Analytics → dashboard reads from billingEvents + usage collections.
 */
/**
 * Integrity & Tamper-Proofing

To avoid disputes with enterprises:

- Keep all billingEvents append-only (no updates).

- Use Firestore security rules + Cloud Functions to enforce immutability.

- Optionally, sign each billingEvent (JWT/HMAC) with your backend secret so that you can prove logs weren’t modified.

This gives us "perfect, unaltered logs" for billing + compliance.
 */
import { DomainType, BusinessType, DocumentSchema, VerificationStatus, DashboardRoles } from "../..";
import { Model } from "../model";
export type Consumer = {
    name: string;
    image?: string;
    slug: string;
    information?: {
        legalName: string;
        domain: string;
        rcNumber: string;
        type: BusinessType;
        vat?: string;
        description: string;
        email: string;
        address: string;
        country: string;
        industry: string;
        status: VerificationStatus;
    };
    apis?: {
        live: string;
        test: string;
    };
    usage?: number;
    contact: {
        email: string;
        phone?: string;
    };
    keys?: {
        public: string;
        private?: string | null;
    };
    stats?: {
        production: {
            /**
             * Monthly eSign count
             */
            mec: number;
            /**
             * Monthly auth count
             */
            mac: number;
        };
        test: {
            /**
             * Monthly eSign count
            */
            mec: number;
            /**
             * Monthly auth count
             */
            mac: number;
        };
    };
    owner: string;
    members: {
        [key: string]: {
            role: DashboardRoles;
            uid: string;
        };
    };
    terms: {
        mandatory: boolean;
        marketing: boolean;
    };
} & DocumentSchema;
export declare class ConsumerModel extends Model<Consumer> {
    hasApiKeys(): boolean;
    static initiateDetails(): Consumer['information'];
    userRole(uid: string): DashboardRoles | undefined;
    findApiKey(env: DomainType): string;
}
