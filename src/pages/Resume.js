import React from 'react';


//This is the actual resume rendered on page. Can be used for adding styles. 

function Resume({ formData }) {
    return (
      <div>
        <h2>{formData.name}</h2>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Location: {formData.location}</p>
  
        <h2>Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <p>Degree: {edu.degree}</p>
            <p>Institution: {edu.institution}</p>
            <p>Completion date: {edu.date}</p>
          </div>
        ))}
  
        <h2>Work Experience</h2>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Position: {exp.position}</p>
            <p>Start date: {exp.startDate}</p>
            <p>End date: {exp.endDate}</p>
            <p>Responsibilities: {exp.responsibilities}</p>
          </div>
        ))}
  
        <h2>Skills</h2>
        <ul className="uk-list uk-list-divider">
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default Resume