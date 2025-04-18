import ContainerHeader from "src/components/Profile/ContainerHeader";

import OrderCard from "src/components/Profile/Orders/OrderCard";

import { useGetOrders } from "src/hooks/useUserMutations";

import Loader from "src/components/ui/icons/Loader";

import { Icon } from "@iconify/react";

export default function Orders() {
  const { data, isLoading, isError } = useGetOrders();

  if (data?.data.length === 0) {
    return (
      <div className="flex h-screen w-full flex-1 flex-col font-cairo">
        <ContainerHeader
          title="كل اوردراتك"
          subTitle="تقدر تتابع كل أوردراتك وحالة التوصيل من هنا"
        />
        {/* <Departments /> */}
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex items-center gap-x-2 text-center font-cairo text-2xl font-bold">
            <span>لسا معملتش ولا اوردر </span>
            <Icon
              icon="line-md:emoji-angry"
              color="red"
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
    );
  }
  const Orders = data?.data ? [...data.data].reverse() : [];
  
  return (
    <div className="flex h-full w-full flex-1 flex-col font-cairo">
      <ContainerHeader
        title="كل اوردراتك"
        subTitle="تقدر تتابع كل أوردراتك وحالة التوصيل من هنا"
      />
      {isLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="flex min-h-full items-center gap-x-2 text-center font-cairo text-xl font-bold">
            <span>يتم الان تحميل أوردراتك</span>
            <span>
              <Loader />
            </span>
          </div>
        </div>
      ) : (
        <div className="mx-auto grid w-[85%] grid-cols-1 justify-between gap-y-6 pt-10 lg:grid-cols-2">
          {Orders.map((order) => {
            if (!order) return;
            return (
              <OrderCard
                id={order._id}
                key={order._id}
                products={order.products}
                productsPrice={order.productsPrice}
                shippingPrice={order.shippingPrice}
                totalPrice={order.totalPrice}
                invoiceLink={order.invoiceLink}
                paymentStatus={order.paymentStatus}
                deliveryStatus={order.deliveryStatus}
                createdAt={order.createdAt}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
