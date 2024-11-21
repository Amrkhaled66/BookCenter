export default function currencyFormatter(number) {
  if (!number) return;

  let formatter = new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    currencyDisplay: "symbol",
    useGrouping: false,
    // minimumFractionDigits: 2,
  }).format(number);
  return formatter.replace(".", ",");
}
