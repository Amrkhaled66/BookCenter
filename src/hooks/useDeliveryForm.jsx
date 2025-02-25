import { useState } from "react";

import { getUser } from "src/services/authServices";
export const useDeliveryForm = () => {
  const user = getUser();

  const { city, state, descriptiveAddress } = user.address;
  const [formData, setFormData] = useState({
    city: city || "",
    state: state || "",
    descriptiveAddress: descriptiveAddress || "",
    secondPhone: user.secondaryPhone || "",
    firstPhone: user.phone,
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return { formData, updateFormData };
};
