import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="p-2 flex items-center justify-between sticky top-0 bg-gray-600 z-20">
      <div className="logo">
        <Image
          src={"/Assets/logo.png"}
          width={50}
          height={50}
          alt="logo"
        />
      </div>
      <div className="px-8">
        <ul className="flex items-center gap-4 text-xl ">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Shop</li>
          <li className="hover:text-blue-600 cursor-pointer">FaQs</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
