export declare const plans: {
    readonly basic: "basic";
    readonly scale: "scale";
};
export declare const domains: {
    readonly live: "live";
    readonly test: "test";
};
export declare const billingType: {
    readonly authentication: "authentication";
    readonly signature: "signature";
};
export declare const cycle: {
    readonly monthly: "monthly";
    readonly yearly: "yearly";
};
declare const status: {
    readonly verified: "verified";
    readonly waiting: "waiting";
    readonly unverified: "unverified";
    readonly stale: "stale";
};
export declare const roles: {
    readonly owner: "owner";
    readonly admin: "admin";
    readonly viewer: "viewer";
};
export declare const appType: {
    readonly backend: "backend";
    readonly frontend: "frontend";
};
export declare const products: {
    readonly authentication: "authentication";
    readonly signature: "signature";
};
export declare const businessTypes: {
    readonly solopreneur: "solopreneur";
    readonly enterprise: "enterprise";
};
export declare type TCountry = {
    name: string;
    dial: string;
    code: string;
};
export declare type TAppCategory = {
    name: string;
    key: string;
};
export declare type TSubPlan = {
    product: "authentication" | "signature";
    plan: "basic" | "scale";
    period: "monthly" | "yearly";
};
export declare const productArray: ProductType[];
export declare type VerificationStatus = keyof typeof status;
export declare type AppType = keyof typeof appType;
export declare type Domain = keyof typeof domains;
export declare type ProductType = typeof products[keyof typeof products];
export declare type BillingPlans = keyof typeof plans;
export declare type BillingCycle = keyof typeof cycle;
export {};
