import React from "react";

const page = () => {
  const demoItem = {
    id: 1,
    name: "T-Shirt",
    description:
      "A simple T-shirt for all occasions. LikShop premium graphic t-shirts, hoodies & more online at Threadheads. Vibrant designs. XS to 4XL. Made-to-order just for you. Eco-friendly printing. ",
    unit: "20 Piece",
    price: 100,
    productCode: "TS-001",
    category: "T-Shirts",
    brand: "LikShop",
    color: "Blue",
  };

  return (
    <div className="w-full  laptop:p-4 ">
      <div className="w-full flex items-end gap-4 border-b-2 border-[gray]/50 p-2 sticky top-0 left-0 bg-[white] z-20 ">
        <h2 className="text-2xl font-semibold leading-relaxed uppercase">
          Inventory
        </h2>
        <span className="flex-end leading-[80%] flex items-center ">
          {" "}
          ( 40 items ){" "}
        </span>
      </div>
      <div className="w-full overflow-x-scroll relative z-10">
        <table className="w-full overflow-auto">
          <thead className="border-b-2 border-[gray]/50  divide-x-[1px] text-xl font-bold">
            <td className="text-center w-fit px-2 sticky left-0 bg-[white]">
              S.N{" "}
            </td>
            <td className="text-center w-fit px-2">Name</td>
            <td className="text-center w-fit px-2 p">Description</td>
            <td className="text-center w-fit px-2 inline-block whitespace-nowrap">
              Product Code
            </td>
            <td className="text-center w-fit px-2">Category</td>
            <td className="text-center w-fit px-2">Brand</td>
            <td className="text-center w-fit px-2">Color</td>
            <td className="text-center w-fit px-2">Unit</td>
            <td className="text-center w-fit px-2">Price</td>
          </thead>
          <tbody className="text-center divide-y-[1px] ">
            {Array.from(Array(40).keys()).map((count: number, item) => (
              <tr key={item} className="divide-x-[1px]">
                <td className="text-center w-fit sticky left-0 bg-[white]">
                  <div>{item + 1}</div>
                </td>
                <td className="text-center w-fit">{demoItem.name}</td>
                <td className="text-center max-w-[40ch]  overflow-hidden overflow-x-scroll hidescrollbar whitespace-nowrap px-2">
                  {demoItem.description}
                </td>
                <td className="text-center w-fit">{demoItem.productCode}</td>
                <td className="text-center w-fit">{demoItem.category}</td>
                <td className="text-center w-fit">{demoItem.brand}</td>
                <td className="text-center w-fit">{demoItem.color}</td>
                <td className="text-center w-fit">{demoItem.unit}</td>
                <td className="text-center w-fit">{demoItem.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
