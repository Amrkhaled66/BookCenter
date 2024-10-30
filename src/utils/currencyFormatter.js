export default function currencyFormatter(number) {
  const price = number - 1 + 0.99;
  return new Intl.NumberFormat("ar-Eg", {
    style: "currency",
    currency: "EGP",
    currencyDisplay: "symbol",
    useGrouping: false,
  }).format(price);
}
