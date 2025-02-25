export default function ProductImg({ imageUrl }) {
  return (
    <img
      className="rounded-3xl drop-shadow-2xl "
      src={`${import.meta.env.VITE_API_URL}/${imageUrl}`}
      alt="Product Image"
    />
  );
}
