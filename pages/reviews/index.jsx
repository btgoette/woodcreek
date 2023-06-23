import { Container, Row, Col, Image } from 'react-bootstrap'

import Hero from "components/Hero";
import Review from "components/Review";

let hero = {
  background: "reviews",
  title: "Our Reviews",
};

export default function Reviews() {
  return (
    <div>
      <Hero {...hero} />
      <section className="pt-5">
        <Container className="px-5">
          <Row>
            <Col>
              <h2 className="text-center">Welcome to our Reviews Page - Where Customer Satisfaction Comes First!</h2>
              <p>At Woodcreek Carpet Tech, we take great pride in providing exceptional service and exceeding our customers&apos; expectations. We believe that our customers&apos; feedback is invaluable in showcasing the quality of our work and the satisfaction of our clients. On this Reviews Page, you&apos;ll find testimonials and reviews from our valued customers who have experienced firsthand the professionalism, reliability, and outstanding results we deliver. Take a moment to read through their experiences and see why Woodcreek Carpet Tech is the trusted choice for all your carpet cleaning and maintenance needs. Your satisfaction is our priority, and we look forward to adding you to our list of happy customers.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pb-5">
        <Container className="py-5">
          <Review />
        </Container>
      </section>
    </div>
  );
}
