import { Container, Row, Col, Image } from 'react-bootstrap';

import Head from 'components/Head';
import Hero from 'components/Hero';
import Cards from 'components/Cards';

let hero = {
  background: 'services',
  title: 'Featured Services',
};

export default function Services() {
  return (
    <>
      <Head />
      <Hero {...hero} />

      <section className="py-5">
        <Container className="p-5">
          <Row>
            <Col>
              <h2 className="mt-lg-0">Our Cleaning &amp; Repair Services</h2>
            </Col>
          </Row>
          <Cards />
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="residential" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 0 }}>
              <Image className="w-100" src="/images/500x400/residential-midjourney.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Revitalize Your Home with Professional Residential Carpet Cleaning Services</h2>
              <p>Looking to breathe new life into your home? Our residential carpet cleaning services are here to help! With our expert team and advanced cleaning techniques, we&apos;ll refresh and rejuvenate your carpets, leaving them looking and feeling brand new.</p>
              <p>Whether you&apos;re dealing with stubborn stains, deep-seated dirt, or unpleasant odors, our skilled professionals have the knowledge and tools to tackle any carpet cleaning challenge. We prioritize the use of eco-friendly products that are safe for your family and pets.</p>
              <p>Experience the transformative power of our residential carpet cleaning services and create a cleaner, healthier living environment for you and your loved ones. Contact us today to schedule an appointment and discover the difference we can make in your home.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="commercial" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 1 }}>
              <Image className="w-100" src="/images/500x400/commercial-midjourney.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Elevate Your Business with Professional Commercial Carpet Cleaning Services</h2>
              <p>First impressions matter when it comes to your business. Ensure a clean and welcoming environment with our comprehensive commercial carpet cleaning services.</p>
              <p>Our expert team is equipped with the latest techniques and industry-leading equipment to effectively remove dirt, stains, and allergens from your commercial carpets. We understand the unique challenges that come with high-traffic areas and strive to deliver exceptional results.</p>
              <p>With our tailored cleaning solutions, we can revitalize your carpets, creating a fresh and professional atmosphere for your employees and clients. Trust our reliable commercial carpet cleaning services to enhance the overall appearance and hygiene of your workspace.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="rug" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 0 }}>
              <Image className="w-100" src="/images/500x400/rugs-unsplash.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Revive Your Space with Expert Area Rug Cleaning Services</h2>
              <p>Discover the transformative power of our professional area rug cleaning services. We specialize in restoring the beauty and cleanliness of your cherished area rugs, bringing new life to your space.</p>
              <p>Our team of experts utilizes advanced techniques and state-of-the-art equipment to effectively remove dirt, stains, and allergens from your area rugs. With our meticulous approach, we ensure that every fiber is thoroughly cleaned and rejuvenated.</p>
              <p>Whether you have short woven rugs or plush shaggy ones, we have the knowledge and expertise to handle them all. Trust our professional area rug cleaning services to revitalize your rugs and create a fresh and inviting atmosphere in your home or office.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="tile" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 1 }}>
              <Image className="w-100" src="/images/500x400/tile-midjourney.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Transform Your Tiles with Professional Tile & Grout Cleaning Services</h2>
              <p>Unlock the true beauty of your tiles with our specialized tile and grout cleaning services. Our expert team is dedicated to delivering exceptional results that will leave your floors looking pristine and refreshed.</p>
              <p>Using advanced techniques and high-quality equipment, we effectively eliminate dirt, grime, and stubborn stains from your tiles and grout lines. Our meticulous approach ensures a thorough cleaning that revitalizes the appearance of your floors.</p>
              <p>Say goodbye to dull and dingy tiles and hello to a sparkling clean surface that enhances the overall aesthetic of your space. Trust our professional tile and grout cleaning services to bring back the luster and shine to your floors.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="pet" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 0 }}>
              <Image className="w-100" src="/images/500x400/pets-unsplash.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Effective Pet Odor & Stain Removal Services: Say Goodbye to Unwanted Pet Accidents</h2>
              <p>Don&apos;t let pet odors and stains disrupt your home anymore. Our professional pet odor and stain removal services are here to provide a fresh and clean environment for you and your furry companions.</p>
              <p>With our specialized techniques and eco-friendly products, we effectively eliminate pet-related odors and stains from carpets, upholstery, and other surfaces. Our expert team understands the unique challenges that come with pet accidents and takes a thorough approach to ensure complete removal.</p>
              <p>Experience the relief of a home free from lingering pet odors and unsightly stains. Trust our reliable pet odor and stain removal services to restore cleanliness and harmony to your living space.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="scotchgard" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 1 }}>
              <Image className="w-100" src="/images/500x400/scotchgard.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Enhance Protection with SCOTCHGARD<sup>&reg;</sup> Services for Long-Lasting Results</h2>
              <p>Experience the power of SCOTCHGARD<sup>&reg;</sup> services to safeguard your valuable investments. Our professional team specializes in applying SCOTCHGARD<sup>&reg;</sup> protection, offering long-lasting results for your carpets, upholstery, and more.</p>
              <p>By choosing our SCOTCHGARD<sup>&reg;</sup> services, you can enjoy enhanced stain resistance and extended lifespan for your furnishings. Our experts utilize advanced techniques to ensure thorough coverage and optimal effectiveness.</p>
              <p>Don&apos;t let spills and stains ruin the beauty of your belongings. With our reliable SCOTCHGARD<sup>&reg;</sup> services, you can maintain the pristine condition of your items, prolonging their durability and protecting your investment.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="flood" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 0 }}>
              <Image className="w-100" src="/images/500x400/flood-midjourney.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Swift Water Damage & Flood Restoration Services for Your Peace of Mind</h2>
              <p>When water damage strikes, trust our professional water damage and flood restoration services to restore your property promptly and effectively. We understand the urgency of such situations and are here to provide you with peace of mind.</p>
              <p>Our experienced team utilizes advanced techniques and state-of-the-art equipment to mitigate water damage, extract excess water, and thoroughly dry affected areas. We are equipped to handle various types of water damage, whether from burst pipes, natural disasters, or plumbing issues.</p>
              <p>With our swift response and efficient restoration process, we minimize further damage and prevent potential mold growth. Rest assured that your property is in capable hands as we work diligently to bring it back to its pre-damage condition.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="upholstery" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 1 }}>
              <Image className="w-100" src="/images/500x400/upholstery-unsplash.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Revive Your Upholstery with Professional Upholstery Cleaning Services
              </h2>
              <p>Discover the transformative power of our professional upholstery cleaning services. From sofas and chairs to cushions and drapes, our expert team specializes in revitalizing and refreshing your upholstery.</p>
              <p>Using advanced techniques and eco-friendly products, we effectively remove dirt, stains, and allergens from your upholstery, restoring its beauty and extending its lifespan. Our meticulous approach ensures a deep and thorough clean, leaving your furniture looking and feeling like new.</p>
              <p>Say goodbye to dull and dingy upholstery and hello to a fresh and inviting living space. Trust our professional upholstery cleaning services to enhance the overall appearance and cleanliness of your home.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="repair" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 0 }}>
              <Image className="w-100" src="/images/500x400/carpet-repair-midjourney.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Restore Your Carpets with Expert Carpet Repair Services</h2>
              <p>Experience the exceptional carpet repair services that bring your carpets back to life. Our skilled team specializes in addressing a wide range of carpet issues, from burns and tears to wrinkles and pet damage.</p>
              <p>Using advanced techniques and industry-leading equipment, we seamlessly repair damaged areas, ensuring a flawless finish that blends seamlessly with the rest of your carpet. We take pride in our attention to detail and commitment to delivering high-quality results.</p>
              <p>Don&apos;t let damaged carpets diminish the beauty and functionality of your space. Trust our reliable carpet repair services to restore the integrity and appearance of your carpets, saving you the cost of replacement.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="p-5">
          <Row id="rv" className="align-items-center">
            <Col className="mb-2 mb-lg-0" lg={{ span: 5, order: 1 }}>
              <Image className="w-100" src="/images/500x400/rv-unsplash.webp" alt="" />
            </Col>
            <Col lg={7} className="my-4">
              <h2 className="mt-lg-0">Revitalize Your RV Interior with Professional Cleaning Services</h2>
              <p>Experience the transformative power of our professional RV interior cleaning services. From floor to ceiling, our expert team specializes in revitalizing and refreshing your RV living space.</p>
              <p>Using advanced techniques and eco-friendly products, we effectively remove dirt, stains, and odors from every nook and cranny of your RV. Our meticulous approach ensures a deep and thorough clean, leaving your interior looking and smelling fresh.</p>
              <p>Say goodbye to dust, allergens, and the wear and tear of travel. Trust our professional RV interior cleaning services to enhance the overall cleanliness and comfort of your home on wheels.</p>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}
