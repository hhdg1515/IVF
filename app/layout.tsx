import type { Metadata } from "next";
import { Source_Sans_3, Vidaloka, Satisfy } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/context"
import LayoutContent from "@/components/LayoutContent";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const vidaloka = Vidaloka({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vidaloka",
  display: "swap",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-satisfy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IVY Fertility - Personalized Fertility Care",
  description: "World-class fertility care with personalized medical services. Book your consultation today.",
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${vidaloka.variable} ${satisfy.variable} antialiased`}
      >
        <LanguageProvider>
          <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
      </body>
    </html>
  );
}
