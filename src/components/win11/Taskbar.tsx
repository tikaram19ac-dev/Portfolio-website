"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconButton } from "./IconButton";

export interface TaskbarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

interface TaskbarProps {
  items: TaskbarItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  position?: "center" | "left";
  variant?: "floating" | "edge";
  className?: string;
}

export function Taskbar({
  items,
  activeId,
  onItemClick,
  position = "center",
  variant = "floating",
  className = "",
}: TaskbarProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure component only animates after mount to prevent SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleItemClick = (item: TaskbarItem) => {
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick(item.id);
    }
    // If href is provided, navigation should be handled by parent or Link wrapper
  };

  // Container styles based on variant
  const containerStyles =
    variant === "floating"
      ? `
        fixed bottom-4 left-1/2 -translate-x-1/2
        rounded-[var(--win11-radius-xl)]
        px-2
        shadow-[var(--win11-shadow-elevated)]
      `
      : `
        fixed bottom-0 left-0 right-0
        rounded-none
        px-4
      `;

  // Alignment styles
  const alignmentStyles =
    position === "center" ? "justify-center" : "justify-start";

  return (
    <AnimatePresence>
      {mounted && (
        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          role="navigation"
          aria-label="Main navigation"
          className={`
            ${containerStyles}
            h-[var(--win11-taskbar-height)]
            bg-[var(--win11-acrylic-light)]
            dark:bg-[var(--win11-acrylic-dark)]
            backdrop-blur-[30px]
            backdrop-saturate-[180%]
            border border-[var(--win11-border)]
            z-50
            ${className}
          `}
          style={{
            // Fallback for browsers without backdrop-filter
            backgroundColor: "var(--win11-bg-surface)",
          }}
        >
          <div
            className={`
              h-full
              flex items-center gap-1
              ${alignmentStyles}
            `}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              >
                <IconButton
                  label={item.label}
                  isActive={activeId === item.id}
                  onClick={() => handleItemClick(item)}
                  size="md"
                >
                  {item.icon}
                </IconButton>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
