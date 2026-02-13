import type { Metadata, Viewport } from 'next';
import { Nanum_Myeongjo, Lora } from 'next/font/google';
import './globals.css';

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-nanum',
  display: 'swap',
});

const lora = Lora({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#C62828',
};

export const metadata: Metadata = {
  title: 'Daily K-Wisdom | 매일 만나는 한국의 지혜',
  description: 'Discover Korean wisdom through daily proverbs, sayings, and classical quotes. Learn Korean culture and language with multilingual translations.',
  keywords: ['Korean proverbs', 'K-wisdom', 'Korean culture', 'Korean language', 'daily quotes', '한국 속담', '명언'],
  authors: [{ name: 'K-Wisdom Team' }],
  creator: 'K-Wisdom',
  publisher: 'K-Wisdom',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Daily K-Wisdom',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ko_KR', 'ja_JP', 'zh_CN'],
    url: 'https://k-wisdom.vercel.app',
    siteName: 'Daily K-Wisdom',
    title: 'Daily K-Wisdom | 매일 만나는 한국의 지혜',
    description: 'Discover Korean wisdom through daily proverbs, sayings, and classical quotes.',
    images: [
      {
        url: '/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Daily K-Wisdom Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Daily K-Wisdom | 매일 만나는 한국의 지혜',
    description: 'Discover Korean wisdom through daily proverbs, sayings, and classical quotes.',
    images: ['/icons/icon-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nanumMyeongjo.variable} ${lora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
