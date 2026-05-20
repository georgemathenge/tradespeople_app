// app/layout.tsx
import type { Metadata } from 'next';
import { Syne, DM_Sans, Inter } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'DerAuftragsRetter – Kein Anruf. Kein Auftrag.',
  description: 'Handwerker Telefonassistent',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmSans.variable} ${syne.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
