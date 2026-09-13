"use client";

import { useState } from "react";

const phoneDisplay = "07874 363307";
const phoneHref = "tel:+447874363307";
const googleReviewsHref = "https://g.co/kgs/WpU6Sz4";
const whatsappHref =
  "https://wa.me/447523112819?text=Hi%20MK%20Fair%20Price%20Plumbing%20%26%20Heating%2C%20I%27d%20like%20a%20quote.%20I%20can%20send%20photos%20of%20the%20job.";

const services = [
  {
    number: "01",
    title: "Boilers",
    text: "Boiler servicing, fault finding, repairs and new installations for homes and businesses.",
  },
  {
    number: "02",
    title: "Emergency plumbing",
    text: "Fast help with leaks, burst pipes, failed valves and urgent plumbing or heating problems.",
  },
  {
    number: "03",
    title: "Central heating",
    text: "Heating system repairs, upgrades, radiators and practical advice to keep your home comfortable.",
  },
  {
    number: "04",
    title: "Bathrooms & kitchens",
    text: "From taps, toilets and shower pumps to complete bathroom and kitchen plumbing installations.",
  },
  {
    number: "05",
    title: "Leaks & repairs",
    text: "Careful investigation and repair of leaking pipework, fittings, tanks and water systems.",
  },
  {
    number: "06",
    title: "Water heaters",
    text: "Diagnosis, repair and installation of water heaters for reliable hot water when you need it.",
  },
];

const gallery = [
  {
    src: "https://static.wixstatic.com/media/c78c9f_e2933fcd8723463db46f1beea8ba746a~mv2.jpeg/v1/fill/w_700,h_700,q_90/c78c9f_e2933fcd8723463db46f1beea8ba746a~mv2.jpeg",
    alt: "Completed plumbing work by MK Fair Price Plumbing and Heating",
  },
  {
    src: "https://static.wixstatic.com/media/c78c9f_d65310faff06468f88c0f794dfdc11f3~mv2.jpeg/v1/fill/w_700,h_700,q_90/c78c9f_d65310faff06468f88c0f794dfdc11f3~mv2.jpeg",
    alt: "Plumbing installation completed in Milton Keynes",
  },
  {
    src: "https://static.wixstatic.com/media/c78c9f_7241a28aee4d4922800dc0821ce02061~mv2.jpeg/v1/fill/w_700,h_700,q_90/c78c9f_7241a28aee4d4922800dc0821ce02061~mv2.jpeg",
    alt: "Heating and pipework installation by the MK Fair Price team",
  },
  {
    src: "https://static.wixstatic.com/media/c78c9f_843561b8b0dc44a48da61d4d06f8e64c~mv2.jpeg/v1/fill/w_700,h_700,q_90/c78c9f_843561b8b0dc44a48da61d4d06f8e64c~mv2.jpeg",
    alt: "Finished bathroom plumbing work",
  },
];

