import { Link } from 'react-router-dom'

function Home() {
  const services = [
    'Highway Development',
    'Box Culverts',
    'Minor Bridges',
    'Vehicle Under Passes',
    'PSC Girder Works',
    'Stone Pitching',
    'Toe Wall Construction',
    'Boundary Walls',
    'RCC Drain Works',
    'Median Drain & Turfing',
    'Side Slope Protection',
    'Guard Stone Works',
  ]

  const reasons = [
    {
      number: '01',
      title: 'Quality Workmanship',
      text: 'Focused construction practices with attention to quality and durability.',
    },
    {
      number: '02',
      title: 'Timely Delivery',
      text: 'Planned execution and coordinated site activities to meet project timelines.',
    },
    {
      number: '03',
      title: '20+ Years Experience',
      text: 'Practical technical experience across building and highway projects.',
    },
    {
      number: '04',
      title: 'Strong Site Management',
      text: 'Effective coordination and practical management throughout project execution.',
    },
    {
      number: '05',
      title: 'Modern Techniques',
      text: 'Construction methods and equipment selected according to project requirements.',
    },
    {
      number: '06',
      title: 'Safety Focus',
      text: 'Safety remains an important part of our construction operations.',
    },
    {
      number: '07',
      title: 'Practical Solutions',
      text: 'Cost-conscious construction solutions designed around project requirements.',
    },
    {
      number: '08',
      title: 'Customer Focus',
      text: 'Building long-term relationships through reliable construction work.',
    },
  ]

  return (
    <main className="home-page">

      {/* ================= HERO ================= */}

      <section className="home-hero-new">

        <div className="home-hero-new-bg"></div>
        <div className="home-hero-new-overlay"></div>

        <div className="container">

          <div className="home-hero-new-content">

            <div className="home-hero-new-left">

              <span className="home-hero-eyebrow">
                CIVIL & INFRASTRUCTURE CONSTRUCTION
              </span>

              <h1>
                Building
                <br />
                <span>Quality Infrastructure.</span>
              </h1>

              <p>
                Reliable civil construction solutions for highways,
                bridges, culverts, drainage and infrastructure projects.
              </p>

              <div className="home-hero-actions">

                <Link
                  to="/projects"
                  className="home-btn-primary"
                >
                  Explore Projects
                  <span>→</span>
                </Link>

                <Link
                  to="/contact"
                  className="home-btn-secondary"
                >
                  Contact Us
                </Link>

              </div>

            </div>


            <div className="home-hero-new-right">

              <div className="home-logo-box">

                <img
                  src="/projects/anjanaa-home-banner.png"
                  alt="Anjanaa Construction"
                />

              </div>

            </div>

          </div>

        </div>


        {/* HERO BOTTOM */}

        <div className="home-hero-info">

          <div className="container">

            <div className="home-hero-info-grid">

              <div className="home-hero-info-item">
                <strong>20+</strong>
                <span>Years Experience</span>
              </div>

              <div className="home-hero-info-item">
                <strong>12+</strong>
                <span>Construction Services</span>
              </div>

              <div className="home-hero-info-item">
                <strong>100%</strong>
                <span>Commitment to Quality</span>
              </div>

              <div className="home-hero-info-item home-hero-info-link">

                <Link to="/about">
                  Discover Our Story
                  <span>↗</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="home-intro-new">

        <div className="container">

          <div className="home-intro-new-grid">

            <div className="home-intro-heading">

              <span className="home-label">
                ANJANAA CONSTRUCTION
              </span>

              <h2>
                Building Infrastructure
                <span> That Lasts.</span>
              </h2>

            </div>


            <div className="home-intro-text">

              <p className="home-intro-lead">
                Anjanaa Construction is engaged in civil and
                infrastructure construction works with practical
                technical experience in building and highway projects.
              </p>

              <p>
                Our work covers bridges, box culverts, VUPs,
                PSC girders, drainage, stone pitching, slope
                protection and other infrastructure works.
              </p>

              <Link
                to="/about"
                className="home-simple-link"
              >
                More About Anjanaa
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="home-services-new">

        <div className="container">

          <div className="home-heading-row">

            <div>

              <span className="home-label">
                OUR SERVICES
              </span>

              <h2>
                What We
                <span> Do.</span>
              </h2>

            </div>

            <p>
              Civil and infrastructure construction services
              for demanding project requirements.
            </p>

          </div>


          <div className="home-services-new-grid">

            {services.map((service, index) => (

              <Link
                to="/services"
                className="home-service-new-card"
                key={service}
              >

                <span className="home-service-new-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="home-service-new-title">
                  <h3>{service}</h3>
                  <span>→</span>
                </div>

              </Link>

            ))}

          </div>


          <div className="home-view-services">

            <Link
              to="/services"
              className="home-outline-btn"
            >
              View All Services
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= WHY US ================= */}

      <section className="home-why-new">

        <div className="container">

          <div className="home-heading-row">

            <div>

              <span className="home-label">
                WHY ANJANAA
              </span>

              <h2>
                Experience Behind
                <span> Every Project.</span>
              </h2>

            </div>

            <p>
              Our approach combines technical experience,
              practical site management, quality and safety.
            </p>

          </div>


          <div className="home-why-new-grid">

            {reasons.map((reason) => (

              <div
                className="home-why-new-card"
                key={reason.number}
              >

                <span className="home-why-new-number">
                  {reason.number}
                </span>

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECT BANNER ================= */}

      <section className="home-project-new">

        <div className="home-project-bg"></div>
        <div className="home-project-overlay"></div>

        <div className="container">

          <div className="home-project-content">

            <span className="home-label home-label-light">
              OUR PROJECTS
            </span>

            <h2>
              From Highways
              <br />
              To Major Infrastructure.
            </h2>

            <p>
              Explore our civil and infrastructure construction
              projects and completed works.
            </p>

            <Link
              to="/projects"
              className="home-btn-primary"
            >
              Explore Projects
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="home-contact-new">

        <div className="container">

          <div className="home-contact-new-inner">

            <div>

              <span className="home-label">
                START YOUR PROJECT
              </span>

              <h2>
                Let's Build Something
                <span> Strong.</span>
              </h2>

              <p>
                Have a civil or infrastructure construction
                requirement? Let's discuss your project.
              </p>

            </div>

            <Link
              to="/contact"
              className="home-contact-btn"
            >
              Contact Us
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home