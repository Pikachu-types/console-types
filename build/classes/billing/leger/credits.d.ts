import { DocumentSchema } from "../../..";
import { Model } from "../../model";
export type CreditTransaction = {
    consumer: string;
    sessionID: string | null;
    intentID: string | null | undefined;
    provider: "stripe" | "flutterwave" | "kora";
    type: "purchase" | "affiliate" | "refund" | "deduction";
    amount: number;
    status: "pending" | "completed" | "failed";
    invoiceId?: string;
    note?: string;
    firstTopUp: boolean;
    currency: string;
    paidAt?: number;
    domain: "test" | "live";
    paymentMethodID?: {
        type: string;
        metadata?: Record<string, unknown>;
    } | null;
} & DocumentSchema;
export declare class CreditTransactionModel extends Model<CreditTransaction> {
}
export type CreditLedger = {
    consumer: string;
    type: "deduction" | "topup" | "bonus";
    source: "billing" | "checkout" | "affiliate";
    amount: number;
    balanceAfter: number;
    balanceBefore: number;
    metadata?: Record<string, unknown>;
    domain: "test" | "live";
} & DocumentSchema;
export declare class CreditLedgerModel extends Model<CreditLedger> {
}
