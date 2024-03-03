import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  const [blinker, stopBlinker] = useState<boolean>(true);
  const [subTitle, setSubtitle] = useState<boolean>(false);
  const [left, setLeft] = useState<boolean>(false);
  setTimeout(() => stopBlinker(false), 3000);
  setTimeout(() => setSubtitle(true), 6000);
  const HeroRef = useRef(null);

  const scaleHero = (scrollHeight: any) => {
    // Calculate a negative scaling factor based on scroll position
    const scaleFactor = Math.min(1, scrollHeight / window.innerHeight);

    // Apply the adjusted scaling factor to the HeroRef element
    HeroRef.current.style.transform = `scale(${scaleFactor})`;
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight: any = HeroRef.current?.getBoundingClientRect().top;
      scaleHero(scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={HeroRef}
      className={`transition-all  relative h-[100vh]
        }   flex flex-col items-center justify-center gap-0  `}>
      <div
        className={`h-fit text-black flex items-center justify-center px-4 top-0 left-0 `}>
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
  );
};

export default Hero;
