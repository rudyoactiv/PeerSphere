import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import './index.scss';

const Second = () => {
  const [sections, setSections] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: '' });

  useEffect(() => {
    const fetchData = async () => {
      const sectionsCollection = collection(db, 'sections');
      const sectionsSnapshot = await getDocs(sectionsCollection);
      const sectionsData = sectionsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSections(sectionsData);
    };

    fetchData();
  }, []);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedSections = [...sections].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const renderTableRows = () => {
    return sortedSections.map((section) => (
      <tr key={section.id}>
        <td>CSE - {section.current}</td>
        <td>CSE - {section.required}</td>
        <td>
          {' '}
          <a href={`mailto:${section.roll}@kiit.ac.in`}>{`${section.roll}@kiit.ac.in`}</a>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container second">
      <div className="text-zone">
        <h1>
          2<sup>nd</sup> Year Entries
        </h1>
      </div>
      <div className="table-zone">
        <table>
          <thead>
            <tr>
              <th onClick={() => requestSort('current')}>Offering</th>
              <th onClick={() => requestSort('required')}>Asking For</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Second;