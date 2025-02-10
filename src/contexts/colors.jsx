import { createContext } from "react";

const ColorsContext = createContext();

export default function ColorsContextProvider({ children }) {
  const colors = new Map([
    ["mainColor", "#3DA9FC"],
    ["secondColor", "#ef4565"],
    ["thirdColor", "#20C997"],
    ["mainTextColor", "#094067"],
  
  ]);

  return (
    <ColorsContext.Provider value={{ colors }}>
      {children}
    </ColorsContext.Provider>
  );
}
export { ColorsContext };
