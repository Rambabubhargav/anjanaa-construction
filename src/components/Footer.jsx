import { Link } from 'react-router-dom'

function Footer() {
  const services = [
    'Highway Development',
    'Box Culverts',
    'Minor Bridges',
    'PSC Girder Works',
    'RCC Drain Works',
    'Side Slope Protection',
  ]

  return (
    <footer className="site-footer">

      {/* ================= MAIN FOOTER ================= */}

      <div className="site-footer-main">

        <div className="container">

          <div className="site-footer-grid">

            {/* COMPANY */}

            <div className="site-footer-company">

              <Link to="/" className="footer-brand">

                <img
                  src="/projects/anjanaa-home-banner.png"
                  alt="Anjanaa Construction"
                />

                <div>
                  <strong>ANJANAA</strong>
                  <span>CONSTRUCTION</span>
                </div>

              </Link>

              <p>
                Reliable civil and infrastructure construction
                solutions built on experience, quality and
                practical technical knowledge.
              </p>

              <Link
                to="/about"
                className="footer-about-link"
              >
                More About Us
                <span>→</span>
              </Link>

            </div>


            {/* QUICK LINKS */}

            <div className="site-footer-column">

              <h3>
                Quick Links
              </h3>

              <ul>

                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/services">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/projects">
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to="/gallery">
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </li>

              </ul>

            </div>


            {/* SERVICES */}

            <div className="site-footer-column">

              <h3>
                Our Services
              </h3>

              <ul>

                {services.map((service) => (

                  <li key={service}>
                    <Link to="/services">
                      {service}
                    </Link>
                  </li>

                ))}

              </ul>

            </div>


            {/* CONTACT */}

            <div className="site-footer-column footer-contact">

              <h3>
                Contact Us
              </h3>

              <div className="footer-contact-item">

                <span className="footer-contact-icon">
                  L
                </span>

                <div>
                  <strong>Location</strong>

                  <p>
                    Balijipeta,<br />
                    Parvathipuram Manyam District,<br />
                    Andhra Pradesh - 535557
                  </p>
                </div>

              </div>


              <div className="footer-contact-item">

                <span className="footer-contact-icon">
                  P
                </span>

                <div>
                  <strong>Phone</strong>

                  <a href="tel:8886660948">
                    8886660948
                  </a>

                  <a href="tel:9160286603">
                    9160286603
                  </a>

                </div>

              </div>


              <div className="footer-contact-item">

                <span className="footer-contact-icon">
                  @
                </span>

                <div>

                  <strong>Email</strong>

                  <a href="mailto:palavalasa.r@gmail.com">
                    palavalasa.r@gmail.com
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}

      <div className="site-footer-bottom">

        <div className="container">

          <div className="site-footer-bottom-inner">

            <p>
              © {new Date().getFullYear()} Anjanaa Construction.
              All Rights Reserved.
            </p>

            <p>
              Built with experience. Driven by quality.
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer