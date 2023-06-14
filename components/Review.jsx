import { Container, Row, Col, Image } from 'react-bootstrap'
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const reviews = [
    {
        name: "Sandy L.",
        location: "Vallejo, CA",
        date: "3/28/2023",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=RnHu9CT7bk6ybXSyDG_WJQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "The plumber backed up sewage into my laundry room after discovering a broken pipe. Gross. The leasing company contracted Brian for professional cleaning." },
            { p: "Brian was wonderful! He contacted me directly through a phone call to schedule a time. Over the phone he asked about the area and material of the flooring to be cleaned so he'd know what to use." },
            { p: "Brian came a couple minutes before the appointment time (impressive since he drove over an hour from Roseville to Vallejo so this job)!" },
            { p: "Brian did a wonderful job. He went over the area with a medical grade cleaner, bleach, and hot water. He even cleaned the top of the washer/dryer of spilled laundry detergent residue and cleaned the baseboards. He left the laundry room tidier than I've ever seen it. All of this done in less than an hour." },
            { p: "Brian was friendly, prompt, efficient, and got the job done. I couldn't be happier and will seek out his services for carpet cleaning if that's needed for the future." }
        ]
    },
    {
        name: "Mike L.",
        location: "San Francisco, CA",
        date: "4/7/2023",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=Mj4PznuzZbYgfrw6mID0iw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "We have used Brian many times for our home in West Roseville and he was always on time, attentive, and very thorough. If I could give him six stars, I would." }
        ]
    },
    {
        name: "Jim D.",
        location: "Roseville, CA",
        date: "9/21/2021",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=aifgDZt2nTiqb65BBISWbg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Brian was on time and very efficient. Our carpet and throw rugs came out looking like new. Very reasonable prices. Will have him back next year!" }
        ]
    },
    {
        name: "Christina Z.",
        location: "Rocklin, CA",
        date: "10/10/2016",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=2jmFbRFRv5LbtwC2-0hvGg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "The day before my official move out date my property management company informed me I needed the carpets professionally cleaned." },
            { p: "After living there for 4+ years I didn't anticipate this requirement and I was in slight panic mode. The following morning around 7am I reached out to Brian Pedersen their \"carpet guy\" and pleaded for help. Brian went out of his way not only to accommodate me the same day but he and and his  crew showed up when promised and delivered impeccable service." },
            { p: "Tremendous gratitude Woodcreek Carpet Tech!!!! YOU GUYS  ROCK!" },
            { p: "My name is Christina Z and I endorse this message! :))" }
        ]
    },
    {
        name: "GinaGina B.",
        location: "Encinitas, CA",
        date: "6/24/2019",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=FTGAVgF62H4m2j5VtOskTg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "So I got a rug from a friend to replace my \"white\" rug that I had planned to throw away because it looked so trashed. I asked Brian to clean the rug gifted by the friend, as well as the old one that I was sure was beyond repair. Brian did such an amazing job, the old rug is no longer trash and I get to use it in my bedroom!!!!!! I'm so thrilled. Brian is super friendly and profession. AND his prices are really not much more than it costs to rent a DIY Home Depot carpet cleaner, but 1000% more effective. I'm going to choke down the embarrassment of how awful my rug was in order to show what great work Brian doss  Thank you, Brian!!!!" }
        ]
    },
    {
        name: "Ferrell E.",
        location: "Roseville, CA",
        date: "7/16/2018",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=JFRbkWdjiyjpRQcpvnIoxw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Always available to do the job within a day if not sooner! My carpets always come out looking sparkling!!!" }
        ]
    },
    {
        name: "Terri W.",
        location: "Roseville, CA",
        date: "8/13/2017",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=pgVfvLBRRTLxihMkuf3_EQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "I wanted to take the time to share my positive experience with Woodcreek Carpet.  Brian happened to live in my neighborhood and I wanted to support our local business owners.  I was not disappointed in my choice. He was available when I needed his service, he was polite and friendly, and very efficient in getting in and out. Our carpets look brand new and they are 15 years old!  I thought we were going to need to replace our carpets soon, but now they look beautiful!!  I would highly recommend Woodcreek Carpet and I know we will be using them soon to clean our tile and windows!" }
        ]
    },
    {
        name: "Conrad M.",
        location: "Roseville, CA",
        date: "8/16/2017",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=BAY8PLlJ86uCwZVae3gLKw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Brian Pedersen, the owner of Woodcreek Carpet Tech, is a great guy and is awesome to work with. He's reliable, honest, dependable and does a great job. He has a very high-end carpet cleaning machine (not all carpet cleaning machines are created equally), and he knows how to use it. He cleaned our tile for about a THIRD of the price of other tile quotes we got. We hire Brian and Woodcreek Carpet Tech every year to clean our carpets. Thanks Brian!" }
        ]
    },
    {
        name: "Lotus L.",
        location: "Roseville, CA",
        date: "11/8/2017",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=x4Y9Tjr894X7Wn1KU0oPpw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Brian is amazing! I had both my carpets and my grout cleaned by his company and I couldn't be happier!!!!  He does excellent work along with being very professional and personable.  Great company I highly recommend him (I know carpet cleaning because I use to own a carpet cleaning business).  FIVE STARS for WOODCREEK CARPET TECH!!!!" }
        ]
    },
    {
        name: "Emerson C.",
        location: "Antelope, CA",
        date: "2/18/2018",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=jS80ofR8aTqBal-wGDT5Rw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "This is the best carpet cleaning company very honest,fast, best prices and amazing costumer service. My carpet looks and smells clean, i will definitely be calling them again. He promised to charge the same price for next time but i will without a doubt pay him a little more because he deserves it." }
        ]
    },
    {
        name: "Blake R.",
        location: "Roseville, CA",
        date: "5/15/2017",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=4NUEAtwMnuSbNhke92CWIA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Brea our realtor recommended Brian. He did a great job cleaning our tile and carpets! He also give a great price on the cleanings! Thank you very much Brian! We will be using you again in the future!" }
        ]
    },
    {
        name: "E G.",
        location: "Fort Collins, CO",
        date: "8/17/2014",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=UZrZZeGo0B1QWttl4mstFw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "I had them do my move-out cleaning & they did a beautiful job! Even the property manager said so. The carpet looked as good as new. Brian was very friendly, professional, and accomodating when it came to working with my schedule. Very affordable (and honest!) as well. I was charged what I was originally quoted and nothing more than that." },
            { p: "Great company! If I still lived in Roseville, I would use them again!" }
        ]
    },
    {
        name: "Dale S.",
        location: "Reno, NV",
        date: "9/6/2014",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=7YXTV3FhMI5YSAyBhuq3Ng&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Very happy with the work they did and will use them again. Very professional, on time and took care when furniture needed to be moved." }
        ]
    },
    {
        name: "Whitnee G.",
        location: "Roseville, CA",
        date: "9/18/2015",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=e4d5S4OhGVth5uk6pf2twQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Super happy and will use them again. They got stains out we had even before we moved in. Highly professional and great pricing!" }
        ]
    },
    {
        name: "Melinda M.",
        location: "Shingle Springs, CA",
        date: "7/11/2014",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=AAZ4o13iTZuim3nHtKoq_A&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "I found Woodcreek Carpet Tech through Yelp and was looking for a family-owned business with good reviews and a good price. When I contacted the business number, Brian answered right away, even though it was a weekend, which I had no expectation of! He was completely flexible, scheduling me in right where I needed. He showed up promptly on the day/time we discussed, cleaned the carpet and tile to my satisfaction, and it was all done at a very reasonable cost. I appreciate the professionalism and friendliness of his business and will use them again!" }
        ]
    },
    {
        name: "Lori W.",
        location: "Folsom, CA",
        date: "4/17/2014",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=MdnAyYB92_BtrZyFd6ypzw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Brian makes his company the best most affordable carpet cleaning service in the business. His combined expertise, professionalism and fun upbeat personality makes it easy to write the check!  I have used him for years for carpet, tile and upholstery cleaning, referred him to many and encourage all who read this to give him a chance to earn your business as well. You won't be disappointed." }
        ]
    },
    {
        name: "Manuel V.",
        location: "Roseville, CA",
        date: "4/30/2016",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=3PNGCrr-RxZDSlxl_AAUdw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Amazing job done by Wood Creek carpet!! If you would of seen my white carpet, it actually looked  black in a couple of places. Wood Creek Carpet came out and did an excellent job. My carpet stains are all gone and the foot traffic from the front door to the kitchen is all gone!! I will keep them on speed dial from now on!!" }
        ]
    },
    {
        name: "Gina R.",
        location: "Roseville, CA",
        date: "9/24/2014",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=Afvd7HlaBtCixDOJ4w9t6w&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Thank you for responding so quickly. The carpet looks brand new! I will definitely call again! Thanks again Brian!" }
        ]
    },
    {
        name: "J M.",
        location: "Sacramento, CA",
        date: "1/12/2015",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=UE9SAzKToM02kPIJI6uEEQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "I spilled two bottles of RED juice on my carpet. Had another person come out who wanted to rip out my carpet and replace it. Brian came out, cleaned it and it looked like it never happened, great job! I would recommend him to anyone!" }
        ]
    },
    {
        name: "Kaitlynn M.",
        location: "Roseville, CA",
        date: "1/4/2016",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=xC-ubokWtOv7CSm4CcmrcA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "He's done it again! Brian and his Woodcreek Carpet Tech team have delivered an unbeatable carpet and tile cleaning. My hubby and I hired Woodcreek Carpet Tech to clean just our carpet last year on our two-level home. It's our tradition to get our carpet cleaned at the beginning of the year! We got a puppy last year and the carpets got totally wrecked with mud, dirt, and dog hair. We were so happy with his cleaning, that we went ahead and got our tile floors cleaned in addition to our carpets again this year! Brian gave us an incomparable price that we just couldn't turn down. Our tile floors and carpet are gorgeous again. We'll be hiring you guys again next year!" }
        ]
    },
    {
        name: "Kaitlynn M.",
        location: "Roseville, CA",
        date: "7/27/2015",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=xC-ubokWtOv7CSm4CcmrcA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "I was shopping around for carpet cleaners, and immediately stopped looking when I found Brian. He is absolutely wonderful! I was in need of getting my carpets cleaned upstairs and downstairs since my hubby and I got a white lab puppy. Brian was able to quickly book an appointment and clean our carpets within a matter of days! I will definitely use him again next year for my annual carpet cleaning." }
        ]
    },
    {
        name: "Evan B.",
        location: "Folsom, CA",
        date: "9/21/2015",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=gBALWAcEONDv8ozt5VhuAA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "The guys at Woodcreek Carpet Tech came out to my house to clean the carpets, tile, and linoleum over the weekend. They did an excellent job making my 3 year old carpet look new again. I will be using them on a regular basis from now on to keep my carpet looking new." }
        ]
    }, {
        name: "Lynne W.",
        location: "Antelope, CA",
        date: "3/2/2016",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=4wI1zpLIvLL3G6PaBwY2IA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "Just had my 15 year old carpets cleaned today by Brian from Woodcreek Carpet Tech.  I contacted him online and he got right back to me with a quote, was flexible with appointment times, and was right on time for the appointment today.  Brian is friendly, polite and efficient, and did a great job getting some set-in stains out of my carpet.  It looks like new!  I will definitely give him a call again next time I need some cleaning done in my home.  Two thumbs up!!  Thanks, Brian! :)" }
        ]
    }, {
        name: "Jeanette W.",
        location: "Antelope, CA",
        date: "10/8/2014",
        url: "https://www.yelp.com/biz/woodcreek-carpet-tech-roseville?hrid=3PNGCrr-RxZDSlxl_AAUdw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
        message: [
            { p: "I am very pleased with the outcome of my carpet and tile grout.  Brian and his employees did a great job and were very friendly, courteous, and professional. Brian answered the phone the first time I called and scheduled me within the same week. I have already recommended Woodcreek Carpet Tech to friends and co-workers. Thanks Brian!" }
        ]
    }
]


export default function Review() {
    return (
        <div className="review">
            {reviews.map(({ name, location, date, url, message }, i) => (
                <Col md={4} key={i} className="p-1">
                    <div className="review-card p-5">
                        <p className="review-header">
                            <span className="review-name">{name}</span><br />
                            <span className="review-location">{location}</span><br />
                            <span className="review-stars">
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                            </span>
                            &nbsp;&nbsp;&nbsp;Reviewed on<span className="review-date"> {date}</span>
                        </p>
                        <quote className="review-quote">
                            {message.map(({ p }, j) => (
                                <p key={j}>{p}</p>
                            ))}
                        </quote>
                        <p className="review-url"><Link href={url}>Read {name}&apos;s review on Yelp</Link></p>
                    </div>
                </Col>
            ))}
        </div>
    )
}