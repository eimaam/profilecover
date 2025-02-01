import { useState } from "react";
import html2canvas from "html2canvas";
import { Tabs, Input, Upload, Radio, Badge, Segmented, message } from "antd";
import { ShareAltOutlined, DownloadOutlined } from "@ant-design/icons";
import { Image as ImageIcon, Github, Linkedin, Twitter } from "lucide-react";
import { BannerPreview } from "./BannerPreview";
import { TemplateSelector } from "./TemplateSelector";
import { AntdCard } from "../ui/AntdCard";
import {
  Avatar,
  BannerTemplate,
  SocialLinks,
  TechStackDisplay,
} from "@/types/banner";
import {
  ALLOWED_IMAGE_TYPES,
  MAX_IMAGE_SIZE,
  DEFAULT_EMOJIS,
} from "@/types/banner";
import { Button } from "../button/button";

export function BannerEditor() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<BannerTemplate>("minimal");
  const [activeView, setActiveView] = useState<"template" | "sizes">(
    "template"
  );
  const [name, setName] = useState("John Doe");
  const [role, setRole] = useState("Senior Software Engineer");
  const [tagline, setTagline] = useState(
    "Building scalable systems with TypeScript & Node.js"
  );
  const [avatar, setAvatar] = useState<Avatar>({ type: "emoji", value: "👨‍💻" });
  const [techStack, setTechStack] = useState<TechStackDisplay>({
    displayMode: "both",
    showLogos: true,
    items: ["TypeScript", "React", "Node.js"],
  });
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({});

  return (
    <div className="w-full min-h-screen py-5 px-6">
      <div className="container !mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2 text-foreground">
              Create Your Banner
            </h1>
            <p className="text-base md:text-lg text-gray-200">
              Customize your professional tech banner
            </p>
          </div>
          <div className="flex ml-auto gap-4">
            <Button icon={<ShareAltOutlined />}>Share</Button>
            <Button
              variant="filled"
              icon={<DownloadOutlined />}
              onClick={() => {
                const bannerRef = document.querySelector(".aspect-[1200/630]");
                if (bannerRef) {
                  html2canvas(bannerRef as HTMLElement).then((canvas) => {
                    const link = document.createElement("a");
                    link.download = `${name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}-banner.png`;
                    link.href = canvas.toDataURL("image/png");
                    link.click();
                  });
                }
              }}
            >
              Export Banner
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-8 white rounded-xl shadow-sm p-6">
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
              
          </div>

          <div>
            <AntdCard variant="default">
              <Tabs
                defaultActiveKey="basic"
                className="custom-tabs"
                centered
                items={[
                  {
                    key: "basic",
                    label: <div className="px-4 py-2 rounded-lg">Basic</div>,
                    children: (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm">Full Name</label>
                          <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm">Professional Role</label>
                          <Input
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="Role"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm">Professional Tagline</label>
                          <Input
                            value={tagline}
                            onChange={(e) => setTagline(e.target.value)}
                            placeholder="Tagline"
                          />
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "avatar",
                    label: <div className="px-4 py-2 rounded-lg">Avatar</div>,
                    children: (
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm mb-2">Choose Emoji</h4>
                          <div className="grid grid-cols-5 gap-2">
                            {DEFAULT_EMOJIS.map((emoji) => (
                              <button
                                key={emoji}
                                onClick={() =>
                                  setAvatar({ type: "emoji", value: emoji })
                                }
                                className={`p-2 text-xl rounded hover:bg-gray-100 ${
                                  avatar.type === "emoji" &&
                                  avatar.value === emoji
                                    ? "bg-gray-100"
                                    : ""
                                }`}
                              >
                                {emoji}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm mb-2">Upload Custom Image</h4>
                          <Upload.Dragger
                            accept={ALLOWED_IMAGE_TYPES.join(",")}
                            beforeUpload={(file) => {
                              if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
                                message.error(
                                  "Please upload a PNG, JPG or GIF image"
                                );
                                return false;
                              }
                              if (file.size > MAX_IMAGE_SIZE) {
                                message.error("Image must be smaller than 2MB");
                                return false;
                              }
                              const reader = new FileReader();
                              reader.onload = (e) => {
                                setAvatar({
                                  type: "image",
                                  value: e.target?.result as string,
                                });
                              };
                              reader.readAsDataURL(file);
                              return false;
                            }}
                            showUploadList={false}
                          >
                            <p className="text-4xl mb-2">
                              <ImageIcon className="mx-auto" />
                            </p>
                            <p>Click to upload</p>
                            <p className="text-xs text-gray-500">
                              PNG, JPG or GIF (max. 2MB)
                            </p>
                          </Upload.Dragger>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "tech",
                    label: <div className="px-4 py-2 rounded-lg">Tech</div>,
                    children: (
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm mb-2">Tech Stack Display</h4>
                          <Radio.Group
                            value={techStack.displayMode}
                            onChange={(e) =>
                              setTechStack({
                                ...techStack,
                                displayMode: e.target.value,
                              })
                            }
                          >
                            <Radio value="both">Both</Radio>
                            <Radio value="names">Names Only</Radio>
                            <Radio value="logos">Logos Only</Radio>
                          </Radio.Group>
                        </div>
                        <div>
                          <h4 className="text-sm mb-2">Add Technologies</h4>
                          <Input
                            placeholder="Add technology (press Enter)"
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && e.currentTarget.value) {
                                setTechStack({
                                  ...techStack,
                                  items: [
                                    ...techStack.items,
                                    e.currentTarget.value,
                                  ],
                                });
                                e.currentTarget.value = "";
                              }
                            }}
                          />
                          <div className="flex flex-wrap gap-2 mt-2">
                            {techStack.items.map((tech) => (
                              <Badge key={tech}>
                                {tech}
                                <button
                                  onClick={() =>
                                    setTechStack({
                                      ...techStack,
                                      items: techStack.items.filter(
                                        (t) => t !== tech
                                      ),
                                    })
                                  }
                                  className="ml-1"
                                >
                                  ×
                                </button>
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "social",
                    label: <div className="px-4 py-2 rounded-lg">Social</div>,
                    children: (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Github className="w-5 h-5" />
                          <Input
                            value={socialLinks.github || ""}
                            onChange={(e) =>
                              setSocialLinks({
                                ...socialLinks,
                                github: e.target.value,
                              })
                            }
                            placeholder="GitHub username"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Linkedin className="w-5 h-5" />
                          <Input
                            value={socialLinks.linkedin || ""}
                            onChange={(e) =>
                              setSocialLinks({
                                ...socialLinks,
                                linkedin: e.target.value,
                              })
                            }
                            placeholder="LinkedIn username"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Twitter className="w-5 h-5" />
                          <Input
                            value={socialLinks.twitter || ""}
                            onChange={(e) =>
                              setSocialLinks({
                                ...socialLinks,
                                twitter: e.target.value,
                              })
                            }
                            placeholder="Twitter username"
                          />
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </AntdCard>
            </div>
            <div className="mt-6">
              <Segmented
                block
                options={[
                  { label: "Choose Template", value: "template" },
                  { label: "Export Sizes", value: "sizes" },
                ]}
                onChange={(value) => {
                  setActiveView(value as "template" | "sizes");
                }}
                className="mb-4 md:mb-6"
              />
              <div className="mt-4">
                {activeView === "template" ? (
                  <TemplateSelector
                  selected={selectedTemplate}
                  onSelect={setSelectedTemplate}
                />
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "LinkedIn Banner", size: "1584 x 396px" },
                      { name: "Twitter Header", size: "1500 x 500px" },
                      { name: "YouTube Channel Art", size: "2560 x 1440px" },
                      { name: "Facebook Cover", size: "820 x 312px" },
                      { name: "Instagram Post", size: "1080 x 1080px" },
                      { name: "Custom Size", size: "Set your dimensions" },
                    ].map((option) => (
                      <AntdCard
                        key={option.name}
                        variant="outline"
                        size="sm"
                        hover
                        className="cursor-pointer"
                      >
                        <h3 className="font-medium">{option.name}</h3>
                        <p className="text-sm text-gray-500">{option.size}</p>
                      </AntdCard>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
