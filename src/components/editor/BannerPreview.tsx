import { BannerTemplate, SocialLinks, TechStackDisplay } from '@/types/banner';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { GradientTemplate } from './templates/GradientTemplate';
import { CodeTemplate } from './templates/CodeTemplate';

interface BannerPreviewProps {
  template: BannerTemplate;
  name: string;
  role: string;
  tagline: string;
  techStack: TechStackDisplay;
  socialLinks: SocialLinks;
}

export function BannerPreview(props: BannerPreviewProps) {
  const templates = {
    minimal: MinimalTemplate,
    gradient: GradientTemplate,
    code: CodeTemplate,
  };

  const SelectedTemplate = templates[props.template];

  return (
    <div className="aspect-[1200/630] w-full bg-card rounded-lg overflow-hidden shadow-lg">
      <SelectedTemplate {...props} />
    </div>
  );
}