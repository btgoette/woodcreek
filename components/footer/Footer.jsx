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
            <Row className="align-items-center justify-content-center">
              <Col md="4">
                <div className="text-center">
                  <Link href="/">
                    <Logo />
                  </Link>
                  <h3>Established 2002</h3>
                  <Socials />
                </div>
              </Col>
              <Col md="4">
                <Contact />
                <div>
                  <figure>
                    <Image src="images/footer/rchlogo.png" alt="Roseville Chamber of Commerce" />
                  </figure>
                </div>
              </Col>
              <Col md="4">
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
