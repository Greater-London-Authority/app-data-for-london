import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
// if removed, uninstall from npm

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
