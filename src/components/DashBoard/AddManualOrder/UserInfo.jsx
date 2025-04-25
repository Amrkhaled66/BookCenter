const Row = ({ title, value, haveBorder }) => {
  return (
    <div className={`flex justify-between text-sm ${haveBorder && "border-b-2 pb-1 border-dashed border-[#bababa]"} `}>
      <p>{title}:</p>
      <p>{value}</p>
    </div>
  );
};

const UserInfo = ({ user }) => {
  const { name, phone, address, secondaryPhone, orderHistory } = user;
  return (
    <div className="mb-8 space-y-6 rounded-md  ">
      <h2 className="flex gap-x-1 text-xl border-b-4 border-second-color pb-1 w-fit  font-bold" >
        <span  > بيانات</span>
        <span className="text-second-color" >المستخدم</span>
      </h2>
      <div className="grid grid-cols-1 gap-2 ">
        <Row haveBorder title="الاسم" value={name} />
        <Row haveBorder title="الرقم الاساسي " value={phone} />
        <Row haveBorder title="الرقم البديل" value={secondaryPhone} />
        <Row haveBorder title="المحافظة" value={address.city} />
        <Row haveBorder title="المدينة" value={address.state} />
        <Row haveBorder title="العنوان" value={address.descriptiveAddress} />
        <Row haveBorder title="عدد الاوردرات" value={orderHistory?.length} />
      </div>
    </div>
  );
};

export default UserInfo;
