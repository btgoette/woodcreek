import { Container, Row, Col, Card } from "react-bootstrap";

let cards = [
  {
    title: "Carpet Cleaning",
    img: "/images/home/vacuum-400x500.png"
  },
  {
    title: "Rug Cleaning",
    img: "/images/home/ali-choubin-400x500.png"
  },
  {
    title: "Tile & Grout Cleaning",
    img: "/images/home/bernard-hermant-400x500.png"
  },
  {
    title: "Upholstery Cleaning",
    img: "/images/home/adam-winger-400x500.png"
  }
]

export default function Cards() {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="my-4">
            {cards.map(({ title, img }, i) => (
              <Col key={i} lg={3} md={6} className="p-4">
                <Card>
                  <Card.Img variant="top" src={img} />
                  <Card.ImgOverlay>
                    <Card.Title>{title}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
