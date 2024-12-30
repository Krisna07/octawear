"use client";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBars, FaPlus } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Dashboardnav = () => {
  const path = usePathname();
  return (
    <div
      className="w-full px-4 p-2 laptop:px-4 bg-beige-700 sticky top-0 z-[100] flex justify-between items-center text-dark gap-4"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="w-full tablet:flex items-center px-4 grid gap-10">
        <div className="tablet:w-fit w-full flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Image
              src={"/Assets/logo.png"}
              width={20}
              height={20}
              alt="logo"
              className=""
            />
            <span className="font-semibold leading-4">
              {path.split("/")[1].toUpperCase()}
            </span>
          </div>
          <div className="flex tablet:hidden items-center gap-2 bg-[gray]/25 px-4 p-2 rounded-full">
            <FaBars />
            <span className="bg-blue-900 rounded-full grid place-items-center p-2">
              <BiUser />
            </span>
          </div>
        </div>
        <div className="relative w-full tablet:w-fit p-1 px-4 text-dark flex items-center gap-2 bg-blue-600 rounded-full shadow">
          <FaMagnifyingGlass size={20} />
          <input
            type="text"
            name="itemname"
            placeholder={`Try searching "Products name"`}
            className="tablet:w-[15rem] w-full p-1 px-2 bg-[transparent] outline-none text-sm"
          />
        </div>
      </div>
      <div className="hidden tablet:flex gap-2 items-center">
        <div className="hidden tablet:flex items-center gap-2 bg-[gray]/25 px-4 p-2 rounded-full">
          <FaBars />
          <span className="bg-blue-900 rounded-full grid place-items-center p-2">
            <BiUser />
          </span>
        </div>
        <div className="bg-magenta-300 p-[12px] text-beige-600 rounded-full">
          <FaPlus size={20} />
        </div>
      </div>
    </div>
  );
};

export default Dashboardnav;
