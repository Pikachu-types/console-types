"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModel = void 0;
const constants_1 = require("../../utils/constants");
const model_1 = require("../model");
class AppModel extends model_1.Model {
    assignScopes() {
        if (this.schema.scopes)
            return;
        // Initialize scopes array if it doesn't exist
        if (!this.schema.scopes) {
            this.schema.scopes = [];
        }
        if (this.schema.consumption === "sign") {
            this.schema.scopes = this.schema.scopes.concat(constants_1.SIGN_CLIENT_SCOPE);
        }
        else if (this.schema.consumption === "auth") {
            this.schema.scopes = this.schema.scopes.concat(constants_1.AUTH_CLIENT_SCOPE);
        }
        else if (this.schema.consumption === "all") {
            this.schema.scopes = this.schema.scopes.concat(constants_1.AUTH_CLIENT_SCOPE);
            this.schema.scopes = this.schema.scopes.concat(constants_1.SIGN_CLIENT_SCOPE);
        }
        if (this.schema.type === 'test' && this.schema.consumption === "sign") {
            this.schema.scopes.push("document:sign");
        }
    }
}
exports.AppModel = AppModel;
//# sourceMappingURL=index.js.map