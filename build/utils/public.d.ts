export declare function getMonthBucket(): string;
/**
 * Converts a date string in YYYY-MM format to a readable month period
 * @param dateString - Date string in format "YYYY-MM" (e.g., "2025-09")
 * @returns Formatted month period string (e.g., "September 2025")
 */
export declare function formatMonthPeriod(dateString: string): string;
/**
 * Flexible enum value getter that accepts string and returns the value if valid
 * @param enumObj - The enum object to search in
 * @param key - The string key to search for
 * @returns The value if the key exists in the enum, undefined otherwise
 */
export declare function getEnumValueByString<T extends Record<string, string>>(enumObj: T, key: string): string | undefined;
