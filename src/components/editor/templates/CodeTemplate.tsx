import { Code2 } from 'lucide-react';
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

export function CodeTemplate({ name, role, tagline, avatar, techStack, socialLinks }: TemplateProps) {
  return (
    <div className="h-full w-full bg-zinc-900 p-16 flex flex-col justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <pre className="p-14 text-xs">
          {`function Developer() {
  const name = "${name}"
  const role = "${role}"
  const passion = "Building amazing software"
  
  return (
    <Developer 
      skills={${JSON.stringify(techStack.items)}}
      focus="${tagline}"
    />
  )
}`}
        </pre>
      </div>
      
      <div className="max-w-3xl relative flex items-start gap-8">
        <div className="flex-shrink-0">
          {avatar.type === 'emoji' ? (
            <div className="w-24 h-24 rounded-lg bg-primary/10 backdrop-blur-sm flex items-center justify-center text-4xl border border-primary/20">
              {avatar.value}
            </div>
          ) : (
            <div className="w-24 h-24 rounded-lg border border-primary/20 overflow-hidden">
              <img
                src={avatar.value}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl opacity-90">{role}</h2>
          </div>
          <h1 className="text-5xl font-bold mb-4">{name}</h1>
          <p className="text-xl mb-8 opacity-90">{tagline}</p>
          <div className="flex gap-2 flex-wrap mb-6">
            {techStack.items.map((tech) => (
              <Badge key={tech} className="bg-primary/20 text-primary-default flex items-center gap-1.5 rounded px-1 py-1">
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