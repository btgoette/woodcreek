import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';
import FourBlockSection from '../../components/FourBlockSection';

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
            <Col>
              <h2>Professional Tile and Grout Cleaning Services for Pristine Floors</h2>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xl={{ span: 4, order: 1 }}>
              <figure className="mb-1 mb-xl-0">
                <Image className="w-100" src="/images/500x400/kitchen-tile-4.png" alt="Professional Tile and Grout Cleaning Services for Pristine Floors" />
              </figure>
            </Col>
            <Col xl={{ span: 8, order: 0 }}>
              <p>
                Tile and stone surfaces in high-traffic areas like kitchens, foyers, and family rooms require regular maintenance to combat the accumulation of dirt and grime. Neglected grout can become stained and filled with buildup, providing a breeding ground for bacteria and resulting in unsightly discoloration.
              </p>
              <p>
                When it comes to cleaning bathroom grout, a simple mop won&apos;t suffice. To achieve a truly clean and hygienic environment, you need the expertise of Woodcreek Carpet Tech. Our professional team is equipped to deep clean your floor tiles and eliminate all traces of dirt and bacteria from the grout.
              </p>
              <p>
                Don&apos;t settle for surface-level cleanliness. Trust Woodcreek Carpet Tech to provide a thorough tile and grout cleaning that restores the pristine condition of your floors. Say goodbye to stains and hello to fresh, bacteria-free surfaces.
              </p>
              <p>
                Experience the difference of professional tile and grout cleaning. Contact us today to schedule an appointment and enjoy the benefits of our expertise and advanced cleaning techniques.
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
          <FourBlockSection />
        </Container>
      </section>
      <section className="py-5">
        <Container className="p-5">
          <Row>
            <Col>
              <h2>Outstanding results and long-lasting protection</h2></Col>
          </Row>
          <Row className="align-items-center">
            <Col xl={4}>
              <figure className="mb-1 mb-xl-0">
                <Image className="w-100" src="/images/500x400/kitchen-tile-3.png" alt="Outstanding results and long-lasting protection" />
              </figure>
            </Col>
            <Col xl={8}>
              <p>
                When it comes to tile and grout cleaning in the Placer & Sacramento County area, Woodcreek Carpet Tech is your go-to solution. Our team of experts is dedicated to fully rejuvenating your tile and grout, delivering a level of cleanliness that surpasses at-home cleaning products.
              </p>
              <p>
                As one of the top floor cleaners in the area, we take pride in our exceptional service. Don&apos;t just take our word for it - check out our reviews on nextdoor.com, Yelp, and Facebook to see what your neighbors have to say. When you hire Woodcreek Carpet Tech, you can trust that the job will be done right.
              </p>
              <p>
                Don&apos;t wait until your tiles and grout start appearing dingy. Take proactive action and schedule a deep clean with Woodcreek Carpet Tech today. Contact us now to discover how we can transform your home and restore the beauty of your tile and grout.
              </p>
              <p>
                Choose Woodcreek Carpet Tech for all your tile and grout cleaning needs. Our expertise and commitment to excellence will leave you with spotless, rejuvenated surfaces. Don&apos;t delay - reach out to us today!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div >
  );
}
