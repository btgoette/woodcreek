import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';

let hero = {
  background: "contact",
  title: "Contact Us"
}

export default function Contact() {
  return (
    <div>
      <Hero {...hero} />
      <section>
        <Container className="py-5">
          <Row className="my-5 align-items-center">
            <Col>
              <h2>Contact Woodcreek Carpet Tech for Your Carpet Cleaning Needs</h2>
              <p>Thank you for your interest in Woodcreek Carpet Tech! If you have any questions, inquiries, or would like to schedule an appointment for our top-notch carpet cleaning services, you&apos;ve come to the right place. Our dedicated team is ready to assist you and provide the information you need. We value your time and strive to deliver prompt and reliable customer service. Whether you&apos;re a homeowner, business owner, or property manager in need of professional carpet cleaning, we are here to help. Contact Woodcreek Carpet Tech today via phone at 916-532-4543 or fill out the contact form below, and we&apos;ll get back to you as soon as possible. Trust us to revitalize your carpets and create a cleaner and healthier environment for you and your loved ones.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
