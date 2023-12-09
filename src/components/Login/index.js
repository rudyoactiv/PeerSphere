import { signInWithGoogle } from '../../firebase'
import './index.scss'
import { useEffect, useState } from 'react'

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
    <div className="dashboard">
      <div className="contents">
        <h1>
        </h1>
        <button className="button" onClick={handleSignInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login

/*import { signInWithGoogle } from "../../firebase";
import './index.scss'

const Login = () => {
    return (
        <div className="dashboard">
            <button className="button" onClick={signInWithGoogle}>
                Sign In With Google
            </button>
        </div>
    )
}

export default Login;*/