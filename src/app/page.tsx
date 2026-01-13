'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Win11Desktop } from '@/components/win11/Win11Desktop';
import { AppWindow } from '@/components/win11/AppWindow';

/**
 * Windows 11 Desktop Portfolio
 *
 * An authentic Windows 11 desktop experience featuring:
 * - Desktop with Windows 11 wallpaper effect
 * - Taskbar with Start menu, search, pinned apps
 * - Desktop icons for portfolio sections
 * - App windows that open when clicking icons
 */

// ==================== ICONS ====================

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-yellow-500">
    <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
  </svg>
);

const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <rect x="2" y="3" width="20" height="18" rx="2" fill="#0C0C0C" />
    <path d="M6 8l4 4-4 4" stroke="#00FF00" strokeWidth="2" fill="none" />
    <path d="M12 16h6" stroke="#00FF00" strokeWidth="2" />
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path fill="#007ACC" d="M17.5 0L24 6.5v11L17.5 24 0 12 17.5 0z" />
    <path fill="#1F9CF0" d="M17.5 0L24 6.5 17.5 13 7 3l10.5-3z" />
    <path fill="#0076C5" d="M17.5 11L24 17.5v-11L17.5 11z" />
    <path fill="#1F9CF0" d="M7 21l10.5-8L24 17.5v6L17.5 24 7 21z" />
  </svg>
);

const EdgeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <defs>
      <linearGradient id="edge-gradient-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0078D4" />
        <stop offset="100%" stopColor="#00BCF2" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#edge-gradient-main)" />
    <path d="M7 12c0-2.8 2.2-5 5-5 1.4 0 2.6.5 3.5 1.5l-2 2c-.4-.4-1-.7-1.5-.7-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c.8 0 1.5-.4 2-1h-2v-2h5v1c0 2.8-2.2 5-5 5s-5-2.2-5-5z" fill="white" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#0A66C2]">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

// ==================== DESKTOP ICONS ====================

