import type { Metadata } from "next";
import { Montserrat, Fraunces, Nunito, Kumbh_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seeking Angels Foundation - Supporting Veterans & First Responders",
  description: "We are dedicated to helping veterans, first responders, retirees, and their families receive the resources they need for a blessed life. A life full of abundance, health and happiness.",
  keywords: ["veterans", "first responders", "PTSD", "mental health", "donations", "charity", "nonprofit"],
  authors: [{ name: "Seeking Angels Foundation" }],
  openGraph: {
    title: "Seeking Angels Foundation - Supporting Veterans & First Responders",
    description: "We are dedicated to helping veterans, first responders, retirees, and their families receive the resources they need for a blessed life.",
    type: "website",
    siteName: "Seeking Angels Foundation",
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
        className={`${montserrat.variable} ${fraunces.variable} ${nunito.variable} ${kumbhSans.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
