import { useEffect, useState } from "react";
import AdminContainer from "src/components/ui/AdminContainer";
import { VscDiffAdded } from "react-icons/vsc";
import AdminForm from "src/components/ui/AdminForm";

import UserInfo from "src/components/DashBoard/AddManualOrder/UserInfo";
import ProductSelection from "src/components/DashBoard/AddManualOrder/ProductSelection";

import useFormValidation from "src/hooks/useFormValidation";
import { useGetUserByPhone } from "src/hooks/useAdminMutations";
import { useGetProductByName4Admin } from "src/hooks/useAdminMutations";
import useColors from "src/hooks/useColors";


import FormatePhoneNum from "src/utils/formatePhoneNum";
import validatePhoneNum from "src/utils/validatePhoneNum";
import TransparentBtn from "src/components/ui/TransparentBtn";
import getItemId from "src/services/getItemId";

import Alert from "src/components/ui/Alert";
import Loader from "src/components/ui/icons/Loader";
const validate = (phone) => {
  const errors = {};
  phone = FormatePhoneNum(phone);
  if (!validatePhoneNum(phone)) errors.phone = "برجاء كتابة الرقم بشكل صحيح";
  return {
    data: {
      phone,
    },
    errors,
  };
};

export default function CreateOrder() {
  const [productName, setProductName] = useState("");
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([
    { id: 1, productId: "", quantity: 1 },
  ]);
  const [availableProducts, setAvailableProducts] = useState([]);


  const { errors, handleValidation, handleError } = useFormValidation(validate);
  const { mutate: getUserMutation, isPending: getUserPending } = useGetUserByPhone();
  const getProductMutation = useGetProductByName4Admin();
  const { colors } = useColors();
  const secondColor = colors.get("secondColor");


  const searchUser = (e) => {
    e.preventDefault()
    const form = new FormData(e.target);
    const { phone } = Object.fromEntries(form.entries());
    const { isValid, formattedData } = handleValidation(phone);

    if (phone === user?.phone) return;

    if (!isValid) return;

    getUserMutation(formattedData.phone, {
      onSuccess: (data) => setUser(data),
      onError: (err) => handleError(err),
    })

  };

  useEffect(() => {
    const getProduct = setTimeout(() => {
      getProductMutation.mutate(productName, {
        onSuccess: (data) => setAvailableProducts(data),
        onError: (err) => handleError(err),
      })
    }, 1000)
    return () => clearTimeout(getProduct)

  }, [productName])


  const handleProductChange = (value) => {
    setProductName(value);
  }

  const updateProductsQuantity = (value, index) => {

    setProducts((prev) => {
      const updatedProducts = [...prev];
      updatedProducts[index] = { ...updatedProducts[index], "quantity": Number(value) };
      return updatedProducts;
    });
  }

  const updateProductsName = (value, index) => {
    const id = getItemId(availableProducts, value)
    if (products.find(product => product.productId === id)) {
      removeProductField(products.length - 1)
      return Alert("خطأ", "هذا المنتج موجود مسبقا", "error", "حسناً")
    }
    setProducts((prev) => {
      const updatedProducts = [...prev];
      updatedProducts[index] = { ...updatedProducts[index], "productId": id };
      return updatedProducts;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(products)
  };

  const addProductField = () => {
    setProducts([...products, { id: Date.now(), productId: "", quantity: 1 }]);
  };

  const removeProductField = (index) => {
    if (products.length > 1) {
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    }
  };
  return (
    <AdminContainer title="اٍنشاء اوردر يدوي" Icon={<VscDiffAdded />}>
      <div className="mx-auto space-y-6 w-full">

        <AdminForm error={errors?.phone} onSubmit={searchUser} label="رقم الهاتف" inputName="phone" />
        {getUserPending && <p className=" w-fit flex items-center text-lg gap-x-4 font-semibold mx-auto mt-4 text-center">
          <Loader />
          جاري البحث
        </p>}
        {user && !getUserPending &&
          (
            <div className="lg:w-[50%] w-[90%] mx-auto ">
              <UserInfo user={user} />
              <form onSubmit={handleSubmit} action="">

                <ProductSelection
                  updateProductsName={updateProductsName}
                  updateProductsQuantity={updateProductsQuantity}
                  products={products}
                  handleProductChange={handleProductChange}
                  addProductField={addProductField}
                  removeProductField={removeProductField}
                  availableProducts={availableProducts}

                />

                <div className="flex justify-end">
                  <TransparentBtn bgColor={secondColor} type="submit" className="rounded-md w-full bg-second-color px-6 py-2 text-white">
                    أنشاء الاوردر
                  </TransparentBtn>
                </div>
              </form>
            </div>
          )}

      </div>
    </AdminContainer>
  );
}
