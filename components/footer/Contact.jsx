import Link from "next/link";


export default function Contact() {
    return (
        <div className="contact">
            <h2 className="mt-0">Contact</h2>
            <div className="footer-address">
                <p className="contact">
                    <Link href="tel:9166633000" className="d-flex align-items-center">
                        <i className="fa fa-phone"></i>&nbsp;&nbsp;
                        <span>916-663-3000</span>
                    </Link>
                </p>
                <p className="d-flex align-items-center">
                    <i className="fa fa-home"></i>&nbsp;&nbsp;
                    <span>
                        5406 Crossing Dr.
                        <br />
                        Suite 102 - 385
                        <br />
                        Rocklin, CA 95677
                    </span>
                </p >
            </div>
        </div>
    )
}