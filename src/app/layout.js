import "./globals.css";
import { Quicksand } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingButton";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import ClientProvider from '@/components/ClientProvider';

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
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
      </head>
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
