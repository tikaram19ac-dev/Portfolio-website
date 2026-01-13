'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Button } from './Button';

/**
 * Windows 11 Modal/Dialog Component
 *
 * A dialog component styled after Windows 11 system dialogs.
 * Features:
 * - Centered positioning with backdrop blur
 * - Smooth scale-in/fade-out animations
 * - Support for title, content, and action buttons
 * - Keyboard accessible (Escape to close, focus trap)
 * - Portal rendering to document body
 *
 * Variants:
 * - default: Standard dialog with backdrop
 * - compact: Smaller dialog for confirmations
 * - fullscreen: Full-screen modal for immersive content
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Handle escape key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    },
    [closeOnEscape, onClose]
  );

  // Focus management and keyboard handling
  useEffect(() => {
    if (isOpen) {
      // Store currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus the modal
      setTimeout(() => {
        modalRef.current?.focus();
      }, 0);

      // Add escape key listener
      document.addEventListener('keydown', handleKeyDown);

      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';

      // Restore focus to previous element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, handleKeyDown]);

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && closeOnBackdropClick) {
      onClose();
    }
  };

  // Don't render on server
  if (typeof window === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
            className="
              fixed inset-0 z-50
              bg-black/40
              backdrop-blur-[4px]
              flex items-center justify-center
              p-4
            "
            aria-hidden="true"
          >
            {/* Modal */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? 'modal-title' : undefined}
              aria-describedby={description ? 'modal-description' : undefined}
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
              className={`
                ${sizeStyles[size]}
                w-full
                bg-[var(--win11-bg-surface)]
                border border-[var(--win11-border)]
                rounded-[var(--win11-radius-lg)]
                shadow-[var(--win11-shadow-xl)]
                overflow-hidden
                outline-none
              `}
            >
              {/* Header */}
              {(title || showCloseButton) && (
                <div className="flex items-start justify-between p-6 pb-0">
                  <div className="flex-1 pr-4">
                    {title && (
                      <h2
                        id="modal-title"
                        className="text-lg font-semibold text-[var(--win11-text-primary)]"
                      >
                        {title}
                      </h2>
                    )}
                    {description && (
                      <p
                        id="modal-description"
                        className="mt-1 text-sm text-[var(--win11-text-secondary)]"
                      >
                        {description}
                      </p>
                    )}
                  </div>
                  {showCloseButton && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      aria-label="Close dialog"
                      className="
                        w-8 h-8
                        flex items-center justify-center
                        rounded-[var(--win11-radius-sm)]
                        text-[var(--win11-text-secondary)]
                        hover:bg-[var(--win11-bg-card-hover)]
                        hover:text-[var(--win11-text-primary)]
                        transition-colors duration-100
                      "
                    >
                      <CloseIcon />
                    </motion.button>
                  )}
                </div>
              )}

              {/* Content */}
              {children && (
                <div className="p-6 text-[var(--win11-text-primary)]">
                  {children}
                </div>
              )}

              {/* Footer */}
              {footer && (
                <div
                  className="
                    flex items-center justify-end gap-2
                    px-6 py-4
                    bg-[var(--win11-bg-surface-secondary)]
                    border-t border-[var(--win11-border)]
                  "
                >
                  {footer}
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

// Close icon component
function CloseIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L11 11M11 1L1 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ==================== CONFIRM DIALOG PRESET ====================

/**
 * A pre-built confirmation dialog following Windows 11 patterns
 */

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'default' | 'danger';
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
}: ConfirmDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button
            variant="primary"
            onClick={handleConfirm}
            className={
              variant === 'danger' ? 'bg-red-500 hover:bg-red-600' : ''
            }
          >
            {confirmLabel}
          </Button>
        </>
      }
    >
      <p className="text-sm">{message}</p>
    </Modal>
  );
}
