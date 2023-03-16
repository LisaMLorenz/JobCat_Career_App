import React, { useState } from 'react';
import JobApplicationForm from '../components/forms/JobApplicationForm';
import JobApplicationCard from '../components/JobApplicationCard';


function JobApplicationHistory() {
  const [applications, setApplications] = useState([]);

  const addApplication = (jobTitle, company, dateApplied) => {
    const newApplication = { jobTitle, company, dateApplied };
    setApplications([...applications, newApplication]);
  };

  return (
    <div>
      <h1>Job Application History</h1>
      <JobApplicationForm addApplication={addApplication} />
      <div className="card-container">
        {applications.map((application, index) => (
          <JobApplicationCard
            key={index}
            jobTitle={application.jobTitle}
            company={application.company}
            dateApplied={application.dateApplied}
          />
        ))}
      </div>
    </div>
  );
}

export default JobApplicationHistory;
