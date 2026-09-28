function Projects() {
  const projects = [
    {
      client: "APCO",
      location: "Ranasthalam, NH-16",
      title: "Side Slope Protection Works",
      amount: "₹0.80 Cr",
      images: [
        "/projects/apco-friction-slab.jpeg",
        "/projects/apco-precast.jpeg",
        "/projects/apco-toe-wall.jpeg",
        "/projects/apco-coir-mat.jpeg",
      ],
      works: [
        "Friction Slabs",
        "Cross Barrier - Cast-in-Situ",
        "Cross Barrier - Precast",
        "Toe Wall",
        "Coir Mat / Side Slope Protection",
      ],
    },

    {
      client: "MEIL",
      location: "Tirupati",
      title: "VUP & Box Culvert",
      amount: "₹0.40 Cr",
      images: [
        "/projects/meil-vup.jpeg",
        "/projects/meil-box-culvert.jpeg",
      ],
      works: [
        "Vehicle Under Pass",
        "Box Culvert",
      ],
    },

    {
      client: "BSCPL",
      location: "Infrastructure Project",
      title: "Boundary Wall & Drain Works",
      amount: "₹1.20 Cr",
      images: [
        "/projects/bscpl-boundary-wall.jpg",
        "/projects/bscpl-drain.jpg",
      ],
      works: [
        "Boundary Wall",
        "RCC Drain",
        "Culvert",
        "Stone Pitching",
        "Plantation",
      ],
      representative: true,
    },

    {
      client: "HG INFRA",
      location: "Vizag - Raipur Road",
      title: "PSC Girder & Minor Bridge Works",
      amount: "₹0.60 Cr",
      images: [
        "/projects/hg-psc-girder.jpeg",
        "/projects/hg-psc-girder-2.jpeg",
      ],
      works: [
        "PSC Girders",
        "Minor Bridge",
        "Pier Caps",
        "Stone Pitching",
      ],
    },

    {
      client: "UMSL",
      location: "Infrastructure Project",
      title: "Minor Bridge Works",
      amount: "₹0.15 Cr",
      images: [
        "/projects/umsl-minor-bridge.jpg",
      ],
      works: [
        "Minor Bridge",
        "PSC Girders",
        "Breast Wall",
        "Stone Pitching",
      ],
      representative: true,
    },

    {
      client: "BVEPL",
      location: "SH-23, Raichur - Sindhanur",
      title: "Highway Infrastructure Works",
      amount: "₹5.50 Cr",
      images: [
        "/projects/bvepl-guard-stones.jpeg",
        "/projects/bvepl-guard-stones-painting.jpeg",
        "/projects/bvepl-median-drain-1.jpeg",
        "/projects/bvepl-median-drain-2.jpeg",
        "/projects/bvepl-median-turfing.jpeg",
      ],
      works: [
        "Guard Stones",
        "Median Drain",
        "Median CC Turfing",
        "Plantation",
        "Painting",
      ],
    },
  ]

  return (
    <main className="projects-page">

      {/* =====================================
          PAGE HEADER
      ====================================== */}

      <section className="projects-page-header">
        <div className="container">

          <div className="projects-header-content">

            <div className="projects-header-line"></div>

            <span className="projects-eyebrow">
              OUR PROJECT PORTFOLIO
            </span>

            <h1>
              Projects That
              <span> Build Our Reputation</span>
            </h1>

            <p>
              Explore selected infrastructure and civil construction
              works executed by Anjanaa Construction across major
              road and highway projects.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================
          PROJECTS SECTION
      ====================================== */}

      <section className="projects-list-section">

        <div className="container">

          {/* INTRODUCTION */}

          <div className="projects-intro">

            <div>

              <span className="projects-section-label">
                SELECTED WORKS
              </span>

              <h2>
                Our Construction Experience
              </h2>

            </div>

            <p>
              From highway infrastructure to bridges, culverts,
              drainage and slope protection, our project portfolio
              reflects practical construction experience and
              technical expertise.
            </p>

          </div>


          {/* =====================================
              ONE PROJECT AT A TIME
          ====================================== */}

          <div className="projects-scroll-list">

            {projects.map((project, index) => (

              <article
                className="project-scroll-card"
                key={project.client}
                id={`project-${index + 1}`}
              >

                {/* PROJECT NUMBER */}

                <div className="project-scroll-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* =====================================
                    PROJECT IMAGES
                ====================================== */}

                <div className="project-scroll-images">

                  {/* MAIN IMAGE */}

                  <div className="project-main-image">

                    <img
                      src={project.images[0]}
                      alt={`${project.client} - ${project.title}`}
                    />

                    <div className="project-image-overlay"></div>

                    <div className="project-client-badge">
                      {project.client}
                    </div>

                  </div>


                  {/* ADDITIONAL PHOTOS */}

                  {project.images.length > 1 && (

                    <div className="project-image-thumbnails">

                      {project.images.slice(1).map(
                        (image, imageIndex) => (

                          <div
                            className="project-thumbnail"
                            key={image}
                          >

                            <img
                              src={image}
                              alt={`${project.client} project ${
                                imageIndex + 2
                              }`}
                            />

                          </div>

                        )
                      )}

                    </div>

                  )}

                </div>


                {/* =====================================
                    PROJECT INFORMATION
                ====================================== */}

                <div className="project-scroll-content">

                  {/* PROJECT NUMBER */}

                  <span className="project-number">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>


                  {/* PROJECT HEADING */}

                  <div className="project-scroll-heading">

                    <div>

                      <span className="project-scroll-client">
                        {project.client}
                      </span>

                      <h2>
                        {project.title}
                      </h2>

                      <p className="project-location">
                        <span>●</span>
                        {project.location}
                      </p>

                    </div>


                    {/* PROJECT VALUE */}

                    <div className="project-scroll-value">
                      {project.amount}
                    </div>

                  </div>


                  {/* REPRESENTATIVE IMAGE */}

                  {project.representative && (

                    <div className="representative-note">
                      Representative construction image
                    </div>

                  )}


                  {/* =====================================
                      SCOPE OF WORK
                  ====================================== */}

                  <div className="project-scope">

                    <div className="project-scope-title">
                      SCOPE OF WORK
                    </div>

                    <div className="project-work-list">

                      {project.works.map(
                        (work, workIndex) => (

                          <div
                            className="project-work-item"
                            key={workIndex}
                          >

                            <span>
                              ✓
                            </span>

                            <p>
                              {work}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                  </div>


                  {/* =====================================
                      NEXT PROJECT
                  ====================================== */}

                  {index < projects.length - 1 && (

                    <div className="project-next-indicator">

                      <span>
                        SCROLL TO NEXT PROJECT
                      </span>

                      <span className="scroll-arrow">
                        ↓
                      </span>

                    </div>

                  )}

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          CALL TO ACTION
      ====================================== */}

      <section className="projects-cta">

        <div className="container">

          <div className="projects-cta-inner">

            <div>

              <span className="projects-section-label">
                START YOUR PROJECT
              </span>

              <h2>
                Let's Build Something Strong.
              </h2>

              <p>
                Have an infrastructure or civil construction
                requirement? Get in touch with Anjanaa Construction.
              </p>

            </div>

            <a
              href="/contact"
              className="project-cta-button"
            >
              Contact Us
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Projects