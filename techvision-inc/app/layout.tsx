import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TechVision Inc.",
  description: "Minimalist tech company website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <PageTransition>
          <main className="flex-1">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
