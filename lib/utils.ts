import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { compare } from 'compare-versions';
import { differenceInDays, fromUnixTime } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isOutdated(version: string, minimalVersion: string) {
  return compare(minimalVersion, version, '>');
}

export function isIceCream(iceCreamVersion: string, upsideVersion: string) {
  return compare(iceCreamVersion, upsideVersion, '>');
}

export function getDaysDifference(timestamp: number): string {
  
  const now = new Date();
  const givenDate = fromUnixTime(timestamp);
  const difference = differenceInDays(now, givenDate);

  return ` ${difference.toString()}`;
}
