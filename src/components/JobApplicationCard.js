import React from 'react';
import '../components/styles/jobHistoryCard.css';

function JobApplicationCard(props) {
    const { jobTitle, company, dateApplied, onDelete } = props;

  return (
    <div className="jobhistory-card">
      <h2>{jobTitle}</h2>
      <h3>{company}</h3>
      <p>{dateApplied}</p>
      <button className="button" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default JobApplicationCard;