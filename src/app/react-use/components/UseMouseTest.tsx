"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useMouse.md
import { useRef } from "react";
import { useMouse } from "react-use";

export const UseMouseTest = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(
    ref as React.RefObject<HTMLElement>
  );

  return (
    <div ref={ref}>
      <div>
        Mouse position in document - x:{docX} y:{docY}
      </div>
      <div>
        Mouse position in element - x:{elX} y:{elY}
      </div>
      <div>
        Element position- x:{posX} y:{posY}
      </div>
      <div>
        Element dimensions - {elW}x{elH}
      </div>
    </div>
  );
};
