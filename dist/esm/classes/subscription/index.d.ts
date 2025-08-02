import { BillingCycle, BillingPlans, ProductType, Domain } from "../../types";
export interface Subscription {
    plan: BillingPlans;
    domain: Domain;
    product: ProductType;
    cycle: BillingCycle;
    status: "active" | "trialing" | "canceled" | "incomplete" | "non-renewing" | "past_due";
    iat: number;
    attempts?: number;
    begun: number;
    next_cycle?: number;
    consumer: string;
    id: string;
    subscription_code?: string;
    token?: string;
}
export declare class SubscriptionModel implements Subscription {
    plan: BillingPlans;
    domain: Domain;
    product: ProductType;
    cycle: BillingCycle;
    status: "active" | "trialing" | "canceled" | "incomplete" | "past_due";
    iat: number;
    attempts?: number;
    begun: number;
    next_cycle?: number;
    consumer: string;
    id: string;
    subscription_code?: string;
    token?: string;
    static fromJson(obj: Subscription): SubscriptionModel;
    toJsonString(): string;
    toMap(): Record<string, unknown>;
}
