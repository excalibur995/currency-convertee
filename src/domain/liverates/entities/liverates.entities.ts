import { Country } from "domain/countries/entities/country.entitites";

export type LiveRates = Record<string, number>;
export type CountryLiveRates = Country & {
  rates?: LiveRates;
};
export interface LiveRatesStates {
  countryList: Country[];
  liveRates?: LiveRates;
  activecountry?: string;
  setCountry: (countries: Country[]) => void;
  setLiveRates: (countries: Country[]) => void;
  addNewCountry: (country: Country) => void;
  setActiveCountry: (country: Country) => void;
}
