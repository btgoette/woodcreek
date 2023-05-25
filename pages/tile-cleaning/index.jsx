import Hero from "components/Hero";

let hero = {
  title: "Tile Cleaning",
};

export default function Services() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
