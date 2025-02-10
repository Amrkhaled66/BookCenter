export default function ContainerHeader({ title, subTitle }) {
  return (
    <div className="flex h-fit w-full xl:border-t-0 border-t-[1px] border-b-[1px] border-gray-color flex-col items-center justify-center gap-y-5 py-10">
      <h2 className="font-cairo text-4xl xl:text-5xl font-bold text-third-color">
        {title}
      </h2>
      <p className="font-cairo text-center text-sm xl:text-xl font-semibold">{subTitle}</p>
    </div>
  );
}
