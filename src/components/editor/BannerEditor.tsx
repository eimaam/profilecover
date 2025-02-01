import { useState } from 'react';
import { BannerPreview } from './BannerPreview';
import { TemplateSelector } from './TemplateSelector';
import { EditorControls } from './EditorControls';
import { Avatar, BannerTemplate, SocialLinks, TechStackDisplay } from '@/types/banner';

export function BannerEditor() {
  const [selectedTemplate, setSelectedTemplate] = useState<BannerTemplate>('minimal');
  const [name, setName] = useState('John Doe');
  const [role, setRole] = useState('Senior Software Engineer');
  const [tagline, setTagline] = useState('Building scalable systems with TypeScript & Node.js');
  const [avatar, setAvatar] = useState<Avatar>({ type: 'emoji', value: '👨‍💻' });
  const [techStack, setTechStack] = useState<TechStackDisplay>({
    displayMode: 'both',
    showLogos: true,
    items: ['TypeScript', 'React', 'Node.js']
  });
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({});

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Create Your Profile Header</h1>
        <p className="text-lg text-gray-600 mb-8">Customize your professional banner with our easy-to-use editor</p>
        
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8 bg-white rounded-xl shadow-sm p-6">
          <div className="space-y-8">
            <BannerPreview
              template={selectedTemplate}
              name={name}
              role={role}
              tagline={tagline}
              avatar={avatar}
              techStack={techStack}
              socialLinks={socialLinks}
            />
            <TemplateSelector
              selected={selectedTemplate}
              onSelect={setSelectedTemplate}
            />
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <EditorControls
              name={name}
              role={role}
              tagline={tagline}
              avatar={avatar}
              techStack={techStack}
              socialLinks={socialLinks}
              template={selectedTemplate}
              onNameChange={setName}
              onRoleChange={setRole}
              onTaglineChange={setTagline}
              onAvatarChange={setAvatar}
              onTechStackChange={setTechStack}
              onSocialLinksChange={setSocialLinks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}