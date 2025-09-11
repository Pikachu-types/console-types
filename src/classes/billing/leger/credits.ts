import { DocumentSchema } from "../../..";
import { Model } from "../../model";

export type CreditTransaction = {
  consumer: string;
  sessionID: string | null; // provider reference
  intentID: string | null | undefined; // intent reference if we used payment method
  provider: "stripe" | "flutterwave" | "kora"
  type: "purchase" | "affiliate" | "refund" | "deduction"
  amount: number;
  status: "pending" | "completed" | "failed"
  invoiceId?: string // if used to pay invoice
  note?: string // extra context
  firstTopUp: boolean
  currency: string
  paidAt?: number;
  domain: "test" | "live";
  paymentMethodID?: {
    type: string;
    metadata?: Record<string, unknown>,
  } | null;
} & DocumentSchema;


export class CreditTransactionModel extends Model<CreditTransaction> {

}

export type CreditLedger = {
  consumer: string;
  type: "deduction" | "topup" | "bonus",
  source: "billing" | "checkout" | "affiliate",
  amount: number;
  balanceAfter: number;
  balanceBefore: number;
  metadata?: Record<string, unknown>;
  domain: "test" | "live";
} & DocumentSchema;

export class CreditLedgerModel extends Model<CreditLedger> {

}