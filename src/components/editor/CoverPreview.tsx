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

export function CoverPreview(props: BannerPreviewProps) {
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
        className="aspect-[1200/630] grid grid-cols-1 !overflow-hidden w-full cover-preview cursor-pointer !font-baiJamjuree"
        animate={true}
        onClick={handlePreviewClick}
      >
        <SelectedTemplate {...props} />
      </AntdCard>

      <Modal
        title="Cover Preview"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        className='!w-max !font-baiJamjuree'
      >
        <div className="aspect-[1200/630] w-full">
          <SelectedTemplate {...props} />
        </div>
      </Modal>
    </>
  );
}