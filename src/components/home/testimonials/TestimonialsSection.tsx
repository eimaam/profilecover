import { motion, useAnimation } from "framer-motion";
import type { FC } from 'react';

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface Testimonial {
  content: string;
  author: Author;
}

const testimonials: Testimonial[] = [
  {
    content: "Worth every penny. The lifetime access is a game-changer, and the AI integration makes customization a breeze.",
    author: {
      name: "Michael Park",
      role: "ML Engineer @ Google",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    }
  },
  {
    content: "This tool has completely transformed how I present my GitHub projects. The AI suggestions are spot-on!",
    author: {
      name: "Sarah Chen",
      role: "Senior Developer @ Meta",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  },
  {
    content: "Finally, a banner generator that understands developers. The code snippets feature is brilliant.",
    author: {
      name: "Alex Kumar",
      role: "DevOps Lead @ AWS",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  },
  {
    content: "The tech stack badges and syntax highlighting are perfect for showcasing my projects.",
    author: {
      name: "Emily Rodriguez",
      role: "Frontend Architect @ Netflix",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    }
  },
  {
    content: "Best investment for my developer portfolio. The AI understands exactly what tech-focused banners should look like.",
    author: {
      name: "James Wilson",
      role: "CTO @ Startup",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  },
  {
    content: "The dark mode themes and code integration are exactly what I needed for my tech blog.",
    author: {
      name: "Sophia Kim",
      role: "Tech Lead @ Microsoft",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    }
  }
];

const TestimonialCard: FC<Testimonial> = ({ content, author }) => (
  <motion.div
  className="backdrop-blur-lg bg-secondary/30 p-6 rounded-2xl border border-secondary/50 hover:border-primary/50 transition-all duration-300 max-w-sm"
  whileHover={{ scale: 1.02, y: -5 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
    <p className="text-lg mb-6 leading-relaxed">{content}</p>
    <div className="flex items-center gap-4">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
      />
      <div>
        <h4 className="font-semibold text-lg">{author.name}</h4>
        <p className="text-sm text-muted-foreground">{author.role}</p>
      </div>
    </div>
  </motion.div>
);

const MarqueeRow: FC<{ items: Testimonial[]; reverse?: boolean }> = ({ items, reverse }) => (
  <motion.div
    initial={{ x: reverse ? -50 : 0 }}
    animate={{ x: reverse ? 0 : -50 }}
    transition={{
      repeat: Infinity,
      duration: 15,
      ease: "linear"
    }}
    className="flex gap-6 px-4"
  >
    {[...items, ...items].map((testimonial, index) => (
      <div key={index} className="w-[450px] flex-shrink-0">
        <TestimonialCard {...testimonial} />
      </div>
    ))}
  </motion.div>
);

export const TestimonialsSection: FC = () => {
  return (
    <section className="relative py-24 !overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Loved by Tech Professionals
        </h2>
        
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="space-y-12 -mx-4">
            <MarqueeRow items={testimonials} />
            <MarqueeRow items={[...testimonials].reverse()} reverse />
          </div>
        </div>
      </div>
    </section>
  );
};