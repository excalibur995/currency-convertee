import LiveRatesCountryCard from "components/molecules/LiveRatesCountryCard";
import { Card } from "components/atoms/Card";
import { useLivestremDefaultCountries } from "domain/liverates/hooks/liverates.hooks";
import { useLiveRatesState } from "domain/liverates/states/liverates.states";
import { useCountriesData } from "domain/countries/hooks/countries.hooks";

const LiveRatesModules = () => {
  const {
    countryList,
    setCountry,
    activecountry,
    setActiveCountry,
    setLiveRates,
  } = useLiveRatesState((state) => state);
  useCountriesData(undefined, setCountry);

  useLivestremDefaultCountries({
    countries: countryList,
    onSuccess: setLiveRates,
    activeBase: activecountry,
  });

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
          {countryList.slice(0, 4).map((item) => (
            <LiveRatesCountryCard
              onClick={setActiveCountry}
              key={item.cca2}
              item={item}
              activeCountry={activecountry}
            />
          ))}
        </div>
      </Card>
    </section>
  );
};

export default LiveRatesModules;
