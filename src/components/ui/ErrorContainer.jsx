export default function ErrorContainer({ children }) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col min-h-[400px] w-[90%] items-center justify-center gap-y-3 rounded-[2.5rem] bg-white px-9 py-11 text-lg font-bold drop-shadow-xl sm:w-[60%]">
        {children}
      </div>
    </div>
  );
}
