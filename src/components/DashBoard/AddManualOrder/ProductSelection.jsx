import ComboboxDropdown from "src/components/ui/ComboboxDropdown";
import { GoTrash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import InputFiled2nd from "src/components/ui/InputFiled2nd";
const ProductSelection = ({ updateProductsQuantity, updateProductsName, products, handleProductChange, removeProductField, addProductField, availableProducts }) => {

  return (
    <div>
      <div className="mb-8 border border-gray-color rounded-md border-dashed p-4   space-y-6">
        <h2 className="flex gap-x-1 text-xl border-b-4 border-second-color pb-1 w-fit  font-bold" >
          <span  > اختار </span>
          <span className="text-second-color" >المنتجات</span>
        </h2>


        {products.map((product, index) => (
          <div key={product.id} className="py-2 flex items-end gap-4">
            <div className="flex-1 space-y-1 " >
              <ComboboxDropdown
                onChange={(value) => updateProductsName(value, index)}
                onQueryChange={(e) => handleProductChange(e.target.value, index)}
                options={availableProducts.map((product) => product.name)}
                width="w-full"
                // value={products[index].name}
                label="اسم المنتج"
                error={""}

                defaultValue={""}
                name="product"
                isProductsFilter
              />
            </div>


            <div className="w-16 space-y-1">
              <label className="mb-1 block text-sm font-medium ">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                min="0"
                defaultValue={product.quantity}
                onChange={(e) => updateProductsQuantity(e.target.value, index)}

                className="w-full rounded-md border border-gray-300 focus:border-main-color animate px-2 py-2 focus:outline-none"
              />
            </div>


            <button
              onClick={() => removeProductField(index)}
              className="rounded-md animate px-3 py-2 text-red-600 bg-red-100 hover:bg-red-300"
              title="Remove product"
            >
              <GoTrash className="text-2xl" />
            </button>

          </div>
        ))}

        <button
          onClick={addProductField}
          className=" animate  rounded-md border border-main-color px-4 py-3 text-main-color hover:-translate-x-1"
        >
          <FaPlus />
        </button>
      </div>
      <div className="space-y-12" >

        <ComboboxDropdown
          defaultValue="السبب ايه ؟"
          name={"type"}
          options={
            ["بدل راجع", "بدل تالف", "مدفوع بالفعل", "هدية"]
          } />
        <InputFiled2nd label="ملحوظة" type="text" name="note" />
        <InputFiled2nd label="الاوردر الاب" type="text" name="parentOrder" />
      </div>

    </div >
  );
};

export default ProductSelection;
