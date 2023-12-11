import { Link } from 'react-router-dom'
import './index.scss'
import HomeBg from '../../assets/images/home-bg.jpg'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>Looking to swap your section?</h1>
          <h2>
            Don't worry,
            <br />
            You are at the right place.
            <br />
            Wondering dow to get started?
          </h2>
          <h3>
            Just login with your college ID,
            <br />
            fill in your details, and get listed now!
          </h3>
          <div className="button-container">
            <Link to="/account" className="flat-button account">
              USER LOGIN
            </Link>
            <div className='year-buttons'>
              <Link to="/second-year" className="flat-button second">
                2<sup>nd</sup> YEAR
              </Link>
              <Link to="/third-year" className="flat-button third">
                3<sup>rd</sup> YEAR
              </Link>
            </div>
          </div>
        </div>
        <img className="bg-container" src={HomeBg} alt="homeBg" />
      </div>
    </>
  )
}

export default Home