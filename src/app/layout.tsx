import type { Metadata, Viewport } from 'next';
import { Nanum_Myeongjo, Outfit, DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-nanum',
  display: 'swap',
});

const outfit = Outfit({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
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
    default: 'Daily K-Wisdom | 매일 만나는 한국의 지혜 - Korean Proverbs & Wisdom',
    template: '%s | Daily K-Wisdom',
  },
  description: 'Discover Korean wisdom through daily proverbs, sayings, and classical quotes. Learn Korean culture and language with 8-language translations. Perfect for K-pop, K-drama fans exploring Korean heritage. 매일 새로운 한국 속담과 명언을 만나보세요.',
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
    'Korean philosophy',
    '한글 학습',
    '한국어 공부',
  ],
  authors: [{ name: 'K-Wisdom Team', url: 'https://k-wisdom.vercel.app' }],
  creator: 'K-Wisdom',
  publisher: 'K-Wisdom',
  applicationName: 'Daily K-Wisdom',
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
    description: 'Discover Korean wisdom through daily proverbs, sayings, and classical quotes. 8-language support for K-pop and K-drama fans. 매일 새로운 한국 속담과 명언을 만나보세요.',
    images: [
      {
        url: 'https://k-wisdom.vercel.app/icons/k-wisdom-icon.png',
        width: 1200,
        height: 1200,
        alt: 'Daily K-Wisdom - Korean Proverbs and Wisdom | 한국의 속담과 지혜',
        type: 'image/png',
      },
      {
        url: 'https://k-wisdom.vercel.app/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Daily K-Wisdom Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kwisdom',
    creator: '@kwisdom',
    title: 'Daily K-Wisdom | 매일 만나는 한국의 지혜',
    description: 'Discover Korean wisdom through daily proverbs. 8-language translations for K-pop and K-drama fans. 매일 새로운 한국 속담과 명언.',
    images: ['https://k-wisdom.vercel.app/icons/k-wisdom-icon.png'],
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
  verification: {
    google: 'mJkJTBBd_7dbU9mLZXwirvRk_8r34RENokY5OZPTz4A',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nanumMyeongjo.variable} ${outfit.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-192x192.png" />

        {/* Additional Meta Tags for SEO */}
        <meta name="application-name" content="Daily K-Wisdom" />
        <meta name="apple-mobile-web-app-title" content="K-Wisdom" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#FF006E" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Language and locale */}
        <meta httpEquiv="content-language" content="en,ko,ja,zh,es,fr,id,th,vi" />

        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://k-wisdom.vercel.app" />

        {/* Structured Data (JSON-LD) for SEO - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Daily K-Wisdom',
              alternateName: '한국의 지혜',
              applicationCategory: 'EducationalApplication',
              description: 'Discover Korean wisdom through daily proverbs, sayings, and classical quotes with 8-language translations. 매일 새로운 한국 속담과 명언을 만나보세요.',
              url: 'https://k-wisdom.vercel.app',
              image: 'https://k-wisdom.vercel.app/icons/k-wisdom-icon.png',
              operatingSystem: 'Any',
              browserRequirements: 'Requires JavaScript',
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
                'Audio pronunciation (TTS)',
                'Dark mode support',
                'PWA offline support',
                'Korean culture education',
                'Multilingual interface',
              ],
              screenshot: 'https://k-wisdom.vercel.app/icons/k-wisdom-icon.png',
              author: {
                '@type': 'Organization',
                name: 'K-Wisdom Team',
              },
              publisher: {
                '@type': 'Organization',
                name: 'K-Wisdom',
              },
              keywords: 'Korean proverbs, Korean wisdom, K-wisdom, Korean culture, language learning, K-pop, K-drama, 한국 속담, 한국 명언',
            }),
          }}
        />

        {/* Structured Data (JSON-LD) for SEO - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'K-Wisdom',
              url: 'https://k-wisdom.vercel.app',
              logo: 'https://k-wisdom.vercel.app/icons/k-wisdom-icon.png',
              description: 'Providing daily Korean wisdom through proverbs and sayings in 8 languages',
              sameAs: [
                'https://twitter.com/kwisdom',
              ],
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
