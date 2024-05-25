import React from "react";
import Button from "../Global_Component/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-400 relative">
      <div className="w-[500px] h-[500px] rounded  absolute inset-0  opacity-50 border-2 border-[white] border-dotted animate-[rotate_10s_linear_infinite] "></div>
      <div className="w-[500px] h-[500px] rounded  absolute inset-0  opacity-50 border-2 border-[white] border-dotted rotate-[40deg] animate-rotate"></div>
      <div className="grid gap-2 place-items-center">
        <Button
          children="Get Started"
          variant={"default"}
          Icon={<FaArrowRight />}
          icon={true}
          size={"sm"}
        />
        <div className="text-center">
          <h2 className="leading-relaxed text-2xl font-semibold">
            The home of new fashion
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <Button
          children="shop now"
          variant={"ghost"}
          Icon={<FaShop />}
          icon={true}
          size={"sm"}
          className="text-[white]"
        />
      </div>

      <div></div>
    </div>
  );
};

export default Hero;
