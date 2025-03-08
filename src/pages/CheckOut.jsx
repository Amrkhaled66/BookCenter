import PageHeader from "src/components/ui/PageHeader";
import DeliveryInfo from "src/components/CheckOut/DeliveryInfo";
import OrderSummary from "src/components/CheckOut/OrderSummary";

import { useState, useCallback } from "react";
import { useCreateInvoice } from "src/hooks/useInvoiceMutations";
import useCart from "src/hooks/useCart";

import validateCheckoutForm from "src/utils/validateCheckoutForm";
import { getUser } from "src/services/authServices";

import Alert from "src/components/ui/Alert";
const CheckOut = () => {
  const { name, phone, secondaryPhone, address } = getUser();
  const { cart } = useCart();

  const [formData, setFormData] = useState({
    name,
    firstPhone: phone || "",
    secondPhone: secondaryPhone || "",
    city: address.city,
    state: address.state,
    descriptiveAddress: address.descriptiveAddress || "",
  });
  const [errors, setErrors] = useState();

  const mutate = useCreateInvoice();
  const handleSubmit = useCallback(() => {
    const errors = validateCheckoutForm(formData);
    if (Object.keys(errors).length > 0) {
      Alert(
        "في مشكلة في بيانات التسليم",
        "اطلع بص عليها تاني",
        "error",
        "تمام",
      );
      setErrors(errors);
      return;
    }
    mutate.mutate({
      cart,
      deliveryInfo: formData,
    });
    setErrors({});
  }, [formData]);

  return (
    <div className="relative flex min-h-screen flex-col items-center bg-white-color py-[100px] font-cairo">
      <div className="container flex w-full flex-col items-center gap-y-10 py-[100px] sm:pt-0">
        <PageHeader title={"مراجعة الفاتورة"} />
      </div>
      <div className="w-screen">
        <div className="flex w-full flex-col justify-between gap-x-16 gap-y-16 pt-10 sm:px-8">
          <DeliveryInfo
            errors={errors}
            formData={formData}
            setFormData={setFormData}
          />
          <OrderSummary city={formData.city} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
