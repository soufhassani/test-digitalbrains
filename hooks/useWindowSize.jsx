import { useEffect, useState } from "react";

console.log(typeof window);

const useWindowSize = () => {
  if (typeof window !== undefined) {
    const [widthSize, setWidthSize] = useState(420);
    useEffect(() => {
      const handleResize = () => {
        setWidthSize(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);

      console.log(widthSize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [widthSize]);
    return widthSize;
  }
};

export default useWindowSize;
