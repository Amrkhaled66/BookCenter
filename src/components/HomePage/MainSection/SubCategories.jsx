import {
  useGetAllSellers,
  useGetAllSubjects,
} from "src/hooks/useAdminMutations";
import { useProducts } from "src/contexts/products";

import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import { years } from "src/services/yearServices";
import getItemId from "src/services/getItemId";
import useCategory from "src/hooks/useCategory";

export default function SubCategories() {
  const { selectedCategory } = useCategory();
  const { data: sellers, isLoading: sellersLoading } =
    useGetAllSellers(selectedCategory);
  const { data: subjects, isLoading: subjectsLoading } = useGetAllSubjects();
  const { setProductsFilter } = useProducts();

  const handleFilterChange = (filterKey, dataList, value) => {
    if (value.includes("كل")) {
      setProductsFilter((prev) => ({
        ...prev,
        [filterKey]: "",
      }));
    } else {
      const id = getItemId(dataList, value);
      setProductsFilter((prev) => ({
        ...prev,
        [filterKey]: id || value,
      }));
    }
  };
  if (subjectsLoading || sellersLoading) return;

  return (
    <form className="z-20 flex w-[80%] flex-col justify-between gap-x-8 gap-y-3 sm:w-full sm:flex-row lg:w-[60%]">
      {/* Seller Selection */}
      <ComboboxDropdown
        onChange={(value) => handleFilterChange("seller", sellers, value)}
        width="w-full"
        defaultValue="اختر المدرس"
        options={[
          "كل المدرسين",
          ...(sellers?.map((seller) => seller.name) || []),
        ]} // Add "All" option
      />

      {/* Year Selection */}
      <ComboboxDropdown
        onChange={(value) => {
          if (value === "الكل") {
            setProductsFilter((prev) => ({
              ...prev,
              year: "",
            }));
          } else {
            const year = years.find((year) => year.text === value)?.value;
            setProductsFilter((prev) => ({
              ...prev,
              year,
            }));
          }
        }}
        width="w-full"
        defaultValue="اختر الصف الدراسي"
        options={["كل الصفوف", ...(years?.map((year) => year.text) || [])]} // Add "All" option
      />

      {/* Subject Selection */}
      <ComboboxDropdown
        onChange={(value) => handleFilterChange("subject", subjects, value)}
        width="w-full"
        defaultValue="اختر المادة"
        options={[
          "كل المواد",
          ...(subjects?.map((subject) => subject.name) || []),
        ]} // Add "All" option
      />
    </form>
  );
}
