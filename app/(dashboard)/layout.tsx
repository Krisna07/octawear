import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Dashboardnav from "../Navbar/dashboardnav";
import DashboardFooter from "../Navbar/dashboardFooter";
import Sidenav from "../Navbar/Sidenav";

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
      <body className="w-screen max-h-screen grid place-items-center  gap-4 bg-dark-200 border-box">
        <Dashboardnav />
        <Sidenav />
        <main className="w-full laptop:w-[1000px] h-screen overflow-y-auto  py-[3rem] hidescrollbar border-box">
          {children}
        </main>
      </body>
    </html>
  );
}
