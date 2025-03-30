import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Wähle die gewünschten Gewichtungen
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${roboto.className} roboto.className  antialiased min-h-screen flex items-center justify-center py-8 bg-[#030712] text-white`}
      >
        <div className="w-full max-w-[800px] px-4 py-8 shadow-xl rounded-lg flex flex-col bg-[#1D202A]">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo_2.png"
              alt="Website Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Main Content */}
          <main className="flex-grow flex justify-center items-center">
            {children}
          </main>

          {/* Navbar bleibt unten */}
          <div className="mt-4 flex justify-center">
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}
