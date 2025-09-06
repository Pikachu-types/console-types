import { strEnum } from "../utils/system";

/**
 * Api key prefix
 */
export enum ApiKeyPrefix {
  live = "bk-live_",
  test = "bk-test_",
}

/**
 * AppType secret key reference on BankID
 */
export enum AppTypeSecretRef {
  production = "prd_",
  test = "snb_",
}

export const collections = {
  console_user: "console_user",
  apps: "apps", // sub doc
  consumers: "consumers",
  billingEvents: "billingEvents", // in separate firebase firestore database adjacent to default
  orgRequests: "orgRequests",
} as const;

export const plans = {
  basic: "basic",
  scale: "scale",
} as const;

export const domains = {
  live: "live",
  test: "test",
} as const;

export const billingType = {
  authentication: "authentication",
  signature: "signature",
} as const;

export const cycle = {
  monthly: "monthly",
  yearly: "yearly",
} as const;

export const technologyType = {
  backend: "Backend web/server",
  frontend: "Frontend and mobile",
} as const

const status = {
  verified: "verified",
  waiting: "waiting",
  unverified: "unverified",
  stale: "stale",
} as const


export const roles = {
  manager: "manager",
  viewer: "viewer",
} as const;

export const products = {
  authentication: "authentication",
  signature: "signature",
} as const;

export type TCountry = {
  name: string;
  dial: string;
  code: string;
}

export type TAppCategory = {
  name: string;
  key: string;
}

export type TSubPlan = {
  product: "authentication" | "signature",
  plan: "basic" | "scale",
  period: "monthly" | "yearly",
}

export const scopes = {
  "identification:same": "identification:same",
  "identification:different": "identification:another",
  "identification:wildcard": "identification:wildcard",
  "signing:wildcard": "signing:wildcard",
  "signing:different": "signing:another",
  "signing:same": "signing:same",
  "flow:ping": "flow:ping",
  "flow:authorize": "flow:authorize",
  "flow:poll": "flow:poll",
  "flow:cancel": "flow:cancel",
  "document:sign": "document:sign",
  /**
   * For interface use
   */
  "document:review": "document:review",
  "identity:read": "identity:read",
  "identity:write": "identity:write",
  "payment:read": "payment:read",
  "session:host": "session:host",
  /**
   * Hosted OIDC token swap
   */
  "session:shake": "session:shake",
  /**
   * Check if oidc token is still active
   */
  "session:validate": "session:validate"
} as const

export const consumptions = {
  auth: "Authentication",
  sign: "e-Signatures",
  all: "Both"
} as const

export const businessType = {
  llc: "Limited company",
  sole: "Sole trader",
  indie: "Indie Firm (unregistered)",
} as const;

export const authProvider = {
  email: "Email address",
  google: "google.com",
  apple: "apple.com",
  pasby: "pasby e-ID (National Identification Number)",
  pasbyMail: "pasby and email authentication"
} as const;

export const dashboards = strEnum(['administrator', 'vendor', 'consumer']);
export const environmentType = strEnum(['live', 'test']);
export const productionDomain = strEnum(['production', 'test']);


export const productArray: ProductType[] = [products.authentication, products.signature];

export type DashboardRoles = keyof typeof roles;
export type ClientScope = keyof typeof scopes;
export type EnvironmentType = keyof typeof productionDomain;
export type VerificationStatus = keyof typeof status;
export type BusinessType = keyof typeof businessType;
export type DomainType = keyof typeof productionDomain;
export type Domain = keyof typeof domains;
export type ProductType = typeof products[keyof typeof products];
export type BillingPlans = keyof typeof plans;
export type BillingCycle = keyof typeof cycle;
export type ConsumptionType = keyof typeof consumptions;
export type TechnologyType = keyof typeof technologyType;
export type AuthenticationProvider = keyof typeof authProvider;

