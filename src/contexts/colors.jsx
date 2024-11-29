import { createContext } from "react";

const ColorsContext = createContext();

export default function ColorsContextProvider({children}) {
  const Colors = {
    mainColor: "#3DA9FC",
    secondColor: "#ef4565",
    mainTextColor:"#094067",
  };
  return <ColorsContext.Provider value={Colors}> {children} </ColorsContext.Provider>;
}
export { ColorsContext };
