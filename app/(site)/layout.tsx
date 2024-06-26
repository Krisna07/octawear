import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../Navbar/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "max-w-full h-auto grid place-items-center bg-[black] text-[white]]"
        }
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
