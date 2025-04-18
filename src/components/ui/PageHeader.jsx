import CartLine from "src/assets/cartLine.svg?react";

export default function PageHeader({ title, children }) {
  return (
    <div className="bg-red relative flex items-center justify-end gap-x-5">
      <p className="text-center font-mainFont text-4xl font-bold text-footer-color sm:text-5xl">
        {title}
      </p>
      <CartLine className="absolute -bottom-7 left-1/2 block w-[100%] -translate-x-1/2" />
      {children}
    </div>
  );
}
