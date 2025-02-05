/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import useColors from "src/hooks/useColors";
import Swal from "sweetalert2";

import Loader from "src/components/ui/icons/Loader";

const InputField = ({
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
          className={`h-16 rounded-3xl border-[3px] border-[#ebeaea] bg-[#e6eff440] px-5 font-semibold outline-none transition-all duration-300 focus:border-[${mainColor}] ${className}`}
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
        {error && (
          <motion.p
            key={Date.now()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-lg bg-rose-400 px-4 py-1 text-[15px] text-white"
          >
            ⚠ - {error}
          </motion.p>
        )}
      </div>
    </div>
  );
};

const AuthForm = ({
  title,
  description,
  fields,
  buttonText,
  redirectText = null,
  redirectLink = null,
  mainColor,
  validate,
  mutationFn,
}) => {
  const [errors, setErrors] = useState({}); // Change Errors to errors
  const { colors } = useColors();

  let color = colors.get(mainColor);
  const mutation = mutationFn();

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());

    const { data: formattedData, errors } = validate(formData);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});

    mutation.mutate(formattedData, {
      onError: (error) => {
        let errMessage;
        if (error.status === 401) {
          errMessage = "خطأ في رقم الهاتف او في كلمة المرور";
        }
          else if (error.status === 409) {
          errMessage = "الرقم مسجل بالفعل علي الموقع";
        } else if (error.status === 400) {
          errMessage = "خطأ برجاء التواصل مع الدعم";
        }
        setErrors({ phone: errMessage });
      },
      onSuccess: () => {
        event.target.reset();
      },
    });
  };

  return (
    <div
      className={`${redirectLink === "/login" && "sm:pt-[80px]"} flex flex-col gap-y-9 py-9 font-cairo`}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        className="space-y-8"
        viewport={{ once: true }}
      >
        <p className="text-xl font-bold sm:text-2xl">{title}</p>
        <p className="text-sm font-light sm:text-base">{description}</p>
      </motion.div>

      <motion.div className="space-y-4">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col gap-y-6"
        >
          {fields.map((fieldGroup, index) => (
            <div key={`${index}-${fieldGroup.layout}`}>
              {fieldGroup.fields.map((field) => (
                <InputField
                  key={`${index}-${field.label}`}
                  {...field}
                  className="w-full"
                  mainColor={color}
                  name={field.name}
                  error={errors[field.name]} // Use errors (lowercase)
                />
              ))}
            </div>
          ))}
          <motion.button
            disabled={mutation.isPending}
            type="submit"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
            transition={{ duration: 0.75, ease: "easeOut", type: "spring" }}
            viewport={{ once: true }}
            css={css`
              background-color: ${color};
              border: 2px solid ${color};
              &:hover {
                background-color: transparent;
                color: ${color};
              }
            `}
            className="flex w-full items-center justify-center space-x-2 rounded-3xl py-4 text-lg font-bold text-white transition-colors duration-300 hover:bg-opacity-80 sm:text-xl"
          >
            {mutation.isPending ? <Loader /> : buttonText}
          </motion.button>
        </motion.form>
      </motion.div>

      {redirectLink && (
        <div className="space-y-5">
          <p className="flex w-full justify-center gap-x-2 text-center text-sm sm:text-base">
            <span>{redirectText}</span>
            <Link
              css={css`
                color: ${color};
              `}
              to={redirectLink}
              className="font-bold"
            >
              {redirectLink === "/login" ? "الدخول الي حسابك" : "انشئ حسابك الآن !"}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;