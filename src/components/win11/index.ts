/**
 * Windows 11 UI Component Library
 *
 * A collection of React components inspired by the Windows 11 design language.
 * Features glassmorphism, smooth animations, and modern UI patterns.
 *
 * Design principles:
 * - Rounded corners (8-12px radius for most elements)
 * - Subtle shadows with layered depth
 * - Glassmorphism/acrylic blur effects
 * - Smooth, natural animations (ease-out curves)
 * - Segoe UI-like typography
 */

// Layout components
export { Win11Layout, ViewContainer, DesktopGrid, Workspace } from './Win11Layout';
export { Win11Desktop } from './Win11Desktop';

// Navigation
export { Taskbar, type TaskbarItem } from './Taskbar';

// Container components
export { AppWindow } from './AppWindow';
export { Card, WidgetCard, TileCard } from './Card';

// Modals & Dialogs
export { Modal, ConfirmDialog } from './Modal';

// Interactive elements
export { Button } from './Button';
export { IconButton } from './IconButton';
