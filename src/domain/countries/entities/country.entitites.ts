export type NativeName = Record<string, string>;

export interface Name extends OfficialCommon {
  nativeName: NativeName;
}

export interface NameSymbol {
  name: string;
  symbol: string;
}

export type Currencies = Record<string, NameSymbol>;

export interface Idd {
  root: string;
  suffixes: string[];
}

export type Languages = Record<string, OfficialCommon>;

export interface OfficialCommon {
  official: string;
  common: string;
}

export type Translations = Record<string, OfficialCommon>;

export interface FM {
  f: string;
  m: string;
}
export interface Demonyms {
  eng: FM;
  fra: FM;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Gini {
  2015: number;
  2018?: number;
  2009?: number;
  2012?: number;
  2019?: number;
  2003?: number;
  2017?: number;
  2014?: number;
  2013?: number;
  1998?: number;
  2016?: number;
  2006?: number;
  1992?: number;
  2010?: number;
  2011?: number;
  1999?: number;
  2004?: number;
  2005?: number;
  2008?: number;
}

export interface PostalCode {
  format: string;
  regex: string;
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
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  borders: string[];
  gini: Gini;
  postalCode: PostalCode;
}
