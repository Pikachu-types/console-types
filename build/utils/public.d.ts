export declare function getMonthBucket(): string;
/**
 * Flexible enum value getter that accepts string and returns the value if valid
 * @param enumObj - The enum object to search in
 * @param key - The string key to search for
 * @returns The value if the key exists in the enum, undefined otherwise
 */
export declare function getEnumValueByString<T extends Record<string, string>>(enumObj: T, key: string): string | undefined;
