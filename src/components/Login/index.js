import { signInWithGoogle } from '../../firebase'
import './index.scss'
import { useEffect, useState } from 'react'
import GoogleLogo from '../../assets/images/Google.png'
import loginBG from '../../assets/images/login.png'

const Login = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

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
          Log in with your college assigned email address to find others just like you!
          <p>
            <h3>
              By signing in, you agree to share your email address with the
              application database.
              <br />
              Listings limited to one per person only.
              <br />
            </h3>
            <button className="button" onClick={handleSignInWithGoogle}>
              <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
              Sign in with<br/>College Credentials
            </button>
          </p>
        </div>
      </div>
      <img className="bg-container" src={loginBG} alt="loginBG" />
    </div>
  )
}

export default Login
