import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';

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
