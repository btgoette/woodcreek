import { Row, Col, Card } from "react-bootstrap";
import Link from 'next/link';

let cards = [
  {
    url: "#residential",
    title: "Residential Carpet Cleaning",
    img: "/images/400x500/residential-living-room-1.png"
  },
  {
    url: "#commercial",
    title: "Commercial Carpet Cleaning",
    img: "/images/400x500/professional-carpet-cleaning-1.png"
  },
  {
    url: "#rug",
    title: "Area Rug Cleaning",
    img: "/images/400x500/couch-8.png"
  },
  {
    url: "#tile",
    title: "Tile & Grout Cleaning",
    img: "/images/400x500/tile-1.png"
  },
  {
    url: "#pet",
    title: "Pet Odor & Stain Removal",
    img: "/images/400x500/rug-1.png"
  },
  {
    url: "#scotchgard",
    title: "SCOTCHGARD® Protection",
    img: "/images/400x500/scotchgard-1.png"
  },
  {
    url: "#flood",
    title: "Water Damage & Flood Restoration",
    img: "/images/400x500/flood-damage.png"
  },
  {
    url: "#upholstery",
    title: "Upholstery Cleaning",
    img: "/images/400x500/upholstery-cleaning.png"
  },
  {
    url: "#install",
    title: "Carpet Repair",
    img: "/images/400x500/carpet-fix-1.png"
  },
  {
    url: "#rv",
    title: "RV Interior Cleaning",
    img: "/images/400x500/rv-upholstery-1.png"
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
