import dayjs from "dayjs";

// Date-time and date format constants
const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

/**
 * Formats a date to a specific date-time format.
 * @param date - The date to be formatted.
 * @param format - The desired date-time format.
 * @returns The formatted date-time string.
 */
export function formatDate(date?: dayjs.ConfigType, format = DATE_TIME_FORMAT): string {
  return dayjs(date).format(format);
}

