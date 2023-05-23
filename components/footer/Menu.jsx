import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="menu">
            <h2 className="mt-0">Menu</h2>
            <Link href="/">Home</Link>
            <br />
            <Link href="/about/">About Us</Link>
            <br />
            <Link href="/services/">Our Services</Link>
            <br />
            <Link href="/featured-projects/">Featured Projects</Link>
            <br />
            <Link href="/gallery/">Gallery</Link>
            <br />
            <Link href="/testimonials/">Testimonials</Link>
        </div >
    )
}