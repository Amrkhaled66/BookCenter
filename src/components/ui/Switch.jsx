export default function Switch({ label, ...props }) {
  return (
    <div className="flex justify-between">
      <label className="text-xl font-semibold" >{label}</label>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          {...props}
          type="checkbox"
          defaultValue
          className="peer sr-only"
        />
        <div className="group peer h-10 w-20 rounded-3xl bg-rose-400 shadow-md outline-none ring-0 duration-300 after:absolute after:left-1 after:top-1 after:flex after:h-8 after:w-8 after:items-center after:justify-center after:rounded-full after:bg-gray-50 after:outline-none after:duration-300 after:content-['✖️'] peer-checked:bg-emerald-500 peer-checked:after:translate-x-10 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-focus:outline-none"></div>
      </label>
    </div>
  );
}
