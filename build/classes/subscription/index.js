"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModel = void 0;
class SubscriptionModel {
    constructor() {
        this.plan = 'basic';
        this.domain = 'test';
        this.product = 'authentication';
        this.cycle = 'monthly';
        this.status = 'incomplete';
        this.iat = 0;
        this.begun = 0;
        this.consumer = '';
        this.id = '';
    }
    static fromJson(obj) {
        return Object.assign(new SubscriptionModel(), obj);
    }
    toJsonString() {
        return JSON.stringify(this);
    }
    toMap() {
        return Object.assign({}, this);
    }
}
exports.SubscriptionModel = SubscriptionModel;
//# sourceMappingURL=index.js.map