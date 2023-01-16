import { Card } from "components/atoms/Card";
import LiveRatesCountryCard from "components/molecules/LiveRatesCountryCard";
import { Country } from "domain/countries/entities/country.entitites";
import { useCountriesData } from "domain/countries/hooks/countries.hooks";

const LiveRatesModules = () => {
  const { data } = useCountriesData();

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold text-white">
          Live Exchanges Rate
        </h1>
        <p className="text-white">
          Will Refresh every <b>One minutes</b>.
        </p>
      </div>
      <Card>
        <div className="grid grid-rows-4">
          {(data as Country[]).slice(0, 4).map((item) => (
            <LiveRatesCountryCard key={item.cca2} {...item} />
          ))}
        </div>
      </Card>
    </section>
  );
};

export default LiveRatesModules;
