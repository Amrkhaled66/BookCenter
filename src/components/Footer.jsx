import { motion } from "framer-motion";

// icons
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-fit h-fit w-screen bg-main-text--color py-16 font-mainFontRegular text-7xl font-black text-[#d8eefe]">
      <div className="container flex">
        <div className="flex w-full flex-col items-center justify-center gap-y-20">
          <div className="flex w-full flex-col items-center justify-between gap-y-8 md:flex-row">
            <div className="flex w-full flex-col items-center justify-center gap-y-8 md:w-1/2">
              <p className="font-mainFont text-4xl">
                <span>لسه عندك سؤال عن </span>
                <span className="font-secondFont text-second-color">
                  بوك سنتر ؟
                </span>
              </p>
              <button className="font-mainFont-regular flex items-center gap-x-2 rounded-3xl bg-main-color px-4 py-3 text-xl">
                <MdAddCall size={20} /> تواصل معنا
              </button>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between gap-y-8 md:w-1/2">
              {/* <img className="h-[80px] w-full" src={logo} alt="" /> */}
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, type: "spring" }}
                className="font-secondFont"
              >
                بــوك سنتر
              </motion.p>
              <p className="flex flex-col text-xl tracking-wider">
                😘 قلب بوك سنتر من جوة
              </p>
              <div className="flex gap-x-5 text-4xl">
                <button className="transition-all duration-200 hover:text-[#1877F2]">
                  <FaFacebook />
                </button>
                <button className="transition-all duration-200 hover:text-[#25D366]">
                  <FaWhatsapp />
                </button>
              </div>
            </div>
          </div>

          <div>
            <p className="flex gap-x-5 text-center text-xl font-medium tracking-wide">
              {/* <span>
              &lt; Developed By &gt;
              <span className="font-bold pl-4 text-second-color underline">Amr</span>
            </span> */}
              <span> &lt; All Copy Rights Reserved @2024 &gt;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
