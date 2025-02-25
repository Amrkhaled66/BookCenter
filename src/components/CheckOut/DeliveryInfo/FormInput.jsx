import InputError from "src/components/ui/InputError";

const FormInput = ({ label, error, onChange, ...props }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-black">{label}</label>
      <input
        className="w-full rounded-lg border-[3px] border-gray-color bg-card-color px-3 py-2 font-mainFont text-base outline-none ring-main-color transition-all duration-300 ease-in-out focus:border-transparent focus:ring-2"
        onChange={onChange}
        {...props}
      />
      {error && <InputError error={error} />}
    </div>
  );
};

export default FormInput;
