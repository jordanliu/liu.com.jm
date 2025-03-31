import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jordan Liu",
  description: "just building stuff",
  openGraph: {
    title: "Jordan Liu",
    description: "just building stuff",
    images: ["/og.png"],
    type: "website",
    siteName: "Jordan Liu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Liu",
    description: "just building stuff",
    images: ["/og.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
