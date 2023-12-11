import './index.scss'
import HomeBg from '../../assets/images/sign up.png'

const Home = () => {
  return (
    <div className="dash">
      <div className="form-zone">
      <form className='input-form'>
          <p>
            <input type="text" id="name" placeholder="Name" required />
          </p>
          <p>
            <input type="number" id="rollNumber" placeholder="Roll number" required />
          </p>
          <p>
            <select name="year" id="year" required>
              <option value="" selected disabled hidden>Choose Year</option>
              <option value="2nd">2nd year</option>
              <option value="3rd">3rd year</option>
            </select>
          </p>
          <p>
            <input type="number" id="currentSection" placeholder="Current Section" min="1" max="99" required />
          </p>
          <p>
            <input type="number" id="requiredSection" placeholder="Required Section" min="1" max="99" required />
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
      <img className="bg-container" src={HomeBg} alt="homeBg" />
    </div>
  )
}

export default Home