import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ResponsiveNav from "@/Components/HomePage/Navbar/ResponsiveNav";
import Footer from "../Components/HomePage/Footer/Footer";
import AosProvider from "@/Components/AosProvider";

const roboto = Roboto({
  weight: ['400', '500', '600', '700'],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "BaseApp",
  description: "BaseApp || NextJs",
  icons: {
    icon: "/images/logo-light.svg", // ✅ favicon works here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased bg-white dark:bg-black flex flex-col min-h-screen`}
      >
        {/* ✅ Wrap everything in a client AOS provider */}
        <AosProvider>
          <ThemeProvider>
            <ResponsiveNav />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AosProvider>
      </body>
    </html>
  );
}
