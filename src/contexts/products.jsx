import { createContext, useContext, useState } from "react";
import { useGetProducts } from "src/services/productsServices";
import useCategory from "src/hooks/useCategory";

const productsCtx = createContext();

export default function ProductsContextProvider({ children }) {
  const [productsFilter, setProductsFilter] = useState({
    year: "",
    seller: "",
    subject: "",
  });

  const { selectedCategory } = useCategory();
  const { data, isLoading, isError } = useGetProducts();



  const selectedProducts =
    (!isLoading &&
      data?.products.find((category) => category._id === selectedCategory)
        ?.products) ||
    [];

  const filteredProducts =
    selectedCategory === "67cf95e8ed649e087d873ee8"
      ? selectedProducts.filter((product) => {
          return (
            (!productsFilter.year || product.year === productsFilter.year) &&
            (!productsFilter.seller ||
              product.seller._id === productsFilter.seller) &&
            (!productsFilter.subject ||
              product.subject?._id === productsFilter.subject)
          );
        })
      : selectedProducts;

  const ctxValue = {
    filteredProducts,
    isLoading,
    isError,
    setProductsFilter,
  };

  return (
    <productsCtx.Provider value={ctxValue}>{children}</productsCtx.Provider>
  );
}

export const useProducts = () => {
  return useContext(productsCtx);
};
