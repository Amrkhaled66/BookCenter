import { createContext, useEffect, useState } from "react";

export const isNavStickyContext = createContext();

export default function IsNavStickyContextProvider({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <isNavStickyContext.Provider value={{ isSticky }}>
      {children}
    </isNavStickyContext.Provider>
  );
}
