import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite'
import './index.scss'
import { Link } from 'react-router-dom'
import GoogleLogo from '../../assets/images/Google.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const Third = () => {

  const [sections, setSections] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('current')
  const [userFlag, setUserFlag] = useState(3)
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser
        const totalCountSnapshot = await getDocs(collection(db, 'sections'));
        const totalEntriesCount = totalCountSnapshot.size;
        setTotalCount(totalEntriesCount);
        if (user) {
          // User is logged in
          const sectionsCollection = collection(db, 'sections')
          const sectionsSnapshot = await getDocs(sectionsCollection)
          const userRoll = user.email.split('@')[0]

          const sectionsData = sectionsSnapshot.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }))
            .filter((section) => section.year === '3RD YEAR')

          const hasUserRoll = sectionsData.some(
            (section) => section.roll === userRoll
          )

          if (hasUserRoll || user.email === 'its.rudraneel@gmail.com') {
            setUserFlag(1) // no issues, display table
            setSections(sectionsData)
          } else {
            setUserFlag(2) // ask to enroll
            // UserRoll not found, set default sections or handle accordingly
            const defaultSections = Array.from({ length: 20 }, (_, index) => ({
              id: `default-${index + 1}`,
              current: '-',
              required: '-',
              roll: 'email',
            }))
            setSections(defaultSections)
          }
        } else {
          setUserFlag(3) // ask to Log in
          const defaultSections = Array.from({ length: 20 }, (_, index) => ({
            id: `default-${index + 1}`,
            current: '-',
            required: '-',
            roll: 'email',
          }))
          setSections(defaultSections)
        }
      } catch (error) {
        // Handle Firebase error
        console.error('Firebase error:', error)
        // Set user to null
        auth.currentUser = null
        setUserFlag(3) // ask to Log in
        const defaultSections = Array.from({ length: 20 }, (_, index) => ({
          id: `default-${index + 1}`,
          current: '-',
          required: '-',
          roll: 'email',
        }))
        setSections(defaultSections)
      }
    }

    // Subscribe to authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      fetchData()
    })

    // Clean up the subscription on component unmount
    return () => unsubscribe()
  }, []) // Empty dependency array ensures the effect runs only on mount and unmount

  const handleFilterTypeChange = (type) => {
    setFilterType(type)
  }

  const filteredSections = sections.filter((section) => {
    return section[filterType]
      .toLowerCase()
      .startsWith(searchTerm.toLowerCase())
  })

  const renderTableRows = () => {
    return filteredSections.map((section, index) => (
      <tr key={section.id}>
        <td>{index + 1}.</td>
        <td>{auth.currentUser ? `CSE - ${section.current}` : '-'}</td>
        <td>{auth.currentUser ? `CSE - ${section.required}` : '-'}</td>
        <td>
          <a
            href={`mailto:${section.roll}@kiit.ac.in`}
          >{`${section.roll}@kiit.ac.in`}</a>
        </td>
      </tr>
    ))
  }

  return (
    <div className="container second">
      <div className="table-zone">
        <div className="text-zone">
          <div className="table-header">
            3<sup>rd</sup> Year Students
          </div>
        </div>
        <div className="filter-zone">
          {userFlag === 1 ? (
            <div className="drop-pair">
              <div className="drop-menu">
                <select
                  value={filterType}
                  onChange={(e) => handleFilterTypeChange(e.target.value)}
                >
                  <option value="current">Offers</option>
                  <option value="required">Requests</option>
                </select>
              </div>
              <input
                type="numeric"
                placeholder="Search a number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          ) : userFlag === 2 ? (
            <Link to="/account" className="prelog-container">
              <FontAwesomeIcon icon={faPencil} className="google-logo" />
              <span>Enroll & Participate</span>
            </Link>
          ) : //<button>Enroll & Participate</button>
          userFlag === 3 ? (
            <Link to="/account" className="prelog-container">
              <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
              <span>Sign in & Participate</span>
            </Link>
          ) : (
            console.log('exception')
          )}
        </div>
        <div className="show-count">Active Users: {totalCount}</div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="serial">Serial No.</th>
                <th>Offer</th>
                <th>Request</th>
                <th className="email-head">Email</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Third