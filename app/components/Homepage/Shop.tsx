import React from "react";
import { BiCart, BiGrid } from "react-icons/bi";
import { FaList } from "react-icons/fa";

const Shop = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="flex items-center justify-between sticky top-[60px]">
        <div className="flex gap-2 bg-[white]/25 p-2 rounded-md ">
          <FaList /> <BiGrid />
        </div>

        <BiCart />
      </div>
      <div className="h-[2000px]"></div>
    </div>
  );
};

export default Shop;
