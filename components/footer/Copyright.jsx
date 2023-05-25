import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link'

let copyright = {
    company:"Woodcreek CarpeTech"
}

export default function Copyright() {

    const today = new Date();

    return (
        <section className="bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                        <p className="mt-3 text-center text-sm">
                            &copy; {today.getFullYear()} {copyright.company}
                            <br />
                            All rights reserved. All files, images, and information
                            contained in this Website copyright by {copyright.company} and may not
                            be duplicated, copied, modified, or adapted, in any way
                            without our written permission.
                            <br />
                            <Link
                                href="https://websitedesign-roseville.net"
                                target="top"
                                title="Website design by Brymels LLC Website Designer Roseville CA"
                            >
                                Website Design
                            </Link>&nbsp;
                            by Brymels LLC.&nbsp;|&nbsp;
                            <Link href="/policies/privacy-policy" title="privacy policy">
                                Privacy Policy
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}