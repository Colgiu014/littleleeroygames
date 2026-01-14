import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Leeroy Games - Indie Game Studio from Romania",
  description: "Little Leeroy Games is an indie game studio creating fun and engaging mobile games. Check out our latest game BBBlocks and more!",
  keywords: ["indie games", "mobile games", "game studio", "Romania", "BBBlocks", "puzzle games"],
  authors: [{ name: "Little Leeroy Games" }],
  openGraph: {
    title: "Little Leeroy Games - Indie Game Studio",
    description: "Creating fun and engaging mobile games from Romania",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