const desktopIcons = [
  {
    id: 'about',
    label: 'About Me',
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center p-2">
        <UserIcon />
      </div>
    ),
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center p-2">
        <BriefcaseIcon />
      </div>
    ),
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center p-2">
        <BookIcon />
      </div>
    ),
  },
  {
    id: 'contact',
    label: 'Contact Me',
    icon: (
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center p-2">
        <MailIcon />
      </div>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <div className="w-10 h-10">
        <FolderIcon />
      </div>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: (
      <div className="w-10 h-10 bg-[#24292e] rounded-lg flex items-center justify-center p-2">
        <GithubIcon />
      </div>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: (
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
        <LinkedInIcon />
      </div>
    ),
  },
];

// ==================== PINNED APPS (Taskbar & Start Menu) ====================

const pinnedApps = [
  {
    id: 'edge',
    label: 'Edge',
    icon: (
      <div className="w-6 h-6">
        <EdgeIcon />
      </div>
    ),
  },
  {
    id: 'vscode',
    label: 'VS Code',
    icon: (
      <div className="w-6 h-6">
        <VSCodeIcon />
      </div>
    ),
  },
  {
    id: 'terminal',
    label: 'Terminal',
    icon: (
      <div className="w-6 h-6">
        <TerminalIcon />
      </div>
    ),
  },
  {
    id: 'about',
    label: 'About',
    icon: (
      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center p-1">
        <UserIcon />
      </div>
    ),
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: (
      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded flex items-center justify-center p-1">
        <BriefcaseIcon />
      </div>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center p-1">
        <MailIcon />
      </div>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: (
      <div className="w-6 h-6 bg-[#24292e] rounded flex items-center justify-center p-1">
        <GithubIcon />
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: (
      <div className="w-6 h-6">
        <SettingsIcon />
      </div>
    ),
  },
];

// ==================== MAIN PAGE ====================

export default function HomePage() {
  const router = useRouter();
  const [openWindow, setOpenWindow] = useState<string | null>(null);

  // Handle app/icon clicks
  const handleAppClick = (appId: string) => {
    switch (appId) {
      case 'about':
        router.push('/about');
        break;
      case 'experience':
      case 'projects':
        router.push('/experience');
        break;
      case 'blog':
        router.push('/blog');
        break;
      case 'contact':
        router.push('/contact');
        break;
      case 'github':
        window.open('https://github.com', '_blank');
        break;
      case 'linkedin':
        window.open('https://linkedin.com', '_blank');
        break;
      case 'vscode':
        // Open a welcome window
        setOpenWindow('welcome');
        break;
      case 'edge':
        // Open browser simulation or navigate somewhere
        setOpenWindow('browser');
        break;
      default:
        setOpenWindow(appId);
    }
  };

  return (
    <Win11Desktop
      desktopIcons={desktopIcons}
      pinnedApps={pinnedApps}
      onAppClick={handleAppClick}
    >
      {/* Welcome Window */}
      <AnimatePresence>
        {openWindow === 'welcome' && (
          <div className="fixed inset-0 flex items-center justify-center p-8 z-10">
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setOpenWindow(null)}
            />
            <AppWindow
              title="Welcome to my Portfolio"
              icon={<VSCodeIcon />}
              showTitleBar
              showCloseButton
              showMinimizeButton
              showMaximizeButton
              onClose={() => setOpenWindow(null)}
              size="lg"
              variant="solid"
              className="relative z-10"
            >
              <div className="p-6">
                <h1 className="text-2xl font-bold text-[var(--win11-text-primary)] mb-4">
                  Hello, I&apos;m Tikaram! 👋
                </h1>
                <p className="text-[var(--win11-text-secondary)] mb-4">
                  Welcome to my Windows 11-inspired portfolio. I&apos;m a Software Engineer
                  with 3+ years of experience in frontend development, currently
                  transitioning to Network Administration.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button
                    onClick={() => {
                      setOpenWindow(null);
                      router.push('/about');
                    }}
                    className="p-4 bg-[var(--win11-bg-surface-secondary)] rounded-lg hover:bg-[var(--win11-bg-card-hover)] transition-colors text-left"
                  >
                    <div className="w-8 h-8 mb-2 text-blue-500">
                      <UserIcon />
                    </div>
                    <h3 className="font-medium text-[var(--win11-text-primary)]">About Me</h3>
                    <p className="text-sm text-[var(--win11-text-secondary)]">Learn more about my journey</p>
                  </button>
                  <button
                    onClick={() => {
                      setOpenWindow(null);
                      router.push('/experience');
                    }}
                    className="p-4 bg-[var(--win11-bg-surface-secondary)] rounded-lg hover:bg-[var(--win11-bg-card-hover)] transition-colors text-left"
                  >
                    <div className="w-8 h-8 mb-2 text-purple-500">
                      <BriefcaseIcon />
                    </div>
                    <h3 className="font-medium text-[var(--win11-text-primary)]">Experience</h3>
                    <p className="text-sm text-[var(--win11-text-secondary)]">View my work history</p>
                  </button>
                  <button
                    onClick={() => {
                      setOpenWindow(null);
                      router.push('/blog');
                    }}
                    className="p-4 bg-[var(--win11-bg-surface-secondary)] rounded-lg hover:bg-[var(--win11-bg-card-hover)] transition-colors text-left"
                  >
                    <div className="w-8 h-8 mb-2 text-green-500">
                      <BookIcon />
                    </div>
                    <h3 className="font-medium text-[var(--win11-text-primary)]">Blog</h3>
                    <p className="text-sm text-[var(--win11-text-secondary)]">Read my articles</p>
                  </button>
                  <button
                    onClick={() => {
                      setOpenWindow(null);
                      router.push('/contact');
                    }}
                    className="p-4 bg-[var(--win11-bg-surface-secondary)] rounded-lg hover:bg-[var(--win11-bg-card-hover)] transition-colors text-left"
                  >
                    <div className="w-8 h-8 mb-2 text-orange-500">
                      <MailIcon />
                    </div>
                    <h3 className="font-medium text-[var(--win11-text-primary)]">Contact</h3>
                    <p className="text-sm text-[var(--win11-text-secondary)]">Get in touch with me</p>
                  </button>
                </div>
              </div>
            </AppWindow>
          </div>
        )}
      </AnimatePresence>

      {/* Browser Window Simulation */}
      <AnimatePresence>
        {openWindow === 'browser' && (
          <div className="fixed inset-0 flex items-center justify-center p-8 z-10">
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setOpenWindow(null)}
            />
            <AppWindow
              title="Microsoft Edge"
              icon={<EdgeIcon />}
              showTitleBar
              showCloseButton
              showMinimizeButton
              showMaximizeButton
              onClose={() => setOpenWindow(null)}
              size="lg"
              variant="solid"
              className="relative z-10"
            >
              <div className="bg-white rounded-b-lg">
                {/* Browser toolbar */}
                <div className="flex items-center gap-2 p-2 bg-gray-100 border-b">
                  <div className="flex gap-1">
                    <button className="p-1 hover:bg-gray-200 rounded">←</button>
                    <button className="p-1 hover:bg-gray-200 rounded">→</button>
                    <button className="p-1 hover:bg-gray-200 rounded">↻</button>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 border">
                    tikaram.ac
                  </div>
                </div>
                {/* Browser content */}
                <div className="p-8 text-center">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Welcome to my Portfolio</h2>
                  <p className="text-gray-600 mb-4">
                    Navigate using the desktop icons or click the buttons below
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => {
                        setOpenWindow(null);
                        router.push('/about');
                      }}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      About
                    </button>
                    <button
                      onClick={() => {
                        setOpenWindow(null);
                        router.push('/experience');
                      }}
                      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                      Experience
                    </button>
                    <button
                      onClick={() => {
                        setOpenWindow(null);
                        router.push('/contact');
                      }}
                      className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </AppWindow>
          </div>
        )}
      </AnimatePresence>

      {/* Terminal Window */}
      <AnimatePresence>
        {openWindow === 'terminal' && (
          <div className="fixed inset-0 flex items-center justify-center p-8 z-10">
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setOpenWindow(null)}
            />
            <AppWindow
              title="Windows Terminal"
              icon={<TerminalIcon />}
              showTitleBar
              showCloseButton
              showMinimizeButton
              showMaximizeButton
              onClose={() => setOpenWindow(null)}
              size="lg"
              variant="solid"
              className="relative z-10"
            >
              <div className="bg-[#0C0C0C] text-green-400 font-mono text-sm p-4 rounded-b-lg min-h-[300px]">
                <p className="text-white">Windows PowerShell</p>
                <p className="text-white mb-2">Copyright (C) Microsoft Corporation. All rights reserved.</p>
                <p className="mb-2">PS C:\Users\Tikaram&gt; <span className="text-yellow-400">whoami</span></p>
                <p className="mb-2">tikaram - Software Engineer | Network Admin Enthusiast</p>
                <p className="mb-2">PS C:\Users\Tikaram&gt; <span className="text-yellow-400">skills --list</span></p>
                <p className="text-cyan-400">Frontend: React, Next.js, TypeScript, React Native</p>
                <p className="text-cyan-400">Learning: Network Administration, CCNA, Linux</p>
                <p className="mt-2">PS C:\Users\Tikaram&gt; <span className="animate-pulse">_</span></p>
              </div>
            </AppWindow>
          </div>
        )}
      </AnimatePresence>
    </Win11Desktop>
  );
}
