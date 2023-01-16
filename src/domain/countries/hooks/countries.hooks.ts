import { useQuery } from "@tanstack/react-query";
import { DEFAULT_COUNTRY_CODE } from "shared/utils/constant";
import { Country } from "../entities/country.entitites";
import { fetchCountries } from "../services/countries.service";

export function useCountriesData(
  select?: (data: Country[]) => any,
  onSuccess?: (data: Country[]) => void
) {
  return useQuery(["useCountriesData"], fetchCountries, {
    initialData: [],
    keepPreviousData: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    onSuccess,
    select,
  });
}

export function useDefaultCountries() {
  return useCountriesData((data) =>
    data.find((item) => item.cca2 === DEFAULT_COUNTRY_CODE)
  );
}
