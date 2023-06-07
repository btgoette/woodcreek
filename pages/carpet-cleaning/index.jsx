import Hero from "components/Hero";
import FAQ from "components/FAQ";

let hero = {
  background: "carpet-cleaning",
  title: "Carpet Cleaning",
};

export default function CarpetCleaning() {
  return (
    <div>
      <Hero {...hero} />
      <FAQ />
    </div>
  );
}
