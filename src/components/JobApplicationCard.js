import React from 'react';
import '../components/styles/jobHistoryCard.css';

function JobApplicationCard(props) {
  return (
    <div className="jobhistory-card">
      <h2>{props.jobTitle}</h2>
      <h3>{props.company}</h3>
      <p>{props.dateApplied}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default JobApplicationCard;