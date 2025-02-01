import { Button } from "antd";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail,
  Heart
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">bannerfy</h3>
            <p className="text-sm text-muted-foreground">
              Create professional social media banners/headers tailored for tech professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Features</li>
              <li>Templates</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get notified about new features and updates or our future releases.
            </p>
            <Button>
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border mt-12 pt-8">
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for developers - eimaam.dev 
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}