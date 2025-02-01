import { X, Github, Linkedin, Twitter, Image as ImageIcon } from "lucide-react";
import {
  Avatar,
  SocialLinks,
  TechStackDisplay,
  TechStackDisplayMode,
} from "@/types/banner";
import { GradientPicker } from "./GradientPicker";
import { Badge, Checkbox, Input, Upload, message } from "antd";
import { ALLOWED_IMAGE_TYPES, DEFAULT_EMOJIS, MAX_IMAGE_SIZE } from "@/lib/utils";

interface EditorControlsProps {
  name: string;
  role: string;
  tagline: string;
  avatar: Avatar;
  techStack: TechStackDisplay;
  socialLinks: SocialLinks;
  template: string;
  gradient?: { from: string; to: string; direction: string };
  onNameChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onTaglineChange: (value: string) => void;
  onAvatarChange: (value: Avatar) => void;
  onTechStackChange: (value: TechStackDisplay) => void;
  onSocialLinksChange: (value: SocialLinks) => void;
  onGradientChange?: (value: {
    from: string;
    to: string;
    direction: string;
  }) => void;
}

export function EditorControls({
  name,
  role,
  tagline,
  avatar,
  techStack,
  socialLinks,
  template,
  gradient,
  onNameChange,
  onRoleChange,
  onTaglineChange,
  onAvatarChange,
  onTechStackChange,
  onSocialLinksChange,
  onGradientChange,
}: EditorControlsProps) {

  const handleAvatarUpload = async (file: File) => {
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      message.error('Please upload a PNG, JPEG, or WebP image');
      return false;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      message.error('Image must be smaller than 2MB');
      return false;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      onAvatarChange({ type: 'image', value: e.target?.result as string });
    };
    reader.readAsDataURL(file);
    return false;
  };

  const handleTechInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      onTechStackChange({
        ...techStack,
        items: [...techStack.items, e.currentTarget.value],
      });
      e.currentTarget.value = "";
    }
  };

  const removeTech = (tech: string) => {
    onTechStackChange({
      ...techStack,
      items: techStack.items.filter((t) => t !== tech),
    });
  };

  const updateDisplayMode = (mode: TechStackDisplayMode) => {
    onTechStackChange({
      ...techStack,
      displayMode: mode,
    });
  };

  const updateSocialUsername = (
    platform: keyof SocialLinks,
    username: string
  ) => {
    onSocialLinksChange({
      ...socialLinks,
      [platform]: username,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">Avatar</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm mb-2">Emoji</h4>
            <div className="grid grid-cols-4 gap-2">
              {DEFAULT_EMOJIS?.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => onAvatarChange({ type: 'emoji', value: emoji })}
                  className={`p-2 text-xl rounded hover:bg-gray-100 ${avatar.type === 'emoji' && avatar.value === emoji ? 'bg-gray-100' : ''}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm mb-2">Custom Image</h4>
            <Upload.Dragger
              accept={ALLOWED_IMAGE_TYPES?.join(',')}
              beforeUpload={handleAvatarUpload}
              showUploadList={false}
              className="w-full"
            >
              <p className="text-4xl mb-2"><ImageIcon className="mx-auto" /></p>
              <p>Click or drag image</p>
              <p className="text-xs text-gray-500">PNG, JPEG, WebP (max 2MB)</p>
            </Upload.Dragger>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Input
          id="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <Input
          id="role"
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
          placeholder="Your role"
        />
      </div>

      <div className="space-y-2">
        <Input
          id="tagline"
          value={tagline}
          onChange={(e) => onTaglineChange(e.target.value)}
          placeholder="Your tagline"
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Social Links</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Github className="w-5 h-5" />
            <Input
              value={socialLinks.github || ""}
              onChange={(e) => updateSocialUsername("github", e.target.value)}
              placeholder="GitHub username"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Linkedin className="w-5 h-5" />
            <Input
              value={socialLinks.linkedin || ""}
              onChange={(e) => updateSocialUsername("linkedin", e.target.value)}
              placeholder="LinkedIn username"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Twitter className="w-5 h-5" />
            <Input
              value={socialLinks.twitter || ""}
              onChange={(e) => updateSocialUsername("twitter", e.target.value)}
              placeholder="Twitter username"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Tech Stack</h3>
        <Checkbox.Group
          value={[techStack.displayMode]}
          onChange={(value) => updateDisplayMode(value[0] as TechStackDisplayMode)}
          className="flex space-x-4"
        >
          <Checkbox value="both">Both</Checkbox>
          <Checkbox value="names">Names Only</Checkbox>
          <Checkbox value="logos">Logos Only</Checkbox>
        </Checkbox.Group>

        <Input
          placeholder="Add technology (press Enter)"
          onKeyDown={handleTechInput}
          maxLength={24}
        />

        <div className="flex flex-wrap gap-2">
          {techStack.items.map((tech) => (
            <Badge key={tech} className="pr-1.5">
              {tech}
              <button
                onClick={() => removeTech(tech)}
                className="ml-2 hover:text-destructive"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      {template === "gradient" && onGradientChange && (
        <GradientPicker value={gradient} onChange={onGradientChange} />
      )}
    </div>
  );
}
