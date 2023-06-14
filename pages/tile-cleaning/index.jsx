import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';

let hero = {
  background: 'tile-cleaning',
  title: 'Tile Cleaning',
};

export default function TileCleaning() {
  return (
    <div>
      <Hero {...hero} />
      <section>
        <Container className="py-5">
          <Row className="my-5 align-items-center">
            <Col xs={12}>
              <h2>Professional Tile and Grout Cleaning Services for Pristine Floors</h2>
            </Col>
            <Col xs={12}>
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
            <Col>
              <h3>
                Woodcreek Carpet Tech: Your Trusted Source for Tile and Grout Cleaning
              </h3>
              <p>
                Discover the comprehensive tile and grout cleaning service offered by Woodcreek Carpet Tech. Our professional service includes the following steps:
              </p>
              <ol>
                <li>
                  Pre-treating with Heavy-Duty Grout Cleaner: We begin by applying a powerful grout cleaner to effectively treat the tile and grout areas. This specially formulated cleaner is designed to break down stubborn soil and residue.
                </li>
                <li>
                  Hand-Scrubbing for Thorough Cleaning: Our skilled technicians meticulously hand-scrub the area, ensuring that every inch is thoroughly cleaned. This process helps to further break down soil and residue, leaving your tile and grout looking refreshed.
                </li>
                <li>
                  Pressure-Cleaning for Deep Cleaning: We utilize state-of-the-art pressure-cleaning equipment to provide a deep and thorough cleaning. This powerful technique effectively removes embedded dirt and grime, revitalizing your tile and grout.
                </li>
                <li>
                  Recommended Tile Sealing: After cleaning, we highly recommend having your clean tile sealed. Unsealed hard surfaces can absorb spills, resulting in permanent staining. Our expert team can apply a professional-grade sealant that creates an invisible barrier, protecting your flooring from permanent damage.
                </li>
              </ol>
              <p>
                Trust Woodcreek Carpet Tech for all your tile and grout cleaning needs. Our comprehensive approach ensures outstanding results and long-lasting protection. Contact us today to schedule an appointment and experience the transformative power of our professional tile and grout cleaning service.
              </p>
            </Col>
            <Col>
              <h3>
                Woodcreek Carpet Tech: Your Trusted Tile & Grout Cleaning Solution in Placer & Sacramento County
              </h3>
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
