"use client";
import { ButtonHTMLAttributes, FC, useEffect, useRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import getMouseDirection from "@/lib/direction"; // Importing the utility function
import { Direction } from "readline";
const buttonVarients = cva("active:", {
  variants: {
    variant: {
      default: "bg-dark-100 text-beige-900 rounded ",
      primary: "bg-magenta-300 rounded text-beige-900 ",
      ghost: "shadow-[0_0_1px_0_gray] rounded-full",
      link: "bg-transparent text-dark  rounded shadow-[0_0_1px_0_gray]",
    },
    size: {
      default: "text-[20px] py-2 px-4 leading-[110%]",
      sm: " text-[12px] py-1 px-2 leading-[90%]",
      lg: " text-[32px] px-4 py-1 leading-[150%]",
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
  variant = "default",
  size = "default",
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
        "flex w-fit h-fit items-center gap-2 relative overflow-hidden "
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="flex items-center  gap-2 relative z-20 leading-4 ">
        {children}
        {icon && !hoverIcon ? (
          <span>{Icon} </span>
        ) : (
          <span>{!hover ? Icon : hoverIcon}</span>
        )}
      </div>
      {direction && (
        <div
          style={{ [direction]: hover ? 0 : "-200%" }}
          className={`w-full h-full scale-[200%] absolute  duration-[400ms] bg-gradient-to-tr from-magenta  to-blue-600 transition-all z-10`}
        />
      )}
    </button>
  );
};

export default Button;
