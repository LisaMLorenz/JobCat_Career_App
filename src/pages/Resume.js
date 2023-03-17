import React from "react";

//This is the actual resume rendered on page. Can be used for adding styles.

function Resume({ formData }) {
  return (
    <div>
      <div id="resumeHeader">
      <h2>{formData.name}</h2>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Location: {formData.location}</p>
      </div>
      <hr></hr>

      <h2 className="resume-education">Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index}>
          <p>Degree: {edu.degree}</p>
          <p>Institution: {edu.institution}</p>
          <p>Completion date: {edu.date}</p>
        </div>
      ))}
      <hr></hr>
      <h2>Work Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index}>
          <h3>{exp.position}</h3>
          <p>
            <strong>{exp.company}</strong>,  {exp.startDate} - {exp.endDate}
          </p>
       
          <p>
            Responsibilities: <i>{exp.responsibilities}</i>
          </p>
        </div>
      ))}
      <hr></hr>
      <h2>Skills</h2>
      <ul className="uk-list uk-list-divider">
        {formData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
