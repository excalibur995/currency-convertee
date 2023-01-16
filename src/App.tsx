import { Card } from "components/atoms/Card";
import Input from "components/atoms/Input";
import LiveRatesModules from "modules/LiveRatesModules";

export default function App() {
  return (
    <main className="relative z-10 h-full  md:m-auto md:mx-auto">
      <div className="flex flex-col gap-5 p-5">
        <section className="flex flex-col gap-5">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-white">
              Currency Convertee
            </h1>
            <p className="text-white">
              Introducing Currency Converter calculator.
            </p>
          </div>
          <Card>
            <Input label="From" />
            <Input label="To" />
          </Card>
        </section>
        <LiveRatesModules />
      </div>
    </main>
  );
}
