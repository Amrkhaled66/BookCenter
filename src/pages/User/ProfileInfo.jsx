import { useState } from "react";
import ContainerHeader from "src/components/Profile/ContainerHeader";
import DateSelector from "src/components/Profile/DateSelector";
import { days, months, years } from "src/utils/dateConstants";

import { getUser } from "src/services/authServices";
export default function ProfileInfo() {
  const userName = getUser().name;
  const [formData, setFormData] = useState({
    name: userName,
    birthdate: {
      day: days[0],
      month: months[0],
      year: years[0],
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, birthdate } = formData;
    console.log(name, birthdate);
    // onSubmit?.({
    //   name,
    //   birthdate: `${birthdate.day} ${birthdate.month} ${birthdate.year}`,
    // });
  };

  return (
    <div className="flex h-auto w-full flex-1 flex-col font-cairo">
      <ContainerHeader
        title="بيانات الحساب"
        subTitle="لو حابب تعدل بيانات حسابك"
      />
      <div className="flex h-auto w-full flex-1 flex-col pr-10 pt-10">
        <div className="pr-10 pt-10">
          <form className="w-[80%] space-y-10" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="flex w-full items-center justify-between">
              <label className="text-2xl font-semibold">الاسم</label>
              <input
                className="w-[65%] rounded-md border-2 bg-gray-200 p-3 text-xl font-semibold outline-none transition-all duration-150 focus:border-third-color"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Date of Birth */}
            <div className="flex w-full items-center justify-between">
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
                className="font-Cairo rounded-xl border-2 bg-second-color px-12 py-3 text-xl font-semibold text-white transition-all duration-300 hover:border-second-color hover:bg-transparent hover:text-second-color"
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
