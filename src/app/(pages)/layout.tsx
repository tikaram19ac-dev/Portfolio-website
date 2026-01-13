import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Pages Layout
 *
 * This layout is used for all pages except the home page.
 * It includes the traditional Header and Footer navigation.
 *
 * Pages using this layout:
 * - /about
 * - /experience
 * - /blog
 * - /contact
 */

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--win11-bg-base)]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
