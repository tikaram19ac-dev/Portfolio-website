'use client';

import { useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Taskbar, TaskbarItem } from './Taskbar';

/**
 * Windows 11 Layout Wrapper Component
 *
 * A full-page layout component that provides the Windows 11 app-like experience.
 * Features:
 * - Mica/acrylic background effect
 * - Bottom taskbar navigation
 * - Centered workspace area
 * - Support for multiple "views" that can be switched via taskbar
 *
 * This layout replaces the traditional website layout with an app-like interface.
 */

interface Win11LayoutProps {
  children: ReactNode;
  taskbarItems?: TaskbarItem[];
  activeView?: string;
  onViewChange?: (viewId: string) => void;
  showTaskbar?: boolean;
  taskbarPosition?: 'center' | 'left';
  taskbarVariant?: 'floating' | 'edge';
  backgroundVariant?: 'solid' | 'gradient' | 'mica';
  className?: string;
}

export function Win11Layout({
  children,
  taskbarItems = [],
  activeView,
  onViewChange,
  showTaskbar = true,
  taskbarPosition = 'center',
  taskbarVariant = 'floating',
  backgroundVariant = 'mica',
  className = '',
}: Win11LayoutProps) {
  // Background style based on variant
  const backgroundStyles = {
    solid: 'bg-[var(--win11-bg-base)]',
    gradient: `
      bg-gradient-to-br
      from-[var(--win11-bg-base)]
      via-[var(--win11-bg-surface)]
      to-[var(--win11-bg-base)]
    `,
    mica: `
      bg-[var(--win11-bg-base)]
      relative
      overflow-hidden
    `,
  };

  return (
    <div
      className={`
        min-h-screen
        w-full
        ${backgroundStyles[backgroundVariant]}
        ${className}
      `}
    >
      {/* Mica effect background layer */}
      {backgroundVariant === 'mica' && <MicaBackground />}

      {/* Main content area */}
      <main
        className={`
          relative
          z-10
          min-h-screen
          ${showTaskbar ? 'pb-20' : ''}
        `}
      >
        {children}
      </main>

      {/* Taskbar */}
      {showTaskbar && taskbarItems.length > 0 && (
        <Taskbar
          items={taskbarItems}
          activeId={activeView}
          onItemClick={onViewChange}
          position={taskbarPosition}
          variant={taskbarVariant}
        />
      )}
    </div>
  );
}

/**
 * Mica Background Effect
 *
 * Creates a subtle, layered background effect similar to Windows 11's Mica material.
 * This uses gradient overlays and subtle noise to create depth.
 */
function MicaBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[var(--win11-accent)]/5
          via-transparent
          to-[var(--win11-accent)]/3
        "
      />

      {/* Subtle radial gradients for depth */}
      <div
        className="
          absolute
          -top-1/4 -right-1/4
          w-1/2 h-1/2
          rounded-full
          bg-[var(--win11-accent)]/5
          blur-[100px]
        "
      />
      <div
        className="
          absolute
          -bottom-1/4 -left-1/4
          w-1/2 h-1/2
          rounded-full
          bg-[var(--win11-accent)]/3
          blur-[100px]
        "
      />
    </div>
  );
}

// ==================== VIEW CONTAINER ====================

/**
 * ViewContainer - Animated container for view content with transitions
 */

interface ViewContainerProps {
  children: ReactNode;
  viewId: string;
  className?: string;
}

export function ViewContainer({
  children,
  viewId,
  className = '',
}: ViewContainerProps) {
  return (
    <motion.div
      key={viewId}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      className={`
        w-full
        max-w-6xl
        mx-auto
        px-4 py-8
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

// ==================== DESKTOP GRID ====================

/**
 * DesktopGrid - A grid layout for tile-based content, similar to Windows Start menu
 */

interface DesktopGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const columnStyles = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
};

const gapStyles = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

export function DesktopGrid({
  children,
  columns = 4,
  gap = 'md',
  className = '',
}: DesktopGridProps) {
  return (
    <div
      className={`
        grid
        ${columnStyles[columns]}
        ${gapStyles[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// ==================== WORKSPACE ====================

/**
 * Workspace - A centered content area with optional header
 */

interface WorkspaceProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}

export function Workspace({
  children,
  title,
  subtitle,
  action,
  className = '',
}: WorkspaceProps) {
  return (
    <div
      className={`
        w-full
        max-w-6xl
        mx-auto
        px-4 md:px-8
        py-8
        ${className}
      `}
    >
      {/* Header */}
      {(title || action) && (
        <div className="flex items-end justify-between mb-8">
          <div>
            {title && (
              <h1 className="text-2xl font-semibold text-[var(--win11-text-primary)]">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-1 text-[var(--win11-text-secondary)]">
                {subtitle}
              </p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );
}
