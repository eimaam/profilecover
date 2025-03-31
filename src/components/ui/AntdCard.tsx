import { Card as AntCard, CardProps as AntCardProps } from 'antd';
import { motion, Variants } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-lg overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-background border border-border',
        ghost: 'bg-transparent border-none shadow-none',
        outlined: 'bg-transparent border border-border', // Changed from 'outline' to 'outlined'
        elevated: 'bg-background shadow-lg border-none',
        borderless: 'bg-background border-none', // Added to match Ant Design's type
      },
      size: {
        default: 'p-0',
        sm: 'p-4',
        lg: 'p-8',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  },
);

const motionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { y: -2, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

// Fix interface conflict by renaming the imported CardProps
interface CardProps
  extends Omit<AntCardProps, 'size' | 'variant'>,
    VariantProps<typeof cardVariants> {
  className?: string;
  animate?: boolean;
  hover?: boolean;
}

const AntdCard = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      animate = true,
      hover = true,
      children,
      ...props
    },
    ref
  ) => {
    // Map our custom variant to Ant Design's expected variant
    const getAntVariant = () => {
      if (variant === 'outlined' || variant === 'borderless') {
        return variant;
      }
      return undefined; // Default to undefined for other variants
    };

    return (
      <motion.div
        initial={animate ? 'initial' : false}
        animate={animate ? 'animate' : false}
        whileHover={hover ? 'hover' : undefined}
        whileTap="tap"
        variants={motionVariants}
      >
        <AntCard
          ref={ref}
          className={cn(cardVariants({ variant, size, fullWidth, className }))}
          bordered={variant !== 'borderless' && variant !== 'ghost'}
          {...props}
        >
          {children}
        </AntCard>
      </motion.div>
    );
  }
);

AntdCard.displayName = 'AntdCard';

export { AntdCard, cardVariants };