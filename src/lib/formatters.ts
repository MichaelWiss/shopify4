export function formatMoney(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    currency,
    style: "currency",
    minimumFractionDigits: 2
  }).format(amount);
}
