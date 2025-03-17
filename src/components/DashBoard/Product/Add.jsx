import { useState, useMemo, useCallback } from "react";
import useColors from "src/hooks/useColors";
import {
  useGetAllCategories,
  useGetAllSellers,
  useGetAllSubjects,
  useAddNewProduct,
} from "src/hooks/useAdminMutations";

import Switch from "src/components/ui/Switch";
import TransparentBtn from "src/components/ui/TransparentBtn";
import InputFiled2nd from "src/components/ui/InputFiled2nd";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import { years } from "src/services/yearServices";
import Alert from "src/components/ui/Alert";
import getItemId from "src/services/getItemId";
export default function Add() {
  const { colors } = useColors();
  const [isVisible, setIsVisible] = useState(true);
  const [isUnAvailable, setIsUnAvailable] = useState(false);
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllCategories();
  const { data: sellers, isLoading: sellersLoading } = useGetAllSellers();
  const { data: subjects, isLoading: subjectsLoading } = useGetAllSubjects();
  const { mutate, isPending } = useAddNewProduct();

  const mainColor = colors.get("mainColor");

  const handleSubmit = useCallback(
    (e) => {
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
      sentData.append("image", imageFile);
      sentData.append("category", categoryId);
      sentData.append("description", data.description);
      sentData.append("skuCode", data.skuCode);
      sentData.append("name", data.name);
      sentData.append("seller", sellerId);
      subjectId && sentData.append("subject", subjectId);
      yearValue && sentData.append("year", yearValue);
      data.items.trim().length > 0 &&
        sentData.append("items", JSON.stringify(items));
      data.discountPrice &&
        sentData.append("discountPrice", parseInt(data.discountPrice));
      sentData.append("price", parseInt(data.price));
      sentData.append("inStock", parseInt(data.inStock));
      sentData.append("priority", parseInt(data.priority));

      sentData.append("visible", isVisible);
      sentData.append("isUnAvailable", isUnAvailable);

      isUnAvailable &&
        sentData.append("unAvailabilityNote", data.unAvailabilityNote);

      mutate(sentData, {
        onSuccess: () =>
          Alert("تم بنجاح", "تم أضافة المنتج بنجاح", "success", "حسناً"),
        onError: () =>
          Alert("حدث خطأ ", "لم يتم أضافة المنتج", "error", "حسناً"),
      });
    },
    [categories, sellers, subjects, mutate, getItemId],
  );

  const categoryOptions = useMemo(() => {
    return categoriesLoading
      ? ["يتم التحميل"]
      : categories?.map((category) => category?.name);
  }, [categories, categoriesLoading]);

  const sellerOptions = useMemo(() => {
    return sellersLoading
      ? ["يتم التحميل"]
      : sellers?.map((seller) => seller?.name);
  }, [sellers, sellersLoading]);

  const subjectOptions = useMemo(() => {
    return subjectsLoading
      ? ["يتم التحميل"]
      : subjects?.map((subject) => subject?.name);
  }, [subjects, subjectsLoading]);

  const yearOptions = useMemo(() => years.map((year) => year.text), []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[85%] flex-col gap-y-10 sm:w-[50%]"
    >
      <InputFiled2nd required name="name" label="أسم المنتج" />
      <InputFiled2nd required name="skuCode" label="sku-code" />
      <InputFiled2nd
        textArea="true"
        required
        name="description"
        label="وصف المنتج"
      />
      <ComboboxDropdown
        options={categoryOptions}
        required
        name="category"
        defaultValue="اسم القسم"
      />
      <ComboboxDropdown
        options={sellerOptions}
        required
        name="seller"
        defaultValue="اسم البائع"
      />
      <ComboboxDropdown
        options={subjectOptions}
        name="subject"
        defaultValue="اسم المادة"
      />
      <ComboboxDropdown
        options={yearOptions}
        name="year"
        defaultValue="السنة الدراسية"
      />
      <InputFiled2nd
        type="number"
        required
        name="inStock"
        label="كمية ال Stock"
      />
      <InputFiled2nd textArea="true" name="items" label="محتويات المنتج" />
      <InputFiled2nd
        required
        type="number"
        name="priority"
        label=" أولوية المنتج"
      />
      <InputFiled2nd required type="number" name="price" label="السعر" />
      <InputFiled2nd
        type="number"
        name="discountPrice"
        label="السعر بعد الخصم"
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
      />
      <TransparentBtn
        loading={isPending}
        type="submit"
        bgColor={mainColor}
        className="w-full text-white"
      >
        أضافة
      </TransparentBtn>
    </form>
  );
}
