import React, { useState } from 'react';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSearch = () => {
    if (searchTerm) {
      fetch(`https://jsearch.p.rapidapi.com/search?query=${searchTerm}&page=1&num_pages=1`, {
        "method": "GET",
        "headers": {
          "X-RapidAPI-Key": "a8cd16838dmsh9cbc0d4fbef9db9p1d48f6jsndb619db483a9",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setJobs(data.results);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='job-search-box'>
      <h1>Job Search</h1>
      <input id="search-input-field" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {jobs && jobs.length > 0 ? (
        <div>
          {jobs.map(job => (
            <div key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default JobSearch;