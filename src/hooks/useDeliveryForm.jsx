import { useState } from "react";

import { getUser } from "src/services/authServices";
export const useDeliveryForm = () => {
  const user = getUser();

  const [formData, setFormData] = useState({
    city: user?.address?.city || "",
    state: user?.state || "",
    descriptiveAddress: user?.address?.descriptiveAddress || "",
    secondPhone: user?.secondaryPhone || "",
    firstPhone: user?.phone,
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return { formData, updateFormData };
};
