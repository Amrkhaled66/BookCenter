import { createContext, useState, useCallback } from "react";

const categoryContext = createContext();

export default function ProductContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("studentBooks");

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const ctxValue = {
    selectCategory,
    selectedCategory,
  };

  return (
    <categoryContext.Provider value={ctxValue}>
      {children}
    </categoryContext.Provider>
  );
}

export { categoryContext };
