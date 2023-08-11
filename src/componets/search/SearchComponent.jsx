import React, { useState } from 'react';
import { teachersData, coursesData } from '../../dummydata';
import { Link } from 'react-router-dom';
import './search.css';

const SearchComponent = () => {


  const [selectedCourse, setSelectedCourse] = useState(null);


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSearch = () => {
    const results = [...teachersData, ...coursesData].filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
    setSelectedCourse(null);
    if (searchResults.length === 0) {
      setShowNoResults(true);
    } else {
      setShowNoResults(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const renderResults = () => {
    if (searchResults.length > 0 && searchTerm !== '') {
      return (
        <ul>
          {searchResults.map((item) => (
            <li key={item.id} onClick={() => handleCourseClick(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      );
    } else if (searchTerm !== '' && showNoResults) {
      return <div>لا يوجد نتائج بحث</div>;
    }
    return null;
  };

  return (
    <div>
      <input
        className='search-input'
        type='text'
        placeholder='Search for anything'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      {renderResults()}

      {selectedCourse && (
        <div>
          <small><h2>{selectedCourse.name}</h2></small>
          
          <Link to={`/CourseDetailsPage/${selectedCourse.id}`}>Go to Course Details</Link>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
