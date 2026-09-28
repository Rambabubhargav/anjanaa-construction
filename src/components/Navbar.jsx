import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="main-navbar">

      <div className="container navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>

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


        {/* MOBILE BUTTON */}
        <button
          type="button"
          className={`navbar-toggler ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* MOBILE MENU */}
      <div className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`}>

        <div className="container">

          <NavLink
            to="/"
            className="mobile-navbar-link"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="mobile-navbar-link"
            onClick={closeMenu}
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            className="mobile-navbar-link"
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            className="mobile-navbar-link"
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          

          <NavLink
            to="/contact"
            className="mobile-navbar-contact"
            onClick={closeMenu}
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