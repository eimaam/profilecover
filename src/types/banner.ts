export type BannerTemplate = 'minimal' | 'gradient' | 'code';

export type TechStackDisplayMode = 'both' | 'names' | 'logos';

export type AvatarType = 'emoji' | 'image';

export interface Avatar {
  type: AvatarType;
  value: string; // emoji character or image URL
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface TechStackDisplay {
  displayMode: TechStackDisplayMode;
  showLogos: boolean,
  items: string[];
}

export interface GradientPreset {
  id: string;
  name: string;
  from: string;
  to: string;
  direction: string;
}

export const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
export const MAX_IMAGE_SIZE = 3 * 1024 * 1024; // 3MB

export const DEFAULT_EMOJIS = [
  '👨‍💻', '👩‍💻', '🚀', '💻', '⚡️', '🎨', '🛠️', '🔧',
  '🎯', '🌟', '💡', '🎮', '📱', '🤖', '🔥', '✨'
];