import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/header";
import { arabic, rajdhani, roboto } from "@/fonts/fonts";
import Footer from "@/layouts/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} ${roboto.variable} ${arabic.variable} ${rajdhani.variable} bg-dark`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
