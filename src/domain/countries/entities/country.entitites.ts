export interface Name {
  common: string;
  official: string;
}

export interface Currencies {
  name: string;
  symbol: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  latlng: number[];
  landlocked: boolean;
  area: number;
  flag: string;
  population: number;
  fifa: string;
  timezones: string[];
  continents: string[];
  flags: Flags;
  currencyShort: string;
  rates: number;
  defaultActive: boolean;
}

export interface CountryStates {
  countries: Country[];
  setCountry: (countries: Country[]) => void;
}
