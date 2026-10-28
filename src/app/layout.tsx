import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { ScrollReveals } from "@/components/ScrollReveals";
export const metadata: Metadata = {
  title: {
    default: "Blissworld — A little more bliss, every day.",
    template: "%s | Blissworld",
  },
  description:
    "Explore the Blissworld world of bags, school essentials, tracksuits and everyday inspirations. Open our interactive catalogue and discover your next favourite.",
  icons: { icon: "/images/monogram.webp" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <ScrollReveals />
      </body>
    </html>
  );
}
