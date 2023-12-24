import './index.scss'
import formimg from '../../../assets/images/sign up.webp'
import { useRef } from 'react'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={formimg} alt="S" />
    </div>
  )
}

export default Logo