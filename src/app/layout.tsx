import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'macro_api - A Unified API Library for TypeScript/JavaScript',
  description: 'A comprehensive TypeScript/JavaScript wrapper for popular APIs. Simplify your integrations with our unified interface.',
  keywords: 'API, TypeScript, JavaScript, OpenAI, Spotify, Stripe, PayPal, Notion, Football API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}