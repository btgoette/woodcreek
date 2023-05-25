import {
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import Link from "next/link";

import Logo from './Logo';

let nav = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Services",
    url: "/services/"
  },
  {
    name: "Carpet Cleaning",
    url: "/carpet-cleaning/"
  },
  {
    name: "Tile Cleaning",
    url: "/tile-cleaning/"
  },
  {
    name: "Reviews",
    url: "/reviews/"
  },
  {
    name: "Contact Us",
    url: "/contact/"
  }
]


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
            {nav.slice(1).map(({ name, url }, i) => (
              <Nav.Link key={i} href={url}>{name}</Nav.Link>
            ))}
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
