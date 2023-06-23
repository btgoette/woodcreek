import Link from "next/link";


export default function Contact() {
    return (
        <div className="contact mb-4">
            <p>
                <Link href="tel:9165324543">
                    <i className="fa fa-phone"></i>&nbsp;&nbsp;
                    <span>916-532-4563</span>
                </Link>
            </p><p>
                <span>
                    <i className="fa fa-clock"></i>&nbsp;&nbsp;
                    Monday - Sunday 9am - 9pm
                </span>
            </p>
        </div>
    )
}