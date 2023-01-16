import { Country } from "domain/countries/entities/country.entitites";

const LiveRatesCountryCard = (item: Country) => {
  return (
    <div className="grid grid-cols-4 text-white">
      <span className="inline-flex items-center gap-3">
        <span className="text-3xl">{item.flag}</span>
        <span className="text-lg">{item.name.common}</span>
      </span>
    </div>
  );
};

export default LiveRatesCountryCard;
