import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import * as motion from "framer-motion/client";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "F2H | Al Nafaath Optical Company",
  description: "Leading the Optical Era in Iraq. Fiber Optic, Smart Systems, and IT Infrastructure solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={plusJakartaSans.variable}>
      <body className="antialiased selection:bg-brand-red selection:text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
        
        {/* Floating CTA Mobile */}
        <div className="fixed bottom-6 right-6 z-40 md:hidden">
           <button className="w-16 h-16 rounded-full bg-brand-red text-white shadow-2xl flex items-center justify-center">
             <MessageCircle size={32} />
           </button>
        </div>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
