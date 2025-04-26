import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosAdmin from "./useAxiosAdmin";

import {
  getUserProfile as getUserProfileRequest,
  getUserId as getUserIdRequest,
  updatePassword as updatePasswordRequest,
  addNewCategory as addNewCategoryRequest,
  getAllCategories as getCategoriesRequest,
  getUserByPhone,
  updateCategory,
  deleteCategory,
  addNewSubject,
  getAllSubjects,
  deleteSubject,
  updateSubject,
  addNewSeller,
  getAllSellers,
  updateSeller,
  deleteSeller,
  addProduct,
  deleteProduct,
  updateProduct,
  getProductsOptions,
  getStockRecord,
  updateStock,
  getExpiredOrders,
  releaseReservedStock,
  getProduct4AdminRequest,
  getProductByNAme,
  addManualOrder
} from "src/services/api/admin";

const useGetUserProfile = (id) => {
  const axiosAdmin = useAxiosAdmin();
  return useQuery({
    queryKey: [`user ${id}`],
    queryFn: () => getUserProfileRequest({ axiosAdmin, id }),
  });
};

const useGetUserId = () => {
  return useMutation({
    mutationFn: (phone) => getUserIdRequest(phone),
  });
};

const useGetUserByPhone = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (phone) => getUserByPhone({ axiosAdmin, phone }),
  });
}

const useGetProductByName4Admin = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (name) => getProductByNAme({ axiosAdmin, name }),
  });
};

const useUpdatePassword = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (data) => updatePasswordRequest({ axiosAdmin, data }),
  });
};

const useAddNewCategory = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (sentData) => addNewCategoryRequest({ axiosAdmin, sentData }),
  });
};

const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesRequest,
    refetchOnMount: true,
    staleTime: 0,
  });
};

const useUpdateCategory = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: ({ id, sentData }) =>
      updateCategory({ axiosAdmin, sentData, id }),
  });
};

const useDeleteCategory = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (id) => deleteCategory({ axiosAdmin, id }),
  });
};

const useAddNewSubject = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (sentData) => addNewSubject({ axiosAdmin, sentData }),
  });
};

const useGetAllSubjects = () => {
  return useQuery({
    queryKey: ["subjects"],
    queryFn: getAllSubjects,
    refetchOnMount: true,
    staleTime: 0,
  });
};

const useUpdateSubject = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: ({ id, sentData }) =>
      updateSubject({ axiosAdmin, sentData, id }),
  });
};

const useDeleteSubject = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (id) => deleteSubject({ axiosAdmin, id }),
  });
};

const useAddNewSeller = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (sentData) => addNewSeller({ axiosAdmin, sentData }),
  });
};

const useGetAllSellers = (category) => {
  return useQuery({
    queryKey: ["Sellers"],
    queryFn: () => getAllSellers(category),
    refetchOnMount: true,
    staleTime: 0,
  });
};

const useUpdateSeller = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: ({ id, sentData }) =>
      updateSeller({ axiosAdmin, sentData, id }),
  });
};

const useDeleteSeller = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (id) => deleteSeller({ axiosAdmin, id }),
  });
};

const useAddNewProduct = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (sentData) => addProduct({ axiosAdmin, sentData }),
  });
};

const useUpdateProduct = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: ({ id, sentData }) =>
      updateProduct({ axiosAdmin, sentData, id }),
  });
};

const useDeleteProduct = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (id) => deleteProduct({ axiosAdmin, id }),
  });
};

const useGetProductOptions = (category) => {
  return useQuery({
    queryKey: ["productOptions"],
    queryFn: () => getProductsOptions(category),
  });
};

const useGetStockRecord = () => {
  const axiosAdmin = useAxiosAdmin();

  return useMutation({
    mutationFn: (id) => getStockRecord({ axiosAdmin, id }),
  });
};

const useUpdateStock = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (sentData) => updateStock({ axiosAdmin, sentData }),
  });
};

const useGetExpiredOrders = () => {
  const axiosAdmin = useAxiosAdmin();
  return useQuery({
    queryKey: ["expiredOrders"],
    queryFn: () => getExpiredOrders({ axiosAdmin }),
  });
};

const useReleaseReservedStock = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: () => releaseReservedStock({ axiosAdmin }),
  });
};

const useGetProduct4Admin = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (id) => getProduct4AdminRequest({ axiosAdmin, id }),
  });
};

const useAddManualOrder = () => {
  const axiosAdmin = useAxiosAdmin();
  return useMutation({
    mutationFn: (sentData) => addManualOrder({ axiosAdmin, sentData }),
  });
};

export {
  useGetUserProfile,
  useGetUserId,
  useUpdatePassword,
  useAddNewCategory,
  useGetAllCategories,
  useUpdateCategory,
  useDeleteCategory,
  useAddNewSubject,
  useGetAllSubjects,
  useUpdateSubject,
  useDeleteSubject,
  useAddNewSeller,
  useGetAllSellers,
  useUpdateSeller,
  useDeleteSeller,
  useAddNewProduct,
  useUpdateProduct,
  useDeleteProduct,
  useGetProductOptions,
  useGetStockRecord,
  useUpdateStock,
  useGetExpiredOrders,
  useReleaseReservedStock,
  useGetProduct4Admin,
  useGetUserByPhone,
  useGetProductByName4Admin,
  useAddManualOrder
};
