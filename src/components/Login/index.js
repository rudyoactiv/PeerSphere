import { signInWithGoogle } from '../../firebase'
import './index.scss'
import GoogleLogo from '../../assets/images/Google.png'
import loginBG from '../../assets/images/login.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Login = () => {
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      if (error.code === 'auth/cancelled-popup-request') {
        console.error('Authentication cancelled', error)
        //alert('The authentication process was canceled. Please try again.');
      } else {
        console.error('Authentication error:', error)
      }
    }
  }

  return (
    <div className="login">
      <div className="login-header">
        Sign in
        <div className="login-body">
          Log in with your college assigned email address to find others just
          like you!
          <h3>
            By signing in, you agree to share your email address with the
            application database.
            <br />
            Listings limited to one per person only.
            <br />
          </h3>
          <div className="two-buttons">
            <button className="button" onClick={handleSignInWithGoogle}>
              <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
              Sign in with
              <br />
              College Credentials
            </button>

            <Link to="/demo" className="demo">
              <FontAwesomeIcon icon={faEye} className="eyecon" />
              Site Demo
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-container">
        <img className="login-bg" src={loginBG} alt="loginBG" />
      </div>
    </div>
  )
}

export default Login
