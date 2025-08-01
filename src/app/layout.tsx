import type { Metadata } from 'next';

import localFont from 'next/font/local';
import '@/styles/globals.css';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import OverlayModal from '@/components/shared/overlayModal';
import 'keen-slider/keen-slider.min.css';
import '@/styles/globals.css';

const iransans = localFont({
  variable: '--font-iransans',
  preload: true,
  adjustFontFallback: false,
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/IRANSansWeb/IRANSansWeb(FaNum)_UltraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IRANSansWeb/IRANSansWeb(FaNum).ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});
export const metadata: Metadata = {
  title: 'My Project',
  description: 'Built with Next.js + Tailwind + Shadcn',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fa' dir='rtl' className={` ${iransans.variable} `}>
      <body>
        <OverlayModal />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
