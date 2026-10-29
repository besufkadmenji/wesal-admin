/**
 * A phone number for display. Numbers are stored complete (+9665…), with the
 * dial code alongside, so the dial code is added only to a bare local number
 * — gluing them always showed "+966 +9665…" or "null+9665…".
 */
export const formatPhone = (
  dialCode: string | null | undefined,
  phone: string | null | undefined,
): string => {
  if (!phone) return "";
  if (phone.startsWith("+") || !dialCode) return phone;
  return `${dialCode}${phone}`;
};
