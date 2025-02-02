export type CoverTemplate = 'minimal' | 'gradient' | 'code';

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