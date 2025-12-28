import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
