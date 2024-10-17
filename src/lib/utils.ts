import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const isPhoneNumberFormat = (phoneNumber: string) => {
  const removedHyphen = phoneNumber?.replaceAll("-", "");
  if (phoneNumber == null || phoneNumber.length <= 0) {
    return false;
  }

  const phoneNumberRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

  return phoneNumberRegex.test(removedHyphen);
};

export const isEmailFormat = (email: string) => {
  if (email == null || email.length <= 0) {
    return false;
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return emailRegex.test(email);
};

export const autoHyphen = (phoneNumber: string): string => {
  const number = phoneNumber.trim().replace(/[^0-9]/g, "");
  if (number.length < 4) return number;
  if (number.length < 8) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
  if (number.length < 12)
    return number.replace(/(\d{3})(\d{4})(\d{1})/, "$1-$2-$3");
  return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};
