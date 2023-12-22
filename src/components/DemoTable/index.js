import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const DemoTable = () => {
  const [sections, setSections] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('current')
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    // Dummy data for the static demo
    const dummySections = Array.from({ length: 124 }, (_, index) => {
      let current, required

      // Generate random numbers for current and required until they are different
      do {
        current = Math.floor(Math.random() * 99) + 1 // Random number between 1 and 99
        required = Math.floor(Math.random() * 99) + 1 // Random number between 1 and 99
      } while (current === required)

      let roll
      do {
        roll = Math.floor(Math.random() * (21053500 - 21050001 + 1)) + 21050001
      } while (roll === 21051589 || roll === 21051595)

      return {
        id: `user-${index + 1}`,
        current: `${current}`,
        required: `${required}`,
        roll: `${roll}`,
      }
    })

    setSections(dummySections)
    setTotalCount(dummySections.length)
  }, [])

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
        <td>{`CSE - ${section.current}`}</td>
        <td>{`CSE - ${section.required}`}</td>
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
            2<sup>nd</sup> Year Students
          </div>
        </div>
        <div className="filter-zone">
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
        </div>
        <div className="show-count">
          Total entries: {totalCount}
        </div>
        <div className="disclaimer">
          <i><u>
            UI Demo not representative of actual functionality. <br />
            This table contains randomly generated data. <br/>
            Log in to participate.</u>
          </i>
        </div>
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
        <Link to="/account" className="back-button">
          exit demo
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </Link>
      </div>
    </div>
  )
}

export default DemoTable
