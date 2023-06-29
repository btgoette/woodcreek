import {
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas
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
  // return (
  //   <Navbar collapseOnSelect expand="xl" variant="light" className="px-5">
  //     <Container>
  //       <Navbar.Brand href="/">
  //         <Logo />
  //       </Navbar.Brand>
  //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //       <Navbar.Collapse id="responsive-navbar-nav">
  //         <Nav className="mx-auto">
  //           {nav.slice(1).map(({ name, url }, i) => (
  //             <Nav.Link key={i} href={url}>{name}</Nav.Link>
  //           ))}
  //         </Nav>
  //         <Nav>
  //           <Link href="tel:9165324563">
  //             <Button className="btn btn-primary">
  //               Get A Quote
  //             </Button>
  //           </Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="px-md-5">
          <Container>
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  {nav.slice(1).map(({ name, url }, i) => (
                    <Nav.Link key={i} href={url}>{name}</Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Nav className="d-none d-xl-block">
              <Link href="tel:9165324563">
                <Button className="btn btn-primary">
                  Get A Quote
                </Button>
              </Link>
            </Nav>
          </Container>
        </Navbar >
      ))
      }
    </>
  );

}
