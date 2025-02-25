// Components
import {
  ProductImg,
  ProductInfo,
  ProductNotFound,
} from "src/components/ProductPage";
import ErrorContainer from "src/components/ui/ErrorContainer";

// Hooks
import { useParams } from "react-router-dom";
import { useGetProductById } from "src/services/productsServices";

import Loader from "src/components/ui/icons/Loader";

const BackgroundWave = function () {
  return (
    <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-waveBG"></div>
  );
};

export default function ProductPage() {
  const { id } = useParams();

  const { data: product, isLoading, isError } = useGetProductById(id);

  if (isLoading) {
    return (
      <div
        className={`relative flex min-h-screen w-screen items-center bg-card-color`}
      >
        <ErrorContainer>
          <span className="flex w-full justify-center gap-x-4 font-cairo text-2xl">
            يتم الان تحميل المنتج <Loader />
          </span>
        </ErrorContainer>
      </div>
    );
  }

  if (isError) {
    return (
      <>
        <ProductNotFound />
        <BackgroundWave />
      </>
    );
  }

  const {
    imageUrl,
    description,
    name,
    price,
    discountedPrice,
    publisher,
    grade,
    subCategory,
  } = product || {};

  return (
    <div
      className={`relative flex w-screen flex-col items-center bg-card-color py-[100px]`}
    >
      <div className="container flex w-full flex-col-reverse items-center justify-center gap-x-14 gap-y-10 py-[50px] lg:flex-row lg:items-start">
        <div className="w-[90%] justify-center lg:w-1/2">
          <ProductInfo
            {...{
              name,
              description,
              price,
              discountedPrice,
              id,
              publisher,
              grade,
              subCategory,
            }}
          />
        </div>
        <div className="flex w-full justify-center lg:w-[40%] lg:justify-end">
          <ProductImg imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
}
