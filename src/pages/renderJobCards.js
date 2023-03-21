import './handleSearch';

const renderJobCards = (data) => {

    const jobCards = [];
    for (let i = 0; i < 10 && i < data.length; i++) {
      const job = data[i];
      jobCards.push(
        <div className='job-card'>
          <h2>{job.job_title}</h2>
          <h4>{job.job_employment_type}</h4>
          <h5>Employer: {job.employer_name}</h5>
          <p>Salary: {job.job_salary_currency} {job.job_min_salary}</p>
          <p>Location: {job.job_city}</p>
          <a href={job.job_apply_link}>Apply Now</a>
        </div>
      );
    }
    
    // console.log("Card created");

    return jobCards;
  };
  
  export default renderJobCards;
  