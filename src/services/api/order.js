import axiosInstance from "src/utils/axiosInstance";

const addOrder = async ({ axiosPrivate, data }) => {
  const { data: response } = await axiosPrivate.post("/order/add", data);
  return response;
};

const getShippingPrice = async (city) => {
  const { data } = await axiosInstance.get(`/shipping?city=${city}`);
  return data;
};

const createInvoice = async ({ axiosPrivate, invoiceData }) => {
  const { data } = await axiosPrivate.post(
    "/invoice/createInvoice",
    invoiceData,
  );
  return data;
};

export { addOrder, getShippingPrice, createInvoice };
