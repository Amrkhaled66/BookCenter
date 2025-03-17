import InputFiled2nd from "src/components/ui/InputFiled2nd";
import TransparentBtn from "src/components/ui/TransparentBtn";
import ProfileDetails from "../User/ProfileDetails";
import UserOrderTable from "src/components/DashBoard/UserProfile/UserOrderTable";
import AdminContainer from "src/components/ui/AdminContainer";
import Loader from "src/components/ui/icons/Loader";

import useColors from "src/hooks/useColors";
import useFormValidation from "src/hooks/useFormValidation";
import { useParams } from "react-router-dom";
import {
  useGetUserProfile,
  useUpdatePassword,
} from "src/hooks/useAdminMutations";
import { useNavigate } from "react-router-dom";

import { RiLockPasswordLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Alert from "src/components/ui/Alert";

const validate = (password) => {
  const errors = {};

  // reformat
  password = password?.replace(/ /g, "");

  // validate password
  if (password?.replace(/ /g, "").length < 6)
    errors.password = "الباسورد لازم يكون 6 حروف اقل حاجة";

  return {
    data: {
      password,
    },
    errors,
  };
};

const Header = ({ title }) => {
  return (
    <p className="group w-fit border-b-4 border-b-second-color pb-2 font-cairo text-3xl font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:text-second-color">
      {title}
      <span className="text-second-color transition-all duration-300 group-hover:text-black">
        {" "}
        الطالب{" "}
      </span>
    </p>
  );
};

const UserProfile = () => {
  const { id } = useParams();
  const { colors } = useColors();
  const navigate = useNavigate();
  const { errors, handleValidation, handleError } = useFormValidation(validate);
  const { data, isLoading, isError } = useGetUserProfile(id);
  const { mutate, isPending } = useUpdatePassword();

  const mainColor = colors.get("mainColor");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { phone } = Object.fromEntries(formData.entries());

    const { isValid, formattedData } = handleValidation(phone);

    if (!isValid) return;
    mutate(
      { id, ...formattedData },
      {
        onSuccess: () => {
          e.target.elements[0].value = "";
          Alert("تم بنجاح", "تم تحديث كلمة السر", "success", "حسناً");
        },
        onError: (error) => handleError(error),
      },
    );
  };

  if (isError) {
    return (
      <AdminContainer>
        <p>حدث خطأ</p>
      </AdminContainer>
    );
  }

  return (
    <AdminContainer title="ملف المستخدم" Icon={<CgProfile />}>
      {isLoading ? (
        <div className="flex gap-x-2 text-2xl text-black">
          <Loader />
          يتم تحميل بيانات الطالب
        </div>
      ) : (
        <div className="flex w-full flex-col gap-y-12">
          <div className="space-y-14">
            <button
              onClick={() => navigate(-1)}
              className="mr-12 flex w-fit items-center gap-x-1 rounded-lg bg-fourth-color px-4 py-3 text-sm text-black underline transition-all duration-500 ease-in-out hover:scale-105 hover:drop-shadow-xl"
            >
              <FaArrowRight /> العودة للخلف والبحث عن رقم اخر
            </button>
            <div className="mx-auto w-fit space-y-4">
              <p className="text-center text-sm">تم العثور علي الطالب</p>
              <p className="text-center text-3xl text-black underline">
                {data?.user?.phone}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-[85%] flex-col gap-y-9 text-sm sm:w-[50%]"
              action=""
            >
              <InputFiled2nd
                required="true"
                name="phone"
                icon={<RiLockPasswordLine />}
                label="الرقم السري الجديد"
                type="text"
                error={errors.pass}
              />
              <TransparentBtn
                type="submit"
                bgColor={mainColor}
                className="text-white"
              >
                تغيير كلمة السر
              </TransparentBtn>
            </form>
          </div>

          <div className="mx-auto mt-14 w-[90%] space-y-9 text-base text-black">
            <Header title="بيانات"></Header>
            <div className="px-10">
              <ProfileDetails user={data?.user} />
            </div>
          </div>

          <div className="mx-auto h-1 w-[50%] rounded-xl bg-zinc-300 drop-shadow-md"></div>
          <div className="mx-auto w-[90%] space-y-9 text-base text-black">
            <Header title="أوردرات"></Header>
            <div className="w-full overflow-hidden rounded-md">
              <UserOrderTable orders={data?.orderHistory} />
            </div>
          </div>
        </div>
      )}
    </AdminContainer>
  );
};

export default UserProfile;
