import InputFiled2nd from "./InputFiled2nd";
import TransparentBtn from "./TransparentBtn";
import useColors from "src/hooks/useColors";

export default function AdminForm({
  error,
  onSubmit,
  label,
  icon,
  isLoading,
  children,
  inputName,
  SubmitText = "بحث",
  defaultInputValue,
  type = "text",
}) {
  const { colors } = useColors();
  const mainColor = colors.get("mainColor");
  const secondColor = colors.get("secondColor");
  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex w-[85%] flex-col gap-y-8 text-sm sm:w-[50%]"
        action=""
      >
        <InputFiled2nd
          name={inputName}
          icon={icon}
          label={label}
          type={type}
          error={error}
          required={true}
          defaultValue={defaultInputValue}
        />
        {children}

        <TransparentBtn
          type="submit"
          bgColor={SubmitText === "حذف" ? secondColor : mainColor}
          className="text-white"
          loading={isLoading}
        >
          {SubmitText}
        </TransparentBtn>
      </form>
    </div>
  );
}
