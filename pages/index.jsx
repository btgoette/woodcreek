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
          <Row>
            <Col>
              <h2>
                Professional Carpet Cleaning & Home Cleaning Services in the Placer County and Sacramento County Area!
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 6, order: 1 }}>
              <Image
                src="/images/500x400/couch-12.png"
                alt=""
              />
            </Col>
            <Col lg={6}>
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

      <section className="bg-primary py-5">
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
          <Row>
            <Col>
              <h2 className="text-center">Why Woodcreek Carpet Tech:  100% Satisfaction Guaranteed  </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                At Woodcreek Carpet Tech we know that finding a dependable carpet cleaner you can trust can be challenging. We focus on one thing, providing you with the absolute best carpet cleaning service possible.  We make sure that you are satisfied with our work so when it is time to have them cleaned again, there is no question. We are your solution with just a phone call.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3 className="mb-0">We Offer:</h3>
            </Col>
            <Col lg={6}>
              <ul>
                <li>Free Quotes</li>
                <li>Safe for Kids &amp; Pets</li>
                <li>Competitive Prices</li>
                <li>100% Satisfaction Guaranteed</li>
                <li>Excellent Customer Service</li>
              </ul>
            </Col>
            <Col lg={6}>
              <ul>
                <li>Non-Toxic Cleaning Products</li>
                <li>No Hidden Fees</li>
                <li>We Move &amp; Replace Light Furniture</li>
                <li>Locally Owned &amp; Operated</li>
                <li>Trained &amp; Certified Technicians</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Be Sure to check us out on Yelp, Nextdoor, Facebook, and Google too.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Woodcreek Carpet Tech is your trusted floor cleaning company offering the latest techniques and top-quality chemicals that are safe for kids and pets. Whether you require residential or commercial services, we are committed to delivering outstanding results. Our skilled technicians will eliminate dirt, stains, and odors from your carpets, restoring them to their pristine condition. Your satisfaction is our priority, and we strive to provide the best experience possible.
              </p>
              <p>
                Explore our website to learn more about our services and offerings. For inquiries or to request an estimate, please call 916-532-4543. Choose Woodcreek Carpet Tech for exceptional floor cleaning solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
