import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  fa2,
  fa3,
  faBars,
  faClose,
  faGaugeHigh,
  faHome,
  faPeopleRoof,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav((prevShowNav) => !prevShowNav)
  }

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <FontAwesomeIcon icon={faPeopleRoof} color="#4d4d4e" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="second-link"
          to="/second-year"
        >
          <FontAwesomeIcon icon={faGaugeHigh} color="#4d4d4e" flip='horizontal'/>
          <sup>
            <FontAwesomeIcon icon={fa2} color="#4d4d4e" />
          </sup>
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="third-link"
          to="/third-year"
        >
          <FontAwesomeIcon icon={faGaugeHigh} color="#4d4d4e" />
            <sup>
            <FontAwesomeIcon icon={fa3} color="#4d4d4e"/>
            </sup>
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="tools-link"
          to="/account"
        >
          <div className="separator" />
          <FontAwesomeIcon id="gear-icon" icon={faUserGear} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className={showNav ? 'visible' : ''}>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/its-rudraneel/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rudyoactiv"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={toggleNav}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className={!showNav ? 'hamburger-icon' : 'hide-it'}
      />
      <FontAwesomeIcon
        onClick={() => setShowNav(false)}
        icon={faClose}
        color="#ffd700"
        size="3x"
        className={showNav ? 'close-icon' : 'hide-it'}
      />
    </div>
  )
}

export default Sidebar
