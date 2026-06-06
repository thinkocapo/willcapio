import type { Metadata } from "next";
import { Open_Sans, Candal } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const candal = Candal({
  variable: "--font-candal",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "WillCap.io",
  description: "life",
  twitter: {
    card: "summary_large_image",
    creator: "@thinkocapo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${candal.variable} antialiased`}>
        <div className="app-container">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
