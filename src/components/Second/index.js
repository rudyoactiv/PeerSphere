import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite'
import './index.scss'
import Login from '../Login'

const Second = () => {
  const [sections, setSections] = useState([])
  const [sortConfig, setSortConfig] = useState({ key: null, direction: '' })
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('current')

  useEffect(() => {
    const fetchData = async () => {
      if (auth.currentUser) {
        const sectionsCollection = collection(db, 'sections')
        const sectionsSnapshot = await getDocs(sectionsCollection)
        const sectionsData = sectionsSnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((section) => section.year === '2ND YEAR')
        setSections(sectionsData)
      } else {
        // If the user is not logged in, set default values for 5 rows
        const defaultSections = Array.from({ length: 20 }, (_, index) => ({
          id: `default-${index + 1}`,
          current: '-',
          required: '-',
          roll: 'email',
        }));
        setSections(defaultSections);
      }
    };

    fetchData();
  }, []);

  const requestSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const handleFilterTypeChange = (type) => {
    setFilterType(type)
  }

  const filteredSections = sections.filter((section) => {
    return section[filterType].toLowerCase().includes(searchTerm.toLowerCase())
  })

  const sortedSections = [...filteredSections].sort((a, b) => {
    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]
    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1
    }
    return 0
  })

  const renderTableRows = () => {
    return sortedSections.map((section, index) => (
      <tr key={section.id}>
        <td>{index + 1}.</td>
        <td>{auth.currentUser ? `CSE - ${section.current}` : `-`}</td>
        <td>{auth.currentUser ? `CSE - ${section.required}` : `-`}</td>
        <td>
          {' '}
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
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="serial">Serial No.</th>
                <th onClick={() => requestSort('current')}>Offer ⬍</th>
                <th onClick={() => requestSort('required')}>Request ⬍</th>
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

export default Second
