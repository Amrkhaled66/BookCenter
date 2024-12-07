function QuantityButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-fit w-7 min-w-[36px] items-center justify-center rounded-[13px] border-2 hover:translate-y-[4px] hover:translate-x-[4px] border-main-text--color py-1 font-bold transition-all duration-300 hover:border-main-text--color"
    >
      {label}
    </button>
  );
}

export default function QuantitySelector({ setQuantity, quantity }) {
  const increment = () => setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="flex w-full items-start justify-center gap-x-3">
      <form className="group flex w-3/5 items-center justify-start gap-x-1 rounded-xl border-2 border-main-text--color px-2 py-1 font-mainFontRegular text-lg font-bold transition-all duration-300 focus-within:border-main-text--color">
        <label>الكمية : </label>
        <input
          value={quantity}
          dir="rtl"
          onChange={(e) =>
            setQuantity(Math.min(20, Math.max(1, Number(e.target.value))))
          }
          className="no-arrows flex-1 focus:outline-none"
          type="number"
          max="20"
          min="1"
        />
      </form>
      <div className="flex w-1/3 justify-start gap-x-2">
        <QuantityButton label="+" onClick={increment} />
        <QuantityButton label="-" onClick={decrement} />
      </div>
    </div>
  );
}
