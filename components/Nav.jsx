import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Image,
} from "react-bootstrap";
import Link from "next/link";

import Logo from './Logo';

export default function CustomNav() {
  return (
    <Navbar collapseOnSelect expand="xl" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {/* <Nav.Link href="">Home</Nav.Link> */}
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Services">
              <NavDropdown.Item href="/services">
                Our Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/commercial-construction">
                Commercial Design/Build
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/tenant-improvements">
                Tenant Improvements
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/featured-projects">Featured Projects</Nav.Link>
            <NavDropdown title="Gallery">
              <NavDropdown.Item href="/gallery">
                Gallery
              </NavDropdown.Item>
              {/* <NavDropdown.Divider className="d-none d-xl-block" /> */}
              <NavDropdown.Item href="/gallery/office-gallery">
                Office Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/gallery/restaurant-gallery">
                Restaurant Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/retail-gallery">
                Retail Gallery
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <NavDropdown title="Contact">
              <NavDropdown.Item href="/contact">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/contact/careers">
                Careers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link href="/contact">
              <Button className="btn btn-primary">
                Request Services
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
