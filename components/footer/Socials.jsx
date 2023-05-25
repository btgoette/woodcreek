import { Image } from 'react-bootstrap'
import { ReactSVG } from 'react-svg';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "public/fonts/FontAwesome/fontawesome";

let socials = {
    yelp: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville",
    facebook: "https://www.facebook.com/people/Woodcreek-Carpet-Tech/100068233811081/?_rdr",
    nextdoor: "https://nextdoor.com/pages/woodcreek-carpet-tech/"
}

export default function Socials() {

    /* Check For Socials */


    function renderFacebook() {
        if (socials.facebook !== undefined) {
            return (
                <Link className="btn btn-outline-dark btn-floating m-1" href={socials.facebook}>
                    <i className="fab fa-facebook-f"></i>
                </Link>
            )
        }
    }

    /*  Instagram */
    function renderInstagram() {
        if (socials.instagram !== undefined) {
            return (
                <Link className="btn btn-outline-dark btn-floating m-1" href={socials.instagram}>
                    <i className="fab fa-instagram"></i>
                </Link>
            )
        }
    }

    /* LinkedIn */
    function renderLinkedIn() {
        if (socials.linkedin) {
            return (
                <Link className="btn btn-outline-dark btn-floating m-1" href={socials.instagram}>
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            )
        }
    }

    /* Nextdoor */
    function renderNextdoor() {
        if (socials.nextdoor) {
            return (
                <Link className="nextdoor btn btn-outline-dark btn-floating m-1" href={socials.nextdoor}>
                    <Image src="images/footer/nextdoor-dark.webp" alt="nextdoor" />
                </Link>
            )
        }
    }

    /* Twitter */
    function renderTwitter() {
        if (socials.twitter !== undefined) {
            return (
                <Link className="btn btn-outline-dark btn-floating m-1" href={socials.twitter}>
                    <i className="fab fa-twitter"></i>
                </Link>
            )
        }
    }


    /* Yelp */
    function renderYelp() {
        if (socials.yelp !== undefined) {
            return (
                <Link className="btn btn-outline-dark btn-floating m-1" href={socials.yelp}>

                    <i className="fab fa-yelp"></i>
                </Link>
            )
        }
    }

    return (
        <div>
            <p className="socials d-flex justify-content-center mx-auto">
                {renderFacebook()}
                {renderInstagram()}
                {renderTwitter()}
                {renderLinkedIn()}
                {renderNextdoor()}
                {renderYelp()}
            </p>
        </div>
    )
}