'use client';

import { useState } from 'react';
import {
  Win11Layout,
  Workspace,
  DesktopGrid,
} from '@/components/win11/Win11Layout';
import { AppWindow } from '@/components/win11/AppWindow';
import { Card, WidgetCard, TileCard } from '@/components/win11/Card';
import { Modal, ConfirmDialog } from '@/components/win11/Modal';
import { Button } from '@/components/win11/Button';
import { TaskbarItem } from '@/components/win11/Taskbar';

/**
 * Windows 11 UI Demo Page
 *
 * This page showcases all the Windows 11-inspired components
 * and serves as a visual reference for the design system.
 */

// Icons for the taskbar and widgets
const HomeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const FolderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ImageIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

// Taskbar navigation items
const taskbarItems: TaskbarItem[] = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'files', label: 'Files', icon: <FolderIcon /> },
  { id: 'mail', label: 'Mail', icon: <MailIcon /> },
  { id: 'calendar', label: 'Calendar', icon: <CalendarIcon /> },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

export default function Win11DemoPage() {
  const [activeView, setActiveView] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [windowOpen, setWindowOpen] = useState(true);

  return (
    <Win11Layout
      taskbarItems={taskbarItems}
      activeView={activeView}
      onViewChange={setActiveView}
      backgroundVariant="mica"
      taskbarVariant="floating"
    >
      <Workspace
        title="Windows 11 UI Components"
        subtitle="A collection of React components inspired by the Windows 11 design language"
      >
        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[var(--win11-text-primary)] mb-4">
            Buttons
          </h2>
          <Card padding="lg">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[var(--win11-text-primary)] mb-4">
            Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card variant="default" padding="lg">
              <h3 className="font-medium text-[var(--win11-text-primary)] mb-2">
                Default Card
              </h3>
              <p className="text-sm text-[var(--win11-text-secondary)]">
                A standard card with subtle border and shadow. Good for grouping related content.
              </p>
            </Card>

            <Card variant="interactive" padding="lg">
              <h3 className="font-medium text-[var(--win11-text-primary)] mb-2">
                Interactive Card
              </h3>
              <p className="text-sm text-[var(--win11-text-secondary)]">
                Hover to see the lift effect. Click to interact.
              </p>
            </Card>

            <Card variant="outlined" padding="lg">
              <h3 className="font-medium text-[var(--win11-text-primary)] mb-2">
                Outlined Card
              </h3>
              <p className="text-sm text-[var(--win11-text-secondary)]">
                A minimal card with just a border, no background fill.
              </p>
            </Card>
          </div>
        </section>

        {/* Widget Cards Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[var(--win11-text-primary)] mb-4">
            Widget Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WidgetCard
              title="Weather"
              subtitle="San Francisco, CA"
              icon={<span className="text-lg">72°</span>}
            >
              <div className="text-3xl font-light text-[var(--win11-text-primary)]">
                Sunny
              </div>
              <p className="text-sm text-[var(--win11-text-secondary)] mt-2">
                High: 78° / Low: 62°
              </p>
            </WidgetCard>

            <WidgetCard
              title="Tasks"
              subtitle="3 items due today"
              icon={<span className="text-sm font-bold">3</span>}
              action={
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              }
            >
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 rounded border border-[var(--win11-border)]" />
                  <span className="text-[var(--win11-text-primary)]">Review pull requests</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 rounded border border-[var(--win11-border)]" />
                  <span className="text-[var(--win11-text-primary)]">Update documentation</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 rounded border border-[var(--win11-border)]" />
                  <span className="text-[var(--win11-text-primary)]">Deploy to production</span>
                </li>
              </ul>
            </WidgetCard>
          </div>
        </section>

        {/* Tile Grid Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[var(--win11-text-primary)] mb-4">
            Tile Grid
          </h2>
          <DesktopGrid columns={6} gap="md">
            <TileCard title="Home" icon={<HomeIcon />} onClick={() => {}} />
            <TileCard title="Files" icon={<FolderIcon />} onClick={() => {}} />
            <TileCard title="Mail" icon={<MailIcon />} onClick={() => {}} />
            <TileCard title="Calendar" icon={<CalendarIcon />} onClick={() => {}} />
            <TileCard title="Code" icon={<CodeIcon />} onClick={() => {}} />
            <TileCard title="Photos" icon={<ImageIcon />} onClick={() => {}} />
          </DesktopGrid>
        </section>

        {/* AppWindow Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[var(--win11-text-primary)] mb-4">
            App Window
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="secondary"
              onClick={() => setWindowOpen(!windowOpen)}
            >
              {windowOpen ? 'Close Window' : 'Open Window'}
            </Button>
          </div>
          <AppWindow
            title="Settings"
            subtitle="System preferences"
            icon={<SettingsIcon />}
            isOpen={windowOpen}
            showCloseButton
            onClose={() => setWindowOpen(false)}
            size="lg"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--win11-bg-surface-secondary)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--win11-accent)] flex items-center justify-center text-white">
                    <UserIcon />
                  </div>
                  <div>
                    <div className="font-medium text-[var(--win11-text-primary)]">
                      John Doe
                    </div>
                    <div className="text-sm text-[var(--win11-text-secondary)]">
                      john.doe@email.com
                    </div>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Manage
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card padding="md" hover>
                  <h4 className="font-medium text-[var(--win11-text-primary)]">
                    System
                  </h4>
                  <p className="text-sm text-[var(--win11-text-secondary)]">
                    Display, sound, notifications
                  </p>
                </Card>
                <Card padding="md" hover>
                  <h4 className="font-medium text-[var(--win11-text-primary)]">
                    Personalization
                  </h4>
                  <p className="text-sm text-[var(--win11-text-secondary)]">
                    Background, colors, themes
                  </p>
                </Card>
              </div>
            </div>
          </AppWindow>
        </section>

        {/* Modals Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[var(--win11-text-primary)] mb-4">
            Modals & Dialogs
          </h2>
          <Card padding="lg">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
              <Button variant="secondary" onClick={() => setIsConfirmOpen(true)}>
                Open Confirm Dialog
              </Button>
            </div>
          </Card>

          {/* Standard Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Modal Dialog"
            description="This is a Windows 11-style modal dialog."
            footer={
              <>
                <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                  Save Changes
                </Button>
              </>
            }
          >
            <p className="text-sm text-[var(--win11-text-secondary)]">
              This modal demonstrates the Windows 11 dialog styling with smooth
              animations, backdrop blur, and proper focus management. Press Escape
              to close or click outside the dialog.
            </p>
            <div className="mt-4 p-4 rounded-lg bg-[var(--win11-bg-surface-secondary)]">
              <p className="text-sm">
                You can put any content here, including forms, lists, or other components.
              </p>
            </div>
          </Modal>

          {/* Confirm Dialog */}
          <ConfirmDialog
            isOpen={isConfirmOpen}
            onClose={() => setIsConfirmOpen(false)}
            onConfirm={() => console.log('Confirmed!')}
            title="Confirm Action"
            message="Are you sure you want to perform this action? This cannot be undone."
            confirmLabel="Yes, Continue"
            cancelLabel="Cancel"
          />
        </section>

        {/* Glassmorphism Demo */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[var(--win11-text-primary)] mb-4">
            Glassmorphism / Acrylic Effect
          </h2>
          <div
            className="
              relative
              h-64
              rounded-[var(--win11-radius-lg)]
              overflow-hidden
              bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
            "
          >
            {/* Glass panel overlay */}
            <div
              className="
                absolute
                inset-4
                rounded-[var(--win11-radius-lg)]
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                p-6
                flex flex-col justify-center
              "
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                Acrylic Material
              </h3>
              <p className="text-white/80">
                This panel demonstrates the glassmorphism effect used in Windows 11.
                The background shows through with blur and saturation effects.
              </p>
            </div>
          </div>
        </section>

        {/* Typography & Colors */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-[var(--win11-text-primary)] mb-4">
            Typography & Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card padding="lg">
              <h3 className="font-medium text-[var(--win11-text-primary)] mb-4">
                Text Styles
              </h3>
              <div className="space-y-3">
                <p className="text-2xl text-[var(--win11-text-primary)]">
                  Display Text (24px)
                </p>
                <p className="text-lg text-[var(--win11-text-primary)]">
                  Title Text (18px)
                </p>
                <p className="text-base text-[var(--win11-text-primary)]">
                  Body Text (16px)
                </p>
                <p className="text-sm text-[var(--win11-text-secondary)]">
                  Secondary Text (14px)
                </p>
                <p className="text-xs text-[var(--win11-text-disabled)]">
                  Disabled Text (12px)
                </p>
              </div>
            </Card>

            <Card padding="lg">
              <h3 className="font-medium text-[var(--win11-text-primary)] mb-4">
                Accent Colors
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--win11-accent)]" />
                  <span className="text-sm text-[var(--win11-text-primary)]">
                    Accent (#0078d4)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--win11-accent-light)]" />
                  <span className="text-sm text-[var(--win11-text-primary)]">
                    Accent Light (#60cdff)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--win11-accent-dark)]" />
                  <span className="text-sm text-[var(--win11-text-primary)]">
                    Accent Dark (#005a9e)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--win11-bg-surface)] border border-[var(--win11-border)]" />
                  <span className="text-sm text-[var(--win11-text-primary)]">
                    Surface
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Usage Notes */}
        <section className="mb-24">
          <h2 className="text-lg font-semibold text-[var(--win11-text-primary)] mb-4">
            Usage Notes
          </h2>
          <Card padding="lg">
            <div className="prose prose-sm max-w-none text-[var(--win11-text-secondary)]">
              <p className="mb-4">
                This component library is inspired by Windows 11 design language but adapted
                for web use. Key features include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[var(--win11-text-primary)]">Glassmorphism:</strong>{' '}
                  Use backdrop-filter for blur effects on cards and panels
                </li>
                <li>
                  <strong className="text-[var(--win11-text-primary)]">Rounded Corners:</strong>{' '}
                  8-12px border radius for most elements
                </li>
                <li>
                  <strong className="text-[var(--win11-text-primary)]">Subtle Shadows:</strong>{' '}
                  Layered shadows for depth without being heavy
                </li>
                <li>
                  <strong className="text-[var(--win11-text-primary)]">Natural Animations:</strong>{' '}
                  Spring-based animations with gentle easing
                </li>
                <li>
                  <strong className="text-[var(--win11-text-primary)]">Responsive:</strong>{' '}
                  Desktop-first but adapts to all screen sizes
                </li>
              </ul>
            </div>
          </Card>
        </section>
      </Workspace>
    </Win11Layout>
  );
}
