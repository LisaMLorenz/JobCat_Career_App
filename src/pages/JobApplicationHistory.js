import React, { useState, useEffect } from 'react';
import JobApplicationForm from '../components/forms/JobApplicationForm';
import JobApplicationCard from '../components/JobApplicationCard';
import '../components/styles/jobHistoryCard.css';
import '../components/styles/general.css'


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
    <div className="uk-container-expand" id="job-history-container">
      <h1>Job App History</h1>
      <h3>Save your progress and keep track of your hard work. Writing job apps is a skill that can be honed. You can be proud of yourself - keep up the good work. Miow!</h3>
      
      <JobApplicationForm addApplication={addApplication} 
        jobTitleLabelClassName="label-style" 
        jobTitleInputClassName="input-style" 
        companyLabelClassName="label-style" 
        companyInputClassName="input-style"
        dateAppliedLabelClassName="label-style"
        dateAppliedInputClassName="input-style"
      />
      
      <div className="jobhistory-grid">
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