import { create } from "zustand";
import { LiveRatesStates } from "../entities/liverates.entities";
import { mutateCountryData } from "../services/liverates.service";

export const useLiveRatesState = create<LiveRatesStates>()((set) => ({
  countryList: [],
  addNewCountry(country) {
    set((state) => {
      const countryList = state.countryList;
      countryList.push(country);
      return {
        countryList,
      };
    });
  },
  setCountry(countries) {
    set({
      countryList: mutateCountryData(countries),
      activecountry: countries[0].currencyShort,
    });
  },
  setLiveRates(countries) {
    set((state) => ({
      countryList: mutateCountryData(countries, state.activecountry),
    }));
  },
  setActiveCountry(country) {
    set({
      activecountry: country.currencyShort,
    });
  },
}));
