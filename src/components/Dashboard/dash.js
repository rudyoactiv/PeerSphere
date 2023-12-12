import './index.scss'
import Logo from './Logo'

const Home = () => {
  return (
    <>
      <div className="container dash">
        <div className="form-zone">
          <h1>Hello</h1>
          <form className="input-form">
  <p>
    <input type="text" id="name" placeholder="Name" required />
  </p>
  <p>
    <input
      type="number"
      id="rollNumber"
      placeholder="Roll number"
      required
    />
  </p>
  <div className="radio-buttons">
    <label>
      <input type="radio" name="yearOption" value="1st" required />
      Year 1
    </label>
    <label>
      <input type="radio" name="yearOption" value="2nd" required />
      Year 2
    </label>
  </div>
  <p>
    <input
      type="number"
      id="currentSection"
      placeholder="Current Section"
      min="1"
      max="99"
      required
    />
  </p>
  <p>
    <input
      type="number"
      id="requiredSection"
      placeholder="Required Section"
      min="1"
      max="99"
      required
    />
  </p>
  <button className="submit-button" type="submit">
    Submit
  </button>
</form>

        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home