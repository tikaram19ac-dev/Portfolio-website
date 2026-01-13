'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

/**
 * Windows 11 Button Component
 *
 * A button styled after the Windows 11 design language with:
 * - Rounded corners (8px radius)
 * - Subtle hover elevation
 * - Accent color variants
 * - Natural motion animations
 *
 * Variants:
 * - primary: Filled accent color button for primary actions
 * - secondary: Subtle outlined button for secondary actions
 * - ghost: Transparent button that shows background on hover
 */

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

// Tailwind classes for each variant
const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--win11-accent)] text-white
    hover:bg-[var(--win11-accent-hover)]
    active:bg-[var(--win11-accent-dark)]
    shadow-[var(--win11-shadow-sm)]
    hover:shadow-[var(--win11-shadow-md)]
  `,
  secondary: `
    bg-[var(--win11-bg-surface)]
    border border-[var(--win11-border)]
    text-[var(--win11-text-primary)]
    hover:bg-[var(--win11-bg-card-hover)]
    hover:border-[var(--win11-border-strong)]
    shadow-[var(--win11-shadow-sm)]
  `,
  ghost: `
    bg-transparent
    text-[var(--win11-text-primary)]
    hover:bg-[var(--win11-bg-card-hover)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      disabled = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        disabled={disabled}
        className={`
          inline-flex items-center justify-center gap-2
          rounded-[var(--win11-radius-md)]
          font-medium
          transition-colors
          duration-[var(--win11-duration-fast)]
          outline-none
          focus-visible:ring-2
          focus-visible:ring-[var(--win11-accent)]
          focus-visible:ring-offset-2
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:pointer-events-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
