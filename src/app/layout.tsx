"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import counterStore from "@/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Counter</title>
      </head>
      <body className={inter.className}>
        <Provider store={counterStore}>{children}</Provider>
      </body>
    </html>
  );
}
