import React from "react";

import { FaHome } from "react-icons/fa";

import { MdInventory } from "react-icons/md";

import { TbCoins, TbGraph } from "react-icons/tb";

const Sidenav = () => {
  return (
    <div className="laptop:h-[90rem] laptop:w-[16rem] laptop:fixed w-full sticky top-16 laptop:top-[4rem] left-0 laptop:bg-beige-600 bg-[gray]/25  text-dark px-4 border-box">
      <div className="laptop:grid w-full flex gap-4 text-2xl py-2">
        <span className="bg-[white] rounded-full p-2 w-fit flex items-center gap-2 text-sm">
          <FaHome /> <span>Home</span>
        </span>
        <span className="bg-[white] rounded-full p-2 w-fit flex items-center gap-2 text-sm">
          <TbGraph /> <span>Analytics</span>
        </span>
        <span className="bg-[white] rounded-full p-2 w-fit flex items-center gap-2 text-sm">
          <MdInventory /> <span>Inventory</span>
        </span>
        <span className="bg-[white] rounded-full p-2 w-fit flex items-center gap-2 text-sm">
          <TbCoins /> <span>Transactions</span>
        </span>
      </div>
    </div>
  );
};

export default Sidenav;
