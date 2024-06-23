"use client";
import Button from "@/app/components/Global_Component/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { FaArrowRight, FaChevronRight, FaUser } from "react-icons/fa";

const Nav = () => {
  const [options, setOptions] = useState<boolean>(false);

  const OptionChange = () => {
    setOptions(!options);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => setOptions(false));
  }, []);

  return (
    <div className="tablet:max-w-[80%] laptop:w-[1000px] w-full  px-4 flex items-center justify-center sticky z-[100] top-2 bg-blue rounded-full">
      <div className="w-full h-fit flex items-center justify-start">
        <Image
          src={"/Assets/logo.png"}
          width={40}
          height={40}
          alt="logo"
          className=""
        />
      </div>
      <div className="w-full flex items-center justify-center  ">
        <div className="w-full flex items-center justify-center gap-4 text-dark font-semibold cursor-pointer">
          <span>Home</span>
          <span>Shop</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="w-full tablet:flex items-center justify-end gap-4 hidden ">
        <Button
          children="Login"
          variant={"ghost"}
          size={"sm"}
          icon={true}
          Icon={<FaChevronRight />}
          hoverIcon={
            <FaArrowRight className="-rotate-[45deg] transition-all" />
          }
        />
        <Button
          children="signup"
          variant={"primary"}
          size={"sm"}
          icon={true}
          Icon={<FaChevronRight />}
          hoverIcon={
            <FaArrowRight className="-rotate-[45deg] transition-all" />
          }
        />
      </div>
      <div className="tablet:hidden  w-full h-10 flex items-center justify-end">
        <button
          onClick={OptionChange}
          className="text-white bg-dark p-2 rounded-full"
        >
          <FaUser />
        </button>

        <div
          className={`w-fit grid gap-2 absolute top-[90%] bg-[white] px-4 py-2 rounded-md shadow-md transition-all duration-300 ${
            options ? "opacity-1 right-4" : "opacity-0 right-[-100%]"
          }`}
        >
          <Button
            children="Login"
            variant={"ghost"}
            size={"sm"}
            icon={true}
            className="min-w-full"
            Icon={<FaChevronRight />}
            hoverIcon={
              <FaArrowRight className="-rotate-[45deg] transition-all" />
            }
          />
          <Button
            children="Signup"
            variant={"primary"}
            size={"sm"}
            icon={true}
            Icon={<FaChevronRight />}
            hoverIcon={
              <FaArrowRight className="-rotate-[45deg] transition-all" />
            }
          />
        </div>
      </div>
      {/* <div>
        <div className="tablet:hidden w-full h-10 flex items-center justify-between sticky top-2">
          <div className="flex items-center justify-between gap-4 text-white">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Nav;
