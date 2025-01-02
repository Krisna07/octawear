"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddProductForm from "./Forms/Addproductform";

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

const Page: React.FC = () => {
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

  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [editing, setEditing] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentProduct, setCurrentProduct] = useState<Product>(initialProduct);
  const [newItem, setNewItem] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
    setCurrentProduct(initialProduct);
    setNewItem(false);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (id: number, updatedProduct: Product) => {
    setProducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    );
    setEditing(false);
    setCurrentProduct(initialProduct);
  };

  const editRow = (product: Product) => {
    setEditing(true);
    setCurrentProduct(product);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full p-4 box-border relative">
      <div className="tablet:flex p-2 items-center grid justify-between gap-4 border-b-2 border-gray-300  top-0 left-0 bg-[white] z-20">
        <h2 className="text-xl font-semibold leading-relaxed uppercase">
          Inventory
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-1 px-2 border border-gray-300 rounded-md"
          />
          <span className="text-gray-500">({products.length} items)</span>
          <button
            onClick={() => setNewItem(!newItem)}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Add Product
          </button>
          {newItem && <AddProductForm addProduct={addProduct} />}
        </div>
      </div>

      <div className="w-full h-[90vh] overflow-y-auto pb-16">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 border-b-2 border-gray-300">
            <tr>
              <th className="p-2 text-left sticky left-0 bg-white">S.N</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-left whitespace-nowrap">Product Code</th>
              <th className="p-2 text-left">Unit</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-100 transition-colors"
              >
                <td className="p-2 text-left sticky left-0 bg-white">
                  {index + 1}
                </td>
                <td className="p-2 text-left" contentEditable="true">
                  {product.name}
                </td>
                <td className="p-2 text-left max-w-[40ch] overflow-hidden overflow-x-auto hidescrollbar whitespace-nowrap">
                  {product.description}
                </td>
                <td className="p-2 text-left">{product.productCode}</td>
                <td className="p-2 text-left">{product.unit}</td>
                <td className="p-2 text-left">${product.price}</td>
                <td className="p-2 text-left flex items-center gap-2">
                  <button
                    onClick={() => editRow(product)}
                    className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-2"
                  >
                    Edit <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-[red]/25 text-white px-2 py-1 rounded flex items-center gap-2"
                  >
                    Delete <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editing && <AddProductForm addProduct={addProduct} />}
    </div>
  );
};

export default Page;
