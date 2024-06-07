"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { MdDashboard, MdInventory } from "react-icons/md";
import { TbCoins, TbGraph } from "react-icons/tb";

const Sidenav = () => {
  const menus = [
    { name: "Dashboard", icon: <MdDashboard />, route: "/dashboard" },
    { name: "Analytics", icon: <TbGraph />, route: "/analytics" },
    { name: "Inventory", icon: <MdInventory />, route: "/inventory" },
    { name: "Transactions", icon: <TbCoins />, route: "/transactions" },
    { name: "Settings", icon: <CiSettings />, route: "/settings" },
    { name: "Logout", icon: <BiLogOut />, route: "/logout" },
  ];
  const route = usePathname();
  const [path, setPath] = useState<string>(route);
  const getIndex = (route: string) => {
    return menus.findIndex((menu) => menu.route === route);
  };

  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);

  const getWidth = (classs: any) => {
    const element: any = document.querySelector(`.${classs}`);
    if (element) {
      const width = element?.offsetWidth;
      const left = element?.offsetLeft;
      setWidth(width);
      setLeft(left);
    }
  };

  useEffect(() => {
    getIndex(route);
    getWidth(path.split("/")[1]);
  }, [route]);

  const height = 100 / menus.length;

  return (
    <div className="laptop:h-full  laptop:w-[16rem]  w-full sticky z-[99]  left-0 laptop:bg-beige-600 bg-[gray]/25  text-dark px-4 border-box flex flex-col gap-4 justify-between overflow-x-scroll hidescrollbar">
      <div
        className="laptop:grid w-[max-content] flex gap-4 laptop:py-0 laptop:gap-0 py-2  text-2xl relative "
        onMouseLeave={() => {
          setPath(route);
          getWidth(route.split("/")[1]);
        }}
      >
        {menus.map((menu) => (
          <Link
            href={menu.route}
            key={menu.name}
            className={`${menu.name.toLocaleLowerCase()} rounded-full laptop:rounded relative z-20 py-[4px] laptop:py-4 px-[8px] laptop:w-full w-it flex items-center gap-[4px] text-sm  transition-all duration-300 cursor-pointer ${
              route === menu.route ? "text-beige-400" : ""
            } `}
            onMouseEnter={(
              event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => {
              setPath(menu.route);
              getWidth(menu.name.toLocaleLowerCase());
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
          className={`w-full  absolute laptop:grid hidden place-items-center box-border transition-all`}
        >
          <div
            className={`w-full h-1/2 bg-blue-600 rounded-tr rounded-br transition-all -left-[2px] duration-300 left-0 z-10 border-l-2 box-border grid place-items-center ${
              route === path ? "border-dark-100" : "border-dark-100/25"
            }`}
          ></div>
        </div>
        <div
          style={{
            height: `${height}%`,
            top: ` ${route === path && height * getIndex(path)}% `,
          }}
          className={`w-full  absolute laptop:grid hidden place-items-center box-border transition-all`}
        >
          <div
            className={`w-full h-1/2 bg-blue-600 rounded-tr rounded-br transition-all -left-[2px] duration-300 left-0 z-10 border-l-4 box-border grid place-items-center bg-dark-100 border-beige-300`}
          ></div>
        </div>
        <div
          style={{
            width: `${width}px`,
            left: `${left}px`,
          }}
          className={`h-full top-0 bottom-0 absolute laptop:hidden grid place-items-center box-border transition-all `}
        >
          <div className="w-full h-3/6 bg-blue-200/50 rounded-full px-2"></div>
        </div>
        <div
          style={{
            width: `${route === path && width}px`,
            left: `${route === path && left}px`,
          }}
          className={`h-full top-0 bottom-0 absolute laptop:hidden grid place-items-center box-border transition-all `}
        >
          <div className="w-full h-3/6 bg-blue-200 rounded-full px-2"></div>
        </div>
      </div>
      <div className="bg-[white] laptop:bg-beige-600 rounded-full laptop:rounded py-[4px] laptop:py-4 px-4 laptop:w-full w-fit hidden laptop:flex items-center gap-2 text-sm hover:bg-blue-600 transition-all duration-300 absolute bottom-20 left-0">
        <BiLogOut /> Logout
      </div>
    </div>
  );
};

export default Sidenav;
