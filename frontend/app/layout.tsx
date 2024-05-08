import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./layout.css"
import {Header} from "@/app/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diplom",
  description: "Diplom description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={"global_container"}>
        <Header/>
        <div className={"container"}>
          {children}
        </div>
      </div>
      </body>
    </html>
  );
}
