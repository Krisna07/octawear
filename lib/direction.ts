import { MouseEvent } from "react";

// Define Direction enum
export enum Direction {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

// Utility function to get direction based on mouse position and element bounding
const getMouseDirection = (
  e: MouseEvent<HTMLElement>,
  elemBounding: DOMRect
): Direction | null => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const topEdgeDist = Math.abs(elemBounding.top - mouseY);
  const bottomEdgeDist = Math.abs(elemBounding.bottom - mouseY);
  const leftEdgeDist = Math.abs(elemBounding.left - mouseX);
  const rightEdgeDist = Math.abs(elemBounding.right - mouseX);

  const min = Math.min(
    topEdgeDist,
    bottomEdgeDist,
    leftEdgeDist,
    rightEdgeDist
  );

  switch (min) {
    case leftEdgeDist:
      return Direction.LEFT;
    case rightEdgeDist:
      return Direction.RIGHT;
    case topEdgeDist:
      return Direction.TOP;
    case bottomEdgeDist:
      return Direction.BOTTOM;
    default:
      return null;
  }
};

export default getMouseDirection;
