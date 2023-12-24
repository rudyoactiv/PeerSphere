import { Link } from 'react-router-dom'
import './index.scss'
import HomeBg from '../../assets/images/home-bg.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>Psst, looking for a change?</h1>
          <h2>
            Getting into the perfect class can be hard,
            <br />
            But not finding the right peers to swap with!
          </h2>
          <h3>
            Just login with your college ID to get started!
          </h3>
          <div className="button-container">
            <Link to="/account" className="flat-button account">
              LOG IN
            </Link>
            <div className="year-buttons">
              <Link to="/second-year" className="flat-button second">
                2<sup>nd</sup> YEAR
              </Link>
              <Link to="/third-year" className="flat-button third">
                3<sup>rd</sup> YEAR
              </Link>
            </div>
            <Link to="/demo" className="flat-button demo">
              Site Demo
              <FontAwesomeIcon icon={faArrowRight} className="eyecon" />
            </Link>
          </div>
        </div>
        <img className="bg-container" src={HomeBg} alt="homeBg" />
      </div>
    </>
  )
}

export default Home
