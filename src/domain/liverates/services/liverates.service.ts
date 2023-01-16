import { Country } from "domain/countries/entities/country.entitites";
import {
  DEFAULT_LIVE_STREAM_COUNTRY,
  DEFAULT_COUNTRY_CODE,
  EXCHANGE_RATES_BASE_URL,
} from "shared/utils/constant";
import { LiveRates } from "../entities/liverates.entities";

export async function fetchLiveStream(rates: string[], base?: string) {
  try {
    const url = new URL(EXCHANGE_RATES_BASE_URL + "/latest");
    const urlParams = [
      ["base", base || rates[0]],
      ["symbols", rates.toString()],
      ["places", "6"],
      ["amount", "1000"],
    ];
    url.search = new URLSearchParams(urlParams).toString();

    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export function mutateCountryData(
  countries: Country[],
  activecountry?: string
) {
  const liveStreamCountry = [];
  for (const country of countries) {
    if (liveStreamCountry.length === 4) break;
    if (DEFAULT_LIVE_STREAM_COUNTRY.has(country.cca2)) {
      country.defaultActive = false;
      if (!!activecountry) {
        if (country.currencyShort === activecountry) {
          country.defaultActive = true;
        }
      }
      if (!activecountry && country.cca2 === DEFAULT_COUNTRY_CODE)
        country.defaultActive = true;
      liveStreamCountry.push(country);
    }
  }
  return liveStreamCountry.sort((a, b) =>
    b?.defaultActive === a?.defaultActive ? 0 : a.defaultActive ? -1 : 1
  );
}

export function getLiveRatesCountryCurrencies(countries: Country[]): string[] {
  const rates: string[] = [];
  countries.forEach((country) => {
    if (country.currencies) {
      rates.push(Object.keys(country.currencies)[0]);
    }
  });
  return rates;
}

export function mutateCountryWithLiveRates(
  country: Country[],
  liveRates: LiveRates
) {
  return country.map((item) => {
    const [key] = Object.keys(item.currencies);
    item.rates = liveRates[key];
    item.currencyShort = key;
    return item;
  });
}
