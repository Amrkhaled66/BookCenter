import PageHeader from "src/components/ui/PageHeader";
import SupportImg from "src/assets/support.svg?react";
import LeftSection from "src/components/Support/LeftSection";

import useGoToPageTop from "src/hooks/useGoToPageTop";
export default function Support() {
  useGoToPageTop();
  return (
    <div className="flex h-auto min-h-screen w-screen flex-col items-center gap-y-14 bg-card-color pb-[100px] pt-[150px] lg:gap-y-28">
      <PageHeader title="التواصل مع الدعم" />
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-x-20 rounded-2xl bg-white px-10 py-14 drop-shadow-2xl md:flex-row lg:w-[80%] xl:w-[70%]">
        <SupportImg className="w-full" />
        <LeftSection />
      </div>
    </div>
  );
}
