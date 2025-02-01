import { Modal } from "antd";
import React from "react";
import { BannerPreview } from "../editor/BannerPreview";
import { Avatar, SocialLinks, TechStackDisplay } from "@/types/banner";

interface ExamplesProps {
  name: string;
  role: string;
  tagline: string;
  techStack: TechStackDisplay;
  socialLinks: SocialLinks;
  avatar: Avatar;
}

const SAMPLE_DATA:ExamplesProps = {
  name: "John Doe",
  avatar: {
    type: "emoji",
    value: "👨‍💻",
  },
  role: "Senior Software Engineer",
  tagline: "Whatever Happens, Happens.",
  techStack: {
    displayMode: "names",
    showLogos: true,
    items: ["TypeScript", "React", "Node.js"],
  },
  socialLinks: {
    github: "eimaam.dev",
    linkedin: "eimaam",
    twitter: "eimaam_d",
  },
};

const Examples = () => {
  return (
    <Modal className="w-full" open={true}>
      <div className="flex items-center overflow-x-auto">
        <BannerPreview template={"minimal"} {...SAMPLE_DATA} />
      </div>
    </Modal>
  );
};

export default Examples;
