import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';

let hero = {
  title: "403 Page Forbidden",
};

export default function Error403() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
