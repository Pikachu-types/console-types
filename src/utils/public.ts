export function getMonthBucket(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

/**
 * Converts a date string in YYYY-MM format to a readable month period
 * @param dateString - Date string in format "YYYY-MM" (e.g., "2025-09")
 * @returns Formatted month period string (e.g., "September 2025")
 */
export function formatMonthPeriod(dateString: string): string {
  const [year, month] = dateString.split('-');
  const monthIndex = parseInt(month, 10) - 1; // Convert to 0-based month index
  
  const date = new Date(parseInt(year, 10), monthIndex);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return `${monthNames[monthIndex]} ${year}`;
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