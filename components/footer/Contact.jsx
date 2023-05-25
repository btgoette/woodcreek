import Link from "next/link";


export default function Contact() {
    return (
        <div className="contact">
            <div className="footer-address text-center text-md-start">
                <p className="contact">
                    <Link href="tel:9165324543" className="d-flex align-items-center">
                        <i className="fa fa-phone"></i>&nbsp;&nbsp;
                        <span>916-532-4543</span>
                    </Link>
                </p>
                <p className="hours d-flex align-items-center">
                    <i className="fa fa-clock"></i>&nbsp;&nbsp; 
                    <div>Monday - Sunday 9am - 9pm</div>
                </p>
            </div>
        </div>
    )
}