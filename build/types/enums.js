"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productArray = exports.productionDomain = exports.environmentType = exports.dashboards = exports.authProvider = exports.businessType = exports.consumptions = exports.scopes = exports.products = exports.roles = exports.status = exports.technologyType = exports.cycle = exports.billingType = exports.domains = exports.plans = exports.collections = exports.AppTypeSecretRef = exports.ApiKeyPrefix = void 0;
const system_1 = require("../utils/system");
/**
 * Api key prefix
 */
var ApiKeyPrefix;
(function (ApiKeyPrefix) {
    ApiKeyPrefix["live"] = "bk-live_";
    ApiKeyPrefix["test"] = "bk-test_";
})(ApiKeyPrefix || (exports.ApiKeyPrefix = ApiKeyPrefix = {}));
/**
 * AppType secret key reference on BankID
 */
var AppTypeSecretRef;
(function (AppTypeSecretRef) {
    AppTypeSecretRef["production"] = "prd_";
    AppTypeSecretRef["test"] = "snb_";
})(AppTypeSecretRef || (exports.AppTypeSecretRef = AppTypeSecretRef = {}));
exports.collections = {
    console_user: "console_user",
    apps: "apps", // sub doc
    consumers: "consumers",
    billingEvents: "billingEvents", // in separate firebase firestore database adjacent to default
    orgRequests: "orgRequests",
};
exports.plans = {
    basic: "basic",
    scale: "scale",
};
exports.domains = {
    live: "live",
    test: "test",
};
exports.billingType = {
    authentication: "authentication",
    signature: "signature",
};
exports.cycle = {
    monthly: "monthly",
    yearly: "yearly",
};
exports.technologyType = {
    backend: "Backend web/server",
    frontend: "Frontend and mobile",
};
exports.status = {
    verified: "Verified",
    waiting: "Waiting",
    unverified: "Unverified",
    stale: "Stale",
};
exports.roles = {
    manager: "manager",
    viewer: "viewer",
};
exports.products = {
    authentication: "authentication",
    signature: "signature",
};
exports.scopes = {
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
};
exports.consumptions = {
    auth: "Authentication",
    sign: "e-Signatures",
    all: "Both"
};
exports.businessType = {
    llc: "Limited company",
    sole: "Sole trader",
    indie: "Indie Firm (unregistered)",
};
exports.authProvider = {
    email: "Email address",
    google: "google.com",
    apple: "apple.com",
    pasby: "pasby e-ID (National Identification Number)",
    pasbyMail: "pasby and email authentication"
};
exports.dashboards = (0, system_1.strEnum)(['administrator', 'vendor', 'consumer']);
exports.environmentType = (0, system_1.strEnum)(['live', 'test']);
exports.productionDomain = (0, system_1.strEnum)(['production', 'test']);
exports.productArray = [exports.products.authentication, exports.products.signature];
//# sourceMappingURL=enums.js.map