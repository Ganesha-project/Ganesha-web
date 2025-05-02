import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingButton";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { NavigationMobile } from "@/components/NavigationMobile";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from 'next/head';
import Script from "next/script";
import { Popup } from "@/components/Popup";
import { PopupContent } from "@/components/PopupContent";

const quicksand = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

export const metadata = {
  title: {
    default: "GaneshaConsulting",
    template: '%s | GaneshaConsulting'
  },
  description: "Legalkan Bisnis Mu Bersama Kami!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
      </Head>
      <body className={`${quicksand.className}`}>
        {/* Google Tag Manager Script */}
        <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-591QLGLD19`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-591QLGLD19', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Google Ads Script */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8227813889502050"
          crossOrigin="anonymous"
        />
        <ThemeProvider enableSystem={true} attribute="class">
            <Navbar>
              {children}
              <Footer />
            </Navbar>
          <FloatingButton />
          <NavigationMobile />
          {/* <Popup
            content={<PopupContent />}
          /> */}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}