import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      number: '01',
      title: 'Highway Development',
      image: '/services/highway-development.jpg',
      description:
        'We undertake highway development works involving road construction, pavement preparation, earthwork and associated infrastructure works. Our approach focuses on planned execution and quality construction practices.',
      points: [
        'Road and pavement development',
        'Earthwork and site preparation',
        'Subgrade and base preparation',
        'Roadside infrastructure works',
      ],
    },

    {
      number: '02',
      title: 'Box Culverts',
      image: '/services/box-culverts.jpg',
      description:
        'Box culverts are important drainage and crossing structures used to safely carry water beneath roads and infrastructure. We undertake construction works involving excavation, reinforcement, formwork and concrete structures.',
      points: [
        'RCC box culvert construction',
        'Foundation and excavation works',
        'Reinforcement and formwork',
        'Concrete and finishing works',
      ],
    },

    {
      number: '03',
      title: 'Minor Bridges',
      image: '/services/minor-bridges.jpg',
      description:
        'We undertake minor bridge construction works as part of road and infrastructure development. The work includes structural construction and associated civil works required for reliable connectivity.',
      points: [
        'Bridge structure construction',
        'Foundation and structural works',
        'RCC construction works',
        'Approach and associated works',
      ],
    },

    {
      number: '04',
      title: 'Vehicle Under Passes',
      image: '/services/vehicle-under-passes.jpg',
      description:
        'Vehicle Under Passes provide grade-separated movement for vehicles while maintaining continuity of the main road. We undertake associated civil construction and structural works for underpass development.',
      points: [
        'Underpass civil construction',
        'Excavation and earthwork',
        'RCC structural works',
        'Approach and drainage works',
      ],
    },

    {
      number: '05',
      title: 'PSC Girder Works',
      image: '/services/psc-girder-works.jpg',
      description:
        'We undertake PSC girder related construction works for bridge and infrastructure projects. The work involves careful execution of structural components and associated construction activities.',
      points: [
        'PSC girder related works',
        'Structural concrete works',
        'Formwork and reinforcement',
        'Bridge-related construction works',
      ],
    },

    {
      number: '06',
      title: 'Stone Pitching',
      image: '/services/stone-pitching.jpg',
      description:
        'Stone pitching is used for protecting slopes, embankments and other exposed surfaces against erosion. We undertake stone pitching works with appropriate preparation and placement practices.',
      points: [
        'Slope protection',
        'Embankment protection',
        'Stone placement works',
        'Erosion protection works',
      ],
    },

    {
      number: '07',
      title: 'Toe Wall Construction',
      image: '/services/toe-wall-construction.jpg',
      description:
        'Toe walls are constructed at the base of slopes and embankments to provide support and help protect against soil movement and erosion. We undertake associated civil and concrete construction works.',
      points: [
        'RCC toe wall construction',
        'Foundation preparation',
        'Reinforcement and formwork',
        'Slope support works',
      ],
    },

    {
      number: '08',
      title: 'Boundary Walls',
      image: '/services/boundary-walls.jpg',
      description:
        'We undertake boundary wall construction for properties, infrastructure facilities and project sites. Our work includes foundation, masonry or concrete construction and finishing activities.',
      points: [
        'Boundary wall construction',
        'Foundation works',
        'Masonry and concrete works',
        'Wall finishing works',
      ],
    },

    {
      number: '09',
      title: 'RCC Drain Works',
      image: '/services/rcc-drain-works.jpg',
      description:
        'RCC drainage systems help manage surface water and protect roads and surrounding infrastructure. We undertake construction of roadside and project drainage structures.',
      points: [
        'RCC drain construction',
        'Roadside drainage works',
        'Concrete drainage structures',
        'Drainage channel construction',
      ],
    },

    {
      number: '10',
      title: 'Median Drain & Turfing',
      image: '/services/median-drain-turfing.jpg',
      description:
        'Median drainage and turfing works combine water management with proper development of highway medians. We undertake associated civil, drainage and turfing activities.',
      points: [
        'Median drainage works',
        'Drainage channel construction',
        'Median turfing',
        'Site preparation and finishing',
      ],
    },

    {
      number: '11',
      title: 'Side Slope Protection',
      image: '/services/side-slope-protection.jpg',
      description:
        'Side slope protection helps safeguard highway embankments and exposed slopes from erosion and surface deterioration. We undertake various civil protection works according to project requirements.',
      points: [
        'Highway slope protection',
        'Embankment protection',
        'Erosion control works',
        'Surface protection works',
      ],
    },

    {
      number: '12',
      title: 'Guard Stone Works',
      image: '/services/guard-stone-works.jpg',
      description:
        'Guard stone works are used along roads and infrastructure areas to provide visible edge protection and support road safety arrangements. We undertake installation and associated civil works.',
      points: [
        'Guard stone installation',
        'Roadside edge protection',
        'Concrete stone works',
        'Road infrastructure works',
      ],
    },
  ]

  return (
    <main className="services-page">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="services-hero">

        <div className="services-hero-background"></div>

        <div className="services-hero-overlay"></div>

        <div className="container">

          <div className="services-hero-content">

            <span className="services-hero-label">
              WHAT WE DO
            </span>

            <h1>
              Our Construction
              <br />
              <span>Services.</span>
            </h1>

            <p>
              Civil and infrastructure construction services
              delivered with practical technical experience
              and a focus on quality execution.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          INTRO
      ====================================== */}

      <section className="services-intro">

        <div className="container">

          <div className="services-intro-grid">

            <div>

              <span className="services-section-label">
                ANJANAA CONSTRUCTION
              </span>

              <h2>
                Construction
                <br />
                <span>Built With Purpose.</span>
              </h2>

            </div>

            <div>

              <p>
                Anjanaa Construction undertakes civil and
                infrastructure construction works across a
                range of road, bridge, drainage and structural
                requirements.
              </p>

              <p>
                Our services cover highway development,
                culverts, bridges, PSC girder works, drainage,
                slope protection and other associated
                infrastructure works.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          SERVICES
      ====================================== */}

      <section className="services-list">

        <div className="container">

          {services.map((service, index) => (

            <article
              className={`service-detail ${
                index % 2 !== 0 ? 'service-detail-reverse' : ''
              }`}
              key={service.number}
            >

              {/* IMAGE */}

              <div className="service-detail-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

                <div className="service-image-number">
                  {service.number}
                </div>

              </div>


              {/* CONTENT */}

              <div className="service-detail-content">

                <span className="service-detail-number">
                  {service.number}
                </span>

                <span className="services-section-label">
                  ANJANAA CONSTRUCTION
                </span>

                <h2>
                  {service.title}
                </h2>

                <p className="service-detail-description">
                  {service.description}
                </p>


                <ul className="service-points">

                  {service.points.map((point) => (

                    <li key={point}>
                      <span>✓</span>
                      {point}
                    </li>

                  ))}

                </ul>


                <Link
                  to="/contact"
                  className="service-discuss-button"
                >
                  Discuss Your Project
                  <span>→</span>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================
          CTA
      ====================================== */}

      <section className="services-cta">

        <div className="container">

          <div className="services-cta-inner">

            <div>

              <span className="services-section-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's Build Something
                <span> Strong.</span>
              </h2>

              <p>
                Talk to Anjanaa Construction about your
                civil or infrastructure construction requirement.
              </p>

            </div>

            <Link
              to="/contact"
              className="services-cta-button"
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

export default Services