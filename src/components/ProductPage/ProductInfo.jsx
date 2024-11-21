import { useState, useRef, useEffect, memo } from "react";

import Divider from "src/components/ui/Divider";
export default function ProductInfo({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClipped, setIsClipped] = useState(false);
  const textRef = useRef();

  const { title, publisher, description, detailsList = [] } = product.info;

  const toggleExpand = () => setIsExpanded((prevState) => !prevState);

  useEffect(() => {
    if (textRef?.current) {
      const lineHeight = parseFloat(
        getComputedStyle(textRef.current).lineHeight,
      );
      const maxHeight = lineHeight * 3;
      if (textRef.current.scrollHeight > maxHeight) {
        setIsClipped(true);
      }
    }
  }, [description]);

  return (
    <div className="order-none flex h-auto w-full flex-col items-end justify-between gap-y-7 rounded-3xl bg-white p-5 pr-10 text-right text-main-text--color drop-shadow-md sm:w-full md:order-3 xl:order-none xl:w-2/5">
      <Title title={title} publisher={publisher} />
      <div className="flex flex-col items-end gap-y-5">
        <Description
          {...{ description, isExpanded, isClipped, toggleExpand, textRef }}
        />
        <DetailsList detailsList={detailsList} />
      </div>
    </div>
  );
}

const Title = memo(({ title, publisher }) => (
  <div className="space-y-4">
    <div className="space-x-3">
      <h3 className="font-mainFont text-xl leading-relaxed tracking-wide sm:text-2xl">
        {title}
      </h3>
      <p className="pt-3 font-mainFontRegular text-xs sm:text-lg">
        ل {publisher}
      </p>
    </div>

    <Divider />
  </div>
));

const Description = ({
  description,
  isExpanded,
  isClipped,
  toggleExpand,
  textRef,
}) => (
  <>
    <p className="relative font-mainFontRegular text-lg font-medium after:absolute after:-bottom-1 after:left-1/2 after:h-1 after:w-full after:-translate-x-1/2 after:bg-second-color">
      نبذة عن الكتاب
    </p>
    <div className="flex w-full flex-wrap justify-end text-right">
      <p
        ref={textRef}
        className={` ${isExpanded ? "line-clamp-none" : "line-clamp-3"} overflow-ellipsis font-mainFontRegular leading-loose tracking-wide text-second-text--color`}
        style={{ transition: "max-height 0.3s ease" }}
      >
        {description}
      </p>
      {isClipped && (
        <button
          className="mt-2 cursor-pointer font-mainFontRegular text-red-500"
          onClick={toggleExpand}
        >
          {isExpanded ? "عرض أقل" : "عرض المزيد"}
        </button>
      )}
    </div>
  </>
);

const DetailsList = memo(({ detailsList }) => (
  <>
    <ul className="font-mainFontRegular text-second-text--color">
      {detailsList.map((detail, index) => (
        <li key={`detail ${index} `}>{detail} -</li>
      ))}
    </ul>
  </>
));
