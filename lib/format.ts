export function formatPrice(
  price: number,
  currency: "NGN" | "GHS" | "USD"
) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}