"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productArray = exports.businessTypes = exports.products = exports.appType = exports.roles = exports.cycle = exports.billingType = exports.domains = exports.plans = void 0;
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
const status = {
    verified: "verified",
    waiting: "waiting",
    unverified: "unverified",
    stale: "stale",
};
exports.roles = {
    owner: "owner",
    admin: "admin",
    viewer: "viewer"
};
exports.appType = {
    backend: "backend",
    frontend: "frontend",
};
exports.products = {
    authentication: "authentication",
    signature: "signature",
};
exports.businessTypes = {
    solopreneur: "solopreneur",
    enterprise: "enterprise",
};
exports.productArray = [exports.products.authentication, exports.products.signature];
//# sourceMappingURL=enums.js.map