"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionUtility = void 0;
const generate_api_key_1 = __importDefault(require("generate-api-key"));
const _1 = require(".");
const crypto_1 = require("./crypto");
class FunctionUtility {
    static generateConsumerApiKeys(consumer, args) {
        var key = (0, generate_api_key_1.default)({ method: 'string', min: 32, max: 32, batch: 2 });
        consumer.apis = {
            live: `${_1.ApiKeyPrefix.live}${key[0]}`,
            test: `${_1.ApiKeyPrefix.test}${key[1]}`,
        };
        consumer.apis = {
            live: this.bankidCipherString(args.cipher, consumer.apis.live),
            test: this.bankidCipherString(args.cipher, consumer.apis.test),
        };
        consumer.apiKey = consumer.apis.live;
        return consumer;
    }
    static bankidCipherString(cipherKey, source) {
        return this.
            createCipherString(crypto_1.CryptoUtils.encrypt(source, cipherKey));
    }
    /**
   * Revert CipherType model string to readable string
   * long function
   * @param {string} cipherKey secret key
   * @param {string} source content
   * @return {string} returns value.
   */
    static bankidCipherToString(cipherKey, source) {
        const signature = this.
            changeCipherStringToModel(source);
        return crypto_1.CryptoUtils.decrypt(signature, cipherKey);
    }
    static createCipherString(source) {
        return `${source.content}-vi(${source.iv})`;
    }
    /**
     * Create a proper string from the CipherType model
     * @param {CipherType} source content to string from
     * @return {string} returns value.
     */
    static changeCipherStringToModel(source) {
        const cipher = source.split("-vi");
        if (cipher.length != 2) {
            throw new Error("Invalid source string");
        }
        return {
            iv: cipher[1].replace("(", "").replace(")", ""),
            content: cipher[0],
        };
    }
}
exports.FunctionUtility = FunctionUtility;
//# sourceMappingURL=func-util.js.map