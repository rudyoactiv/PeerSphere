import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.scss'
import HomeBg from '../../assets/images/home-bg.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [showPopup, setShowPopup] = useState(true)

  // Check sessionStorage to see if the pop-up has been dismissed in the current session
  useEffect(() => {
    const hasPopupDismissed = sessionStorage.getItem('popupDismissed')
    if (hasPopupDismissed) {
      setShowPopup(false)
    }
  }, [])

  const handlePopupDismiss = () => {
    // Set a flag in sessionStorage to indicate that the pop-up has been dismissed
    sessionStorage.setItem('popupDismissed', 'true')
    setShowPopup(false)
  }

  return (
    <>
      <div className="container home-page">
        {showPopup && (
          <div className="popup">
            <div className="popup-body">
            <strong>Welcome to PeerSphere</strong>!
              <hr />
              <p>Getting a spot in your favourite class can be pretty hard.</p>
              <p>
                <i>PeerSphere</i> is a platform built to connect college students and
                enable a smooth process of swapping classes.
                <br />
                To participate, just login with your college ID.
              </p>
              <p>
                If you wish to just explore the design of my platform, feel free
                to check out the Site Demo!
              </p>
              <hr />
              <button onClick={handlePopupDismiss}>DISMISS</button>
            </div>
          </div>
        )}
        <div className="text-zone">
          <h1>Psst, looking for a change?</h1>
          <h2>
            Getting into the perfect class can be hard,
            <br />
            But not finding the right peers to swap with!
          </h2>
          <h3>Just login with your college ID to get started!</h3>
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
