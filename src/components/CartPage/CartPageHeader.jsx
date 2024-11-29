import BagIcon from "src/components/ui/icons/bagIcon";

import dotsBg from "src/assets/dotsBg.png";

export default function CartPageHeader() {
  return (
    <div className="relative   w-screen bg-main-text--color bg-no-repeat">
      <img src={dotsBg} className="absolute right-0" />
      <img src={dotsBg} className="absolute" />
      <div className="flex justify-center gap-3 py-9 text-3xl text-white">
        <BagIcon /> عربة التسوق
      </div>
    </div>
  );
}
