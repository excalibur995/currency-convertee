import { Country } from "domain/countries/entities/country.entitites";

export function currencyFormatter(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    currency,
    style: "currency",
  }).format(amount);
}

export function mutateCurrencyData(countries: Country[]) {
  return countries.map((item) => {
    if (!!item.currencies) {
      const [key] = Object.keys(item.currencies);
      item.currencyShort = key;
    }
    return item;
  });
}
