import type { Metadata } from 'next';
import { JetBrains_Mono, Manrope, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Daniel Shaby | Full Stack Developer',
    template: '%s | Daniel Shaby'
  },
  description:
    'Portfolio of Daniel Shaby, a full stack developer focused on high-performance product engineering and polished user experiences.',
  openGraph: {
    title: 'Daniel Shaby | Full Stack Developer',
    description:
      'Full stack portfolio featuring product-focused web projects, engineering experience, and practical system design.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Shaby | Full Stack Developer',
    description:
      'Full stack portfolio featuring product-focused web projects, engineering experience, and practical system design.'
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icons/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico']
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
