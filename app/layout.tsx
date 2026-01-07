import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import '../styles/globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Agrotrust | Empowering Farmers through Trust',
  description: 'A platform to build creditworthiness through transparent farm activity logging.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        <main className="min-h-screen pt-24 px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
