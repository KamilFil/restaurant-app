import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './style.css'
import React from "react";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restauracja Domowa - Szameczka.pl",
  description: "",
  icons: {
    icon: "/img/favicon.svg",
  },


};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
    <body className={inter.className}>{children}</body>
    <Script src={'https://kit.fontawesome.com/e1693a6581.js'} async></Script>
    </html>
  );
}
