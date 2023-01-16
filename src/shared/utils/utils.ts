export function currencyFormatter(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    currency,
    style: "currency",
  }).format(amount);
}
