import { Image } from "react-bootstrap"

let logo = {
    img: "/images/logos/logo.webp",
    companyName: "Woodcreek CarpeTech"
}

export default function Logo() {
    return(
        <div className="logo d-flex align-items-center">
            <figure className="mb-0">
              <Image
                src={logo.img}
                alt={logo.companyName}
              />
            </figure>
          </div>
    )
}