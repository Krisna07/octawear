import React from "react";
import { TfiStatsDown, TfiStatsUp } from "react-icons/tfi";
import { CgShoppingBag } from "react-icons/cg";
import { FaCalendar, FaChevronDown } from "react-icons/fa6";
import { BiCalendar } from "react-icons/bi";

const page = () => {
  const summaryDatas = [
    {
      title: "New Orders",
      value: "$12,000",
      icon: <TfiStatsUp size={20} className="text-[green]" />,
    },
    {
      title: "New Products",
      value: "200",
      icon: <TfiStatsDown size={20} className="text-[red]" />,
    },
    {
      title: "New Customers",
      value: "$12,000",
      icon: <TfiStatsUp size={20} className="text-[green]" />,
    },
    {
      title: "Active Customers",
      value: "$12,000",
      icon: <TfiStatsDown size={20} className="text-[red]" />,
    },
  ];
  return (
    <div className="w-full p-4">
      <div className="grid laptop:grid-cols-[4fr_1fr]  gap-4">
        <div className="w-full h-full rounded  grid gap-4">
          <div className="w-fit whitespace-nowrap flex items-center gap-2 rounded shadow-[0_0_2px_0_gray] relative px-2">
            <BiCalendar /> Today <FaChevronDown size={12} />
          </div>
          <div className="grid gap-4">
            <div className="w-full tablet:flex gap-4 flex-shrink items-center justify-between grid grid-cols-2">
              {summaryDatas.map((data, index) => (
                <div
                  key={index}
                  className="w-full h-full grid gap-2  rounded shadow p-4 bg-blue-300/25"
                >
                  <div className="flex items-center gap-2 ">
                    <span className="text-sm font-semibold">{data.title}</span>
                  </div>
                  <div className="w-full flex items-center justify-between gap-2">
                    <span className="text-dark-700 font-medium">
                      {data.value}
                    </span>
                    <span className="text-lg font-semibold">{data.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="w-full h-full  rounded shadow">
          <h2 className="text-2xl font-semibold p-2">Top selling </h2>
          <div className="grid gap-2">
            <div className="flex items-center justify-between gap-4 p-2">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full shadow-[0_0_2px_0_gray] grid place-items-center ">
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
        </div> */}
      </div>
    </div>
  );
};

export default page;
