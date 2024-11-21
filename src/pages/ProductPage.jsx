// Components
import {
  ProductImg,
  ProductInfo,
  ProductPurchaseCard,
  ProductNotFound,
} from "src/components/ProductPage";

// Hooks
import { useParams } from "react-router-dom";
import useProducts from "src/hooks/useProducts";

// Components
const BackgroundWave = function () {
  return (
    <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-waveBG"></div>
  );
};

export default function ProductPage() {
  const { id } = useParams();
  const { selectProduct } = useProducts();

  const product = selectProduct(Number(id));

  if (!product) {
    return (
      <>
        <ProductNotFound />
        <BackgroundWave />
      </>
    );
  }

  const { image, pricing, productId } = product || {};
  return (
    <div className={`relative flex min-h-screen w-screen items-center`}>
      <div className="container flex w-full flex-col flex-wrap items-center gap-x-9 gap-y-9 py-9 pt-[150px] sm:flex-row-reverse sm:justify-around xl:flex-nowrap xl:justify-center xl:pt-0">
        <ProductImg img={image} />
        <ProductInfo product={product} />
        <ProductPurchaseCard id={productId} pricing={pricing} />
      </div>
      <BackgroundWave />
    </div>
  );
}
