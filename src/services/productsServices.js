import { useQuery } from "@tanstack/react-query";

import {
  getAllUserProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  addProduct,
} from "src/api/productApi";

const useGetProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: getAllUserProducts });
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
