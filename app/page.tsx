"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { useWindowScroll } from "react-use";

export default function Home() {
  const [blinker, stopBlinker] = useState<boolean>(true);
  setTimeout(() => stopBlinker(false), 3000);
  console.log(blinker);
  const [scroll, setScroll] = useState<boolean>(false);
  const scrollref = useRef<any>(null);
  console.log(scrollref);
  // const scrollY = useWindowScroll();
  // const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    setScroll(true);
  }, [scrollY]);
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      ref={scrollref}>
      <div className="w-full h-[100vh] bg-gray-400 flex flex-col items-center justify-center gap-0 relative">
        <div className=" text-black flex items-center justify-center px-4 ">
          <Image
            src={"/Assets/logo.png"}
            alt="logo"
            width={"100"}
            height={"100"}
            className={`${blinker && "animate-pulse"}`}
          />
          <div className="text-4xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.gray.600),theme(colors.gray.600),theme(colors.sky.700),theme(colors.sky.600),theme(colors.gray.600),theme(colors.gray.600))] bg-[length:200%_auto] animate-gradient">
            {!blinker && (
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter.typeString("OCTAWEAR").start();
                }}
              />
            )}
          </div>
        </div>
        <div className="w-full text-xl text-right text-black font-semibold leadinng-[120%]  overflow-hidden px-4 relative -top-[24px]">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("")
                .pauseFor(6000)
                .typeString("Dress with style")
                .start();
            }}
          />
        </div>
      </div>
      <div className="w-full h-[100vh] bg-gray-600"></div>
    </main>
  );
}
