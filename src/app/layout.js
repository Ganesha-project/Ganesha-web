import "./globals.css";
import { Quicksand } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingButton";
import { Analytics } from "@vercel/analytics/react"

const quicksand = Quicksand(
  {
    subsets: ["latin"],
    weight: ['300', '400', '500', '700']
  }
);

export const metadata = {
  title: {
    default: "GaneshaConsulting",
    template: '%s | GaneshaConsulting'
  },
  description: "Legalkan Bisnis Mu Bersama Kami!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
      </head>
      <body className={quicksand.className}>
        <Navbar />
        <FloatingButton />
        {children}
        <Analytics />
        <Footer />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js" async />
      </body>
    </html>
  );
}
