import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncate(str: string, characters = 6) {
  return `${str.slice(0, characters)}...${str.slice(str.length - characters)}`
}