import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import TransparentBtn from "src/components/ui/TransparentBtn";

import {
  useDeleteSeller,
  useGetAllCategories,
  useGetProductOptions,
  useDeleteProduct,
} from "src/hooks/useAdminMutations";
import { useState, useEffect } from "react";

import Alert from "src/components/ui/Alert";
import getItemId from "src/services/getItemId";

export default function Delete() {
  const [chosenCategory, setChosenCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { data: categories = [], isLoading: categoriesLoading } =
    useGetAllCategories();

  const selectedCategoryId = getItemId(categories, chosenCategory);
  const { data: productOptions = [], refetch } =
    useGetProductOptions(selectedCategoryId);
  const { mutate: deleteProduct, isPending: deleteLoading } =
    useDeleteProduct();

  const handleSubmit = () => {
    if (!selectedProduct)
      return Alert("حدث خطأ", "فين المنتج اللي هنحذفه", "error", "حسناً");

    const id = getItemId(productOptions.products, selectedProduct);

    deleteProduct(id, {
      onSuccess: () =>
        Alert("تم بنجاح", "تم حذف المنتج بنجاح", "success", "حسناً"),
      onError: () => Alert("حدث خطأ", "تواصل مع الدعم", "error", "حسناً"),
    });
  };

  useEffect(() => {
    if (selectedCategoryId) {
      refetch();
    }
  }, [selectedCategoryId, refetch]);
  if (categoriesLoading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="w-full space-y-12">
      <div className="flex w-full flex-col items-center gap-y-10">
        <ComboboxDropdown
          width="w-[85%] sm:w-[50%]"
          onChange={(value) => {
            setChosenCategory(value);
            refetch();
          }}
          options={categories.map((cat) => cat.name)}
          defaultValue="اختر القسم"
        />
        <ComboboxDropdown
          onChange={(value) => {
            setSelectedProduct(value);
          }}
          width="w-[85%] sm:w-[50%]"
          options={productOptions?.products?.map((product) => product.name)}
          defaultValue="اختر المنتج"
        />
      </div>
      <TransparentBtn
        onClick={handleSubmit}
        bgColor="#f43f5e"
        className="mx-auto w-[85%] text-white sm:w-[50%]"
        loading={deleteLoading}
      >
        حذف
      </TransparentBtn>
    </div>
  );
}
