"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthBucket = getMonthBucket;
exports.getEnumValueByString = getEnumValueByString;
function getMonthBucket() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
/**
 * Flexible enum value getter that accepts string and returns the value if valid
 * @param enumObj - The enum object to search in
 * @param key - The string key to search for
 * @returns The value if the key exists in the enum, undefined otherwise
 */
function getEnumValueByString(enumObj, key) {
    if (key in enumObj) {
        return enumObj[key];
    }
    return undefined;
}
//# sourceMappingURL=public.js.map