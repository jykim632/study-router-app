export function cn(...inputs: (string | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}
export function isValidDate(date: Date) {
  return date instanceof Date && !isNaN(date.getTime());
}
export function isValidDateString(dateString: string) {
  const date = new Date(dateString);
  return isValidDate(date);
}
export function isValidDateTimeString(dateTimeString: string) {
  const date = new Date(dateTimeString);
  return isValidDate(date);
}
export function isValidDateTime(date: Date) {
  return date instanceof Date && !isNaN(date.getTime());
}
