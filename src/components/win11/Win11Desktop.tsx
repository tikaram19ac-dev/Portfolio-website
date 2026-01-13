'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Windows 11 Desktop Component
 *
 * An authentic Windows 11 desktop experience featuring:
 * - Desktop background with customizable wallpaper
 * - Desktop icons
 * - Floating taskbar with Start, Search, pinned apps, and system tray
 * - Start Menu with search, pinned apps, and recommended section
 */

// ==================== ICONS ====================

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M3 12V6.5C3 5.67 3.67 5 4.5 5H11v7H3zm0 1h8v7H4.5C3.67 20 3 19.33 3 18.5V13zm9-8h7.5C20.33 5 21 5.67 21 6.5V12h-9V5zm0 8h9v5.5c0 .83-.67 1.5-1.5 1.5H12v-7z" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const TaskViewIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const WidgetsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="3" y="3" width="8" height="10" rx="2" />
    <rect x="13" y="3" width="8" height="6" rx="2" />
    <rect x="13" y="11" width="8" height="10" rx="2" />
    <rect x="3" y="15" width="8" height="6" rx="2" />
  </svg>
);

const FileExplorerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
    <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
  </svg>
);

const EdgeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <defs>
      <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0078D4" />
        <stop offset="100%" stopColor="#00BCF2" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#edge-gradient)" />
    <path d="M7 12c0-2.8 2.2-5 5-5 1.4 0 2.6.5 3.5 1.5l-2 2c-.4-.4-1-.7-1.5-.7-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c.8 0 1.5-.4 2-1h-2v-2h5v1c0 2.8-2.2 5-5 5s-5-2.2-5-5z" fill="white" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <rect x="2" y="3" width="20" height="18" rx="2" fill="#0C0C0C" />
    <path d="M6 8l4 4-4 4" stroke="#00FF00" strokeWidth="2" fill="none" />
    <path d="M12 16h6" stroke="#00FF00" strokeWidth="2" />
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#007ACC" d="M17.5 0L24 6.5v11L17.5 24 0 12 17.5 0z" />
    <path fill="#1F9CF0" d="M17.5 0L24 6.5 17.5 13 7 3l10.5-3z" />
    <path fill="#0076C5" d="M17.5 11L24 17.5v-11L17.5 11z" />
    <path fill="#1F9CF0" d="M7 21l10.5-8L24 17.5v6L17.5 24 7 21z" />
  </svg>
);

const StoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="4" fill="#0078D4" />
    <path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" fill="white" opacity="0.9" />
  </svg>
);

const PowerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M12 3v9" />
    <path d="M18.4 6.6a9 9 0 1 1-12.8 0" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const WifiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4.12-4.12l1.41-1.41C15.68 10.62 13.93 10 12 10s-3.68.62-5.53 2.47l1.41 1.41C9.42 12.38 10.64 12 12 12s2.58.38 4.12 1.88zM3.53 8.53l1.41 1.41C7.29 7.59 9.55 6.5 12 6.5s4.71 1.09 7.06 3.44l1.41-1.41C17.7 5.79 15.01 4.5 12 4.5S6.3 5.79 3.53 8.53z" />
  </svg>
);

const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

const BatteryIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17 4h-3V2h-4v2H7c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 17H7V6h10v15z" />
    <path d="M8 8h8v10H8z" opacity="0.8" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

// ==================== TYPES ====================

interface DesktopIcon {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface PinnedApp {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface Win11DesktopProps {
  wallpaper?: string;
  desktopIcons?: DesktopIcon[];
  pinnedApps?: PinnedApp[];
  onAppClick?: (appId: string) => void;
  children?: React.ReactNode;
}

// ==================== MAIN COMPONENT ====================

export function Win11Desktop({
  wallpaper,
  desktopIcons = [],
  pinnedApps = [],
  onAppClick,
  children,
}: Win11DesktopProps) {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Format time and date
  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const dateString = currentTime.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Close menus when clicking outside
  const handleDesktopClick = () => {
    setIsStartMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0078D4]">
      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: wallpaper
            ? `url(${wallpaper})`
            : `linear-gradient(135deg, #0078D4 0%, #00BCF2 50%, #0078D4 100%)`,
        }}
      />

      {/* Bloom effect overlay (Windows 11 style) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/30 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px]" />
      </div>

      {/* Desktop Area */}
      <div
        className="relative h-[calc(100vh-48px)] p-4 overflow-auto"
        onClick={handleDesktopClick}
      >
        {/* Home Widgets at Top */}
        <HomeWidgets currentTime={currentTime} />

        {/* Desktop Icons */}
        <div className="grid gap-2 mt-4" style={{ gridTemplateColumns: 'repeat(auto-fill, 80px)' }}>
          {desktopIcons.map((icon) => (
            <DesktopIconButton
              key={icon.id}
              icon={icon.icon}
              label={icon.label}
              onClick={() => {
                icon.onClick?.();
                onAppClick?.(icon.id);
              }}
            />
          ))}
        </div>

