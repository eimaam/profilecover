import { TechLogo } from '../TechLogo';
import { SocialLinks } from '../SocialLinks';
import { Avatar, SocialLinks as SocialLinksType, TechStackDisplay } from '@/types/banner';
import { Badge } from 'antd';

interface TemplateProps {
  name: string;
  role: string;
  tagline: string;
  avatar: Avatar;
  techStack: TechStackDisplay;
  socialLinks: SocialLinksType;
}

export function MinimalTemplate({ name, role, tagline, avatar, techStack, socialLinks }: TemplateProps) {
  return (
    <div className="h-full w-full text-accent bg-white p-16 flex flex-col justify-center">
      <div className="max-w-3xl flex flex-row-reverse items-start gap-8">
        <div className="flex-shrink-0">
          {avatar.type === 'emoji' ? (
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-4xl">
              {avatar.value}
            </div>
          ) : (
            <img
              src={avatar.value}
              alt={name}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
            />
          )}
        </div>
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <h2 className="text-2xl text-muted-foreground mb-6">{role}</h2>
          <p className="text-xl mb-8">{tagline}</p>
          <div className="flex gap-2 flex-wrap justify-start mb-6">
            {techStack.items.map((tech) => (
              <Badge key={tech} className="flex font-medium items-center gap-1.5 bg-secondary px-2 py-1 rounded-md">
                {tech}
              </Badge>
            ))}
          </div>
          <SocialLinks links={socialLinks} className="text-muted" />
        </div>
      </div>
    </div>
  );
}