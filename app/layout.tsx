import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ResponsiveNav from "@/Components/HomePage/Navbar/ResponsiveNav";
import Footer from '../Components/HomePage/Footer/Footer'
import favicon from '../public/images/logo-light.svg'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BaseApp",
  description: "BaseApp || NextJs",
  icons: {
    icon: "/images/logo-light.svg",         // used as favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`} 
      >
        <ThemeProvider>
          <ResponsiveNav />
          {children}
          <Footer />
        </ThemeProvider>        
      </body>
    </html>
  );
}
