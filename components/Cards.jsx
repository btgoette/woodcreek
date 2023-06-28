import { Row, Col, Card } from "react-bootstrap";
import Link from 'next/link';

let cards = [
  {
    url: "#residential",
    title: "Residential Carpet Cleaning",
    img: "/images/400x500/residential-midjourney.webp"
  },
  {
    url: "#commercial",
    title: "Commercial Carpet Cleaning",
    img: "/images/400x500/commercial-midjourney.webp"
  },
  {
    url: "#rug",
    title: "Area Rug Cleaning",
    img: "/images/400x500/rugs-unsplash.webp"
  },
  {
    url: "#tile",
    title: "Tile & Grout Cleaning",
    img: "/images/400x500/tile-midjourney.webp"
  },
  {
    url: "#pet",
    title: "Pet Odor & Stain Removal",
    img: "/images/400x500/pets-unsplash.webp"
  },
  {
    url: "#scotchgard",
    title: "SCOTCHGARD® Protection",
    img: "/images/400x500/scotchgard.webp"
  },
  {
    url: "#flood",
    title: "Water Damage & Flood Restoration",
    img: "/images/400x500/flood-midjourney.webp"
  },
  {
    url: "#upholstery",
    title: "Upholstery Cleaning",
    img: "/images/400x500/upholstery-unsplash.webp"
  },
  {
    url: "#install",
    title: "Carpet Repair",
    img: "/images/400x500/carpet-repair-midjourney.webp"
  },
  {
    url: "#rv",
    title: "RV Interior Cleaning",
    img: "/images/400x500/rv-unsplash.webp"
  }
]

export default function Cards() {
  return (
    <Row className="justify-content-center">
      {cards.map(({ title, img, url }, i) => (
        <Col key={i} xl={3} lg={4} sm={6} className="p-4">
          <Link href={url}>
            <Card className="hvr-grow">
              <Card.Img variant="top" src={img} />
              <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
