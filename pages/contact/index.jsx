import Hero from "components/Hero";

let hero = {
  title:"Carpet Cleaning"
}

export default function Contact() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
