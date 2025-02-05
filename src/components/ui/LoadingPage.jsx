import Loader from "./icons/Loader";

export default function LoadingPage({ children }) {
  return (
    <div className={`relative flex min-h-screen w-screen items-center`}>
      <span className="flex  items-center font-bold w-full justify-center gap-x-4 font-cairo text-2xl">
        {children}
        <Loader />
      </span>
    </div>
  );
}
