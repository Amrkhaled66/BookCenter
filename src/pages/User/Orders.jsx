import ContainerHeader from "src/components/Profile/ContainerHeader";

import OrderCard from "src/components/Profile/Orders/OrderCard";

export default function Orders() {
  return (
    <div className="flex h-auto w-full flex-1 flex-col font-cairo">
      <ContainerHeader
        title="كل اوردراتك"
        subTitle="تقدر تتابع كل أوردراتك وحالة التوصيل من هنا"
      />
      {/* <Departments /> */}
      <div className="mx-auto flex w-[85%] flex-wrap justify-between gap-y-6 pt-10">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}
