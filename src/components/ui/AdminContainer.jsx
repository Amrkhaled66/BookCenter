const AdminContainer = ({ children, title, Icon }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-16 overflow-hidden py-12 font-cairo text-3xl font-semibold text-main-color">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-black">{title}</h1>
        <span className="text-4xl">{Icon}</span>
      </div>
      {children}
    </div>
  );
};

export default AdminContainer;
