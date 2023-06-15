import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";

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

export default function Menu() {
    return (
        <div className="menu">
            <div className="links mb-2">
                {nav.map(({ name, url }, i) => (
                    <div key={i}>
                        <Link href={url} title={name}>
                            {name}
                        </Link><br />
                    </div>
                ))}
            </div>
        </div >
    )
}