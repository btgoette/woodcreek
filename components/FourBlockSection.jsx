import { Container, Row, Col, Image } from 'react-bootstrap'


export default function FourBlockSection() {
    return (
        <div className="tiles">
            <Row className="justify-content-center align-items-center">
                <Col className="tile p-2" md={6} xl={4}>
                    <Image className="w-100" src="/images/500x500/kitchen-tile-1.png" alt="" />
                </Col>
                <Col className="tile p-2 d-flex align-items-center justify-content-center" md={6} xl={4} >
                    <div className="bg-primary d-flex align-items-center justify-content-center text-center w-100 ratio ratio-1x1">
                        <div className="p-4 position-relative">
                            <h2 className="my-0">1.</h2>
                            <p className="fs-3">
                                <strong>
                                    Pre-treating
                                </strong>
                            </p>
                            <hr />
                            <p className="text-start">
                                We begin by applying a powerful grout cleaner to effectively treat the tile and grout areas. This specially formulated cleaner is designed to break down stubborn soil and residue.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="tile p-2 d-flex align-items-center justify-content-center" md={6} xl={4}>
                    <div className="bg-primary d-flex align-items-center justify-content-center text-center w-100 ratio ratio-1x1">
                        <div className="p-4 position-relative">
                            <h2 className="my-0">2.</h2>
                            <p className="fs-3">
                                <strong>
                                    Hand-Scrubbing
                                </strong>
                            </p>
                            <hr />
                            <p className="text-start">
                                Our skilled technicians meticulously hand-scrub the area, thoroughly cleaning every inch and leaving your tile and grout looking refreshed.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="tile p-2 d-flex align-items-center justify-content-center" md={6} xl={4} >
                    <div className="bg-primary d-flex align-items-center justify-content-center text-center w-100 ratio ratio-1x1">
                        <div className="p-4 position-relative">
                            <h2 className="my-0">3.</h2>
                            <p className="fs-3">
                                <strong>
                                    Pressure-Cleaning
                                </strong>
                            </p>
                            <hr />
                            <p className="text-start">
                                We use advanced pressure-cleaning equipment for a deep and thorough tile and grout cleaning, effectively removing embedded dirt and grime, revitalizing your surfaces.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="tile p-2 d-flex align-items-center justify-content-center" md={6} xl={4}>
                    <div className="bg-primary d-flex align-items-center justify-content-center text-center w-100 ratio ratio-1x1">
                    <div className="p-4 position-relative">
                            <h2 className="my-0">4.</h2>
                            <p className="fs-3">
                                <strong>
                                    Tile Sealing
                                </strong>
                            </p>
                            <hr/>
                            <p className="text-start">
                                After cleaning, we recommend professional-grade tile sealing to protect against stains and damage. Our expert team applies an invisible barrier sealant for long-lasting protection.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col className="tile p-2" md={6} xl={4}>
                    <Image className="w-100" src="/images/500x500/kitchen-tile-6.png" alt="" />
                </Col>
            </Row>
        </div >
    )
}