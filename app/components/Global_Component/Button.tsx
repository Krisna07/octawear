"use client";
import { ButtonHTMLAttributes, FC, useEffect, useRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import getMouseDirection from "@/lib/direction"; // Importing the utility function
import { Direction } from "readline";
const buttonVarients = cva("active:", {
  variants: {
    variant: {
      default:
        "px-4 py-2 button rounded-full flex relative items-center gap-2 bg-dark ",

      primary: "bg-dark-500 rounded-lg text-[white] ",

      ghost:
        "bg-transparent text-dark  rounded shadow-[0_0_0_1px] shadow-[gray]/25",

      link: "bg-transparent text-dark  rounded shadow-[0_0_1px_0_gray]",
    },
    size: {
      default: " py-1 px-4 font-[600]",
      sm: " text-[12px] py-1 px-2",
      lg: " text-lg  px-8",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
  icon?: boolean;
  Icon?: any;
  hoverIcon?: any;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  icon,
  Icon,
  hoverIcon,
  ...props
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (buttonRef.current) {
        const elemBounding = buttonRef.current.getBoundingClientRect();
        const dir: any = getMouseDirection(e, elemBounding);
        if (dir) setDirection(dir);
      }
    };
    const mouseMove: Window = window;
    mouseMove.addEventListener("mousemove", handleMouseMove);

    return () => {
      mouseMove.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <button
      ref={buttonRef}
      className={cn(
        buttonVarients({ variant, size, className }),
        "w-fit leading-tight relative overflow-hidden hover:text-[black] hover:scale-[1.1] duration-[400ms] box-border "
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="flex items-center justify-center gap-2 relative z-20 ">
        {children}

        {icon && !hoverIcon ? (
          <span>{Icon} </span>
        ) : (
          <span>{!hover ? Icon : hoverIcon} </span>
        )}
      </div>
      {direction && (
        <div
          style={{ [direction]: hover ? 0 : "-200%" }}
          className={`w-full h-full scale-[200%] absolute  duration-[400ms] bg-gradient-to-tr from-magenta  to-blue transition-all z-10`}
        />
      )}
    </button>
  );
};

export default Button;
