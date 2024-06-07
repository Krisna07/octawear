"use client";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

interface Product {
  id: number;
  name: string;
  description: string;
  unit: string;
  price: number;
  productCode: string;
  category: string;
  brand: string;
  color: string;
}

const Page: React.FC = () => {
  const initialProduct: Product = {
    id: 0,
    name: "",
    description: "",
    unit: "",
    price: 0,
    productCode: "",
    category: "",
    brand: "",
    color: "",
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentProduct, setCurrentProduct] = useState<Product>(initialProduct);
  const [newItem, setNewItem] = useState<boolean>(false);

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
    setCurrentProduct({ ...product });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editing) {
      updateProduct(currentProduct.id, currentProduct);
    } else {
      addProduct(currentProduct);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full p-4">
      <div className="flex items-end justify-between gap-4 border-b-2 border-gray-300 p-2 sticky top-0 left-0 bg-[white] z-20">
        <h2 className="text-2xl font-semibold leading-relaxed uppercase">
          Inventory
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded p-1"
            onChange={handleSearch}
          />
          <span className="text-gray-500">({products.length} items)</span>
          <button
            onClick={() => setNewItem(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto relative z-10 hidescrollbar">
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
                <td className="p-2 text-left">{product.name}</td>
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
      {editing && (
        <div className=" w-fit mt-4 p-4 border rounded shadow-lg bg-white absolute top-20  right-0 bg-[white] z-50">
          <h3 className="text-xl font-bold mb-2">Edit Product</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input type="hidden" name="id" value={currentProduct.id} />
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={currentProduct.name}
              onChange={handleInputChange}
            />
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={currentProduct.description}
              onChange={handleInputChange}
            />
            <label>Product Code:</label>
            <input
              type="text"
              name="productCode"
              value={currentProduct.productCode}
              onChange={handleInputChange}
            />
            <label>Unit:</label>
            <input
              type="text"
              name="unit"
              value={currentProduct.unit}
              onChange={handleInputChange}
            />
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={currentProduct.price}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Update
            </button>
          </form>
        </div>
      )}
      {newItem && (
        <div className=" w-fit mt-4 p-4 border rounded shadow-lg bg-white absolute top-20  right-0 bg-[white] z-50">
          <h3 className="text-xl font-bold mb-2">Add Product</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input type="hidden" name="id" value={currentProduct.id} />
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={currentProduct.name}
              onChange={handleInputChange}
            />
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={currentProduct.description}
              onChange={handleInputChange}
            />
            <label>Product Code:</label>
            <input
              type="text"
              name="productCode"
              value={currentProduct.productCode}
              onChange={handleInputChange}
            />
            <label>Unit:</label>
            <input
              type="text"
              name="unit"
              value={currentProduct.unit}
              onChange={handleInputChange}
            />
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={currentProduct.price}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add
            </button>
            <button
              onClick={() => setNewItem(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded bg-[red]/25"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Page;
