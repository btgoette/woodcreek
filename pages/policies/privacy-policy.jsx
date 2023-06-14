import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';

let hero = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <Hero {...hero} />
    </div>
  );
}
