export default function PageHeader({ children }) {
  return (
    <div className="relative w-screen bg-main-text--color bg-no-repeat">
      <div className="flex items-center justify-center gap-x-3 py-9 font-cairo font-bold text-white">
        {children ? (
          <div className="flex items-center text-2xl">{children}</div>
        ) : (
          <p className="text-4xl">BOOK CENTER</p>
        )}
      </div>
    </div>
  );
}
