import InputError from "./InputError";

export default function InputFiled2nd({ icon, error, label, type, ...props }) {
  return (
    <div>
      <div className="group relative mx-auto  w-full">
        <input
          type={type}
          id="input"
          required
          className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-1 text-lg outline-none focus:border-gray-600"
          {...props}
        />
        <label
          htmlFor="input"
          className="peer-valid:text-third-color text-base peer-focus:text-third-color absolute right-0 top-0 -z-50 flex items-center gap-x-1  text-gray-500 transition-all duration-300 ease-in-out peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-300 peer-focus:text-main-color peer-valid:top-[-20px] peer-valid:text-xs peer-focus:top-[-20px] peer-focus:text-xs"
        >
          {icon}
          {label}
        </label>
        <div className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 transform bg-gray-600 transition-all duration-300 ease-in-out peer-valid:scale-x-100 peer-focus:scale-x-100" />
      </div>
      {error && <InputError error={error} />}
    </div>
  );
}
