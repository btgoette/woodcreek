import Hero from "components/Hero";

let hero = {
  background: "reviews",
  title: "Our Reviews",
};

export default function Reviews() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
