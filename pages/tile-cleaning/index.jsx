import { Container, Row, Col, Image } from 'react-bootstrap';

import Hero from 'components/Hero';
import FAQ from 'components/FAQ';

let hero = {
  background: 'tile-cleaning',
  title: 'Tile Cleaning',
};

export default function TileCleaning() {
  return (
    <div>
      <Hero {...hero} />
      <Container>
        <Row>
          <Col>
            <p>
              Tile and stone in areas such as the like kitchens, foyers, and family rooms are definitely heavily trafficked space where dirt and grime accumulate over time and requires maintenance, just like your carpets. If left untreated, grout stains and buildup will create an area for bacteria to develop and create unsightly discoloration.
            </p><p>
              Cleaning bathroom grout is not as easy as taking a mop to it. If you want a real level of cleanliness, you need to have Woodcreek Carpet Tech floor tiles to deep clean into your grout and remove all traces of dirt and bacteria.
            </p><p>
              Here at Woodtech Carpet Cleaning we offer a comprehensive tile and grout cleaning service that includes:
            </p><p>
              Pre-treating the tile & grout areas with a heavy-duty grout cleaner.
            </p><p>
              Hand-scrubbing the area to break down soil and residue.
            </p><p>
              Pressure–cleaning the tiles & grout.
            </p><p>
              After cleaning, we recommend having your clean tile sealed. Hard surfaces that are unsealed are much like a sponge and will absorb oil, food, or beverage spills, resulting in permanent staining. Proper sealing can protect your flooring from permanent damage by creating an invisible barrier over the tile and grout.
            </p><p>
              Woodcreek Carpet Tech-Your Tile & Grout Cleaning Solution
            </p><p>
              When you need tile and grout cleaning in the Placer & Sacramento County area, you have come to the right place.
              Our experts will make sure they fully rejuvenate your tile and grout. We deliver a level of cleanliness that cannot be achieved by at-home cleaning products.
            </p><p>
              We are proud to remain of the best floor cleaners in the area. We invite you to check us out on nextdoor.com, yelp and Facebook to see what your neighbors have to say, and you can always trust a job done right when you hire Woodcreek Carpet Tech.
            </p><p>
              Do not wait until your tiles and grout appear dingy to schedule a deep clean. Contact Woodcreek Carpet Tech today to find out what we can do for your home.
            </p><p>
              If you have any questions or would like to schedule an appointment, please contact Woodcreek Carpet Tech at 916-532-4543.
            </p><p>
              Thank you for your interest in Woodcreek Carpet Tech. We look forward to serving you soon.
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
