import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Care Physio - Your Trusted Partner in Holistic Healing',
  description: 'Discover personalized physiotherapy services designed to relieve pain, enhance mobility, and improve overall well-being.',
  icons: {
    icon: '/public/favicons.ico', // /public path
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  style={{scrollBehavior:'smooth'}}>
      <Script src='https://kit.fontawesome.com/66eaecb2cd.js' />
      {/* <Script src='./node_modules/flowbite/dist/flowbite.min.js' /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
