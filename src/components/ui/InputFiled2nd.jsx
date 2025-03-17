import InputError from "./InputError";

export default function InputFiled2nd({
  textArea,
  icon,
  error,
  label,
  type = "text",
  ...props
}) {
  if (textArea) {
    return (
      <div>
        <div className="group relative mx-auto w-full">
          <textarea
            type={type}
            id="input"
            className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 text-lg outline-none focus:border-gray-600"
            {...props}
          />
          <label
            htmlFor="input"
            className="absolute right-0 top-0 -z-50 flex items-center gap-x-1 text-base text-gray-500 transition-all duration-300 ease-in-out peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-300 peer-valid:top-[-20px] peer-valid:text-xs peer-valid:text-main-color peer-focus:top-[-20px] peer-focus:text-xs peer-focus:text-main-color"
          >
            {icon}
            {label}
          </label>
        </div>
        {error && <InputError error={error} />}
      </div>
    );
  }
  return (
    <div>
      <div className="group relative mx-auto w-full">
        <input
          type={type}
          id="input"
          className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-1 text-lg outline-none focus:border-gray-600"
          {...props}
        />
        <label
          htmlFor="input"
          className="peer-valid:text-third-color peer-focus:text-third-color absolute right-0 top-0 -z-50 flex items-center gap-x-1 text-base text-gray-500 transition-all duration-300 ease-in-out peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-300 peer-valid:top-[-20px] peer-valid:text-xs peer-focus:top-[-20px] peer-focus:text-xs peer-focus:text-main-color"
        >
          {icon}
          {label}
        </label>
        <div className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 transform bg-gray-600 transition-all duration-300 ease-in-out peer-focus:scale-x-100" />
      </div>
      {error && <InputError error={error} />}
    </div>
  );
}
