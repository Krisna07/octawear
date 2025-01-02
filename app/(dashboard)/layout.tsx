import "../globals.css";
import type { Metadata } from "next";
import Dashboardnav from "../Navbar/dashboardnav";
import Sidenav from "../Navbar/Sidenav";
import { Roboto } from "next/font/google";

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
        className={`h-screen border-box font-sans box-border overflow-hidden `}
      >
        <Dashboardnav />
        <div className="min-w-full h-full laptop:flex box-border ">
          <Sidenav />

          <div className="w-full box-border">{children}</div>
        </div>
      </body>
    </html>
  );
}
