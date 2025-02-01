import { Navbar } from "@/components/ui/Navbar";
import { Button } from "antd";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export function Header() {
  return (
    <div className="">
      <Navbar />
      <header className="container mx-auto px-4 py-24 md:py-28 flex flex-col items-center text-center gap-8">
        {/* TODO: uncomment once tier feature is ready */}
        {/* <Tag
          className="mb-4 flex items-center px-2.5 py-0.5 text-xs font-semibold"
          color="blue"
        >
          <Sparkles className="w-4 h-4 mr-1" />
          Launch Offer: 40% Off Lifetime Access
        </Tag> */}

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Create Stunning Tech-focused
          <span className="text-primary block mt-2">Social Media Banners</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl">
          Design eye-catching profile headers/banners tailored for tech
          professionals like you! Stand out on LinkedIn, Twitter, and beyond.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button type="primary" size="large">
            Try for Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="large">View Examples</Button>
        </div>

        <div className="flex gap-6 mt-8 text-muted-foreground">
          <Linkedin className="w-8 h-8" />
          <Twitter className="w-8 h-8" />
          <Instagram className="w-8 h-8" />
        </div>
      </header>
    </div>
  );
}