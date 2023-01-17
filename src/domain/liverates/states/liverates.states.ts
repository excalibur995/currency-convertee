import countries from "shared/data/countries.json";
import { DEFAULT_LIVE_STREAM_COUNTRY } from "shared/utils/constant";
import { create } from "zustand";
import { LiveRatesStates } from "../entities/liverates.entities";
import { mutateCountryData } from "../services/liverates.service";
import { Country } from "domain/countries/entities/country.entitites";

export const useLiveRatesState = create<LiveRatesStates>()((set) => ({
  liveRatesCountry: mutateCountryData(countries as unknown as Country[]),
  activeCountry: "IDR",
  addNewCountry(country) {
    set((state) => {
      const liveRatesCountry = state.liveRatesCountry;
      liveRatesCountry.push(country);
      DEFAULT_LIVE_STREAM_COUNTRY.set(country.cca2, country.name.common);
      return {
        liveRatesCountry,
      };
    });
  },
  setLiveRatesCountry(countries) {
    set({ liveRatesCountry: mutateCountryData(countries) });
  },
  setLiveRates(countries) {
    set((state) => ({
      liveRatesCountry: mutateCountryData(countries, state.activeCountry),
    }));
  },
  setActiveCountry(country) {
    set({ activeCountry: country.currencyShort });
  },
}));
