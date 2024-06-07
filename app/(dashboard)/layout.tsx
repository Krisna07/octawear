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
      <body className="w-full max-h-screen grid place-items-center overflow-hidden  border-box">
        <Dashboardnav />
        <main className="w-full h-screen  bg-[white]  hidescrollbar border-box  z-[80] laptop:flex gap-2  overflow-hidden">
          <div className="sticky z-[90] ">
            <Sidenav />
          </div>
          <div className="w-full h-full overflow-y-auto  border-box text-dark pb-40">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
