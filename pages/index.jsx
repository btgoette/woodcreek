import { Container, Row, Col, Image } from 'react-bootstrap'

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
      <Hero {...hero} />
      <section className="py-5">
        <Container className="p-5">
          <Row className="text-center">
            <Col>
              <h2>Your Placer &amp; Sacramento County Cleaning Solution</h2>
              <p>Welcome to Woodcreek Carpet Tech, where we provide a transparent and thorough cleaning service that eliminates any unexpected surprises commonly encountered with other companies. Our commitment is to offer a high-quality and trustworthy cleaning experience. Contact us today for a reliable service you can count on! </p>
              <p>We proudly serve Placer and Sacramento County, including Auburn, Carmichael, Citrus Heights, Granite Bay, El Dorado Hills, Elk Grove, Fair Oaks, Folsom, Lincoln, Loomis, Newcastle, Rocklin, Roseville, Rancho Cordova, and Sacramento.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container className="p-5">
          <Cards />
        </Container>
      </section>
    </div>
  );
}
