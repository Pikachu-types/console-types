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

const status = {
  verified: "verified",
  waiting: "waiting",
  unverified: "unverified",
  stale: "stale",
} as const

export const roles = {
  owner: "owner",
  admin: "admin",
  viewer: "viewer"
} as const;

export const appType = {
  backend: "backend",
  frontend: "frontend",
} as const

export const products = {
  authentication: "authentication",
  signature: "signature",
} as const;

export const businessTypes = {
  solopreneur: "solopreneur",
  enterprise: "enterprise",
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

export const productArray: ProductType[] = [products.authentication, products.signature];

export type VerificationStatus = keyof typeof status;
export type AppType = keyof typeof appType;
export type Domain = keyof typeof domains;
export type ProductType = typeof products[keyof typeof products];
export type BillingPlans = keyof typeof plans;
export type BillingCycle = keyof typeof cycle;