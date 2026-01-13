'use client';

import Header from './Header';
import Footer from './Footer';

/**
 * PageLayout Component
 *
 * A layout wrapper for pages that use the traditional header/footer navigation.
 * Used by all pages except the home page (which uses Win11Layout).
 *
 * This provides:
 * - Sticky header with navigation
 * - Footer with links
 * - Flex layout to push footer to bottom
 */

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
