"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unixTimeStampNow = exports.generateRandomAlphaNumeric = exports.strEnum = void 0;
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
exports.strEnum = strEnum;
/**
 * Random string generator helper
 * @param {number} length
 * @return {string} value
 */
function generateRandomAlphaNumeric(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateRandomAlphaNumeric = generateRandomAlphaNumeric;
function unixTimeStampNow() {
    const now = new Date();
    return Math.floor(now.getTime() / 1000);
}
exports.unixTimeStampNow = unixTimeStampNow;
//# sourceMappingURL=system.js.map