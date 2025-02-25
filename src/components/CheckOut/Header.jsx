export default function Header({ title, icon }) {
  return (
    <div className="mx-auto w-fit border-b-8 border-b-second-color p-1">
      <p className="flex items-end gap-x-2 font-mainFont text-2xl font-bold text-footer-color">
        {title}
        {icon && <img src={icon} className="h-9 w-9" alt="DeliveryCar" />}
      </p>
    </div>
  );
}
