import { Container, Row, Col, Image } from "react-bootstrap";
import Link from 'next/link'

export default function CopyRight() {

    const today = new Date();
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <p className="mt-3 text-center text-sm">
                            &copy; {today.getFullYear()} Jeff Smith Construction - JSCS,
                            Inc.
                            <br />
                            All rights reserved. All files, images, and information
                            contained in this Website copyright by JSCS, Inc. and may not
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