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
            <div className="radio-button">
              <input type="radio" name="year" id="2ndYear" value="2ND YEAR" required/>
              <label htmlFor="2ndYear">2ND YEAR</label>
              <input type="radio" name="year" id="3rdYear" value="3RD YEAR" required/>
              <label htmlFor="3rdYear">3RD YEAR</label>
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
