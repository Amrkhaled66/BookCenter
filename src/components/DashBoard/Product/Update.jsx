import { useState, useEffect } from "react";
import useColors from "src/hooks/useColors";
import {
  useGetAllCategories,
  useGetAllSellers,
  useGetAllSubjects,
  useUpdateProduct,
  useGetProductOptions,
} from "src/hooks/useAdminMutations";
import { getProductById } from "src/services/api/productApi";

import Switch from "src/components/ui/Switch";
import TransparentBtn from "src/components/ui/TransparentBtn";
import InputFiled2nd from "src/components/ui/InputFiled2nd";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import { years } from "src/services/yearServices";
import getItemId from "src/services/getItemId";
import { useMutation } from "@tanstack/react-query";
import Alert from "src/components/ui/Alert";

export default function Update() {
  const { colors } = useColors();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const [isUnAvailable, setIsUnAvailable] = useState(false);
  const { data: categories = [], isLoading: categoriesLoading } =
    useGetAllCategories();
  const { data: sellers = [], isLoading: sellersLoading } = useGetAllSellers();
  const { data: subjects = [], isLoading: subjectsLoading } =
    useGetAllSubjects();
  const { mutate, isPending } = useUpdateProduct();
  const { mutate: getProduct } = useMutation({
    mutationFn: (id) => getProductById(id),
    onSuccess: (data) => setSelectedProduct(data),
  });

  const mainColor = colors.get("mainColor");

  const selectedCategoryId = getItemId(categories, selectedCategory);
  const { data: productOptions = [], refetch: refetchProductOptions } =
    useGetProductOptions(selectedCategoryId);

  useEffect(() => {
    if (selectedCategoryId) {
      refetchProductOptions();
    }
  }, [selectedCategoryId, refetchProductOptions]);
  useEffect(() => {
    if (selectedProduct) {
      setIsVisible(selectedProduct.visible ?? false);
      setIsUnAvailable(selectedProduct.isUnAvailable ?? false);
    }
  }, [selectedProduct]);

  const isLoading = categoriesLoading || sellersLoading || subjectsLoading;

  const getTheProduct = (id) => {
    getProduct(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    const imageFile = formData.get("image");

    const categoryId = getItemId(categories, data.category);
    const sellerId = getItemId(sellers, data.seller);
    const subjectId = data.subject && getItemId(subjects, data.subject);
    const yearValue =
      data.year && years.find((year) => year.text === data.year).value;
    const items = data.items?.split("\n");

    const sentData = new FormData();

    // Append only if the image is changed
    if (imageFile && imageFile.size > 0) {
      sentData.append("image", imageFile);
    }

    // Append only if the category is changed
    if (categoryId && categoryId !== selectedProduct.category._id) {
      sentData.append("category", categoryId);
    }

    // Append only if the description is changed
    if (data.description && data.description !== selectedProduct.description) {
      sentData.append("description", data.description);
    }

    // Append only if the skuCode is changed
    if (data.skuCode && data.skuCode !== selectedProduct.skuCode) {
      sentData.append("skuCode", data.skuCode);
    }

    // Append only if the name is changed
    if (data.name && data.name !== selectedProduct.name) {
      sentData.append("name", data.name);
    }

    // Append only if the seller is changed
    if (sellerId && sellerId !== selectedProduct.seller._id) {
      sentData.append("seller", sellerId);
    }

    // Append only if the subject is changed
    if (subjectId && subjectId !== selectedProduct.subject?._id) {
      sentData.append("subject", subjectId);
    }

    // Append only if the year is changed
    if (yearValue && yearValue !== selectedProduct.year) {
      sentData.append("year", yearValue);
    }

    // Append only if the items are changed
    if (
      data.items &&
      data.items.trim().length > 0 &&
      JSON.stringify(items) !== JSON.stringify(selectedProduct.items)
    ) {
      sentData.append("items", JSON.stringify(items));
    }

    // Append only if the discountPrice is changed
    if (
      data.discountPrice &&
      parseInt(data.discountPrice) !== selectedProduct.discountPrice
    ) {
      sentData.append("discountPrice", parseInt(data.discountPrice));
    }

    // Append only if the price is changed
    if (data.price && parseInt(data.price) !== selectedProduct.price) {
      sentData.append("price", parseInt(data.price));
    }

    // Append only if the inStock is changed
    if (data.inStock && parseInt(data.inStock) !== selectedProduct.inStock) {
      sentData.append("inStock", parseInt(data.inStock));
    }

    // Append only if the priority is changed
    if (data.priority && parseInt(data.priority) !== selectedProduct.priority) {
      sentData.append("priority", parseInt(data.priority));
    }

    if (isVisible !== selectedProduct.visible) {
      sentData.append("visible", isVisible);
    }
    if (isUnAvailable !== selectedProduct.isUnAvailable) {
      if (isUnAvailable === false) sentData.append("unAvailabilityNote", "");
      sentData.append("isUnAvailable", isUnAvailable);
    }

    if (data.unAvailabilityNote !== selectedProduct.unAvailabilityNote) {
      sentData.append("unAvailabilityNote", data.unAvailabilityNote);
    }

    // Check if any data is appended before making the mutation
    if (Array.from(sentData.keys()).length > 0) {
      mutate(
        {
          id: selectedProduct._id,
          sentData: sentData,
        },
        {
          onSuccess: (data) =>
            Alert("تم بنجاح", "تم تحديث المنتج بنجاح", "success", "حسناً"),
        },
      );
    } else {
      Alert("حدث خطأ", "مفيش اي تغيير نحدث ايه 😭", "error", "حسناً");
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-14">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex w-full flex-col items-center gap-y-10">
            <ComboboxDropdown
              width="w-[85%] sm:w-[50%]"
              onChange={(value) => setSelectedCategory(value)}
              options={categories.map((cat) => cat.name)}
              defaultValue="اختر القسم"
            />
            <ComboboxDropdown
              onChange={(value) => {
                const id = getItemId(productOptions.products, value);
                getTheProduct(id);
              }}
              width="w-[85%] sm:w-[50%]"
              options={productOptions?.products?.map((product) => product.name)}
              defaultValue="اختر المنتج"
            />
          </div>
          {selectedProduct && (
            <form
              key={selectedProduct?._id}
              onSubmit={handleSubmit}
              className="flex w-[85%] flex-col gap-y-16 sm:w-[50%]"
            >
              <img
                src={`${import.meta.env.VITE_API_URL}/${selectedProduct.image}`}
                className="h[250px] mx-auto w-[250px]"
              />
              <InputFiled2nd
                defaultValue={selectedProduct.name}
                required
                name="name"
                label="أسم المنتج"
              />
              <InputFiled2nd
                defaultValue={selectedProduct.skuCode}
                required
                name="skuCode"
                label="sku-code"
              />
              <InputFiled2nd
                defaultValue={selectedProduct.description}
                textArea="true"
                required
                name="description"
                label="وصف المنتج"
              />
              <ComboboxDropdown
                options={
                  categoriesLoading
                    ? ["يتم التحميل"]
                    : categories?.map((category) => category.name)
                }
                required
                name="category"
                defaultValue={selectedProduct.category.name || "اسم القسم"}
              />
              <ComboboxDropdown
                options={
                  sellersLoading
                    ? ["يتم التحميل"]
                    : sellers?.map((seller) => seller.name)
                }
                required
                name="seller"
                defaultValue={selectedProduct.seller.name}
              />
              <ComboboxDropdown
                options={
                  subjectsLoading
                    ? ["يتم التحميل"]
                    : subjects?.map((subject) => subject.name)
                }
                name="subject"
                defaultValue={selectedProduct?.subject?.name || "اسم المادة"}
              />
              <ComboboxDropdown
                options={years.map((year) => year.text)}
                name="year"
                defaultValue={
                  years[parseInt(selectedProduct?.year) - 1]?.text ||
                  "السنة الدراسية"
                }
              />
              <InputFiled2nd
                type="number"
                required
                name="inStock"
                label="كمية ال Stock"
                defaultValue={selectedProduct.inStock}
              />
              <InputFiled2nd
                textArea="true"
                name="items"
                label="محتويات المنتج"
                defaultValue={selectedProduct.items.join("\n")}
              />
              <InputFiled2nd
                required
                type="number"
                name="priority"
                label=" أولوية المنتج"
                defaultValue={selectedProduct.priority}
              />
              <InputFiled2nd
                required
                type="number"
                name="price"
                label="السعر"
                defaultValue={selectedProduct.price}
              />
              <InputFiled2nd
                type="number"
                name="discountPrice"
                label="السعر بعد الخصم"
                defaultValue={selectedProduct.discountPrice}
              />
              <InputFiled2nd type="file" name="image" accept="image/*" />
              <Switch
                name="visible"
                onChange={(e) => setIsVisible(e.target.checked)}
                checked={isVisible}
                label="ظاهر"
              />
              <Switch
                name="isUnAvailable"
                onChange={(e) => setIsUnAvailable(e.target.checked)}
                checked={isUnAvailable}
                label="هل لسا مش متوفر؟"
              />
              <InputFiled2nd
                disabled={!isUnAvailable}
                name="unAvailabilityNote"
                label="ملحوظة عدم التوفر"
                defaultValue={selectedProduct?.unAvailabilityNote || ""}
              />
              <TransparentBtn
                loading={isPending}
                type="submit"
                bgColor={mainColor}
                className="w-full text-white"
              >
                تحديث
              </TransparentBtn>
            </form>
          )}
        </>
      )}
    </div>
  );
}
