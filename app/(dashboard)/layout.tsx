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
      <body className="w-full max-h-screen grid place-items-center  border-box">
        <Dashboardnav />
        <main className="w-full laptop:w-[1000px] h-screen overflow-y-auto bg-[white]  hidescrollbar border-box relative z-[80] relative ">
          <div className="sticky top-0 z-[90] ">
            <Sidenav />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
