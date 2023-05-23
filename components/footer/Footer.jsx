import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";

import Marquee from './Marquee'
import Copyright from './Copyright'
import Socials from './Socials'
import Menu from './Menu'
import Contact from './Contact'
import Logo from '../Logo'

export default function Footer() {
  return (
    <>
      <footer>
        <section className="bg-light py-5">
          <Container className="px-4 py-5">
            <Row className="align-items-top justify-content-center">
              <Col md="3">
                <div className="mt-5 text-center">
                  <Link href="/">
                    <Logo />
                  </Link>
                  <Socials />
                </div>
              </Col>
              <Col md="3">
                <Contact />
              </Col>
              <Col md="3">
                <Menu />
              </Col>
            </Row>
          </Container>
        </section>
        {/* <Marquee /> */}
        <Copyright />
      </footer>
    </>
  );
}