        {/* App Windows / Content */}
        <div className="mt-4">{children}</div>
      </div>

      {/* Taskbar */}
      <Taskbar
        pinnedApps={pinnedApps}
        isStartMenuOpen={isStartMenuOpen}
        onStartClick={() => {
          setIsStartMenuOpen(!isStartMenuOpen);
          setIsSearchOpen(false);
        }}
        onSearchClick={() => {
          setIsSearchOpen(!isSearchOpen);
          setIsStartMenuOpen(false);
        }}
        onAppClick={(id) => {
          onAppClick?.(id);
          setIsStartMenuOpen(false);
        }}
        timeString={timeString}
        dateString={dateString}
      />

      {/* Start Menu */}
      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        pinnedApps={pinnedApps}
        onAppClick={(id) => {
          onAppClick?.(id);
          setIsStartMenuOpen(false);
        }}
      />

      {/* Search Panel */}
      <SearchPanel
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

// ==================== DESKTOP ICON ====================

function DesktopIconButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onDoubleClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="
        flex flex-col items-center justify-center gap-1
        w-20 h-20 p-2
        rounded-md
        text-white
        hover:bg-white/10
        active:bg-white/20
        transition-colors
        group
        select-none
      "
    >
      <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      <span className="text-xs text-center leading-tight drop-shadow-md line-clamp-2">
        {label}
      </span>
    </button>
  );
}

// ==================== HOME WIDGETS ====================

function HomeWidgets({ currentTime }: { currentTime: Date }) {
  const greeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      {/* Welcome Banner */}
      <div className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-white/10 mb-4">
        <h1 className="text-3xl font-light text-white mb-1">{greeting()}, Tikaram</h1>
        <p className="text-white/70 text-sm">
          {currentTime.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>

      {/* Widget Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Quick Info Widget */}
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="text-white font-medium">About Me</span>
          </div>
          <p className="text-white/70 text-sm">
            Software Engineer with 3+ years of frontend experience. Transitioning to Network Administration.
          </p>
        </div>

        {/* Skills Widget */}
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <span className="text-white font-medium">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {['React', 'Next.js', 'TypeScript', 'React Native'].map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded text-white/80">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Status Widget */}
        <div className="bg-black/30 backdrop-blur-xl rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <span className="text-white font-medium">Status</span>
          </div>
          <p className="text-green-400 text-sm font-medium">Available for opportunities</p>
          <p className="text-white/50 text-xs mt-1">Open to frontend & network admin roles</p>
        </div>
      </div>

      {/* Instruction */}
      <p className="text-white/40 text-xs mt-4 text-center">
        Double-click on desktop icons to open
      </p>
    </motion.div>
  );
}

// ==================== TASKBAR ====================

function Taskbar({
  pinnedApps,
  isStartMenuOpen,
  onStartClick,
  onSearchClick,
  onAppClick,
  timeString,
  dateString,
}: {
  pinnedApps: PinnedApp[];
  isStartMenuOpen: boolean;
  onStartClick: () => void;
  onSearchClick: () => void;
  onAppClick: (id: string) => void;
  timeString: string;
  dateString: string;
}) {
  return (
    <div
      className="
        absolute bottom-0 left-0 right-0
        h-12
        bg-[#1a1a1a]/80
        backdrop-blur-2xl
        border-t border-white/5
        flex items-center justify-center
        px-2
      "
    >
      {/* Center section - Start, Search, Task View, Widgets, Apps */}
      <div className="flex items-center gap-0.5">
        {/* Start Button */}
        <TaskbarButton
          onClick={onStartClick}
          isActive={isStartMenuOpen}
          tooltip="Start"
        >
          <WindowsIcon />
        </TaskbarButton>

        {/* Search */}
        <TaskbarButton onClick={onSearchClick} tooltip="Search">
          <SearchIcon />
        </TaskbarButton>

        {/* Task View */}
        <TaskbarButton tooltip="Task View">
          <TaskViewIcon />
        </TaskbarButton>

        {/* Widgets */}
        <TaskbarButton tooltip="Widgets">
          <WidgetsIcon />
        </TaskbarButton>

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-2" />

        {/* Pinned Apps */}
        {pinnedApps.map((app) => (
          <TaskbarButton
            key={app.id}
            onClick={() => onAppClick(app.id)}
            tooltip={app.label}
          >
            {app.icon}
          </TaskbarButton>
        ))}
      </div>

      {/* Right section - System Tray */}
      <div className="absolute right-2 flex items-center gap-1">
        {/* Hidden icons */}
        <button className="p-1.5 hover:bg-white/10 rounded">
          <ChevronUpIcon />
        </button>

        {/* System icons */}
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded text-white/90">
          <WifiIcon />
          <VolumeIcon />
          <BatteryIcon />
        </div>

        {/* Time and Date */}
        <button className="px-3 py-1 hover:bg-white/10 rounded text-center">
          <div className="text-xs text-white/90">{timeString}</div>
          <div className="text-xs text-white/70">{dateString}</div>
        </button>
      </div>
    </div>
  );
}

function TaskbarButton({
  children,
  onClick,
  isActive,
  tooltip,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  tooltip?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      title={tooltip}
      className={`
        relative
        w-10 h-10
        flex items-center justify-center
        rounded-md
        text-white/90
        hover:bg-white/10
        active:bg-white/15
        transition-colors
        ${isActive ? 'bg-white/15' : ''}
      `}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="taskbar-indicator"
          className="absolute bottom-0.5 w-4 h-0.5 bg-[#60CDFF] rounded-full"
        />
      )}
    </motion.button>
  );
}

