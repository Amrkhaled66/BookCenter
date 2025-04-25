import axiosInstance from "src/utils/axiosInstance";

const getAllUserProducts = async (location) => {
  const limit = location === "/" ? 4 : null;
  const { data } = await axiosInstance.get("/products/user", {
    params: {
      limit,
    },
  });

  return data;
};

const getProductById = async (id) => {
  const { data } = await axiosInstance.get(`/products/${id}`);
  return data;
};

const addProduct = async (data) => {
  const { data: response } = await axiosInstance.post("/products", data);
  return response;
};

const deleteProduct = async (id) => {
  const { data } = await axiosInstance.delete(`/products/${id}`);
  return data;
};

const updateProduct = async (id, data) => {
  const { data: response } = await axiosInstance.patch(`/products/${id}`, data);
  return response;
};

export {
  getAllUserProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
