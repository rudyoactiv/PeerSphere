import './index.scss'
import Logo from './Logo'

const Home = () => {
  return (
    <>
      <div className="container dash">
        <div className="form-zone">
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
            <p>
            <div class="selectdiv ">
              <select className='year' id="year" required>
                <option value="" selected disabled hidden>
                  Choose Year
                </option>
                <option value="2nd">2nd year</option>
                <option value="3rd">3rd year</option>
              </select>
              </div>
            </p>
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
            <button className='submit-button' type="submit">Submit</button>
          </form>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home