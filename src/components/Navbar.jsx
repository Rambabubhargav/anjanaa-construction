import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="main-navbar">

      <div className="container navbar-container">

        {/* LOGO */}

        <Link to="/" className="navbar-brand">

          <img
            src="/projects/anjanaa-home-banner.png"
            alt="Anjanaa Construction"
          />

          <div className="navbar-brand-text">
            <strong>ANJANAA</strong>
            <span>CONSTRUCTION</span>
          </div>

        </Link>


        {/* DESKTOP MENU */}

        <div className="navbar-menu">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            Projects
          </NavLink>

         

          <Link
            to="/contact"
            className="navbar-contact-button"
          >
            Contact Us
            <span>→</span>
          </Link>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className="collapse navbar-mobile-menu"
        id="mainNavbar"
      >

        <div className="container">

          <NavLink
            to="/"
            className="mobile-navbar-link"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="mobile-navbar-link"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            className="mobile-navbar-link"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            className="mobile-navbar-link"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            Projects
          </NavLink>

          
          <NavLink
            to="/contact"
            className="mobile-navbar-contact"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            Contact Us
            <span>→</span>
          </NavLink>

        </div>

      </div>

    </nav>
  )
}

export default Navbar