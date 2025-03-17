const AdminContainer = ({ children, title, Icon }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-16 py-16 font-cairo font-semibold">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-3xl text-black">{title}</h1>
        <span className="text-4xl text-main-color">{Icon}</span>
      </div>
      {children}
    </div>
  );
};

export default AdminContainer;
