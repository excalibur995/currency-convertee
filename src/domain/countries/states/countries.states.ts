import { create } from "zustand";
import countries from "shared/data/countries.json";
import { Country, CountryStates } from "../entities/country.entitites";

export const useCountryStates = create<CountryStates>()((set) => ({
  countries: countries as unknown as Country[],
  setCountry(countries) {
    set({ countries });
  },
}));
