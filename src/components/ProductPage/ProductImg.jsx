export default function ProductImg({ image }) {
  return (
    <img
      className="rounded-3xl drop-shadow-2xl "
      src={`${import.meta.env.VITE_API_URL}/${image}`}
      alt="Product Image"
    />
  );
}
