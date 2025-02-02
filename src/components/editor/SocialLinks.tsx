import { Github, Linkedin, Twitter } from 'lucide-react';
import { SocialLinks as SocialLinksType } from '@/types/cover';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  links: SocialLinksType;
  className?: string;
  variant?: 'default' | 'minimal' | 'code';
}

export function SocialLinks({ links, className = '', variant = 'default' }: SocialLinksProps) {
  if (!links.github && !links.linkedin && !links.twitter) {
    return null;
  }

  const variants = {
    default: "flex gap-4",
    minimal: "flex gap-6",
    code: "flex gap-4 text-sm"
  };

  const itemClass = {
    default: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors",
    minimal: "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
    code: "flex items-center gap-2 px-3 py-1.5 !rounded-md bg-white/10 hover:bg-white/20 transition-colors"
  };

  return (
    <div className={cn(variants[variant], className)}>
      {links.github && (
        <div className={itemClass[variant]}>
          <Github className="w-4 h-4" />
          <span>@{links.github}</span>
        </div>
      )}
      {links.linkedin && (
        <div className={itemClass[variant]}>
          <Linkedin className="w-4 h-4" />
          <span>@{links.linkedin}</span>
        </div>
      )}
      {links.twitter && (
        <div className={itemClass[variant]}>
          <Twitter className="w-4 h-4" />
          <span>@{links.twitter}</span>
        </div>
      )}
    </div>
  );
}