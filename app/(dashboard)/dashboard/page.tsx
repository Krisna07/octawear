import React from "react";

import { TfiStatsDown, TfiStatsUp } from "react-icons/tfi";
import RevenueCharts from "./Revenuecharts";
import { CgShoppingBag } from "react-icons/cg";
import Button from "@/app/components/Global_Component/Button";

const page = () => {
  return (
    <div className="w-full p-2">
      <div className="grid laptop:grid-cols-[4fr_1fr]  gap-4">
        <div className="w-full grid gap-8 rounded ">
          <div className="grid tablet:grid-cols-4 gap-4 grid-cols-2">
            <div className="grid gap-8 p-4 shadow-[0_0_4px_0_gray] w-fit pr-20  rounded-md">
              <div className="grid gap-2">
                <span className="text-3xl font-bold">10000</span>
                <span className="text-sm">Active customers</span>
              </div>
              <div>
                <span className="flex items-center text-[green] ">
                  <TfiStatsUp color="green" /> 12%
                </span>
                <span className="text-sm">up from last week</span>
              </div>
            </div>
            <div className="grid gap-8 p-4 shadow-[0_0_4px_0_gray] w-fit pr-20  rounded-md">
              <div className="grid gap-2">
                <span className="text-3xl font-bold">1000</span>
                <span className="text-sm">New Products</span>
              </div>
              <div>
                <span className="flex items-center text-[green] ">
                  <TfiStatsUp color="green" /> 12%
                </span>
                <span className="text-sm">up from last month</span>
              </div>
            </div>
            <div className="grid gap-8 p-4 shadow-[0_0_4px_0_gray] w-fit pr-20  rounded-md">
              <div className="grid gap-2">
                <span className="text-3xl font-bold">20000</span>
                <span className="text-sm">Total Sales</span>
              </div>
              <div>
                <span className="flex items-center text-[green] ">
                  <TfiStatsUp color="green" /> 12%
                </span>
                <span className="text-sm">up from last week</span>
              </div>
            </div>
            <div className="grid gap-8 p-4 shadow-[0_0_4px_0_gray] w-fit pr-20  rounded-md">
              <div className="grid gap-2">
                <span className="text-3xl font-bold">1000</span>
                <span className="text-sm">Total Returns</span>
              </div>
              <div>
                <span className="flex items-center text-[red] ">
                  <TfiStatsDown color="green" /> 12%
                </span>
                <span className="text-sm">down from last week</span>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 justify-between">
            <div className="w-1/2 h-fit flex gap-2 items-end justify-end p-4 py-6 bg-[white] rounded-md shadow-[0_0_2px_0_gray]">
              <div className="w-full grid gap-16 ">
                <strong className="text-2xl whitespace-nowrap">
                  Average Revenue
                </strong>
                <div className="grid gap-2">
                  <span className="text-4xl font-extrabold">$3,500</span>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-400/50 w-fit px-2 py-1 rounded whitespace-nowrap flex items-center gap-2">
                      <span className="border-[1px] rounded p-1">
                        <TfiStatsUp size={10} />
                      </span>
                      <span className="text">20%</span>
                    </div>
                    <span className="text-lg"> $1,500</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-[100px] rounded grid ">
                <RevenueCharts />
              </div>
            </div>
            <div className="w-1/2 h-fit flex gap-2 items-end justify-end p-4 py-6 bg-[white] rounded-md shadow-[0_0_2px_0_gray]">
              <div className="w-full grid gap-16 ">
                <strong className="text-2xl whitespace-nowrap">
                  Total Returns
                </strong>
                <div className="grid gap-2">
                  <span className="text-4xl font-extrabold whitespace-nowrap ">
                    35 Items
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="bg-[red]/50 w-fit px-2 py-1 rounded whitespace-nowrap flex items-center gap-2">
                      <span className="border-[1px] rounded p-1">
                        <CgShoppingBag size={10} />
                      </span>
                      <span className="text">10%</span>
                    </div>
                    <span className="text-lg whitespace-nowrap"> 10 Items</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-[100px] rounded grid ">
                <RevenueCharts />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full  rounded shadow">
          <h2 className="text-2xl font-bold p-2">Top selling </h2>
          <div className="grid gap-2">
            <div className="flex items-center justify-between gap-4 p-2">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 p-2 rounded-full shadow-[0_0_2px_0_gray] grid place-items-center leading-[80%]">
                  1
                </span>
                <div className="grid leading-tight">
                  <span className="font-semibold ">Oversize T-shirt</span>
                  <span className="flex gap-1">
                    $10{" "}
                    <span className="text-[12px] bg-[green]/25 leading-tight px-2  rounded-full flex items-center w-fit">
                      sale
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-12 h-16 rounded-md bg-dark-300/25"></div>
              <Button
                children="view"
                size={"sm"}
                variant={"default"}
                icon={false}
              />
            </div>{" "}
            <div className="flex items-center justify-between gap-4 p-2">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 p-2 rounded-full shadow-[0_0_2px_0_gray] grid place-items-center leading-[80%]">
                  1
                </span>
                <div className="grid leading-tight">
                  <span className="font-semibold ">Oversize T-shirt</span>
                  <span className="flex gap-1">
                    $10{" "}
                    <span className="text-[12px] bg-[green]/25 leading-tight px-2  rounded-full flex items-center w-fit">
                      sale
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-12 h-16 rounded-md bg-dark-300/25"></div>
              <Button
                children="view"
                size={"sm"}
                variant={"default"}
                icon={false}
              />
            </div>{" "}
            <div className="flex items-center justify-between gap-4 p-2">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 p-2 rounded-full shadow-[0_0_2px_0_gray] grid place-items-center leading-[80%]">
                  1
                </span>
                <div className="grid leading-tight">
                  <span className="font-semibold ">Oversize T-shirt</span>
                  <span className="flex gap-1">
                    $10{" "}
                    <span className="text-[12px] bg-[green]/25 leading-tight px-2  rounded-full flex items-center w-fit">
                      sale
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-12 h-16 rounded-md bg-dark-300/25"></div>
              <Button
                children="view"
                size={"sm"}
                variant={"default"}
                icon={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
