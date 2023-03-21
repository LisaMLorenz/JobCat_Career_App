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

  // console.log('this', jobs);

  return (
    <div className='job-search-box'>
      <h1>Job Search</h1>
      <h4>Just use the search field below and retrieve the top job ads round town. Keep up the good work!</h4>
      <input id="search-input-field" type="text" placeholder='Enter Job Title & Place' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearchClick}>Search</button>
      {jobs && jobs.length > 0 ? (
        <div className='jobs-cards-container'>
          {renderJobCards(jobs)}
        </div>
      ) : (
        <p> Sorry, we didn't find any jobs. Maybe try a different location?</p>
      )}
    </div> 
   );
};

export default JobSearch;
