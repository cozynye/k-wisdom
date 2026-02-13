import type { Metadata, Viewport } from 'next';
import { Nanum_Myeongjo, Lora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

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
  metadataBase: new URL('https://k-wisdom.vercel.app'),
  title: {
    default: 'Daily K-Wisdom | 매일 만나는 한국의 지혜',
    template: '%s | Daily K-Wisdom',
  },
  description: 'Discover Korean wisdom through daily proverbs, sayings, and classical quotes. Learn Korean culture and language with 8-language translations. Perfect for K-pop, K-drama fans exploring Korean heritage.',
  keywords: [
    'Korean proverbs',
    'Korean wisdom',
    'K-wisdom',
    'Korean culture',
    'Korean language learning',
    'daily Korean quotes',
    'Korean sayings',
    'Korean heritage',
    '한국 속담',
    '한국 명언',
    '한국 문화',
    'Korean traditional wisdom',
    'K-pop culture',
    'K-drama fans',
    'learn Korean',
    'multilingual proverbs',
    'Asian wisdom',
    'daily motivation',
  ],
  authors: [{ name: 'K-Wisdom Team', url: 'https://k-wisdom.vercel.app' }],
  creator: 'K-Wisdom',
  publisher: 'K-Wisdom',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Daily K-Wisdom',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ko_KR', 'ja_JP', 'zh_CN', 'es_ES', 'fr_FR', 'id_ID', 'th_TH', 'vi_VN'],
    url: 'https://k-wisdom.vercel.app',
    siteName: 'Daily K-Wisdom',
    title: 'Daily K-Wisdom | 매일 만나는 한국의 지혜',
    description: 'Discover Korean wisdom through daily proverbs, sayings, and classical quotes. 8-language support for K-pop and K-drama fans.',
    images: [
      {
        url: '/icons/k-wisdom-icon.png',
        width: 1200,
        height: 1200,
        alt: 'Daily K-Wisdom - Korean Proverbs and Wisdom',
        type: 'image/png',
      },
      {
        url: '/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Daily K-Wisdom Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily K-Wisdom | 매일 만나는 한국의 지혜',
    description: 'Discover Korean wisdom through daily proverbs. 8-language translations for K-pop and K-drama fans.',
    images: ['/icons/k-wisdom-icon.png'],
    creator: '@kwisdom',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://k-wisdom.vercel.app',
    languages: {
      'en-US': 'https://k-wisdom.vercel.app',
      'ko-KR': 'https://k-wisdom.vercel.app',
      'ja-JP': 'https://k-wisdom.vercel.app',
      'zh-CN': 'https://k-wisdom.vercel.app',
      'es-ES': 'https://k-wisdom.vercel.app',
      'fr-FR': 'https://k-wisdom.vercel.app',
      'id-ID': 'https://k-wisdom.vercel.app',
      'th-TH': 'https://k-wisdom.vercel.app',
      'vi-VN': 'https://k-wisdom.vercel.app',
    },
  },
  category: 'Education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nanumMyeongjo.variable} ${lora.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Daily K-Wisdom',
              applicationCategory: 'EducationalApplication',
              description: 'Discover Korean wisdom through daily proverbs, sayings, and classical quotes with 8-language translations.',
              url: 'https://k-wisdom.vercel.app',
              image: 'https://k-wisdom.vercel.app/icons/k-wisdom-icon.png',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              applicationSubCategory: 'Language Learning',
              inLanguage: ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'id', 'th', 'vi'],
              featureList: [
                'Daily Korean proverbs',
                '8-language translations',
                'Audio pronunciation',
                'Dark mode support',
                'PWA offline support',
              ],
              screenshot: 'https://k-wisdom.vercel.app/icons/k-wisdom-icon.png',
              author: {
                '@type': 'Organization',
                name: 'K-Wisdom Team',
              },
              keywords: 'Korean proverbs, Korean wisdom, K-wisdom, Korean culture, language learning, K-pop, K-drama',
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
