import { useQuery } from "@tanstack/react-query";
import { Country } from "domain/countries/entities/country.entitites";
import {
  fetchLiveStream,
  getLiveRatesCountryCurrencies,
  mutateCountryWithLiveRates,
} from "../services/liverates.service";

type LiveRatesParams = {
  countries: Country[];
  activeBase?: string;
  onSuccess: (c: Country[]) => void;
};

export function useLivestremDefaultCountries({
  countries,
  activeBase,
  onSuccess,
}: LiveRatesParams) {
  return useQuery(
    ["useLiveStreamData", countries.length, activeBase],
    async () =>
      fetchLiveStream(getLiveRatesCountryCurrencies(countries), activeBase),
    {
      refetchInterval: 60 * 1000,
      enabled: countries?.length > 0,
      notifyOnChangeProps: ["data"],
      onSuccess: (data) => {
        return (
          onSuccess &&
          onSuccess(mutateCountryWithLiveRates(countries, data.rates))
        );
      },
    }
  );
}
