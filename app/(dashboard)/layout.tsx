import "../globals.css";
import type { Metadata } from "next";

import Dashboardnav from "../Navbar/dashboardnav";
import DashboardFooter from "../Navbar/dashboardFooter";
import Sidenav from "../Navbar/Sidenav";
import Button from "@/app/components/Global_Component/Button";
import { Roboto } from "next/font/google";
import Test from "./test";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
        className={`w-full max-h-screen grid place-items-center overflow-hidden border-box ${roboto.className}`}
      >
        <Dashboardnav />
        <main className="w-full min-h-full grid laptop:grid-cols-6">
          <div className="col-span-1 sticky ">
            <Sidenav />
          </div>
          <div className="col-span-5 ">{children}</div>
        </main>
      </body>
    </html>
  );
}
{
  /* <main className="w-full h-screen  bg-[white]  hidescrollbar border-box  z-[80] laptop:flex gap-2  overflow-hidden">
          <div className="sticky z-[90] ">
            <Sidenav />
          </div>
          <div className="w-full h-full overflow-y-auto  border-box text-dark pb-40 ">
            {children}
          </div>
        </main> */
}
