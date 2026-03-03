
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1f2e',
};

export const metadata: Metadata = {
  title: 'CrystaSkill — Professional Training & Skill Development',
  description: 'CrystaSkill offers industry-led training in CSE/IT, ECE/EC & Management. 50,000+ students trained with hands-on projects, expert mentorship and placement support.',
  keywords: ['CrystaSkill', 'training', 'professional education', 'CSE IT', 'ECE EC', 'management', 'placement', 'internship'],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="dns-prefetch" href="//localhost:5000" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
