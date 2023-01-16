import { COUNTRIES_BASE_URL } from "shared/utils/constant";
import { Country } from "../entities/country.entitites";

export async function fetchCountries() {
  try {
    const request = await fetch(COUNTRIES_BASE_URL + "/all");
    const response = await request.json();
    return response as Country[];
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
