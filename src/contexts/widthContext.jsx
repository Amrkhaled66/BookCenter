import { useState, createContext, useEffect } from "react";

export const WidthContext = createContext("");

const WidthContextProvider = ({ children }) => {
  const [width, setWidth] = useState(undefined);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const isSmallScreen = width < 900;

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const widthCtxValue = {
    width,
    handleResize,
    isSmallScreen,
  };
  return (
    <WidthContext.Provider value={widthCtxValue}>
      {children}
    </WidthContext.Provider>
  );
};

export default WidthContextProvider;
