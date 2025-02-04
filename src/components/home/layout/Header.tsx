import { Navbar } from "@/components/ui/Navbar";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { useHeaderAnimation } from "@/lib/animations";
import { Button } from "@/components/button/button";
import { Link } from "react-router-dom";

export function Header() {
  const { headerRef, titleRef, subtitleRef, ctaRef } = useHeaderAnimation();

  return (
    <div className="" ref={headerRef}>
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

        <h1 className="text-2xl md:text-6xl font-bold tracking-tight" ref={titleRef}>
          <span>Create Stunning Tech-focused</span>
          <span className="text-primary block mt-2">Social Media Covers</span>
        </h1>

        <p className="text-base md:text-xl text-muted-foreground max-w-2xl" ref={subtitleRef}>
          Design eye-catching profile headers/covers tailored for tech
          professionals like you! Stand out on LinkedIn, X (fka Twitter), Facebook and beyond.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4" ref={ctaRef}>
          <Link to="/editor">
            <Button type="primary">
              Try for Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Button variant="outline">View Examples</Button>
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