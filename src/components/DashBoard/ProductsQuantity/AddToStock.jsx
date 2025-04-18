import InputFiled2nd from "src/components/ui/InputFiled2nd";
import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import TransparentBtn from "src/components/ui/TransparentBtn";

import useColors from "src/hooks/useColors";
import { useUpdateStock } from "src/hooks/useAdminMutations";
import { useEffect, useState } from "react";
import { useGetProductOptions } from "src/hooks/useAdminMutations";
import { useGetStockRecord } from "src/hooks/useAdminMutations";

import Alert from "src/components/ui/Alert";

import getItemId from "src/services/getItemId";

export default function AddToStock() {
  const { colors } = useColors();
  const mainColor = colors.get("mainColor");

  const { mutate, isPending } = useUpdateStock();
  const [chosenProduct, setChosenProduct] = useState(null);
  const { data, isLoading } = useGetProductOptions();
  const {
    mutate: mutateStockRecord,
    data: stockRecord,
    isPending: LoadingStock,
  } = useGetStockRecord();

  useEffect(() => {
    if (chosenProduct) {
      mutateStockRecord(chosenProduct);
    }
  }, [chosenProduct, mutateStockRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const isValid = "type" in data && "quantity" in data;

    if (!isValid)
      return Alert("خطأ", "من فضلك ادخل كل البيانات", "error", "حسنا");

    mutate(
      { chosenProduct, ...data },
      {
        onSuccess: () =>
          Alert("تم بنجاح", "تم التحديث بنجاح", "success", "حسنا"),
        onError: (error) =>
          Alert("حدث خطاء", "برجاء التواصل مع الدعم", "error", "حسنا"),
      },
    );
  };

  if (isLoading) return <p>Loading...</p>;
  console.log(chosenProduct);
  return (
    <div className="w-[90%] space-y-14 md:w-[50%]">
      <ComboboxDropdown
        onChange={(value) => {
          const id = getItemId(data.products, value);
          setChosenProduct(id);
        }}
        options={data.products.map((option) => option.name)}
        defaultValue="اختار المنتج"
      />
      {isLoading && <p> Loading...</p>}
      {chosenProduct && !LoadingStock && (
        <>
          <div className="w-full space-y-5 rounded-lg bg-card-color px-5 py-10">
            <h3 className="mx-auto w-fit pb-3 text-center text-lg font-bold text-main-color">
              {data.products.find((item) => item._id === chosenProduct)?.name}
            </h3>
            <div className="space-y-4">
              <Row title="العدد القابل للحجز" num={stockRecord?.inStock} />
              <Row title="العدد المحجوز" num={stockRecord?.reservedStock} />
              <Row
                title="العدد الكلي"
                num={stockRecord?.inStock + stockRecord?.reservedStock}
              />
              <Row
                title="الكمية الكلية المضافة"
                num={stockRecord?.totalStockAdded}
              />
            </div>
          </div>
        </>
      )}
      {chosenProduct && (
        <form onSubmit={handleSubmit} className="w-full space-y-12">
          <InputFiled2nd
            name="quantity"
            type="number"
            label="الكمية اللي هنضيفها"
          />
          <ComboboxDropdown
            name="type"
            defaultValue="الاضافة هتبقي أيه؟"
            options={["شحنة جديدة", "زيادة امنة", "اوردر مانول"]}
          />
          <InputFiled2nd name="note" label="ملاحظة" />
          <TransparentBtn
            type="submit"
            className="w-full text-white"
            bgColor={mainColor}
            loading={isPending}
          >
            أضافة
          </TransparentBtn>
        </form>
      )}
    </div>
  );
}

const Row = ({ title, num }) => {
  return (
    <p className="flex w-full justify-between border-b-[1px] border-black/20 pb-2">
      <span className="font-bold">{title} :</span>
      <span className="rounded-lg bg-fourth-color px-3 py-1 text-lg">
        {num}
      </span>
    </p>
  );

 
};
