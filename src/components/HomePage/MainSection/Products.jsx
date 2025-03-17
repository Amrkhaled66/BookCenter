import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// hooks
import useCategory from "src/hooks/useCategory";
import { useProducts } from "src/contexts/products";

// components
import ProductCard from "./productCard/ProductCard";
import Loader from "src/components/ui/icons/Loader";
import ErrorContainer from "src/components/ui/ErrorContainer";
import Error from "src/components/ui/icons/error";

// imgs
import graduatedPanda from "src/assets/graduatePanda.png";

export default function Products() {
  const { selectedCategory } = useCategory();

  const { filteredProducts, isLoading, isError } = useProducts();

  if (isLoading)
    return (
      <div className="flex h-[500px] items-center gap-x-2 text-center font-cairo text-xl font-bold">
        <span>يتم الان تحميل المنتجات</span>
        <span>
          <Loader />
        </span>
      </div>
    );

  if (isError) {
    return (
      <ErrorContainer>
        <span>
          <Error />
        </span>
        <span className="text-center text-sm text-black md:text-lg">
          حدث خطأ في تحميل المنتجات
        </span>
        <Link
          to="/support"
          className="rounded-2xl bg-red-500 px-5 py-3 text-center text-[14px] text-white transition-all duration-300 hover:drop-shadow-xl md:px-10 md:text-lg"
        >
          التواصل مع الدعم
        </Link>
      </ErrorContainer>
    );
  }



  if (filteredProducts?.length === 0 || !filteredProducts) {
    return (
      <div className="flex h-[500px] items-center">
        <p className="relative flex flex-col-reverse items-center gap-x-4 pb-4 text-center font-cairo text-base font-bold tracking-wider drop-shadow-2xl sm:flex-row xl:text-2xl">
          <span>هنضيف منتجات للقسم قريب جدا</span>
          <span>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="h-48 w-48 cursor-pointer drop-shadow-md transition-all duration-300 hover:animate-shake"
              src={graduatedPanda}
              alt="graduatedPanda"
            />
          </span>
        </p>
      </div>
    );
  }

  return (
    <motion.ul
      dir="rtl"
      key={selectedCategory}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, type: "spring" }}
      className="px-34 container mx-auto grid grid-cols-1  justify-between gap-x-8 gap-y-10 pt-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
    >
      {filteredProducts?.map((product) => {
        return (
          <ProductCard
            key={product._id}
            title={product.name}
            stockQuantity={product.inStock}
            image={`${import.meta.env.VITE_API_URL}/${product.image}`}
            originalPrice={product.price}
            discountPrice={product.discountPrice}
            seller={product.seller.name}
            id={product._id}
          />
        );
      })}
    </motion.ul>
  );
}
