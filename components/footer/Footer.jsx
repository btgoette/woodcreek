import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";

import ThankYou from "./ThankYou";
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
        <ThankYou />
        <section className="bg-light py-5">
          <Container className="px-4 py-5">
            <Row className="align-items-center justify-content-center">
              <Col lg="4" className=" text-center mb-4">
                <div>
                  <Link href="/">
                    <Logo />
                  </Link>
                  <h3>Established 2002</h3>
                  <Socials />
                </div>
              </Col>
              <Col lg="4" className="text-center text-lg-start mb-4">
                <Contact />
                <div>
                  <Link href="https://www.rosevillechamber.com/" target="_blank">
                    <figure>
                      <Image src="/images/footer/rchlogo.png" alt="Member of the Roseville Chamber of Commerce" title="Member of the Roseville Chamber of Commerce" />
                    </figure>
                  </Link>
                </div>
              </Col>
              <Col lg="4" className="text-center text-lg-start mb-4">
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
