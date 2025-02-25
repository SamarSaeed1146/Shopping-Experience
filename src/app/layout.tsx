import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReactQueryProvider from "./ReactQueryProvider";
import { Toaster } from "../components/ui/toaster";

const lora = Lora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopping Experience",
  description:
    "Shopping Experience offers a curated selection of top-quality tech accessories with seamless browsing and secure checkout. Enhance your digital lifestyle with our personalized recommendations and effortless shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
