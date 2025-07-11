import { BillingCycle, BillingPlans, BillingType } from "../../types";

export default class Billing {
  plan: BillingPlans = 'basic';
  type: BillingType = 'authentication';
  cycle: BillingCycle = 'monthly';
  iat: number = 0;
  begun: number = 0;
  next_cycle: number = 0;
  org: string = '';
  id: string = ''


  public static fromJson(obj: Record<string, unknown>): Billing {
    return Object.assign(new Billing(), obj);
  }

  public toJsonString(): string {
    return JSON.stringify(this);
  }

  public toMap(): Record<string, unknown> {
    return { ...this } as Record<string, unknown>;
  }
}