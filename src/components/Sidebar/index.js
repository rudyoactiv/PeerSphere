import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  fa2,
  fa3,
  faGaugeHigh,
  faHome,
  faPeopleRoof,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <FontAwesomeIcon icon={faPeopleRoof} color="#4d4d4e" />
        </Link>
      </div>

      <div className="nav">
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="second-link"
          to="/second-year"
        >
          <FontAwesomeIcon
            icon={faGaugeHigh}
            color="#4d4d4e"
            flip="horizontal"
          />
          <sup>
            <FontAwesomeIcon icon={fa2} color="#4d4d4e" />
          </sup>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="third-link"
          to="/third-year"
        >
          <FontAwesomeIcon icon={faGaugeHigh} color="#4d4d4e" />
          <sup>
            <FontAwesomeIcon icon={fa3} color="#4d4d4e" />
          </sup>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="tools-link"
          to="/account"
        >
          <div className="separator" />
          <FontAwesomeIcon id="gear-icon" icon={faUserGear} color="#4d4d4e" />
        </NavLink>
      </div>

      <div className="social">
        <a
          href="https://www.linkedin.com/in/its-rudraneel/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>

        <a
          href="https://github.com/rudyoactiv"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </div>
    </div>
  )
}

export default Sidebar
