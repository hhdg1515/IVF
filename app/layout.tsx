import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/context"
import LayoutContent from "@/components/LayoutContent";
import LanguageInitializer from "@/components/LanguageInitializer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IVY Fertility - Personalized Fertility Care",
  description: "World-class fertility care with personalized medical services. Book your consultation today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} antialiased`}
      >
        <LanguageInitializer>
          <LanguageProvider>
            <LayoutContent>{children}</LayoutContent>
          </LanguageProvider>
        </LanguageInitializer>
      </body>
    </html>
  );
}
