import './index.scss'
import Logo from './Logo'

const Home = () => {
  return (
    <>
      <div className="container dash">
        <div className="form-zone">
          <form className="input-form">
            <p>
              <input type="text" id="name" placeholder="NAME" required />
            </p>
            <p>
              <input
                type="number"
                id="rollNumber"
                placeholder="ROLL NUMBER"
                required
              />
            </p>
            <div className="radio-button">
              <input
                type="radio"
                name="year"
                id="2ndYear"
                value="2ND YEAR"
                required
              />
              <label htmlFor="2ndYear">YEAR 2</label>
              <input
                type="radio"
                name="year"
                id="3rdYear"
                value="3RD YEAR"
                required
              />
              <label htmlFor="3rdYear">YEAR 3</label>
            </div>
            <p>
              <input
                type="number"
                id="currentSection"
                placeholder="CURRENT SECTION"
                min="1"
                max="99"
                required
              />
            </p>
            <p>
              <input
                type="number"
                id="requiredSection"
                placeholder="REQUIRED SECTION"
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
