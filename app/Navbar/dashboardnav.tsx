"use client";
import React from "react";
import { FaMagnifyingGlass, FaTriangleExclamation } from "react-icons/fa6";
import Button from "../components/Global_Component/Button";
import { BsTriangle } from "react-icons/bs";
import { FaBars, FaPlus } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { usePathname } from "next/navigation";

const Dashboardnav = () => {
  const path = usePathname();
  return (
    <div className="w-full px-4 laptop:h-[4rem] p-2 laptop:p-0 bg-beige-700 sticky top-0 z-[100] flex justify-between items-center text-dark gap-4 ">
      <div className="w-full tablet:flex items-center px-4  grid gap-4 ">
        <div className="tablet:w-fit w-full flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <span className=" bg-blue-100 rounded-full grid place-items-center p-2">
              <BsTriangle size={20} color="white" className="leading-tight " />
            </span>
            <span className="font-semibold">
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
            className="tablet:w-[15rem] w-full p-1 px-2 bg-[transparent] outline-none text-sm "
          />
        </div>

        {/* <div className=" flex gap-2 font-semibold">
          <span>Home</span>
          <span>Items</span>
          <span>Analytics</span>
        </div> */}
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
