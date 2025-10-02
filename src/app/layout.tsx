import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SAGE University - Research Repository",
  description: "SAGE University Research Repository",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="scrollbar-thin scrollbar-thumb-black/70 scrollbar-track-white"
      suppressHydrationWarning
    >
      <body
        className={`${poppins.className} antialiased m-0 p-0 box-border scroll-smooth`}
      >
         <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
