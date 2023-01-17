import LiveRatesCountryCard from "components/molecules/LiveRatesCountryCard";
import { Card } from "components/atoms/Card";
import { useLivestremDefaultCountries } from "domain/liverates/hooks/liverates.hooks";
import { useLiveRatesState } from "domain/liverates/states/liverates.states";

const LiveRatesModules = () => {
  const { liveRatesCountry, activeCountry, setActiveCountry, setLiveRates } =
    useLiveRatesState((state) => state);

  useLivestremDefaultCountries({
    countries: liveRatesCountry,
    onSuccess: setLiveRates,
    activeBase: activeCountry,
  });

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold text-white">Exchanges Rate</h1>
        <p className="text-white">
          Will Refresh every <b>One minutes</b>.
        </p>
      </div>
      <Card>
        <div className="grid w-full grid-rows-4">
          {liveRatesCountry.map((item) => (
            <LiveRatesCountryCard
              onClick={setActiveCountry}
              key={item.cca2}
              item={item}
              activeCountry={activeCountry}
            />
          ))}
        </div>
      </Card>
    </section>
  );
};

export default LiveRatesModules;
