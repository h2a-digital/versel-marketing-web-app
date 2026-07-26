import type { Metadata } from 'next';
import { site } from '@/content/site';
import { Toast, AnalyticsHost } from '@/components';
import { env } from '../../env';

import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: `${site.app.name} - ${site.app.tagline}`,
    template: `%s | ${site.app.name}`,
  },
  description:
    'Temporarily block distracting apps until your daily prayer is complete, read a Bible verse, and build a consistent habit of choosing God first.',
  keywords: [
    'prayer app',
    'app blocker for prayer',
    'Christian habit builder',
    'daily prayer reminder',
    'Bible verse app',
    'prayer streaks',
    'guided prayer',
    'self-led prayer',
    'Christian app blocker',
    'Versel',
  ],
  authors: [{ name: site.company.name, url: 'https://h2adigital.com' }],
  creator: site.company.name,
  applicationName: site.app.name,
  category: 'Lifestyle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.SITE_URL,
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Versel helps Christians temporarily block distracting apps until prayer is complete, with daily verses, streaks, and gentle spiritual encouragement.',
    siteName: site.app.name,
    images: [
      {
        url: '/icon0.svg',
        width: 512,
        height: 512,
        alt: `${site.app.name} app icon`,
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@versel',
    creator: '@hakim98bologna',
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Choose the apps that distract you, pray to unlock them, and grow a stronger daily habit with Versel.',
    images: ['/icon0.svg'],
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
  verification: {
    google: 'y9xUcPL8jCrDt5sfUnOKnqs3J-4APi3Iw7f4JQbCJGE',
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', url: '/icon0.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', url: '/icon0.svg', sizes: '180x180' },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <AnalyticsHost />
        <Toast />
      </body>
    </html>
  );
}
