import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "../components/MainLayout";
import { Suspense } from 'react';

// Initialize Geist fonts
const sans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://nourish.com.bd'),
  title: {
    template: '%s | Nourish Bangladesh',
    default: 'Nourish Bangladesh - Leading Poultry and Aquaculture Company',
  },
  description: 'Leading poultry and aquaculture company in Bangladesh providing high-quality poultry products, including Day Old Chicks (DOC), broiler, layer, and fish feed.',
  keywords: ['poultry', 'aquaculture', 'Bangladesh', 'DOC', 'broiler', 'layer', 'fish feed'],
  authors: [{ name: 'Nourish Bangladesh' }],
  creator: 'Nourish Bangladesh',
  publisher: 'Nourish Bangladesh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
  themeColor: '#F97316',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
<body className={`${sans.variable} ${mono.variable} font-sans antialiased custom-scrollbar`}>
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <MainLayout>{children}</MainLayout>
        </Suspense>
      </body>
    </html>
  );
}