const narrowboatServices = [
  {
    id: "heating",
    label: "Heating repairs",
    src: "/images/narrowboat-heating.jpg",
    alt: "Engineer servicing a heating system inside a narrowboat",
    caption: "Heating systems",
  },
  {
    id: "kitchen",
    label: "Kitchen plumbing",
    src: "/images/narrowboat-kitchen.jpg",
    alt: "Finished narrowboat galley kitchen with sink and plumbing access",
    caption: "Kitchen plumbing",
  },
  {
    id: "bathroom",
    label: "Bathroom fitting",
    src: "/images/narrowboat-bathroom.jpg",
    alt: "Finished bathroom and shower inside a narrowboat",
    caption: "Bathroom fitting",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [activeNarrowboatService, setActiveNarrowboatService] = useState(
    narrowboatServices[0],
  );

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="topbar">
        <div className="shell topbar-inner">
          <p>
            <span className="status-dot" aria-hidden="true" />
            Available for urgent plumbing &amp; heating callouts
          </p>
          <a href={phoneHref}>Call {phoneDisplay}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="MK Fair Price home">
            <span className="brand-mark" aria-hidden="true">
              <span>MK</span>
            </span>
            <span className="brand-copy">
              <strong>Fair Price</strong>
              <small>Plumbing &amp; Heating</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#work">Our work</a>
          </nav>

          <a className="button button-small button-dark header-cta" href="#contact">
            Get a free quote <ArrowIcon />
          </a>

          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#reviews">Reviews</a>
              <a href="#work">Our work</a>
              <a href="#contact">Get a free quote</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow">Your trusted local plumber</p>
              <h1>
                Expert plumbing.
                <span>Fair prices.</span>
              </h1>
              <p className="hero-intro">
                A Milton Keynes father and son team with more than 30 years of
                experience. Straight answers, reliable workmanship and no fuss.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={phoneHref}>
                  Call {phoneDisplay} <ArrowIcon />
                </a>
                <a
                  className="button button-ghost"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Send photos on WhatsApp
                </a>
              </div>
              <div className="hero-proof">
                <a
                  className="hero-proof-link"
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Read our five-star Google reviews"
                >
                  <div className="stars" aria-hidden="true">★★★★★</div>
                  <p>
                    <strong>5.0 on Google</strong>
                    <span>Read reviews from local customers</span>
                  </p>
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img
                  src="https://static.wixstatic.com/media/c78c9f_8243f5a99ba4414f92657459d6f2ef95~mv2.jpeg/v1/fill/w_900,h_1050,al_c,q_88/c78c9f_8243f5a99ba4414f92657459d6f2ef95~mv2.jpeg"
                  alt="Clive and Connor from MK Fair Price Plumbing and Heating"
                />
              </div>
              <div className="hero-card hero-card-top">
                <span>30+</span>
                <p>years of plumbing &amp; heating experience</p>
              </div>
              <div className="hero-card hero-card-bottom">
                <span className="check" aria-hidden="true">✓</span>
                <p>
                  <strong>Family run</strong>
                  Local to Milton Keynes
                </p>
              </div>
              <a
                className="hero-review-badge"
                href={googleReviewsHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Read five-star Google reviews"
              >
                <span className="google-g">G</span>
                <span><strong>5.0</strong><small>Google reviews</small></span>
                <span className="badge-stars" aria-hidden="true">★★★★★</span>
              </a>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Business highlights">
          <div className="shell trust-grid">
            <p><span>01</span> Free quotes</p>
            <p><span>02</span> Fair, clear pricing</p>
            <p><span>03</span> Homes &amp; businesses</p>
            <p><span>04</span> Milton Keynes &amp; Bucks</p>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="shell">
            <div className="section-heading heading-row">
              <div>
                <p className="eyebrow">How we can help</p>
                <h2>Plumbing &amp; heating, sorted.</h2>
              </div>
              <p>
                From a dripping tap to a complete installation, you will get
                experienced advice and work completed properly.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact">Ask about this service <ArrowIcon /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="shell about-grid">
            <div className="about-photo">
              <img
                src="/images/boiler-installation.jpg"
                alt="A modern boiler shown fully installed with neat copper pipework"
              />
              <div className="about-badge">
                <strong>Local</strong>
                <span>Trusted across Milton Keynes</span>
              </div>
            </div>

            <div className="about-copy">
              <p className="eyebrow">Meet Clive &amp; Connor</p>
              <h2>A family name you can trust in your home.</h2>
              <p className="about-lead">
                MK Fair Price Plumbing &amp; Heating is a father and son business
                built on honest advice, dependable service and fair pricing.
              </p>
              <p>
                With more than three decades of experience, Clive and Connor
                help homeowners, landlords and businesses across Milton Keynes
                with everything from small repairs to full plumbing and heating
                installations.
              </p>
              <ul className="tick-list">
                <li>Friendly, respectful service</li>
                <li>Clear options to suit your budget</li>
                <li>Clean and tidy workmanship</li>
                <li>Free initial quotes and advice</li>
              </ul>
              <a className="text-link" href="#contact">
                Speak to Clive or Connor <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="shell">
            <div className="reviews-heading">
              <div>
                <p className="eyebrow eyebrow-light">What customers say</p>
                <h2>Recommended across Milton Keynes.</h2>
              </div>
              <div className="review-score">
                <span>5.0</span>
                <div>
                  <div className="stars">★★★★★</div>
                  <p>Google rating</p>
                </div>
              </div>
            </div>

            <div className="review-grid">
              <figure>
                <blockquote>
                  “Friendly, communicated well, on time and very efficient.”
                </blockquote>
                <figcaption>
                  <span>EJ</span>
                  <p><strong>Ella-Jane Harbord</strong>Google review</p>
                </figcaption>
              </figure>
              <figure>
                <blockquote>
                  “Extremely knowledgeable and fixed the boiler issue for me.”
                </blockquote>
                <figcaption>
                  <span>G</span>
                  <p><strong>Local customer</strong>Google review</p>
                </figcaption>
              </figure>
              <figure>
                <blockquote>
                  “You will get exactly what is on the tin.”
                </blockquote>
                <figcaption>
                  <span>G</span>
                  <p><strong>Returning customer</strong>Google review</p>
                </figcaption>
              </figure>
            </div>

            <a
              className="button button-light reviews-button"
                href={googleReviewsHref}
              target="_blank"
              rel="noreferrer"
            >
              Read more Google reviews <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="section narrowboat">
          <div className="shell narrowboat-card">
            <div className="narrowboat-copy">
              <p className="eyebrow">Specialist mobile service</p>
              <h2>Narrowboat plumbing &amp; heating</h2>
              <p>
                Practical repairs, servicing and installations for narrowboat
                heating, kitchens, bathrooms and toilets across Milton Keynes
                and Buckinghamshire.
              </p>
              <div className="narrowboat-tabs" role="tablist" aria-label="Narrowboat services">
                {narrowboatServices.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    role="tab"
                    aria-selected={activeNarrowboatService.id === service.id}
                    aria-controls="narrowboat-service-image"
                    onClick={() => setActiveNarrowboatService(service)}
                  >
                    {service.label}
                  </button>
                ))}
              </div>
              <a className="button button-dark" href={whatsappHref} target="_blank" rel="noreferrer">
                Ask about narrowboat work <ArrowIcon />
              </a>
            </div>
            <div className="narrowboat-visual" id="narrowboat-service-image" role="tabpanel">
              <img
                key={activeNarrowboatService.src}
                src={activeNarrowboatService.src}
                alt={activeNarrowboatService.alt}
              />
              <div className="narrowboat-image-label">
                <span>Specialist service</span>
                <strong>{activeNarrowboatService.caption}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="shell">
            <div className="section-heading heading-row work-heading">
              <div>
                <p className="eyebrow">Recent work</p>
                <h2>Quality you can see.</h2>
              </div>
              <p>
                A small selection of plumbing and heating work completed for
                local customers.
              </p>
            </div>
            <div className="gallery">
              {gallery.map((image, index) => (
                <figure key={image.src} className={index === 0 ? "gallery-feature" : ""}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">Get a free quote</p>
              <h2>Tell us what needs fixing.</h2>
              <p>
                Call for urgent help, or send a WhatsApp message with a few
                photos for a quick initial conversation about your job.
              </p>
              <div className="contact-actions">
                <a className="button button-primary" href={phoneHref}>
                  Call {phoneDisplay} <ArrowIcon />
                </a>
                <a className="button button-outline" href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp photos
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div>
                <span>Phone</span>
                <a href={phoneHref}>07874 363307</a>
              </div>
              <div>
                <span>WhatsApp</span>
                <a href={whatsappHref} target="_blank" rel="noreferrer">07523 112819</a>
              </div>
              <div>
                <span>Email</span>
                <a href="mailto:mkfpph@outlook.com">mkfpph@outlook.com</a>
              </div>
              <div>
                <span>Areas covered</span>
                <p>Milton Keynes &amp; Buckinghamshire</p>
              </div>
              <div>
                <span>Address</span>
                <p>641 South Ninth Street, CMK, MK9 3DF</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-grid">
          <a className="brand brand-footer" href="#top" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true"><span>MK</span></span>
            <span className="brand-copy"><strong>Fair Price</strong><small>Plumbing &amp; Heating</small></span>
          </a>
          <p>Family run plumbing and heating services across Milton Keynes.</p>
          <div className="footer-links">
            <a href="https://www.facebook.com/p/MK-Fair-Price-Plumbing-and-Heating-100054216231687/" target="_blank" rel="noreferrer">Facebook</a>
            <a href={googleReviewsHref} target="_blank" rel="noreferrer">Google reviews</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} MK Fair Price Plumbing &amp; Heating</p>
          <p>Fair prices. Proper workmanship.</p>
        </div>
      </footer>

      <div className="mobile-actions" aria-label="Quick contact">
        <a href={phoneHref}>Call now</a>
        <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </>
  );
}
