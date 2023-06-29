import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';

let hero = {
  background: "carpet-cleaning",
  title: "Carpet Cleaning",
};

export default function CarpetCleaning() {
  return (
    <>

      <Hero {...hero} />

      <section className="py-5">
        <Container className="p-5">
          <Row className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={5}>
              <Image className="w-100" src="/images/500x400/wine-pexels.webp" alt="red wine" />
            </Col>
            <Col lg={7}>
              <h2 className="mt-lg-0">
                Easily Eliminate Tough Stains with Professional Carpet Cleaning Services
              </h2>
              <p>
                Say goodbye to stubborn stains with the help of Woodcreek Carpet Tech&apos;s professional carpet cleaning services. Whether it&apos;s a Monday morning coffee spill or other challenging stains like food, pet accidents, dirt-tracked shoes, or even red wine and mustard, our expert team is here to assist you.
              </p>
              <p>
                Don&apos;t let those impossible stains ruin the appearance of your carpets. With our advanced cleaning techniques and powerful cleaners, we can effectively remove even the toughest stains, leaving your carpets looking their absolute best.
              </p>
              <p>
                Trust Woodcreek Carpet Tech to handle all your stain removal needs. Say goodbye to worries and hello to beautifully clean carpets. Contact us today to schedule a professional carpet cleaning service and let us restore the pristine condition of your carpets.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-carpet py-5">
        <Container className="p-5">
          <Row className="align-items-center">
            <Col>
              <h2 className="mt-lg-0">
                Choose Woodcreek Carpet Tech for Exceptional Carpet Cleaning
              </h2>
              <p>
                Looking for the best carpet cleaning service? Look no further than Woodcreek Carpet Tech! We go above and beyond to exceed your expectations and deliver outstanding results. Here&apos;s why you should choose us:
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 1 }}>
              <Image className="w-100" src="/images/500x400/carpet-cleaning-midjourney.webp" alt="cleaning carpet" />
            </Col>
            <Col lg={7}>
              <ul>
                <li className="mb-3">
                  <strong>Experienced and Certified Technicians</strong>: Our team of certified technicians is highly trained and brings years of experience to every job. You can trust their expertise to handle your carpets with care and precision.</li>

                <li className="mb-3"><strong>Powerful Truck-Mounted Machines</strong>: We utilize the most powerful truck-mounted machines available, ensuring deep cleaning and maximum extraction of dirt, stains, and allergens from your carpets. Our advanced equipment guarantees exceptional results.</li>

                <li className="mb-3"><strong>Latest Cleaning Solutions</strong>: We stay up-to-date with the latest advancements in the industry and use cutting-edge cleaning solutions to tackle even the toughest stains and odors. Rest assured that we will leave your carpets looking and smelling fresh.</li>

                <li className="mb-3"><strong>Uncompromising Commitment to Cleanliness</strong>: At Woodcreek Carpet Tech, we prioritize cleanliness, presentation, and the health of your home. We go the extra mile to ensure a thorough cleaning that leaves your carpets not only visually appealing but also hygienic for you and your family.</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4">
              <p>Trust Woodcreek Carpet Tech for all your carpet cleaning needs. Experience our dedication to exceeding your standards and providing you with a clean, presentable, and healthy home. Contact us today to schedule an appointment and discover the difference we can make!</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 1 }}>
                <Image className="w-100" src="/images/500x400/clean-carpet-pexels.webp" alt="clean carpet with fruit" />
            </Col>
            <Col lg={7}>
              <h2 className="mt-lg-0">
                Your Trusted Carpet Cleaning Solution in Roseville, CA!
              </h2>
              <p>
                Looking for a reliable and professional carpet cleaning company in Roseville, CA? Look no further than Woodcreek Carpet Tech! With years of experience and a dedication to excellence, we are the go-to experts for transforming your carpets into pristine works of art.
              </p>
              <p>
                Our highly skilled technicians utilize state-of-the-art equipment and their expertise to deliver unparalleled results. We understand that your carpets are not just floor coverings but valuable investments that deserve the highest level of care. That&apos;s why we use eco-friendly and non-toxic cleaning solutions to effectively remove deep-seated dirt, stubborn stains, and unpleasant odors, restoring your carpets to their original vibrancy.
              </p>
              <p>
                Whether you have a residential or commercial space, our tailored cleaning approach ensures a thorough and meticulous service. Say goodbye to allergens and hello to fresh, clean carpets that enhance the overall aesthetics of your environment.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}
