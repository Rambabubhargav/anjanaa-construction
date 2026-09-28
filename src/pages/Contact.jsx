import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `
Hello Anjanaa Construction,

I would like to make an enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Company: ${formData.company}
Project Type: ${formData.subject}

Project Details:
${formData.message}
    `

    const whatsappNumber = '918886660948'

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <main className="contact-page">

      {/* =====================================
          CONTACT HERO
      ====================================== */}

      <section className="contact-hero">

        <div className="contact-hero-background"></div>

        <div className="contact-hero-overlay"></div>

        <div className="container">

          <div className="contact-hero-content">

            <span className="contact-hero-label">
              GET IN TOUCH
            </span>

            <h1>
              Let's Build
              <br />
              <span>Something Strong.</span>
            </h1>

            <p>
              Have a civil or infrastructure construction
              requirement? Talk to our team about your project.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          CONTACT MAIN
      ====================================== */}

      <section className="contact-main">

        <div className="container">

          <div className="contact-grid">

            {/* =====================================
                LEFT - CONTACT INFORMATION
            ====================================== */}

            <div className="contact-info">

              <span className="contact-section-label">
                CONTACT ANJANAA CONSTRUCTION
              </span>

              <h2>
                We're Ready
                <br />
                <span>To Hear From You.</span>
              </h2>

              <p className="contact-description">
                Whether you are planning a highway project,
                bridge, culvert, drainage work or any other
                civil infrastructure requirement, our team is
                ready to discuss your project.
              </p>


              {/* PHONE */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  ☎
                </div>

                <div>

                  <span>PHONE</span>

                  <a href="tel:+918886660948">
                    +91 88866 60948
                  </a>

                  <a href="tel:+919160286603">
                    +91 91602 86603
                  </a>

                </div>

              </div>


              {/* EMAIL */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  ✉
                </div>

                <div>

                  <span>EMAIL</span>

                  <a href="mailto:palavalasa.r@gmail.com">
                    palavalasa.r@gmail.com
                  </a>

                </div>

              </div>


              {/* ADDRESS */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  ●
                </div>

                <div>

                  <span>ADDRESS</span>

                  <p>
                    Balijipeta
                    <br />
                    Parvathipuram Manyam District
                    <br />
                    Andhra Pradesh - 535557
                  </p>

                </div>

              </div>


              {/* WORKING HOURS */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  ◷
                </div>

                <div>

                  <span>WORKING HOURS</span>

                  <p>
                    Monday - Sunday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>


            {/* =====================================
                RIGHT - CONTACT FORM
            ====================================== */}

            <div className="contact-form-wrapper">

              <div className="contact-form-header">

                <span>
                  SEND AN ENQUIRY
                </span>

                <h3>
                  Tell Us About Your Project
                </h3>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* NAME + PHONE */}

                <div className="contact-form-row">

                  <div className="contact-form-group">

                    <label htmlFor="name">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="contact-form-group">

                    <label htmlFor="phone">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* EMAIL + COMPANY */}

                <div className="contact-form-row">

                  <div className="contact-form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </div>


                  <div className="contact-form-group">

                    <label htmlFor="company">
                      Company
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />

                  </div>

                </div>


                {/* PROJECT TYPE */}

                <div className="contact-form-group">

                  <label htmlFor="subject">
                    Project Type
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select project type
                    </option>

                    <option value="Highway Development">
                      Highway Development
                    </option>

                    <option value="Bridge Construction">
                      Bridge Construction
                    </option>

                    <option value="Box Culvert">
                      Box Culvert
                    </option>

                    <option value="Vehicle Under Passes">
                      Vehicle Under Passes
                    </option>

                    <option value="PSC Girder Works">
                      PSC Girder Works
                    </option>

                    <option value="Drain Works">
                      RCC Drain Works
                    </option>

                    <option value="Stone Pitching">
                      Stone Pitching
                    </option>

                    <option value="Toe Wall Construction">
                      Toe Wall Construction
                    </option>

                    <option value="Boundary Walls">
                      Boundary Walls
                    </option>

                    <option value="Other Construction Work">
                      Other Construction Work
                    </option>

                  </select>

                </div>


                {/* MESSAGE */}

                <div className="contact-form-group">

                  <label htmlFor="message">
                    Project Details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="contact-submit-button"
                >
                  Send Enquiry
                  <span>→</span>
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          BOTTOM CTA
      ====================================== */}

      <section className="contact-bottom-cta">

        <div className="container">

          <div className="contact-bottom-inner">

            <div>

              <span className="contact-section-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's Discuss Your
                <span> Construction Requirement.</span>
              </h2>

            </div>


            <a
              href="tel:+918886660948"
              className="contact-call-button"
            >
              Call Us
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Contact