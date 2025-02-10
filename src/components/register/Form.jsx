/** @jsxImportSource @emotion/react */

import useColors from "src/hooks/useColors";
import useFormValidation from "src/hooks/useFormValidation";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { css } from "@emotion/react";

import Loader from "src/components/ui/icons/Loader";
import FormInputField from "./FormInputField";

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
  const { colors } = useColors();
  let color = colors.get(mainColor);

  const { errors, handleValidation, handleError } = useFormValidation(validate);

  const mutation = mutationFn();

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());

    const { isValid, formattedData } = handleValidation(formData);

    if (!isValid) return;

    mutation.mutate(formattedData, {
      onError: handleError,
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
                <FormInputField
                  key={`${index}-${field.label}`}
                  {...field}
                  className="w-full"
                  mainColor={color}
                  name={field.name}
                  error={errors[field.name]}
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
              {redirectLink === "/login"
                ? "الدخول الي حسابك"
                : "انشئ حسابك الآن !"}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
