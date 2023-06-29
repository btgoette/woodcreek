import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';
import SixTiles from '../../components/SixTiles';

let hero = {
  background: 'tile-cleaning',
  title: 'Tile Cleaning',
};

export default function TileCleaning() {
  return (
    <div>
      <Hero {...hero} />
      <section className="py-5">
        <Container className="p-5">
          <Row className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 1 }}>
              <Image className="w-100" src="/images/500x400/professional-tile-pexels.webp" alt="Professional Tile and Grout Cleaning Services for Pristine Floors" />
            </Col>
            <Col lg={{ span: 7, order: 0 }}>
              <h2 className="mt-lg-0">Professional Tile and Grout Cleaning Services for Pristine Floors</h2>
              <p>
                Tile and stone surfaces in high-traffic areas like kitchens, foyers, and family rooms require regular maintenance to combat the accumulation of dirt and grime. Neglected grout can become stained and filled with buildup, providing a breeding ground for bacteria and resulting in unsightly discoloration.
              </p>
              <p>
                When it comes to cleaning bathroom grout, a simple mop won&apos;t suffice. To achieve a truly clean and hygienic environment, you need the expertise of Woodcreek Carpet Tech. Our professional team is equipped to deep clean your floor tiles and eliminate all traces of dirt and bacteria from the grout.
              </p>
              <p>
                Don&apos;t settle for surface-level cleanliness. Trust Woodcreek Carpet Tech to provide a thorough tile and grout cleaning that restores the pristine condition of your floors. Say goodbye to stains and hello to fresh, bacteria-free surfaces.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-kitchen-tile">
        <Container className="p-5">
          <Row className="align-items-center">
            <Col>
              <h2 className="mb-1">
                Your Trusted Source for Tile and Grout Cleaning
              </h2>
              <h3 className="mt-0">
                Discover the comprehensive tile and grout cleaning service offered by Woodcreek Carpet Tech. Our professional service includes the following steps:
              </h3>
            </Col>
          </Row>
          <SixTiles />
        </Container>
      </section>
      <section className="py-5">
        <Container className="p-5">
          <Row className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={5}>
              <Image className="w-100" src="/images/500x400/outstanding-results-pexels.webp" alt="Outstanding results and long-lasting protection" />
            </Col>
            <Col lg={7}>
              <h2 className="mt-lg-0">Outstanding Results &amp; Long-Lasting Protection</h2>
              <p>
                When it comes to tile and grout cleaning in the Placer & Sacramento County area, Woodcreek Carpet Tech is your go-to solution. Our team of experts is dedicated to fully rejuvenating your tile and grout, delivering a level of cleanliness that surpasses at-home cleaning products.
              </p>
              <p>
                As one of the top floor cleaners in the area, we take pride in our exceptional service. Don&apos;t just take our word for it - check out our reviews on nextdoor.com, Yelp, and Facebook to see what your neighbors have to say. When you hire Woodcreek Carpet Tech, you can trust that the job will be done right.
              </p>
              <p>
                Don&apos;t wait until your tiles and grout start appearing dingy. Take proactive action and schedule a deep clean with Woodcreek Carpet Tech today. Contact us now to discover how we can transform your home and restore the beauty of your tile and grout.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div >
  );
}
