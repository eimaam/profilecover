import { testimonials } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import type { FC } from "react";

interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface ITestimonial {
  content: string;
  author: Author;
}

const TestimonialCard: FC<ITestimonial> = ({ content, author }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="backdrop-blur-lg bg-secondary/30 p-6 rounded-2xl border border-secondary/50 hover:border-primary/50 transition-all duration-300 max-w-sm"
  >
    <p className="text-lg mb-6 leading-relaxed">{content}</p>
    <div className="flex items-center gap-4">
      <img
        src={author?.avatar}
        alt={author?.name}
        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
      />
      <div>
        <h4 className="font-semibold text-lg">{author?.name}</h4>
        <p className="text-sm text-muted-foreground">{author?.role}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialsRow: FC<{
  items: ITestimonial[];
  direction: "left" | "right";
}> = ({ items, direction }) => {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? ["-100%", "0%"] : ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex gap-6 px-4 pb-6"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...items, ...items].map((testimonial, index) => (
          <div
            key={`${testimonial.author?.name}-${index}`}
            className="w-[450px] flex-shrink-0"
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsSection: FC = () => {
  const shuffledTestimonials = [...testimonials].sort(
    () => Math.random() - 0.5
  );
  const midPoint = Math.ceil(shuffledTestimonials.length / 2);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-24"
    >
      <div className="w-full container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-center mb-16"
        >
          Loved by Tech Professionals
        </motion.h2>

        <div className="w-full">
          <div className="w-full flex flex-col items-center space-y-12">
            <TestimonialsRow
              items={shuffledTestimonials.slice(0, midPoint)}
              direction="left"
            />
            <TestimonialsRow
              items={shuffledTestimonials.slice(midPoint)}
              direction="right"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export { TestimonialsSection };
