export function getMonthBucket(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}


/**
 * Flexible enum value getter that accepts string and returns the value if valid
 * @param enumObj - The enum object to search in
 * @param key - The string key to search for
 * @returns The value if the key exists in the enum, undefined otherwise
 */
export function getEnumValueByString<T extends Record<string, string>>(
  enumObj: T,
  key: string
): string | undefined {
  if (key in enumObj) {
    return enumObj[key as keyof T];
  }
  return undefined;
}