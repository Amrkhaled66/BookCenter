import ProductCard from "./ProductCard";

export default function Products() {
  const Products = [
    {
      productId: 1,
      title: "كتاب العادات الذرية",
      image:
        "https://cdn.aseeralkotb.com/storage/media/398564/conversions/%D8%A7%D9%84%D8%B9%D8%A7%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%B0%D8%B1%D9%8A%D8%A9-608-250x375-webp.webp",
      originalPrice: 100,
      discountedPrice: 50,
      writer: "James Clear",
    },
    {
      productId: 2,
      title: "كتاب الاب الغنى و الاب الفقير",
      image:
        "https://cdn.aseeralkotb.com/storage/media/128454/conversions/%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D8%BA%D9%86%D9%89-%D9%88%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D9%81%D9%82%D9%8A%D8%B1-603-250x375-webp.webp",
      originalPrice: 55,
      discountedPrice: undefined,
      writer: "Robert Kiyosaki",
    },
    {
      productId: 2,
      title: "كتاب الاب الغنى و الاب الفقير",
      image:
        "https://cdn.aseeralkotb.com/storage/media/128454/conversions/%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D8%BA%D9%86%D9%89-%D9%88%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D9%81%D9%82%D9%8A%D8%B1-603-250x375-webp.webp",
      originalPrice: 55,
      discountedPrice: undefined,
      writer: "Robert Kiyosaki",
    },
    {
      productId: 2,
      title: "كتاب الاب الغنى و الاب الفقير",
      image:
        "https://cdn.aseeralkotb.com/storage/media/128454/conversions/%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D8%BA%D9%86%D9%89-%D9%88%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D9%81%D9%82%D9%8A%D8%B1-603-250x375-webp.webp",
      originalPrice: 55,
      discountedPrice: undefined,
      writer: "Robert Kiyosaki",
    },
    {
      productId: 2,
      title: "كتاب الاب الغنى و الاب الفقير",
      image:
        "https://cdn.aseeralkotb.com/storage/media/128454/conversions/%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D8%BA%D9%86%D9%89-%D9%88%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D9%81%D9%82%D9%8A%D8%B1-603-250x375-webp.webp",
      originalPrice: 55,
      discountedPrice: undefined,
      writer: "Robert Kiyosaki",
    },
    {
      productId: 2,
      title: "كتاب الاب الغنى و الاب الفقير",
      image:
        "https://cdn.aseeralkotb.com/storage/media/128454/conversions/%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D8%BA%D9%86%D9%89-%D9%88%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D9%81%D9%82%D9%8A%D8%B1-603-250x375-webp.webp",
      originalPrice: 55,
      discountedPrice: undefined,
      writer: "Robert Kiyosaki",
    },
    {
      productId: 2,
      title: "كتاب الاب الغنى و الاب الفقير",
      image:
        "https://cdn.aseeralkotb.com/storage/media/128454/conversions/%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D8%BA%D9%86%D9%89-%D9%88%D8%A7%D9%84%D8%A3%D8%A8-%D8%A7%D9%84%D9%81%D9%82%D9%8A%D8%B1-603-250x375-webp.webp",
      originalPrice: 55,
      discountedPrice: undefined,
      writer: "Robert Kiyosaki",
    },
  ];
  return (
    <ul className="container grid w-full grid-cols-4 place-items-center justify-center gap-x-3 gap-y-10">
      {Products.map((product) => (
        <ProductCard
          item={product}
          key={product.productId}
          title={product.title}
          image={product.image}
          originalPrice={product.originalPrice}
          discountedPrice={product.discountedPrice}
          writer={product.writer}
        />
      ))}
    </ul>
  );
}
