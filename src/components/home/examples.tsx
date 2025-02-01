import { Modal } from 'antd'
import React from 'react'
import { BannerPreview } from '../editor/BannerPreview'
import { SocialLinks } from '../editor/SocialLinks'

const SAMPLE_DATA = {
    name: "John Doe",
    role: "Senior Software Engineer",
    tagline: "Whatever Happens, Happens.",
    techStack: ['TypeScript', 'React', 'Node.js'],
    socialLinks: {
        github: "eimaam.dev",
        linkedin: "eimaam",
        twitter: "eimaam_d"
    }
}

const examples = () => {
  return (
    

    <Modal className='w-full' open={true}>
        <div className='flex items-center overflow-x-auto'>
<BannerPreview
            template={"minimal"}
            {...SAMPLE_DATA}
          />
        </div>
    </Modal>
  )
}

export default examples