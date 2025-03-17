import { createContext, useState } from "react";
import { useGetAllCategories } from "src/hooks/useAdminMutations";
const categoryContext = createContext();

export default function CategoryContextProvider({ children }) {
  const { data, isLoading } = useGetAllCategories();
  const [selectedCategory, setSelectedCategory] = useState(
    "67cf95e8ed649e087d873ee8",
  );

  const selectCategory = (category) => {
    setSelectedCategory(category);      
  };

  const ctxValue = {
    selectCategory,
    selectedCategory,
    departments: isLoading ? null : data,
    departmentsLoading: isLoading,
  };

  return (
    <categoryContext.Provider value={ctxValue}>
      {children}
    </categoryContext.Provider>
  );
}

export { categoryContext };
