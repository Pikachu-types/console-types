/**
 * Api key prefix
 */
export declare enum ApiKeyPrefix {
    live = "bk-live_",
    test = "bk-test_"
}
/**
 * AppType secret key reference on BankID
 */
export declare enum AppTypeSecretRef {
    production = "prd_",
    test = "snb_"
}
export declare const collections: {
    readonly console_user: "console_user";
    readonly apps: "apps";
    readonly consumers: "consumers";
    readonly creditTransactions: "creditTransactions";
    readonly billingEvents: "billingEvents";
    readonly orgRequests: "orgRequests";
    readonly creditsLedger: "creditsLedger";
    readonly billingStatements: "billingStatements";
};
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
export declare const technologyType: {
    readonly backend: "Backend web/server";
    readonly frontend: "Frontend and mobile";
};
export declare const status: {
    readonly verified: "Verified";
    readonly waiting: "Waiting";
    readonly unverified: "Unverified";
    readonly stale: "Stale";
};
export declare const roles: {
    readonly manager: "manager";
    readonly viewer: "viewer";
};
export declare const products: {
    readonly authentication: "authentication";
    readonly signature: "signature";
};
export type TCountry = {
    name: string;
    dial: string;
    code: string;
};
export type TAppCategory = {
    name: string;
    key: string;
};
export type TSubPlan = {
    product: "authentication" | "signature";
    plan: "basic" | "scale";
    period: "monthly" | "yearly";
};
export declare const scopes: {
    readonly "identification:same": "identification:same";
    readonly "identification:different": "identification:another";
    readonly "identification:wildcard": "identification:wildcard";
    readonly "signing:wildcard": "signing:wildcard";
    readonly "signing:different": "signing:another";
    readonly "signing:same": "signing:same";
    readonly "flow:ping": "flow:ping";
    readonly "flow:authorize": "flow:authorize";
    readonly "flow:poll": "flow:poll";
    readonly "flow:cancel": "flow:cancel";
    readonly "document:sign": "document:sign";
    /**
     * For interface use
     */
    readonly "document:review": "document:review";
    readonly "identity:read": "identity:read";
    readonly "identity:write": "identity:write";
    readonly "payment:read": "payment:read";
    readonly "session:host": "session:host";
    /**
     * Hosted OIDC token swap
     */
    readonly "session:shake": "session:shake";
    /**
     * Check if oidc token is still active
     */
    readonly "session:validate": "session:validate";
};
export declare const consumptions: {
    readonly auth: "Authentication";
    readonly sign: "e-Signatures";
    readonly all: "Both";
};
export declare const businessType: {
    readonly llc: "Limited company";
    readonly sole: "Sole trader";
    readonly indie: "Indie Firm (unregistered)";
};
export declare const authProvider: {
    readonly email: "Email address";
    readonly google: "google.com";
    readonly apple: "apple.com";
    readonly pasby: "pasby e-ID (National Identification Number)";
    readonly pasbyMail: "pasby and email authentication";
};
export declare const dashboards: {
    administrator: "administrator";
    vendor: "vendor";
    consumer: "consumer";
};
export declare const environmentType: {
    live: "live";
    test: "test";
};
export declare const productionDomain: {
    test: "test";
    production: "production";
};
export declare const productArray: ProductType[];
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
