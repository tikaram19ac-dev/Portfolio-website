'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

/**
 * Windows 11 Card & Widget Components
 *
 * Card-based UI elements inspired by Windows 11 widgets and settings cards.
 * Features:
 * - Rounded corners with subtle borders
 * - Hover elevation effect
 * - Support for icons, titles, and actions
 * - Two variants: Card (general purpose) and WidgetCard (dashboard-style)
 */

// ==================== CARD COMPONENT ====================

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'default' | 'interactive' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      padding = 'md',
      hover = false,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles shared across all variants
    const baseStyles = `
      rounded-[var(--win11-radius-lg)]
      overflow-hidden
    `;

    // Variant-specific styles
    const variantStyles = {
      default: `
        bg-[var(--win11-bg-card)]
        border border-[var(--win11-border)]
        shadow-[var(--win11-shadow-sm)]
      `,
      interactive: `
        bg-[var(--win11-bg-card)]
        border border-[var(--win11-border)]
        shadow-[var(--win11-shadow-sm)]
        cursor-pointer
      `,
      outlined: `
        bg-transparent
        border border-[var(--win11-border-strong)]
      `,
    };

    // Hover animation config
    const hoverAnimation =
      hover || variant === 'interactive'
        ? {
            whileHover: {
              y: -2,
              boxShadow:
                '0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.04)',
            },
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 25,
            },
          }
        : {};

    return (
      <motion.div
        ref={ref}
        {...hoverAnimation}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${paddingStyles[padding]}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// ==================== WIDGET CARD COMPONENT ====================

/**
 * WidgetCard - A more structured card for dashboard widgets
 * Similar to Windows 11 Widgets panel cards
 */

interface WidgetCardProps extends HTMLMotionProps<'div'> {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export const WidgetCard = forwardRef<HTMLDivElement, WidgetCardProps>(
  (
    { title, subtitle, icon, action, children, onClick, className = '', ...props },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{
          y: -2,
          boxShadow:
            '0 4px 8px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.04)',
        }}
        whileTap={onClick ? { scale: 0.99 } : {}}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        onClick={onClick}
        className={`
          bg-[var(--win11-bg-card)]
          border border-[var(--win11-border)]
          rounded-[var(--win11-radius-lg)]
          shadow-[var(--win11-shadow-sm)]
          overflow-hidden
          ${onClick ? 'cursor-pointer' : ''}
          ${className}
        `}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="flex items-center gap-3">
            {icon && (
              <div
                className="
                  w-8 h-8
                  flex items-center justify-center
                  rounded-[var(--win11-radius-md)]
                  bg-[var(--win11-accent)]
                  text-white
                "
              >
                {icon}
              </div>
            )}
            <div>
              <h3 className="text-sm font-medium text-[var(--win11-text-primary)]">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-[var(--win11-text-secondary)]">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {action && <div>{action}</div>}
        </div>

        {/* Content */}
        <div className="px-4 pb-4">{children}</div>
      </motion.div>
    );
  }
);

WidgetCard.displayName = 'WidgetCard';

// ==================== GRID CARD (TILE-LIKE) ====================

/**
 * A tile-style card similar to Windows 11 Start menu tiles
 */

interface TileCardProps extends HTMLMotionProps<'div'> {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  accentColor?: string;
}

const tileSizes = {
  sm: 'w-20 h-20',
  md: 'w-28 h-28',
  lg: 'w-36 h-36',
};

export const TileCard = forwardRef<HTMLDivElement, TileCardProps>(
  (
    { title, icon, onClick, size = 'md', accentColor, className = '', ...props },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        onClick={onClick}
        className={`
          ${tileSizes[size]}
          flex flex-col items-center justify-center gap-2
          bg-[var(--win11-bg-card)]
          border border-[var(--win11-border)]
          rounded-[var(--win11-radius-lg)]
          shadow-[var(--win11-shadow-sm)]
          cursor-pointer
          transition-colors duration-100
          hover:bg-[var(--win11-bg-card-hover)]
          ${className}
        `}
        style={accentColor ? { backgroundColor: accentColor } : {}}
        {...props}
      >
        <div className="w-8 h-8 text-[var(--win11-text-primary)]">{icon}</div>
        <span className="text-xs font-medium text-[var(--win11-text-primary)] text-center px-2 truncate w-full">
          {title}
        </span>
      </motion.div>
    );
  }
);

TileCard.displayName = 'TileCard';
