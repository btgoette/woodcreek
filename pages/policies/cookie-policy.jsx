import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';

let hero = {
  title:"Cookie Policy"
}

export default function CookiePolicy() {
  return (
    <div>
      <Hero {...hero}/>
    </div>
  );
}
