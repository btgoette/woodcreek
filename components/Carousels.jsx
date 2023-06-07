import { Carousel, Row, Col, Image } from "react-bootstrap";

export default function Carousels() {
  return (
    <>
      <section>
        <Carousel fade indicators={false}>
          <Carousel.Item>
            <Image
              className="d-none d-xl-block w-100"
              src="/images/home/carpet-1360x350.png"
              alt="First slide"
            />
            <Image
              className="d-none d-sm-block d-xl-none w-100"
              src="/images/home/carpet-800x350.png"
              alt="First slide"
            />
            <Image
              className="d-block d-sm-none w-100"
              src="/images/home/carpet-400x350.png"
              alt="First slide"
            />
            <Carousel.Caption className="text-start">
              <Row>
                <Col xl="8">
                  <h2>Building The Future Together</h2>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-none d-xl-block w-100"
              src="/images/home/couch-1360x350.png"
              alt="Second slide"
            />
            <Image
              className="d-none d-sm-block d-xl-none w-100"
              src="/images/home/couch-800x350.png"
              alt="Second Slide"
            />
            <Image
              className="d-block d-sm-none w-100"
              src="/images/home/couch-400x350.webp"
              alt="Second slide"
            />
            <Carousel.Caption className="text-start">
              <Row>
                <Col xl="8">
                  <h2>
                    Design your dream. Creating our vision.
                  </h2>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
