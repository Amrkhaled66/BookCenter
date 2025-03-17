const arabicData = (data) => {
  const orderData = new Date(data);
  const formattedData = orderData.toLocaleDateString("ar-Eg", {
    minute:"2-digit",
    hour:"2-digit",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  return formattedData;
};

export default arabicData;
