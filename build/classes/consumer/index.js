"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerModel = void 0;
const model_1 = require("../model");
class ConsumerModel extends model_1.Model {
    hasApiKeys() {
        var _a, _b, _c, _d;
        return ((_b = (_a = this.schema.apis) === null || _a === void 0 ? void 0 : _a.live.length) !== null && _b !== void 0 ? _b : 0) > 1 && ((_d = (_c = this.schema.apis) === null || _c === void 0 ? void 0 : _c.test.length) !== null && _d !== void 0 ? _d : 0) > 1;
    }
    static initiateDetails() {
        return {
            legalName: "",
            domain: "",
            rcNumber: "",
            vat: "",
            type: 'llc',
            description: "",
            email: "",
            address: "",
            country: "",
            industry: "",
            status: 'stale',
        };
    }
    userRole(uid) {
        return this.schema.members[uid].role;
    }
    findApiKey(env) {
        if (env === 'production' && this.schema.apis) {
            return this.schema.apis.live;
        }
        else if (env === 'test' && this.schema.apis) {
            return this.schema.apis.test;
        }
        else {
            return "";
        }
    }
}
exports.ConsumerModel = ConsumerModel;
//# sourceMappingURL=index.js.map