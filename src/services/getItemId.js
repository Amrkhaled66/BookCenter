const getItemId = (Arr, name) => {
  return Arr?.find((cat) => cat.name === name)?._id;
};
export default getItemId;
