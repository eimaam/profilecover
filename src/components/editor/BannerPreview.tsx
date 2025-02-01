import { Avatar, BannerTemplate, SocialLinks, TechStackDisplay } from '@/types/banner';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { GradientTemplate } from './templates/GradientTemplate';
import { CodeTemplate } from './templates/CodeTemplate';
import { AntdCard } from '../ui/AntdCard';
import { Modal } from 'antd';
import { useState } from 'react';

interface BannerPreviewProps {
  template: BannerTemplate;
  name: string;
  role: string;
  tagline: string;
  techStack: TechStackDisplay;
  socialLinks: SocialLinks;
  avatar: Avatar;
}

export function BannerPreview(props: BannerPreviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const templates = {
    minimal: MinimalTemplate,
    gradient: GradientTemplate,
    code: CodeTemplate,
  };

  const SelectedTemplate = templates[props.template];

  const handlePreviewClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <AntdCard
        className="aspect-[1200/630] grid grid-cols-1 overflow-hidden w-full banner-preview cursor-pointer"
        animate={true}
        onClick={handlePreviewClick}
      >
        <SelectedTemplate {...props} />
      </AntdCard>

      <Modal
        title="Banner Preview"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width="100%"
        style={{ maxWidth: '90vw', margin: '16px auto' }}
        bodyStyle={{ padding: 0, overflow: 'hidden' }}
      >
        <div className="aspect-[1200/630] w-full">
          <SelectedTemplate {...props} />
        </div>
      </Modal>
    </>
  );
}