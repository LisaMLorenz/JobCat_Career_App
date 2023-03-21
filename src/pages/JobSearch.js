import React, { useState } from 'react';
import '../components/styles/general.css'
import handleSearch from './handleSearch';
import renderJobCards from './renderJobCards';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSearchClick = () => {
    handleSearch(searchTerm, setJobs);
  };

  return (
    <div className='job-search-box'>
      <h1>Job Search</h1>
      <input id="search-input-field" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearchClick}>Search</button>
      {jobs && jobs.length > 0 ? (
        <div className='jobs-cards-container'>
          {renderJobCards(jobs)}
        </div>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default JobSearch;
