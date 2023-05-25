import Hero from "components/Hero";

let hero = {
  title: "Our Reviews",
};

export default function Services() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
