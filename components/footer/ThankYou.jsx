import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

export default function ThankYou() {
    return (
        <section className="thank-you bg-primary py-5">
            <Container>
                <Row className="my-5 align-items-center">
                    <Col className="text-center">
                        <h2 className="my-1 lh-base">Thank you for visiting our website! </h2>
                        <p className="fs-4 lh-lg">
                            Explore <strong><Link href="/services/">OUR SERVICES</Link></strong> and check out <strong><Link href="/reviews/">OUR REVIEWS</Link></strong> page to hear from our satisfied customers.<br />
                            For any questions or appointments, contact Woodcreek Carpet Tech at <strong><Link href="tel:9165324543">916-532-4543</Link></strong>.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}