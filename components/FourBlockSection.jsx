import { Container, Row, Col, Image } from 'react-bootstrap'


export default function FourBlockSection() {
    return (
        <div className="tiles">
            <Row className="justify-content-center align-items-center">
                <Col className="tile p-2 d-flex align-items-center justify-content-center" md={{ span: 6, order: 0 }} xl={{ span: 3, order: 0 }} >
                    <div className="tile-block">
                        <div>
                            <p className="tile-title">
                                <strong>
                                    1. Pre-treating with Heavy-Duty Grout Cleaner:
                                </strong>
                            </p>
                            <p className="tile-content">
                                We begin by applying a powerful grout cleaner to effectively treat the tile and grout areas. This specially formulated cleaner is designed to break down stubborn soil and residue.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="tile p-2" md={{ span: 6, order: 1 }} xl={{ span: 3, order: 1 }}>
                    <Image className="w-100" src="/images/500x500/kitchen-tile-1.png" alt="" />
                </Col>
                <Col className="tile p-2 d-flex align-items-center justify-content-center" md={{ span: 6, order: 3 }} xl={{ span: 3, order: 2 }}>
                    <div className="tile-block">
                        <div>
                            <p className="tile-title">
                                <strong>
                                    2. Hand-Scrubbing for Thorough Cleaning:
                                </strong>
                            </p>
                            <p className="tile-content">
                                Our skilled technicians meticulously hand-scrub the area, thoroughly cleaning every inch and leaving your tile and grout looking refreshed.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="tile p-2" md={{ span: 6, order: 2 }} xl={{ span: 3, order: 3 }}>
                    <Image className="w-100" src="/images/500x500/kitchen-tile-2.png" alt="" />
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
                <Col className="tile p-2 d-flex align-items-center justify-content-center" md={{ span: 6, order: 0 }} xl={{ span: 3, order: 1 }}>
                    <div className="tile-block">
                        <div>
                            <p className="tile-title">
                                <strong>
                                    3. Pressure-Cleaning for Deep Cleaning:
                                </strong>
                            </p>
                            <p className="tile-content">
                                We use advanced pressure-cleaning equipment for a deep and thorough tile and grout cleaning, effectively removing embedded dirt and grime, revitalizing your surfaces.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="tile p-2" md={{ span: 6, order: 1 }} xl={{ span: 3, order: 0 }}>
                    <Image className="w-100" src="/images/500x500/kitchen-tile-3.png" alt="" />
                </Col>
                <Col className="tile p-2 d-flex align-items-center justify-content-center" md={{ span: 6, order: 3 }} xl={{ span: 3, order: 3 }}>

                    <div className="tile-block">
                        <div>
                            <p className="tile-title">
                                <strong>
                                    4. Recommended Tile Sealing:
                                </strong>
                            </p>
                            <p className="tile-content">
                                After cleaning, we recommend professional-grade tile sealing to protect against permanent stains and damage. Our expert team applies an invisible barrier sealant for long-lasting protection.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="tile p-2" md={{ span: 6, order: 2 }} xl={{ span: 3, order: 2 }}>
                    <Image className="w-100" src="/images/500x500/kitchen-tile-6.png" alt="" />
                </Col>
            </Row>
        </div >
    )
}