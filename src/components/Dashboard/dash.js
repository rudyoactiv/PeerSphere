import './index.scss';
import Logo from './Logo';
import { useRef } from 'react';
import { auth, db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc } from 'firebase/firestore/lite';
import { collection } from 'firebase/firestore/lite';

const Home = () => {

  const form = useRef();

  const submitSection = (e) => {
    e.preventDefault();

    const name = form.current[0]?.value;
    const roll = form.current[1]?.value;
    const year = form.current.elements.year.value;
    const current = form.current[4]?.value;
    const required = form.current[5]?.value;

    console.log(name, roll, year, current, required);
    
    saveSection({
      name,
      roll,
      year,
      current,
      required
    });
  }

  const saveSection = async (section) => {
    console.log(section);
    try {
      await addDoc(collection(db, 'sections'), section)
      window.location.reload(false);
    } catch(error) {
      alert('Failed to submit');
    }
  }

  return (
    <>
      <div className="container dash">
        <div className="form-zone">
          <form ref={form} onSubmit={submitSection} className="input-form">
            <h1>Get Noticed.</h1>
            <h2>
              Register yourself <strong><i>now!</i></strong>
            </h2>
            {/*NAME*/}
            <p>
              <input type="text" id="name" placeholder="NAME" required />
            </p>
            {/*ROLL*/}
            <p>
              <input
                type="number"
                id="rollNumber"
                placeholder="ROLL NUMBER"
                required
              />
            </p>
            {/*YEAR*/}
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
            {/*SECTION PAIR*/}
              <div className="input-pair">
                {/*CURRENT*/}
                <label htmlFor="currentSection">CSE ~</label>
                <input
                  type="number"
                  className="curr-in"
                  id="currentSection"
                  placeholder="CURRENT"
                  min="1"
                  max="99"
                  required
                />

                {/*REQUIRED*/}    
                <label className="req-label" htmlFor="requiredSection">
                  CSE ~
                </label>
                <input
                  type="number"
                  id="requiredSection"
                  placeholder="REQUIRED"
                  min="1"
                  max="99"
                  required
                />
              </div>
            <button className="submit-button" type="submit">
              SUBMIT
            </button>
            <button onClick={() => auth.signOut()} className="signout-button">
              SIGN OUT
            </button>
          </form>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home
