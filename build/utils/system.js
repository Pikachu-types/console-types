"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllIdentifiers = void 0;
exports.strEnum = strEnum;
exports.generateRandomAlphaNumeric = generateRandomAlphaNumeric;
exports.unixTimeStampNow = unixTimeStampNow;
exports.makeAKeyFromIdentity = makeAKeyFromIdentity;
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
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
function unixTimeStampNow() {
    const now = new Date();
    return Math.floor(now.getTime() / 1000);
}
const removeAllIdentifiers = function (url) {
    if (url === undefined || url === null || !url.includes("_"))
        return '';
    return url.split("_")[1];
};
exports.removeAllIdentifiers = removeAllIdentifiers;
function makeAKeyFromIdentity(id) {
    if (!id.includes("_"))
        throw new Error("Identity is not recognised: missing signature element.");
    const key = id.split("_")[1];
    if (key.length !== 36)
        throw new Error("Invalid identity provided");
    return key.replace(/-/g, "");
}
//# sourceMappingURL=system.js.map