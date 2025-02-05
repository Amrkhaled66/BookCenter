export default function ContainerHeader({ title, subTitle }) {
  return (
    <div className="flex h-fit w-full border-b-4 border-b-gray-100 flex-col items-center justify-center gap-y-5 py-10">
      <h2 className="font-cairo text-5xl font-bold text-third-color">
        {title}
      </h2>
      <p className="font-cairo text-xl font-semibold">{subTitle}</p>
    </div>
  );
}
