export declare function strEnum<T extends string>(o: Array<T>): {
    [K in T]: K;
};
/**
 * Random string generator helper
 * @param {number} length
 * @return {string} value
 */
export declare function generateRandomAlphaNumeric(length: number): string;
export declare function unixTimeStampNow(): number;
export declare function makeAKeyFromIdentity(id: string): string;