// ==================== START MENU ====================

function StartMenu({
  isOpen,
  onClose,
  pinnedApps,
  onAppClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  pinnedApps: PinnedApp[];
  onAppClick: (id: string) => void;
}) {
  const recommendedItems = [
    { id: 'recent-1', label: 'Project Files', time: 'Recently opened' },
    { id: 'recent-2', label: 'portfolio-design.fig', time: '2 hours ago' },
    { id: 'recent-3', label: 'README.md', time: 'Yesterday' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="
            absolute bottom-14 left-1/2 -translate-x-1/2
            w-[600px]
            bg-[#202020]/95
            backdrop-blur-2xl
            rounded-lg
            border border-white/10
            shadow-2xl
            overflow-hidden
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Bar */}
          <div className="p-4 pb-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search"
                className="
                  w-full
                  pl-10 pr-4 py-2
                  bg-[#2d2d2d]
                  border border-white/10
                  rounded-full
                  text-sm text-white
                  placeholder-white/50
                  focus:outline-none focus:border-[#60CDFF]
                "
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* Pinned Section */}
          <div className="px-4 py-2">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white">Pinned</h3>
              <button className="text-xs text-white/60 hover:text-white px-2 py-1 hover:bg-white/10 rounded">
                All apps &rarr;
              </button>
            </div>
            <div className="grid grid-cols-6 gap-1">
              {pinnedApps.slice(0, 12).map((app) => (
                <StartMenuItem
                  key={app.id}
                  icon={app.icon}
                  label={app.label}
                  onClick={() => onAppClick(app.id)}
                />
              ))}
            </div>
          </div>

          {/* Recommended Section */}
          <div className="px-4 py-2 border-t border-white/10 mt-2">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white">Recommended</h3>
              <button className="text-xs text-white/60 hover:text-white px-2 py-1 hover:bg-white/10 rounded">
                More &rarr;
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {recommendedItems.map((item) => (
                <button
                  key={item.id}
                  className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-md text-left"
                >
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <FileExplorerIcon />
                  </div>
                  <div>
                    <div className="text-sm text-white">{item.label}</div>
                    <div className="text-xs text-white/50">{item.time}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-t border-white/10">
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-md">
              <div className="w-8 h-8 bg-[#0078D4] rounded-full flex items-center justify-center">
                <UserIcon />
              </div>
              <span className="text-sm text-white">Tikaram</span>
            </button>
            <button className="p-2 hover:bg-white/10 rounded-md text-white/80">
              <PowerIcon />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StartMenuItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-col items-center justify-center gap-1
        p-3
        rounded-md
        hover:bg-white/10
        active:bg-white/15
        transition-colors
      "
    >
      <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
      <span className="text-xs text-white text-center line-clamp-1">{label}</span>
    </button>
  );
}

// ==================== SEARCH PANEL ====================

function SearchPanel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="
            absolute bottom-14 left-1/2 -translate-x-1/2
            w-[600px]
            bg-[#202020]/95
            backdrop-blur-2xl
            rounded-lg
            border border-white/10
            shadow-2xl
            overflow-hidden
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Type to search"
                autoFocus
                className="
                  w-full
                  pl-10 pr-4 py-3
                  bg-[#2d2d2d]
                  border border-white/10
                  rounded-lg
                  text-white
                  placeholder-white/50
                  focus:outline-none focus:border-[#60CDFF]
                "
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* Quick Searches */}
          <div className="px-4 pb-4">
            <h3 className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">
              Top apps
            </h3>
            <div className="flex gap-2">
              {[
                { icon: <EdgeIcon />, label: 'Edge' },
                { icon: <VSCodeIcon />, label: 'VS Code' },
                { icon: <FileExplorerIcon />, label: 'Files' },
                { icon: <SettingsIcon />, label: 'Settings' },
              ].map((app) => (
                <button
                  key={app.label}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-md"
                >
                  <div className="w-5 h-5">{app.icon}</div>
                  <span className="text-sm text-white">{app.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Win11Desktop;
