import PageHeader from "src/components/ui/PageHeader";
import SupportImg from "src/assets/support.svg?react";
import LeftSection from "src/components/Support/LeftSection";

export default function Support() {
  return (
    <div className="flex h-auto min-h-screen w-screen flex-col items-center gap-y-14 lg:gap-y-28 bg-card-color pb-[100px] pt-[150px]">
      <PageHeader title="التواصل مع الدعم" />
      <div className="mx-auto w-[90%] lg:w-[80%] xl:w-[70%] flex justify-center items-center md:flex-row flex-col rounded-2xl bg-white gap-x-20 px-10 py-14 drop-shadow-2xl">
        <SupportImg className="w-full" />
        <LeftSection />
      </div>
    </div>
  );
}
