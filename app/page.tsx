"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  const [blinker, stopBlinker] = useState<boolean>(true);
  const [subTitle, setSubtitle] = useState<boolean>(false);
  setTimeout(() => stopBlinker(false), 3000);
  setTimeout(() => setSubtitle(true), 6000);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-400">
      <div
        className={`transition-all  relative h-[100vh]
        }   flex flex-col items-center justify-center gap-0  `}>
        <div
          className={`h-fit text-black flex items-center justify-center px-4 top-0 left-0`}>
          <Image
            src={"/Assets/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className={`${blinker && "animate-pulse"} transition-all  `}
          />
          <div
            className={`relative w-fit h-fit transition-all  text-4xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.gray.600),theme(colors.gray.600),theme(colors.sky.700),theme(colors.sky.600),theme(colors.gray.600),theme(colors.gray.600))] bg-[length:200%_auto] animate-gradient`}>
            {!blinker && (
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter.typeString("OCTAWEAR").start();
                }}
              />
            )}
            <div className="w-full text-sm text-right text-black font-semibold leadinng-[120%]  overflow-hidden px-4 absolute">
              {subTitle && (
                <TypewriterComponent
                  onInit={(typewriter) => {
                    typewriter.typeString("Dress with style").start();
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen p-8 bg-blue-600 grid grid-cols-2 gap-2 ">
        <div className="bg-red-600  text-yellow-600 text-center grid place-items-center ">
          <div>
            <p className="text-9xl font-bold">WEARS</p>
            <p className="text-9xl font-bold">That Defines</p>
            <p className="text-9xl font-bold">You</p>
          </div>
        </div>

        <div className="bg-yellow-600 text-red-600 text-left grid place-items-center ">
          <div>
            <p className="text-9xl font-bold">SNEAKERS</p>
            <p className="text-9xl font-bold">Makes you feel</p>
            <p className="text-9xl font-bold">Easy</p>
          </div>
        </div>
      </div>
    </main>
  );
}
