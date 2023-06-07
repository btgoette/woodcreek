import Hero from "components/Hero";

let hero = {
  background: "contact",
  title:"Contact Us"
}

export default function Contact() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
