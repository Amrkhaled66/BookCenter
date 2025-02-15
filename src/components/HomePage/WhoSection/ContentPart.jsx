
const ProductBox = ({ children, className }) => {
  return (
    <span
      className={`text-nowrap rounded-md px-6 py-4 font-mainFont text-base sm:text-xl ${className}`}
    >
      {children}
    </span>
  );
};

export default function ContentPart() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-12 font-cairo lg:w-[40%] lg:items-start">
      
      <p className="w-full text-right text-5xl font-black tracking-wide lg:text-start">
        <span className="text-stroke relative text-white">
          مين بقا . . .
          <span className="text-stroke-light absolute -top-11 right-20 text-nowrap text-second-color">
            بوك سنتر
          </span>
        </span>
      </p>
      <p className="text-lg font-bold leading-relaxed tracking-wide sm:text-xl">
        بوك سنتر هي اول شركة في مصر تجمع بين <br />
        الكتب الدراسية + الكتب العامة + الروايات <br /> نتمني اننا نقدر نساعدك
        انك توصل لهدفك .
      </p>
      <div className="flex items-center gap-x-2 font-semibold">
        <ProductBox className={"bg-second-color text-white"}>
          كتب دراسية
        </ProductBox>
        +<ProductBox className={"bg-main-color text-white"}>روايات</ProductBox>+
        <ProductBox className={"bg-fourth-color text-black"}>كتب عامة</ProductBox>
      </div>
    </div>
  );
}
