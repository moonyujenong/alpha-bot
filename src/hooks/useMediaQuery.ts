import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeWidth);

    resizeWidth();
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, []);

  return innerWidth;
};

export default useMediaQuery;
