'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

/**
 * Windows 11 Icon Button Component
 *
 * A circular/rounded button designed to hold icons, styled after Windows 11.
 * Used in the taskbar and other places where icon-only buttons are needed.
 *
 * Features:
 * - Subtle background on hover
 * - Active state indicator (bottom accent bar like Windows 11 taskbar)
 * - Smooth scale animation on interaction
 */

interface IconButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type'> {
  children: React.ReactNode;
  isActive?: boolean;
  label: string; // Required for accessibility
  size?: 'sm' | 'md' | 'lg';
  showActiveIndicator?: boolean;
}

const sizeStyles = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      isActive = false,
      label,
      size = 'md',
      showActiveIndicator = true,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={disabled ? {} : { scale: 1.05 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        disabled={disabled}
        aria-label={label}
        aria-pressed={isActive}
        className={`
          relative
          inline-flex items-center justify-center
          rounded-[var(--win11-radius-md)]
          transition-colors
          duration-[var(--win11-duration-fast)]
          outline-none
          ${sizeStyles[size]}
          ${
            isActive
              ? 'bg-[var(--win11-bg-card-hover)] text-[var(--win11-accent)]'
              : 'bg-transparent text-[var(--win11-text-secondary)] hover:bg-[var(--win11-bg-card-hover)] hover:text-[var(--win11-text-primary)]'
          }
          focus-visible:ring-2
          focus-visible:ring-[var(--win11-accent)]
          focus-visible:ring-offset-2
          disabled:opacity-50
          disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      >
        {/* Icon container with proper sizing */}
        <span className={`${iconSizes[size]} flex items-center justify-center`}>
          {children}
        </span>

        {/* Active indicator bar - positioned at the bottom like Windows 11 taskbar */}
        {showActiveIndicator && (
          <motion.span
            initial={false}
            animate={{
              scaleX: isActive ? 1 : 0,
              opacity: isActive ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
            className="
              absolute bottom-0.5 left-1/2 -translate-x-1/2
              h-0.5 w-4
              rounded-full
              bg-[var(--win11-accent)]
            "
          />
        )}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';
