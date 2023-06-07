import Head from "components/Head";
import Hero from "components/Hero";
import Cards from "components/Cards";

let head = {
  title: "Woodcreek Carpet Tech",
  description:
    "Professional carpet cleaning, rug cleaning, tile & grout cleaning, carpet installation, upholstery cleaning, RV cleaning, and more. Exceptional results, eco-friendly methods. Enhance your space with our comprehensive services. Call now!",
  image: "https://woodcreekcarpettech.com/images/logos/logo.webp",
  imageType: "image/webp",
  robots: "INDEX, FOLLOW",
};

let hero = {
  background: "home",
  title: "Woodcreek Carpet Tech"
}

export default function Home() {
  return (
    <div>
      <Head {...head} />
      <Hero {...hero}/>
      <Cards />
    </div>
  );
}
