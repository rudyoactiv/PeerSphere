import './index.scss'
import Logo from './Logo'
import { useEffect, useRef, useState } from 'react'
import { auth, db } from '../../firebase'
import { addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore/lite'
import { collection } from 'firebase/firestore/lite'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons'

const Dash = () => {
  const form = useRef()
  const currentUser = auth.currentUser
  const [sectionsData, setSectionsData] = useState([])
  const userRoll = currentUser?.email.split('@')[0]

  useEffect(() => {
    const fetchSectionsData = async () => {
      try {
        const sectionsCollection = collection(db, 'sections')
        const sectionsSnapshot = await getDocs(sectionsCollection)
        const data = sectionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setSectionsData(data)
      } catch (error) {
        console.log('Firebase Error:', error)
      }
    }

    fetchSectionsData()
  }, [])

  const isUserRollPresent = () => {
    //console.log(sectionsData.some((section) => section.roll === userRoll))
    return sectionsData.some((section) => section.roll === userRoll)
  }

  const submitSection = (e) => {
    e.preventDefault()

    const name = form.current[0]?.value
    const roll = form.current[1]?.value
    const year = form.current.elements.year.value
    const current = form.current[4]?.value
    const required = form.current[5]?.value

    console.log(name, roll, year, current, required)

    // Check if the logged-in user's email starts with the entered 'roll' value
    if (
      (currentUser && currentUser.email.startsWith(`${roll}@kiit.ac.in`)) ||
      currentUser.email === 'its.rudraneel@gmail.com'
    ) {
      console.log(name, roll, year, current, required)
      saveSection({
        name,
        roll,
        year,
        current,
        required,
      })
    } else {
      toast.error('Roll number must match email')
    }
  }

  const saveSection = async (section) => {
    console.log(section)
    try {
      await addDoc(collection(db, 'sections'), section)
      window.location.reload(false)
    } catch (error) {
      alert('Failed to submit')
    }
  }

  const deleteSection = async () => {
    try {
      const sectionToDelete = sectionsData.find(
        (section) => section.roll === userRoll
      )
      if (sectionToDelete) {
        const sectionRef = doc(db, 'sections', sectionToDelete.id)
        await deleteDoc(sectionRef)
        setSectionsData((prevSections) =>
          prevSections.filter((section) => section.id !== sectionToDelete.id)
        )
        toast.success('Section deleted successfully')
      } else {
        toast.error('Section not found for deletion')
      }
    } catch (error) {
      console.error('Failed to delete section:', error)
      toast.error('Failed to delete section')
    }
  }

  const editSection = async (e) => {
    e.preventDefault()

    const rollInput = form.current[1]?.value

    if (
      (currentUser &&
        currentUser.email.startsWith(`${rollInput}@kiit.ac.in`)) ||
      currentUser.email === 'its.rudraneel@gmail.com'
    ) {
      if (form.current.checkValidity()) {
        await deleteSection()

        submitSection(e)
      } else {
        toast.error('Form is not valid. Please fill in all required fields.')
      }
    } else {
      toast.error('Roll number must match email')
    }
  }

  return (
    <>
      <div className="container dash">
        <div className="form-zone">
          <form ref={form} onSubmit={submitSection} className="input-form">
            <h1>Get Noticed.</h1>
            <h2>
              Register yourself{' '}
              <strong>
                <i>now!</i>
              </strong>
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
            {isUserRollPresent() ? (
              <div className="existing-pair">
                <button
                  className="edit-button"
                  type="button"
                  onClick={(e) => editSection(e)}
                >
                  <FontAwesomeIcon icon={faUserPen} className="icon" />
                  UPDATE
                </button>

                <button
                  className="delete-button"
                  type="button"
                  onClick={deleteSection}
                >
                  <FontAwesomeIcon icon={faTrashCan} className="icon" />
                  DELETE
                </button>
              </div>
            ) : (
              <button className="submit-button" type="submit">
                SUBMIT
              </button>
            )}
            <button onClick={() => auth.signOut()} className="signout-button">
              SIGN OUT
            </button>
          </form>
        </div>
        <Logo />
      </div>
      <ToastContainer />
    </>
  )
}

export default Dash
