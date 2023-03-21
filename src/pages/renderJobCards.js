import './handleSearch';

const renderJobCards = (data) => {

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
    
    // console.log("Card created");

    return jobCards;
  };
  
  export default renderJobCards;
  