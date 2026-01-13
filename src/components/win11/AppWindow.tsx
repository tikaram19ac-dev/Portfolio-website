"use client";

import { forwardRef, useState } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

interface AppWindowProps extends Omit<HTMLMotionProps<"div">, "title"> {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  showTitleBar?: boolean;
  showCloseButton?: boolean;
  showMinimizeButton?: boolean;
  showMaximizeButton?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  variant?: "solid" | "glass";
  isOpen?: boolean;
  size?: "sm" | "md" | "lg" | "full";
}

const sizeStyles = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  full: "max-w-full",
};

export const AppWindow = forwardRef<HTMLDivElement, AppWindowProps>(
  (
    {
      title,
      subtitle,
      icon,
      children,
      showTitleBar = true,
      showCloseButton = false,
      showMinimizeButton = false,
      showMaximizeButton = false,
      onClose,
      onMinimize,
      onMaximize,
      variant = "solid",
      isOpen = true,
      size = "md",
      className = "",
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    // Background styles based on variant
    const bgStyles =
      variant === "glass"
        ? `
          bg-[var(--win11-acrylic-light)]
          dark:bg-[var(--win11-acrylic-dark)]
          backdrop-blur-[30px]
          backdrop-saturate-[180%]
        `
        : `
          bg-[var(--win11-bg-surface)]
        `;

    return (
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              ${sizeStyles[size]}
              w-full
              rounded-[var(--win11-radius-lg)]
              border border-[var(--win11-border)]
              shadow-[var(--win11-shadow-lg)]
              overflow-hidden
              ${bgStyles}
              ${className}
            `}
            {...props}
          >
            {/* Title Bar */}
            {showTitleBar && (title || showCloseButton) && (
              <div
                className="
                  flex items-center justify-between
                  px-4 py-3
                  border-b border-[var(--win11-border)]
                  bg-[var(--win11-bg-surface-secondary)]
                "
              >
                {/* Left side: Icon + Title */}
                <div className="flex items-center gap-3">
                  {icon && (
                    <span className="w-5 h-5 text-[var(--win11-text-secondary)]">
                      {icon}
                    </span>
                  )}
                  <div>
                    {title && (
                      <h2 className="text-sm font-medium text-[var(--win11-text-primary)]">
                        {title}
                      </h2>
                    )}
                    {subtitle && (
                      <p className="text-xs text-[var(--win11-text-secondary)]">
                        {subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right side: Window controls */}
                {(showMinimizeButton ||
                  showMaximizeButton ||
                  showCloseButton) && (
                  <div className="flex items-center gap-1">
                    {showMinimizeButton && (
                      <WindowControlButton
                        onClick={onMinimize}
                        label="Minimize"
                        isHovered={isHovered}
                      >
                        <MinimizeIcon />
                      </WindowControlButton>
                    )}
                    {showMaximizeButton && (
                      <WindowControlButton
                        onClick={onMaximize}
                        label="Maximize"
                        isHovered={isHovered}
                      >
                        <MaximizeIcon />
                      </WindowControlButton>
                    )}
                    {showCloseButton && (
                      <WindowControlButton
                        onClick={onClose}
                        label="Close"
                        variant="close"
                        isHovered={isHovered}
                      >
                        <CloseIcon />
                      </WindowControlButton>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

AppWindow.displayName = "AppWindow";

// Window control button sub-component
interface WindowControlButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  label: string;
  variant?: "default" | "close";
  isHovered?: boolean;
}

function WindowControlButton({
  children,
  onClick,
  label,
  variant = "default",
  isHovered = false,
}: WindowControlButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      aria-label={label}
      className={`
        w-8 h-8
        flex items-center justify-center
        rounded-[var(--win11-radius-sm)]
        transition-colors duration-100
        ${
          variant === "close"
            ? "hover:bg-red-500 hover:text-white text-[var(--win11-text-secondary)]"
            : "hover:bg-[var(--win11-bg-card-hover)] text-[var(--win11-text-secondary)]"
        }
      `}
    >
      {children}
    </motion.button>
  );
}

// Icon components
function MinimizeIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 5H10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="9"
        height="9"
        stroke="currentColor"
        strokeWidth="1"
        rx="1"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L9 9M9 1L1 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
