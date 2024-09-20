import "./globals.css";
import { Quicksand } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingButton";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import ClientProvider from '@/components/ClientProvider';
import Head from 'next/head';
import { NavigationMobile } from "@/components/NavigationMobile";
import Script from "next/script";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700']
});

export const metadata = {
  title: {
    default: "GaneshaConsulting",
    template: '%s | GaneshaConsulting'
  },
  description: "Legalkan Bisnis Mu Bersama Kami!",
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8227813889502050"
          crossOrigin="anonymous"
        ></Script>
        <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-591QLGLD19" />
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-591QLGLD19');
          `}
        </Script>
      </Head>
      <body className={`${quicksand.className}`}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <ClientProvider>
            <Navbar />
            <FloatingButton />
            <NavigationMobile />
            {children}
            <Analytics />
            <Footer />
          </ClientProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
