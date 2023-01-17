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
  activeCountry?: string
) {
  const liveStreamCountry = [];
  for (const country of countries) {
    if (liveStreamCountry.length === 4) break;
    if (DEFAULT_LIVE_STREAM_COUNTRY.has(country.cca2)) {
      country.defaultActive = false;
      if (!!activeCountry) {
        if (country.currencyShort === activeCountry) {
          country.defaultActive = true;
        }
      }
      if (!activeCountry && country.cca2 === DEFAULT_COUNTRY_CODE) {
        country.defaultActive = true;
        country.currencyShort = "IDR";
      }

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
    rates.push(country.currencyShort);
  });
  return rates;
}

export function mutateCountryWithLiveRates(
  country: Country[],
  liveRates: LiveRates
) {
  return country.map((item) => {
    item.rates = liveRates[item.currencyShort];
    return item;
  });
}
