import { Country } from "domain/countries/entities/country.entitites";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { currencyFormatter } from "shared/utils/utils";
interface LiveRatesCountryCardProps {
  item: Country;
  activeCountry?: string;
  onClick?: (country: Country) => void;
}

const wrapper = cva("grid grid-cols-4 gap-14 text-white p-2 cursor-pointer", {
  variants: {
    isActive: {
      true: "backdrop-blur-lg rounded-xl bg-primary border-secondary border-2",
    },
  },
});

const LiveRatesCountryCard = ({
  item,
  activeCountry,
  onClick,
}: LiveRatesCountryCardProps) => {
  return (
    <motion.div
      transition={{ type: "spring" }}
      onClick={() => onClick && onClick(item)}
      className={wrapper({ isActive: item.currencyShort === activeCountry })}
    >
      <motion.span className="inline-flex items-center gap-1">
        <motion.span className="text-3xl">{item.flag}</motion.span>
        {item.currencyShort && (
          <motion.span className="hidden text-lg md:flex">
            {item.currencies[item.currencyShort].name}
          </motion.span>
        )}
        {item.currencyShort && (
          <motion.span className="text-lg md:hidden">
            {item.currencyShort}
          </motion.span>
        )}
        {!item.currencyShort && (
          <motion.span className="text-lg md:hidden">
            <motion.span className="text-lg">{item.name.common}</motion.span>
          </motion.span>
        )}
      </motion.span>
      <motion.span className="inline-flex items-center">
        <motion.span className="text-lg">
          {currencyFormatter(item.rates ?? 0, item.currencyShort ?? "IDR")}
        </motion.span>
      </motion.span>
    </motion.div>
  );
};

export default LiveRatesCountryCard;
