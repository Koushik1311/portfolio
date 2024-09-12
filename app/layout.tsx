import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const overpass = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koushik Roy",
  description: "Indie Maker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overpass.className} bg-[#282828] text-white flex flex-col justify-between h-screen`}
      >
        {children}

        <Footer />
      </body>
    </html>
  );
}
