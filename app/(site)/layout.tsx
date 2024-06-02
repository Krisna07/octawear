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
      <body className={"w-full h-full grid place-items-center"}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
