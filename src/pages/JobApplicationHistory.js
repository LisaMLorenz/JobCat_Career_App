import React, { useState, useEffect } from 'react';
import JobApplicationForm from '../components/forms/JobApplicationForm';
import JobApplicationCard from '../components/JobApplicationCard';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

function JobApplicationHistory() {
  const [applications, setApplications] = useState([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedApplications = localStorage.getItem('jobApplications');
    if (savedApplications) {
      setApplications(JSON.parse(savedApplications));
    }
  }, []);

  // Save data to localStorage when the applications state changes
  useEffect(() => {
    localStorage.setItem('jobApplications', JSON.stringify(applications));
  }, [applications]);

  const addApplication = (jobTitle, company, dateApplied, onDelete) => {
    const newApplication = { jobTitle, company, dateApplied, onDelete };
    const updatedApplications = [...applications, newApplication];
    setApplications(updatedApplications);
  };

  const deleteApplication = (index) => {
    const updatedApplications = applications.filter((_, i) => i !== index);
    setApplications(updatedApplications);
  };

  return (
    <div>
      <h1>Job Application History</h1>
      <JobApplicationForm addApplication={addApplication} />
      <div>
        {applications.map((application, index) => (
          <JobApplicationCard
            key={index}
            jobTitle={application.jobTitle}
            company={application.company}
            dateApplied={application.dateApplied}
            onDelete={() => deleteApplication(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default JobApplicationHistory;