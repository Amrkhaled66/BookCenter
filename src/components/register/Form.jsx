// InputField Component
import { IoEyeOutline } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const InputField = ({ inputType, label, Icon, mainColor, className = "" }) => {
  const cssClass = `h-16 border-[3px] font-semibold transition-all duration-300 focus:border-second-color rounded-3xl border-[#ebeaea] bg-[#e6eff440] px-5 outline-none ${className}`;
  return (
    <div className="space-y-3">
      <label className="flex items-center gap-x-1 text-[#1e1f22]">
        {Icon && (
          <Icon size={25} className={`text-${mainColor} `} />
        )}
        {label}
      </label>
      <div className="relative flex flex-col">
        <input className={cssClass} type={inputType} />
        {inputType === "password" && (
          <button>
            <IoEyeOutline
              size={25}
              className={`absolute left-5 top-1/2 -translate-y-1/2 text-${mainColor}`}
            />
          </button>
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
  redirectText,
  redirectLink,
  mainColor,
}) => {
  return (
    <div
      className={` ${redirectLink === "/login" && "sm:pt-[80px]"} flex flex-col gap-y-9 py-9 font-cairo`}
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
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col gap-y-4"
        >
          {fields.map((fieldGroup, index) => (
            <div
              key={`${index}-${fieldGroup.layout}`}
              className={`${fieldGroup.layout === "inline" && "flex gap-x-4"} `}
            >
              {fieldGroup.fields.map((field) => (
                <InputField
                  key={`${index}-${field.label}`}
                  {...field}
                  className="w-full"
                  mainColor={mainColor}
                />
              ))}
            </div>
          ))}
        </motion.form>
      </motion.div>

      <div className="space-y-5">
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", type: "spring" }}
          viewport={{ once: true }}
          className={`w-full rounded-3xl bg-${mainColor} py-4 text-center text-lg font-bold text-white hover:bg-opacity-80 sm:text-xl`}
        >
          {buttonText}
        </motion.button>

        <p className="flex w-full justify-center gap-x-2 text-center text-sm sm:text-base">
          <span>{redirectText}</span>
          <Link to={redirectLink} className={`font-bold text-${mainColor}`}>
            {redirectLink === "/login"
              ? "الدخول الي حسابك"
              : "انشئ حسابك الآن !"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
