"use client";

import Hero from "./components/Homepage/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-400">
      <Hero />

      <div className="w-full h-screen py-8  grid md:grid-cols-2 gap-2 ">
        <div className="w-full text-6xl leading-[120%] bg-red-600  text-yellow-600 text-center grid place-items-center ">
          <div>
            <p className=" font-bold">WEARS</p>
            <p className=" font-bold">That Defines</p>
            <p className=" font-bold">You</p>
          </div>
        </div>

        <div className=" w-full text-6xl leading-[120%]  bg-yellow-600 text-red-600 text-left grid place-items-center ">
          <div>
            <p className=" font-bold">SNEAKERS</p>
            <p className=" font-bold">Makes you feel</p>
            <p className=" font-bold">Easy</p>
          </div>
        </div>
      </div>
    </main>
  );
}
