import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import ResumeButton from '@/components/ResumeButton';
import SocialLinks from '@/components/SocialLinks';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <ResumeButton />
        <SocialLinks />
      </body>
    </html>
  );
}
