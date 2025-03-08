import { createContext, useState } from "react";

export const SideBarContext = createContext("");

export default function SideBarContextProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [closed, setClosed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  const toggleClosed = () => {
    setClosed((prev) => !prev);
  };

  const closeSideBar = () => {
    setClosed(true);
  };

  const openSideBar = () => {
    setClosed(false);
  };

  return (
    <SideBarContext.Provider
      value={{
        collapsed,
        toggleCollapsed,
        closeSideBar,
        openSideBar,
        closed,
        toggleClosed,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
