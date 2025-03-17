import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import {
  getAllUserProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "src/services/api/productApi";

const useGetProducts = () => {
  const { pathname } = useLocation();
  return useQuery({
    queryKey: ["products",pathname],
    queryFn: () => getAllUserProducts(pathname),
  });
};

const useGetProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
};

const useUpdateProduct = (id, data) => {
  return useQuery(["updateProduct", id], () => updateProduct(id, data));
};

const useDeleteProduct = (id) => {
  return useQuery(["deleteProduct", id], () => deleteProduct(id));
};

export {
  useGetProducts,
  useGetProductById,
  useUpdateProduct,
  useDeleteProduct,
};
