import type { Metadata } from 'next'
import './globals.css'

// Fonts are loaded via CSS @import in globals.css for static hosting flexibility.
// If a future host has reliable Google font fetches at build time, you can switch back to
// next/font/google: Syne, DM_Sans, JetBrains_Mono

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Abdulaziz Nuri — Full-Stack & Automation Developer',
  description:
    'Software Engineering student at HiLCoE building full-stack web apps, automation systems, Telegram bots, and business tools. Based in Addis Ababa, Ethiopia.',
  keywords: [
    'Full-Stack Developer',
    'Automation Developer',
    'Next.js Developer',
    'Python Automation',
    'Telegram Bot',
    'Addis Ababa Developer',
    'Ethiopian Software Engineer',
    'Playwright Automation',
    'Freelance Developer',
  ],
  authors: [{ name: 'Abdulaziz Nuri' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Abdulaziz Nuri — Full-Stack & Automation Developer',
    description: 'Building practical software for real-world workflows.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdulaziz Nuri — Full-Stack & Automation Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdulaziz Nuri — Full-Stack & Automation Developer',
    description: 'Building practical software for real-world workflows.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  )
}
