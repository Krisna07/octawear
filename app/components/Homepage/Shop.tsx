import Image from "next/image";
import React from "react";
import { BiBarChartSquare, BiCart, BiGrid, BiListUl } from "react-icons/bi";
import { FaBars, FaList } from "react-icons/fa";

const Shop = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="flex items-center justify-between sticky top-[60px]">
        <div className="flex items-center gap-2 bg-[white]/25 p-2 rounded-md ">
          <FaBars size={16} /> <BiGrid />
        </div>

        <BiCart />
      </div>
      <div className="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
        <div className="flex bg-[white] rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row text-dark">
          <div className="relative w-full md:w-48 flex justify-center items-center">
            {/* <Image
              src="https://cdn.pixabay.com/photo/2013/07/13/14/07/apparel-162180_960_720.png"
              width={200}
              height={200}
              alt="shopping image"
              className="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            /> */}
            <img
              src={
                "https://cdn.pixabay.com/photo/2013/07/13/14/07/apparel-162180_960_720.png"
              }
              alt="shopping image"
              className="object-fit w-46 h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none "
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                Product name
              </h1>
              <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                $110.00
              </div>
              <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                In stock
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
              <div className="flex space-x-2">
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600 bg-gray-100 rounded-lg dark:bg-gray-600"
                    name="size"
                    value="xs"
                  />
                  XS
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600"
                    name="size"
                    value="s"
                  />
                  S
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600"
                    name="size"
                    value="m"
                  />
                  M
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600"
                    name="size"
                    value="l"
                  />
                  L
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600"
                    name="size"
                    value="xl"
                  />
                  XL
                </label>
              </div>
              <a
                href="#"
                className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300"
              >
                Size Guide
              </a>
            </div>
            <div className="flex mb-4 text-sm font-medium">
              <button
                type="button"
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
              >
                Buy now
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shop;
