import React, { useState } from 'react';

function ResumeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [education, setEducation] = useState([{ degree: '', institution: '', date: '' }]);
  const [experience, setExperience] = useState([{ company: '', position: '', startDate: '', endDate: '' , responsibilities: '' }]);
  const [skills, setSkills] = useState([""]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const handleAddEducation = () => {
    setEducation([...education, { degree: '', institution: '', date: '' }]);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', position: '', startDate: '', endDate: '' , responsibilities: ''  }]);
  };

  const handleSkillsChange = (e, index) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Location:', location);
    console.log('Education:', education);
    console.log('Experience:', experience);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal information</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Phone:
        <input type="text" value={phone} onChange={handlePhoneChange} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={handleLocationChange} />
      </label>
      <br />
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <label>
            Degree:
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            />
          </label>
          <br />
          <label>
            Institution:
            <input
              type="text"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
            />
          </label>
          <br />
          <label>
            Completion date:
            <input
              type="date"
              value={edu.date}
              onChange={(e) => handleEducationChange(index, 'date', e.target.value)}
            />
          </label>
          <br />
        </div>
      ))}
      <button type="button" onClick={handleAddEducation}>
        Add education
      </button>
      <br/>
      <h2>Work Experience</h2>

      {experience.map((exp, index) => (
        <div key={index}>
          <label>
            Company:
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            />
          </label>
          <br />
          <label>
            Position:
            <input
              type="text"
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
            />
          </label>
          <br />
          <label>
            Start date:
            <input
              type="date"
              value={exp.startDate}
              onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
            />
          </label>
          <br />
          <label>
            End date:
            <input
              type="date"
              value={exp.endDate}
              onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
            />
          </label>
          <br/>
          <label>
            Responsibilities:
            <input
              type="text"
              value={exp.responsibilities}
              onChange={(e) => handleExperienceChange(index, 'responsibilities', e.target.value)}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddExperience}>
        Add work experience
      </button>
      <br/>

       <div>
       <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            value={skill}
            onChange={(e) => handleSkillsChange(e, index)}
          />
        </div>
      ))}
      <button onClick={handleAddSkill}>Add Skill</button>
    </div>

      <button type="submit">Create resume</button>
    </form>
  );
}

export default ResumeForm;
