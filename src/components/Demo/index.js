import React, { useState } from 'react'
import './index.scss'
import Logo from '../Dashboard/Logo'
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  faArrowLeft,
  faArrowRight,
  faTrashCan,
  faUserPen,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Dash = () => {
  const [submitted, setSubmitted] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    toast.success('Details Submitted')
  }

  const handleEdit = () => {
    setIsEditing(true)
    setTimeout(() => {
      setIsEditing(false)
    }, 200)
    toast.success('Edit successful')
  }

  const handleDelete = () => {
    setSubmitted(false)
    toast.success('Section deleted successfully')
  }

  return (
    <>
      <div className={`container dash ${isEditing ? 'editing' : ''}`}>
        <div className="form-zone">
          <form className="input-form" onSubmit={handleSubmit}>
            <Link to="/account" className="back-button">
              <FontAwesomeIcon icon={faArrowLeft} /> exit demo
            </Link>

            <h1>Get Noticed.</h1>
            <h2>
              Register yourself{' '}
              <strong>
                <i>now!</i>
              </strong>
            </h2>
            {/* NAME */}
            <p>
              <input
                type="text"
                id="name"
                placeholder={submitted ? 'EXISTING NAME' : 'NAME'}
              />
            </p>
            {/* ROLL */}
            <p>
              <input
                type="number"
                id="rollNumber"
                placeholder={submitted ? 'EXISTING ROLL' : 'ROLL NUMBER'}
              />
            </p>
            {/* YEAR */}
            <div className="radio-button">
              {submitted ? (
                <input
                  type="radio"
                  name="year"
                  id="2ndYear"
                  value="2ND YEAR"
                  checked
                />
              ) : (
                <input type="radio" name="year" id="2ndYear" value="2ND YEAR" />
              )}

              <label htmlFor="2ndYear">YEAR 2</label>
              <input type="radio" name="year" id="3rdYear" value="3RD YEAR" />
              <label htmlFor="3rdYear">YEAR 3</label>
            </div>
            {/* SECTION PAIR */}
            <div className="input-pair">
              {/* CURRENT */}
              <label htmlFor="currentSection">CSE ~</label>
              <input
                type="number"
                className="curr-in"
                id="currentSection"
                placeholder={submitted ? 'XX' : 'CURRENT'}
                min="1"
                max="99"
              />

              {/**/}
              <label className="req-label" htmlFor="Section">
                CSE ~
              </label>
              <input
                type="number"
                id="Section"
                placeholder={submitted ? 'YY' : 'REQUIRED'}
                min="1"
                max="99"
              />
            </div>
            {submitted ? (
              <div className="existing-pair">
                <button
                  className="edit-button"
                  type="button"
                  onClick={handleEdit}
                >
                  <FontAwesomeIcon icon={faUserPen} className="icon" />
                  UPDATE
                </button>

                <button
                  className="delete-button"
                  type="button"
                  onClick={handleDelete}
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

            <Link to="/account">
              <button className="signout-button">SIGN OUT (Exit Demo)</button>
            </Link>
            <div className="disclaimer">
              <i>
                UI Demo not representative of actual functionality. <br />
                Log in to participate.
              </i>
            </div>
            <Link to="/demo-table" className="next-button">
              Continue Demo <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </form>
        </div>
        <Logo />
      </div>
      <ToastContainer />
    </>
  )
}

export default Dash
