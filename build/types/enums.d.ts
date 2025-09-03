export declare const collections: {
    readonly console_user: "console_user";
    readonly apps: "apps";
    readonly consumers: "consumers";
    readonly orgRequests: "orgRequests";
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
declare const status: {
    readonly verified: "verified";
    readonly waiting: "waiting";
    readonly unverified: "unverified";
    readonly stale: "stale";
};
export declare const roles: {
    readonly manager: "manager";
    readonly viewer: "viewer";
};
export declare const products: {
    readonly authentication: "authentication";
    readonly signature: "signature";
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
export declare type DashboardRoles = keyof typeof roles;
export declare type ClientScope = keyof typeof scopes;
export declare type EnvironmentType = keyof typeof productionDomain;
export declare type VerificationStatus = keyof typeof status;
export declare type BusinessType = keyof typeof businessType;
export declare type DomainType = keyof typeof productionDomain;
export declare type Domain = keyof typeof domains;
export declare type ProductType = typeof products[keyof typeof products];
export declare type BillingPlans = keyof typeof plans;
export declare type BillingCycle = keyof typeof cycle;
export declare type ConsumptionType = keyof typeof consumptions;
export declare type TechnologyType = keyof typeof technologyType;
export declare type AuthenticationProvider = keyof typeof authProvider;
export {};
