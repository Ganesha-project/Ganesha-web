import "./globals.css";
import { Quicksand } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingButton";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import ClientProvider from '@/components/ClientProvider';
import Head from 'next/head';

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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8227813889502050"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={`${quicksand.className}`}>
        <ThemeProvider enableSystem={true} attribute='class'>
          <ClientProvider>
            <Navbar />
            <FloatingButton />
            {children}
            <Analytics />
            <Footer />
          </ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
