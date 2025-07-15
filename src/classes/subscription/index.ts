import { BillingCycle, BillingPlans, ProductType, Domain } from "../../types";

// models/subscription.ts

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

export class SubscriptionModel implements Subscription {
  plan: BillingPlans = 'basic';
  domain: Domain = 'test';
  product: ProductType = 'authentication';
  cycle: BillingCycle = 'monthly';
  status: "active" | "trialing" | "canceled" | "incomplete" | "past_due" = 'incomplete';
  iat: number = 0;
  attempts?: number;
  begun: number = 0;
  next_cycle?: number;
  consumer: string = '';
  id: string = '';
  subscription_code?: string;
  token?: string;

  public static fromJson(obj: Subscription): SubscriptionModel {
    return Object.assign(new SubscriptionModel(), obj);
  }

  public toJsonString(): string {
    return JSON.stringify(this);
  }
  public toMap(): Record<string, unknown> {
    return { ...this } as Record<string, unknown>;
  }
}
