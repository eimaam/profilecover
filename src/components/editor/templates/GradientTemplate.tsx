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

export function GradientTemplate({ name, role, tagline, avatar, techStack, socialLinks }: TemplateProps) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-600 to-blue-600 p-4 sm:p-8 md:p-16 flex flex-col justify-center text-white">
      <div className="max-w-3xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
        <div className="flex-shrink-0">
          {avatar.type === 'emoji' ? (
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-3xl sm:text-4xl border border-white/20">
              {avatar.value}
            </div>
          ) : (
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/20 overflow-hidden">
              <img
                src={avatar.value}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4">{name}</h1>
          <h2 className="text-xl sm:text-2xl opacity-90 mb-4 sm:mb-6">{role}</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-95">{tagline}</p>
          <div className="flex gap-2 flex-wrap justify-center sm:justify-start mb-6">
            {techStack.items.map((tech) => (
              <Badge key={tech} className="text-white font-medium border rounded-md px-2 py-1 border-white flex items-center gap-1.5">
                {techStack?.showLogos && <TechLogo name={tech} className="filter invert" />}
                {tech}
              </Badge>
            ))}
          </div>
          <SocialLinks links={socialLinks} className="text-white" />
        </div>
      </div>
    </div>
  );
}