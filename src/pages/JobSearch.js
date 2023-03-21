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
          setJobs(data.results);
          console.log("Jobs:", jobs);
          console.log(data);
          console.log('Jobs:', data.results);

        })
        .catch(err => console.log(err));
    }
  };

  function renderJobCards (data) {
  
    const jobCards = [];
    for (let i = 0; i < 10 && i < data.length; i++) {
      const job = data[i];
      jobCards.push(
        <div className='job-card'>
          <h2>{job.job_title}</h2>
          <p>Employer: {job.employer_name}</p>
          <p>Type: {job.job_employment_type}</p>
          <p>Location: {job.job_city}</p>
          <p>Min. Salary: {job.job_min_salary}</p>
          <a href={job.job_apply_link}>Apply Now</a>
        </div>
      );
    }
    
    console.log("Card created");
    return jobCards;
  }

  return (
    <div className='job-search-box'>
      <h1>Job Search</h1>
      <input id="search-input-field" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
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




  // let employerName = data.employer_name;
  //         let jobLink = data.job_apply_link;
  //         let jobCity = data.job_city;
  //         let jobTitle = data.job_title;
  //         let minSal = data.job_min_salary;
  //         let jobType = data.job_employment_type;