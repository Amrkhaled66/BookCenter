import { createContext } from "react";
import { useState } from "react";
export const showMobileMenuContext = createContext();
export default function ShowMobileMenuContextProvider({ children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };
  return (
    <showMobileMenuContext.Provider
      value={{ showMobileMenu, toggleMenu }}
    >
      {children}
    </showMobileMenuContext.Provider>
  );
}
