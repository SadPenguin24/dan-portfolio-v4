import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Dan Hendrix Villadolid | Full-Stack Developer",
  description:
    "Full-Stack Developer with 4+ years of experience building scalable web applications with React, Next.js, Node.js & Laravel. Available for freelance projects.",
  openGraph: {
    title: "Dan Hendrix Villadolid | Full-Stack Developer",
    description:
      "Full-Stack Developer with 4+ years of experience building scalable web applications. Available for freelance projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${playfair.variable} ${lato.variable}`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
