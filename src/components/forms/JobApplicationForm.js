import React, { useState } from 'react';

function JobApplicationHistoryForm({ addApplication }) {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [dateApplied, setDateApplied] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission

    // Call the addApplication function passed as a prop with the form values
    addApplication(jobTitle, company, dateApplied);

    // Clear the form
    setJobTitle('');
    setCompany('');
    setDateApplied('');
  };

  return (
    <form onSubmit={handleSubmit}>
     <label>
        Job Title:
        <input
          type="text"
          value={jobTitle}
          onChange={(event) => setJobTitle(event.target.value)}
          required
        />
      </label>

      <label>
        Company:
        <input
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          required
        />
      </label>
      <label>
        Date Applied:
        <input
          type="date"
          value={dateApplied}
          onChange={(event) => setDateApplied(event.target.value)}
          required
        />
      </label>

      <button type="submit">Add to history</button>
    </form>
  );
}

export default JobApplicationHistoryForm;