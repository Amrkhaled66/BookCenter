
function QuantityButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-fit w-7 min-w-[36px] items-center justify-center rounded-[13px] border-2 border-gray-200 py-1 font-bold transition-all duration-300 hover:border-main-text--color"
    >
      {label}
    </button>
  );
}

export default function QuantitySelector({ setQuantity , quantity }) {

  const increment = () => setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="flex w-full items-end justify-center space-x-3">
      <div className="flex w-1/3 justify-end space-x-2">
        <QuantityButton label="-" onClick={decrement} />
        <QuantityButton label="+" onClick={increment} />
      </div>
      <form
        className="group flex w-2/3 items-center justify-end space-x-2 border-2 border-gray-200 px-2 py-1 font-mainFontRegular font-bold transition-all duration-300 focus-within:border-main-text--color"
        action=""
      >
        <input
          value={quantity}
          dir="rtl"
          onChange={(e) =>
            setQuantity(Math.min(20, Math.max(1, Number(e.target.value))))
          }
          className="no-arrows w-1/2  focus:outline-none"
          type="number"
          max="20"
          min="1"
        />
        <label>: الكمية</label>
      </form>
    </div>
  );
}
