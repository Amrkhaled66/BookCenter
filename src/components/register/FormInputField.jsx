/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InputError from "src/components/ui/InputError";

const FormInputField = ({
  inputType,
  label,
  Icon,
  name,
  mainColor,
  className = "",
  error,
}) => {
  return (
    <div className="space-y-3">
      <label
        style={{
          color: mainColor,
        }}
        className="flex items-center gap-x-1"
      >
        {Icon && <Icon size={25} />}
        <p className="text-[#1e1f22]">{label}</p>
      </label>
      <div className="relative flex flex-col">
        <input
          className={`h-16 rounded-3xl border-2 border-[#ebeaea] bg-[#e6eff440] px-5 font-semibold outline-none transition-all duration-300  ${className}`}
          // eslint-disable-next-line react/no-unknown-property
          css={css`
            &:focus {
              border-color: ${mainColor};
            }
          `}
          required
          name={name}
          type={inputType}
        />
        {error && <InputError error={error} />}
      </div>
    </div>
  );
};

export default FormInputField;
