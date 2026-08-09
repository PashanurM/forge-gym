import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Premium Training`,
    template: `%s | ${brand.name}`,
  },
  description: brand.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${dmSans.variable} ${bebas.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased atmosphere">
        {children}
      </body>
    </html>
  );
}
