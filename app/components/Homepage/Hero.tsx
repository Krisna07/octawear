import React from "react";
import Button from "../Global_Component/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-400 relative overflow-hidden">
      {/* <div className="w-[500px] h-[500px] rounded  absolute inset-0  opacity-50 border-2 border-[white] border-dotted animate-[rotate_10s_linear_infinite] "></div>
      <div className="w-[500px] h-[500px] rounded  absolute inset-0  opacity-50 border-2 border-[white] border-dotted rotate-[45deg] animate-rotate"></div> */}
      <div
        className="absolute inset-x-0 bottom-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          // style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
      <div className="grid gap-2 place-items-center z-20">
        <Button
          children="Get Started"
          variant={"default"}
          Icon={<FaArrowRight />}
          icon={true}
          size={"sm"}
        />
        <div className="text-center">
          <h2 className="leading-relaxed text-4xl font-semibold">
            The home of new fashion
          </h2>
          <p className="text-[white]/75 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <Button
          children="shop now"
          variant={"ghost"}
          Icon={<FaShop />}
          icon={true}
          size={"default"}
          className="text-[white]"
        />
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] "
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          // style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
    </div>
  );
};

export default Hero;
