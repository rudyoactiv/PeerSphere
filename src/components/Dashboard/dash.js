import './index.scss'

const Home = () => {
  return (
    <div className="dash">
      <form>
        {/* Name */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        {/* Roll Number */}
        <label htmlFor="rollNumber">Roll Number:</label>
        <input type="number" id="rollNumber" name="rollNumber" />

        {/* Current College Year */}
        <label htmlFor="collegeYear">Current College Year:</label>
        <select id="collegeYear" name="collegeYear">
          <option value="2nd year">2nd year</option>
          <option value="3rd year">3rd year</option>
        </select>

        {/* Current Section */}
        <label htmlFor="currentSection">Current Section:</label>
        <input
          type="text"
          id="currentSection"
          name="currentSection"
          pattern="CSE-[1-9][0-9]{0,2}"
        />
        <small>Format: CSE-1 to CSE-999</small>

        {/* Required Section */}
        <label htmlFor="requiredSection">Required Section:</label>
        <input
          type="text"
          id="requiredSection"
          name="requiredSection"
          pattern="CSE-[1-9][0-9]{0,2}"
        />
        <small>Format: CSE-1 to CSE-999</small>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Home
