import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// banner/header
export const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
export const MAX_IMAGE_SIZE = 3 * 1024 * 1024; // 3MB

export const DEFAULT_EMOJIS = [
  '👨‍💻', '👩‍💻', '🚀', '💻', '⚡️', '🎨', '🛠️', '🔧',
  '🎯', '🌟', '💡', '🎮', '📱', '🤖', '🔥', '✨'
];