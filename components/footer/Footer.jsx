import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";

import Marquee from './Marquee'
import CopyRight from './CopyRight'

export default function Footer() {
  return (
    <>
      <footer>
        <section className="bg-blue text-white py-5">
          <Container className="px-4 py-5">
            <Row className="align-items-center">
              <Col md="6" lg={{ span: 4, offset: 1 }}>
                <Link href="/">
                  <div className="footer-logo logo d-flex align-items-center">
                    <figure>
                      <Image
                        src="/images/logos/jscs-gradient.webp"
                        alt="Jeff Smith Construction"
                      />
                    </figure>
                    <p className="ps-3 mb-0">JSCS Inc.</p>
                  </div>
                </Link>
                <p>
                  General Contractor License #634094 (CA) Fully Licensed, Bonded
                  and Insured
                </p>
                <p className="footer-socials">
                  <Link href="https://www.yelp.com/biz/jeff-smith-construction-rocklin">
                    <Image src="/images/footer/yelp.webp" alt="Yelp" />
                  </Link>
                  <Link href="https://www.facebook.com/JSCS-Inc-101017868396872">
                    <Image src="/images/footer/facebook.webp" alt="Facebook" />
                  </Link>
                  <Link href="https://www.bbb.org/us/ca/newcastle/profile/general-contractor/jeff-smith-construction-1156-90029915">
                    <Image src="/images/footer/bbb.webp" alt="BBB" />
                  </Link>
                </p>
                <p className="footer-address">
                  <Link href="tel=9166633000">916-663-3000</Link>
                  <br />
                  5406 Crosssing Dr.
                  <br />
                  Suite 102-385
                  <br />
                  Rocklin, CA 95677
                </p>
              </Col>
              <Col md="6" lg={{ span: 4, offset: 1 }}>
                <Row className="mb-2">
                  <Col>
                    <Link href="/about/">About Us</Link>
                    <br />
                    <Link href="/services/">Our Services</Link>
                    <br />
                    <div className="border-start ps-2">
                      <Link href="/services/commercial-construction">
                        Commercial Design/Build
                      </Link>
                      <br />
                      <Link href="/services/tenant-improvements">
                        Tenant Improvements
                      </Link>
                      <br />
                    </div>
                    <Link href="/featured-projects/">Featured Projects</Link>
                  </Col>
                  <Col>
                    <Link href="/gallery/">Gallery</Link>
                    <br />
                    <div className="border-start ps-2">
                      <Link href="/gallery/office-gallery">Office Gallery</Link>
                      <br />
                      <Link href="/gallery/restaurant-gallery">
                        Restaurant Gallery
                      </Link>
                      <br />
                      <Link href="/gallery/retail-gallery">Retail Gallery</Link>
                      <br />
                    </div>
                    <Link href="/testimonials/">Testimonials</Link>
                  </Col>
                </Row>
                <p>
                  We were founded with the desire to do it better. Working
                  together with teams of highly skilled architects, designers
                  and tradesmen that want to develop a better way to build.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <Marquee />
        <CopyRight />
      </footer>
    </>
  );
}
