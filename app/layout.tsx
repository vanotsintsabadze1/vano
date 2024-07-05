import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Vano",
  description: "Official portfolio of Vano Tsintsabadze",
};

const exo = Exo_2({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.className} scrollbar-hide bg-primary`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
