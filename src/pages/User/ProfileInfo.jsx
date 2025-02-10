import { useState } from "react";
import ContainerHeader from "src/components/Profile/ContainerHeader";
import DateSelector from "src/components/Profile/DateSelector";
import { days, months, years } from "src/utils/dateConstants";
import { getUser } from "src/services/authServices";

const validateName = (name) => {
  if (name.split(" ").length > 2) return;
};

export default function ProfileInfo() {
  const userName = getUser().name;

  // Initial form state
  const initialFormData = {
    name: userName,
    birthdate: {
      day: "يوم",
      month: "شهر",
      year: "سنة",
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  // Check if form data has changed
  const isFormChanged =
    formData.name !== initialFormData.name ||
    JSON.stringify(formData.birthdate) !==
      JSON.stringify(initialFormData.birthdate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, birthdate } = formData;
    validateName(name);
    name, birthdate;
  };

  return (
    <div className="drop flex h-auto w-full flex-1 flex-col pt-3 font-cairo">
      <ContainerHeader
        title="بيانات الحساب"
        subTitle="لو حابب تعدل بيانات حسابك"
      />
      <div className="flex h-auto w-full flex-1 flex-col pt-10 md:pr-10">
        <div className="px-5 pt-10 md:pr-10">
          <form
            className="w-full space-y-10 md:w-[80%]"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <div className="flex w-full flex-col justify-between gap-y-6 text-gray-700 md:flex-row md:items-center">
              <label className="text-2xl font-semibold">الرقم</label>
              <input
                disabled
                className="w-full rounded-sm bg-white px-3 py-2 text-xl font-semibold caret-third-color outline-none outline-[1px] outline-gray-color transition-all duration-150 md:w-[65%]"
                type="text"
                value={"01066244158"}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="flex w-full flex-col justify-between gap-y-6 text-gray-700 md:flex-row md:items-center">
              <label className="text-2xl font-semibold">الاسم</label>
              <input
                className="w-full rounded-sm bg-white px-3 py-2 text-xl font-semibold caret-third-color outline-none outline-[1px] outline-gray-color transition-all duration-150 md:w-[65%]"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Date of Birth */}
            <div className="flex w-full flex-col justify-between gap-y-6 md:flex-row md:items-center">
              <label className="text-2xl font-semibold">تاريخ الميلاد</label>
              <DateSelector
                selectedDate={formData.birthdate}
                onDateChange={(birthdate) =>
                  setFormData({ ...formData, birthdate })
                }
              />
            </div>

            <div className="flex pt-10">
              <button
                type="submit"
                disabled={!isFormChanged} // Disable if no changes
                className={`font-Cairo rounded-md px-12 py-3 text-xl font-semibold text-white transition-all duration-300 ${isFormChanged ? "bg-second-color hover:brightness-90" : "cursor-not-allowed bg-gray-400"}`}
              >
                حفظ التعديلات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
