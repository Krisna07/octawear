"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

import { FaHome } from "react-icons/fa";
import { FaDashcube } from "react-icons/fa6";

import { MdDashboard, MdInventory } from "react-icons/md";

import { TbCoins, TbGraph } from "react-icons/tb";

const Sidenav = () => {
  const menus = [
    { name: "Dashboard", icon: <MdDashboard />, route: "/dashboard" },
    { name: "Analytics", icon: <TbGraph />, route: "/analytics" },
    { name: "Inventory", icon: <MdInventory />, route: "/inventory" },
    { name: "Transactions", icon: <TbCoins />, route: "/transactions" },
    { name: "Settings", icon: <CiSettings />, route: "/settings" },
  ];
  const route = usePathname();
  const [path, setPath] = useState<string>(route);
  const getIndex = (route: string) => {
    return menus.findIndex((menu) => menu.route === route);
  };
  useEffect(() => {
    getIndex(route);
  }, [route]);

  const height = 100 / menus.length;
  const width = 100 / menus.length;

  return (
    <div className="laptop:h-full  laptop:w-[16rem]  w-full sticky z-[99]  left-0 laptop:bg-beige-600 bg-[gray]/25  text-dark px-4 border-box flex flex-col gap-4 justify-between overflow-x-scroll hidescrollbar">
      <div
        className="laptop:grid w-full flex gap-4 laptop:py-0 laptop:gap-0 py-2  text-2xl relative"
        onMouseLeave={() => {
          setPath(route);
        }}
      >
        {menus.map((menu) => (
          <Link
            href={menu.route}
            key={menu.name}
            className={` rounded-full laptop:rounded relative z-20 py-[4px] laptop:py-4 px-4 laptop:w-full w-it flex items-center gap-2 text-sm  transition-all duration-300 cursor-pointer ${
              route === menu.route ? "bg-blue-300 text-beige-400" : ""
            }`}
            onMouseOver={() => {
              setPath(menu.route);
            }}
            onClick={() => {
              setPath(menu.route);
            }}
          >
            {menu.icon} <span>{menu.name}</span>
          </Link>
        ))}
        <div
          style={{
            height: `${height}%`,
            top: `${height * getIndex(path)}% `,
          }}
          className={`w-full h-[${height}%] absolute laptop:grid hidden place-items-center box-border transition-all`}
        >
          <div
            className={`w-full h-1/2 bg-blue-600 rounded-tr rounded-br transition-all -left-[2px] duration-300 left-0 z-10 border-l-2 box-border grid place-items-center ${
              route === path ? "border-dark-100" : "border-dark-100/25"
            }`}
          ></div>
        </div>
      </div>
      <div className="bg-[white] laptop:bg-beige-600 rounded-full laptop:rounded py-[4px] laptop:py-4 px-4 laptop:w-full w-fit hidden laptop:flex items-center gap-2 text-sm hover:bg-blue-600 transition-all duration-300 absolute bottom-20 left-0">
        <BiLogOut /> Logout
      </div>
    </div>
  );
};

export default Sidenav;
