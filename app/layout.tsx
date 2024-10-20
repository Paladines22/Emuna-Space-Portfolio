/* eslint-disable-next-line padded-blocks */
import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "./globals.css";
import StarCanvas from '@/components/main/StarBackground.tsx'
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";


const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Emuna Space Portfolio",
  description: "Emuna's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden `}
      >
        <StarCanvas/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
