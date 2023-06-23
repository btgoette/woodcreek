import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

import Head from 'components/Head';
import Hero from 'components/Hero';
import CallNow from 'components/CallNow';

let hero = {
  background: "contact",
  title: "Contact Us"
}

export default function Contact() {
  return (
    <div>
      <Hero {...hero} />
      <section className="py-5">
        <Container className="p-5">
          <Row className="align-items-center">
            <Col>
              <h2>Contact Woodcreek Carpet Tech for Your Carpet Cleaning Needs</h2>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3>Thank you for your interest in Woodcreek Carpet Tech!</h3>
              <p>If you have any questions, inquiries, or would like to schedule an appointment for our top-notch carpet cleaning services, you&apos;ve come to the right place. Our dedicated team is ready to assist you and provide the information you need. We value your time and strive to deliver prompt and reliable customer service.</p>
              <p>Whether you&apos;re a homeowner, business owner, or property manager in need of professional carpet cleaning, we are here to help. Contact Woodcreek Carpet Tech today via phone at <Link href="tel:9165324543">916-532-4543</Link>. Trust us to revitalize your carpets and create a cleaner and healthier environment for you and your loved ones.</p>
              <CallNow />
            </Col>
            <Col lg={6}>
              <figure className="my-lg-0">
                <Image className="w-100" src="/images/contact/map.jpg" alt="map" />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
