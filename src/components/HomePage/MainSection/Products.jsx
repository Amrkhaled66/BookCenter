import ProductCard from "./productCard/ProductCard";
import { motion } from "framer-motion";
import useProducts from "src/hooks/useProducts";

export default function Products() {
  const { selectedProducts: Products, selectedCategory } = useProducts();

  return (
    <motion.ul
      dir="rtl"
      key={selectedCategory}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, type: "spring" }}
      className="container grid w-full grid-cols-2 place-items-center justify-center gap-x-3 gap-y-10 md:grid-cols-3 lg:w-4/5 xl:grid-cols-3 mb-20 "
    >
      {Products.map((product) => (
        <ProductCard
          item={product}
          key={product.productId}
          title={product.info.title}
          image={product.image}
          originalPrice={product.pricing.originalPrice}
          discountedPrice={product.pricing.discountedPrice}
          publisher={product.info.publisher}
          id={product.productId}
        />
      ))}
    </motion.ul>
  );
}
