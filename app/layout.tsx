import type { Metadata } from "next";
import { Chivo, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const satoshi = localFont({
  src: "../public/assets/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JARVIS - Architectural Streetwear",
  description: "Redefining modern silhouettes through disciplined design and premium Egyptian textiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Material Symbols Outlined */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body
        className={`${chivo.variable} ${satoshi.variable} ${jetbrains.variable} bg-surface text-on-surface antialiased`}
      >
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main id="MainContent" className="focus-none">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
