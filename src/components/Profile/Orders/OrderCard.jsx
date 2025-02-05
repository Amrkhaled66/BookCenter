import LinkIcon from "src/assets/LinkIconsvg.svg";


export default function OrderCard() {
  return (
    <div className="w-[45%] rounded-xl border-[3px] border-third-color bg-card-color p-3 font-cairo drop-shadow-xl">
      <div className="space-y-3 border-b-2 border-black/30 pb-3">
        <p className="text-center font-bold text-third-color">
          تاريخ الشراء : 01:39 الثلاثاء، ٢١ يناير ٢٠٢٥
        </p>
        <p className="mx-auto w-fit rounded-xl bg-third-color px-3 py-2 text-center text-white">
          📚 الكتب اللي اشتريتها{" "}
        </p>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>الثالث الثانوى - الكيمياء العضوية - أ. خالد صقر</span>
            <span className="font-bold">x1</span>
          </div>
          <div className="flex justify-between">
            <span>الثالث الثانوى - الكيمياء العضوية - أ. خالد صقر</span>
            <span className="font-bold">x1</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 border-b-2 border-black/30 py-3 pb-3">
        <div className="flex items-center justify-between">
          <span className="rounded-xl border-2 border-black bg-blue-200 p-1 text-base font-semibold">
            سعر الشحن
          </span>
          <span className="font-bold">50 جنيهاً </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="rounded-xl border-2 border-black bg-green-200 p-1 text-base font-semibold">
            سعر الكتب
          </span>
          <span className="font-bold">500 جنيهاً </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="rounded-xl border-2 border-black bg-orange-200 p-1 text-base font-semibold">
            السعر الكلي
          </span>
          <span className="font-bold">550 جنيهاً </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 border-b-2 border-black/30 py-3 pb-3">
        <div className="flex items-center justify-between">
          <span className="rounded-xl border-2 border-black bg-violet-200 p-1 text-base font-semibold">
            لينك الفانورة
          </span>
          <span className="rounded-xl bg-second-color px-3 py-2 font-bold text-white">
            <img className="h-6 w-6" src={LinkIcon} alt="InvoiceLink" />
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="rounded-xl border-2 border-black bg-red-100 p-1 text-base font-semibold">
            حالة الدفع
          </span>
          <span className="font-bold text-red-700">غير مدفوعة</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 py-3 pb-3">
        <div className="flex items-center justify-between">
          <span className="rounded-xl p-1 text-base font-bold">
            حالة التوصيل
          </span>
          <span className="text--900 rounded-xl px-3 py-2 font-bold">
            لسا مش مدفوع
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
