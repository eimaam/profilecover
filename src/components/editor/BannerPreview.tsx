import { BannerTemplate, SocialLinks, TechStackDisplay } from '@/types/banner';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { GradientTemplate } from './templates/GradientTemplate';
import { CodeTemplate } from './templates/CodeTemplate';
import { AntdCard } from '../ui/AntdCard';

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
    <AntdCard
      className="aspect-[1200/630] w-full"
      animate={true}
    >
      <SelectedTemplate {...props} />
    </AntdCard>
  );
}