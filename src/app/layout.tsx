import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://carephysio.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/opengraph-image.jpg',
  },
  title: 'Providing Exceptional Physiotherapy Care for All bodies',
  description: 'Discover personalized physiotherapy services designed to relieve pain, enhance mobility, and improve overall well-being.',
  icons: {
    icon: './favicon.ico', // /public path
  },
  keywords: "physiotherapy, physical therapy, rehabilitation, pain relief, sports injury, orthopedic care, musculoskeletal health, wellness, therapeutic exercise, injury prevention, mobility improvement, holistic healing, experienced physiotherapists, personalized care, health and fitness, Care Physio Mumbai, Care Physio Bhayander, Care Physio India,Care Physio Mira Road, Best in Thane, Best in Mira Road, Best in Dahisar ",
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
