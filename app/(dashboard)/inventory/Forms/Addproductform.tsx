"use client";
import Button from "@/app/components/Global_Component/Button";
import React, { useState } from "react";
import { PiPlus } from "react-icons/pi";

interface AddProductFormProps {
  addProduct: (product: Product) => void;
}

interface Product {
  id: number;
  name: string;
  description: string;
  unit: number;
  price: number;
  productCode: string;
  category: string;
  brand: string;
  color: string;
  image: File | null;
  gender: string;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ addProduct }) => {
  const initialProduct: Product = {
    id: 0,
    name: "",
    description: "",
    unit: 0,
    price: 0,
    productCode: "",
    category: "",
    brand: "",
    color: "",
    image: null,
    gender: "",
  };

  const [product, setProduct] = useState<Product>(initialProduct);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProduct({ ...product, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(product);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full shadow-[0_0_2px_0_gray] p-4 pb-16 rounded-md grid gap-4 absolute bottom-0 left-0"
    >
      <h2 className="text-xl font-semibold border-b py-2">Add new item</h2>
      <div className="flex gap-2">
        <div className="flex flex-col w-full">
          <label className="w-fit text-left">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full shadow-[0_0_2px_0_green] outline-none rounded-lg px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="w-fit text-left">Product Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="shadow-[0_0_2px_0_green] outline-none rounded-lg px-2 py-1"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label className="w-fit text-left">Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="w-full shadow-[0_0_2px_0_green] outline-none rounded-lg px-2 py-1"
        />
      </div>
      <div className="w-full flex gap-2">
        <div className="w-full flex flex-col">
          <label className="w-fit text-left">Total Units</label>
          <input
            type="text"
            name="unit"
            value={product.unit}
            onChange={handleChange}
            className="shadow-[0_0_2px_0_green] outline-none rounded-lg px-2 py-1"
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-left">Gender</label>
          <select
            name="gender"
            value={product.gender}
            onChange={handleChange}
            className="w-full shadow-[0_0_2px_0_green] outline-none rounded-lg px-2 py-1"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label className="w-fit text-left">Category</label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full shadow-[0_0_2px_0_green] outline-none rounded-lg px-2 py-1"
        >
          <option value="">Select Category</option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="dresses">Dresses</option>
          <option value="outerwear">Outerwear</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="w-full flex flex-col">
        <label className="w-fit text-left">Upload Image</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          className="w-full shadow-[0_0_2px_0_green] outline-none rounded-lg px-2 py-1"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2"
      >
        Add
      </button>
    </form>
  );
};

export default AddProductForm;
