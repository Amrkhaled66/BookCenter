// Components
import {
  ProductImg,
  ProductInfo,
  ProductNotFound,
} from "src/components/ProductPage";
import ErrorContainer from "src/components/ui/ErrorContainer";
import PageHeader from "src/components/ui/PageHeader";

// Hooks
import { useParams } from "react-router-dom";
import { useGetProductById } from "src/services/productsServices";

// imgs
import pandaLaptop from "src/assets/pandaLaptop.png";

const BackgroundWave = function () {
  return (
    <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-waveBG"></div>
  );
};

export default function ProductPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetProductById(id);

  if (isLoading) {
    return (
      <div className={`relative flex min-h-screen w-screen items-center`}>
        <ErrorContainer>
          <span className="flex w-full justify-center">
            <img
              className="w-3/5 animate-pulse md:w-[50%] lg:w-[30%]"
              src={pandaLaptop}
              alt=""
            />
          </span>
          <span className="flex w-full justify-center gap-x-4 font-cairo text-2xl">
            يتم الان تحميل المنتج
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

  const product = data.product;

  const {
    imageUrl,
    description,
    name,
    note,
    price,
    discountedPrice,
    publisher,
    grade,
    subCategory,
  } = product || {};

  return (
    <div
      className={`relative flex w-screen flex-col items-center py-[100px] lg:px-[100px]`}
    >
      <PageHeader>{note}</PageHeader>
      <div className="container flex w-full flex-col-reverse items-center justify-center gap-y-16 py-[50px] lg:flex-row lg:items-start lg:px-[100px]">
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
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <ProductImg imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
}
