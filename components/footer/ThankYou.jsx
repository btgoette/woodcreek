import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

export default function ThankYou() {
    return (
        <section className="bg-primary py-5">
            <Container>
                <Row className="my-5 align-items-center">
                    <Col>
                        <p>Thank you for visiting our website! We encourage you to continue your exploration and discover valuable insights about our services. Don&apos;t forget to visit our reviews page to read about the experiences of our satisfied customers.</p>
                        <p>If you have any questions or would like to schedule an appointment, feel free to reach out to Woodcreek Carpet Tech. You can contact us at <Link href="tel:9165324543">916-532-4543</Link>. Our friendly team is ready to assist you. We look forward to serving you and providing you with a top-notch cleaning experience.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}