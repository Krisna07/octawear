import React from "react";

const Productform = () => {
  const ProductLabels = [
    {
      name: "Product Name",
      type: "text",
    },
    {
      name: "Product Description",
      type: "text",
    },
    {
      name: "Product Code",
      type: "text",
    },
    {
      name: "Unit",
      type: "number",
    },
    {
      name: "Price",
      type: "number",
    },
    {
      name: "Category",
      type: "text",
    },
    {
      name: "Brand",
      type: "text",
    },
    {
      name: "color",
      type: "text",
    },
    {
      name: "Image",
      type: "file",
    },
  ];
  return (
    <form className="w-fit shadow-[0_0_2px_0_gray] p-4 rounded-md grid gap-4">
      <h2 className="text-xl font-semibold border-b py-2">Product </h2>
      {ProductLabels.map((label) => (
        <div className="flex flex-col" key={label.name}>
          <label className="w-fit text-left ">{label.name}</label>
          <input
            type={label.type}
            className="bg-blue-500 outline-none rounded-lg p-2"
          />
        </div>
      ))}
    </form>
  );
};

export default Productform;
