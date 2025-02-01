import { ITestimonial } from '@/components/home/testimonials/TestimonialsSection';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// banner/header
export const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
export const MAX_IMAGE_SIZE = 3 * 1024 * 1024; // 3MB

export const DEFAULT_EMOJIS = [
  '👨‍💻', '👩‍💻', '🚀', '💻', '⚡️', '🎨', '🛠️', '🔧',
  '🎯', '🌟', '💡', '🎮', '📱', '🤖', '🔥', '✨'
];

export const testimonials: ITestimonial[] = [
  {
    content: "The template customization options are fantastic! I love how I can showcase my tech stack and social links in a clean, professional banner.",
    author: {
      name: "Oluwaseun Adebayo",
      role: "Software Engineer @ Paystack",
      avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop"
    }
  },
  {
    content: "As a content creator, I love how easy it is to customize the banner with my brand colors and social media links. Perfect for my YouTube channel!",
    author: {
      name: "Sarah Chen",
      role: "Tech Content Creator",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  },
  {
    content: "The emoji avatar options and gradient backgrounds make my profile stand out. Great for personal branding!",
    author: {
      name: "Chioma Okonkwo",
      role: "Digital Marketing Lead",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop"
    }
  },
  {
    content: "Love how I can display my research interests and academic affiliations in a modern, professional banner.",
    author: {
      name: "Dr. Emily Rodriguez",
      role: "Computer Science Professor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    }
  },
  {
    content: "The minimal template with custom image upload feature is perfect for my design portfolio header.",
    author: {
      name: "James Wilson",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  },
  {
    content: "Being able to showcase my tech stack with both logos and names makes my profile look more professional. The code template is a nice touch!",
    author: {
      name: "Tunde Oyewole",
      role: "Frontend Developer @ Flutterwave",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  },
  {
    content: "The code template perfectly captures my developer identity. Love how it shows my tech stack in a creative way!",
    author: {
      name: "Aisha Mohammed",
      role: "Backend Developer @ Andela",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    }
  },
  {
    content: "Finally found a tool that lets me create a professional GitHub profile banner that truly represents my work and skills.",
    author: {
      name: "David Okafor",
      role: "DevOps Engineer @ Interswitch",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
  },
  {
    content: "The gradient template with my tech stack logos looks amazing! Perfect for my speaking engagements and personal site.",
    author: {
      name: "Zainab Ibrahim",
      role: "Tech Community Lead",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop"
    }
  },
  {
    content: "Clean, professional, and easy to customize. The minimal template is exactly what I needed for my portfolio.",
    author: {
      name: "Yemi Alade",
      role: "Product Designer @ Kuda",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop"
    }
  }
];