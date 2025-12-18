import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingButton";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import { NavigationMobile } from "@/components/NavigationMobile";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import Script from "next/script";
import { MetaPixelProvider } from "@/lib/metaPixelProvider";
import { Suspense } from 'react'; // ✅ Tambahkan ini
import PopupAds from "@/components/PopupAds";
import { ChristmasSeason } from "@/components/SeasonalComponents/ChristmasSeason";

const quicksand = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "GaneshaConsulting",
    template: "%s | GaneshaConsulting",
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
        {/* META PIXEL BASE CODE */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2630106004010805&ev=PageView&noscript=1"
            alt="meta-pixel"
          />
        </noscript>

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
          <ChristmasSeason />
          <Navbar>
            {children}
            <Footer />
          </Navbar>
          <FloatingButton />
          <PopupAds />
          <NavigationMobile />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />

        {/* ✅ WRAP DENGAN SUSPENSE */}
        <Suspense fallback={null}>
          <MetaPixelProvider />
        </Suspense>
      </body>
    </html>
  );
}