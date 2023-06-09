import { Container, Row, Col, Image } from 'react-bootstrap'
import Link from 'next/link'

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
          <Row className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 1 }}>
              <Image
                className="w-100"
                src="/images/500x400/dog-on-carpet-unsplash.webp"
                alt="Dog on clean carpet"
              />
            </Col>
            <Col lg={7}>
              <h2 className="mt-lg-0">
                Professional Carpet &amp; Home Cleaning Services
              </h2>
              <p>
                Welcome to Woodcreek Carpet Tech, your trusted carpet, tile, and upholstery cleaning company in Roseville, CA. With over 20 years of experience, we proudly serve the Placer County and Sacramento County areas. As a family-owned business, we prioritize delivering exceptional quality and service at affordable prices.
              </p>
              <p>
                At Woodcreek Carpet Tech, we guarantee 100% satisfaction and strive to earn your loyalty as a lifelong client. Our services go beyond carpet cleaning, encompassing a range of high-quality home cleaning solutions. From hardwood floor cleaning to stone floor cleaning, tile and grout cleaning, area rug cleaning, upholstery cleaning, RV cleaning, water damage restoration, and carpet repair, we have you covered. Additionally, we offer new carpet installation services to enhance your home.
              </p>
              <p>
                Experience the Woodcreek Carpet Tech difference and enjoy a cleaner, healthier home. Contact us today to schedule an appointment and discover the outstanding quality and care we bring to every job.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-red-gradient py-5">
        <Container className="p-5">
          <Row>
            <Col>
              <h2 className="text-center">Have an emergency? No problem.<br />We are available 24 hours a day!  </h2>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 0 }}>
              <Image
                className="w-100"
                src="/images/500x400/100-percent-satisfaction-midjourney.webp"
                alt="100% Satisfaction Guaranteed"
              />
            </Col>
            <Col lg={7}>
              <h2 className="mt-lg-0">Why Woodcreek Carpet Tech</h2>
              <p>
                At Woodcreek Carpet Tech we know that finding a dependable carpet cleaner you can trust can be challenging. We focus on one thing, providing you with the absolute best carpet cleaning service possible.  We make sure that you are satisfied with our work so when it is time to have them cleaned again, there is no question. We are your solution with just a phone call.
              </p>
              <p>
                Woodcreek Carpet Tech is your trusted floor cleaning company offering the latest techniques and top-quality chemicals that are safe for kids and pets. Whether you require residential or commercial services, we are committed to delivering outstanding results. Our skilled technicians will eliminate dirt, stains, and odors from your carpets, restoring them to their pristine condition. Your satisfaction is our priority, and we strive to provide the best experience possible.
              </p>
              <p>
                Be Sure to check us out on <Link href="https://www.yelp.com/biz/woodcreek-carpet-tech-roseville">Yelp</Link>, <Link href="https://nextdoor.com/pages/woodcreek-carpet-tech/">Nextdoor</Link>, <Link href="https://www.facebook.com/people/Woodcreek-Carpet-Tech/100068233811081/?_rdr">Facebook</Link>, and Google too.
              </p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <ul className="d-flex flex-wrap justify-content-between gap-4">
                <li><strong>Free Quotes</strong></li>
                <li><strong>Safe for Kids &amp; Pets</strong></li>
                <li><strong>Competitive Prices</strong></li>
                <li><strong>100% Satisfaction Guaranteed</strong></li>
                <li><strong>Excellent Customer Service</strong></li>
                <li><strong>Non-Toxic Cleaning Products</strong></li>
                <li><strong>No Hidden Fees</strong></li>
                <li><strong>We Move &amp; Replace Light Furniture</strong></li>
                <li><strong>Locally Owned &amp; Operated</strong></li>
                <li><strong>Trained &amp; Certified Technicians</strong></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
