import React, { useState } from "react";
import Resume from "./Resume";
import ReactDOM from "react-dom";
import html2pdf from "html2pdf.js";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

function ResumeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState([
    { degree: "", institution: "", date: "" },
  ]);
  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
    },
  ]);
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
    setEducation([...education, { degree: "", institution: "", date: "" }]);
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
    ]);
  };

  const handleSkillsChange = (e, index) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    setSkills([...skills, ""]);
  };

  const handleDownload = () => {
    const element = document.getElementById("newResume");
    html2pdf()
      .set({
        enableLinks: true,
        margin: [10, 10], // This styles the PDF margins
        filename: "resume.pdf",
      })
      .from(element)
      .save();
  };

  //THIS VERSION OF HANDLE SUMBIT DISPLAS THE READY RESUME ON PAGE (IN ROOT, THINKING HOW TO DISPLAY IT ELSEWHERE)
  const newResume = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      location,
      education,
      experience,
      skills,
    };
    ReactDOM.render(
      <Resume formData={formData} />,
      document.getElementById("newResume")
    );
  };

  // THIS IS AN ALTERNATIVE FORM HANDLING - It creates a JSON file with data and downloads it.
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     name,
  //     email,
  //     phone,
  //     location,
  //     education,
  //     experience,
  //     skills
  //   };
  //   const json = JSON.stringify(formData);
  //   const blob = new Blob([json], { type: "application/json" });
  //   saveAs(blob, "resume.json");
  // };

  return (
    <div id="resumeContainer">
      <form className="uk-form-horizontal uk-margin-large-bottom">
        <h2>Personal information</h2>
        <label>
          Name:
          <input
            className="uk-input"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            className="uk-input"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            className="uk-input"
            type="text"
            value={phone}
            onChange={handlePhoneChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            className="uk-input"
            type="text"
            value={location}
            onChange={handleLocationChange}
          />
        </label>
        <br />
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <label>
              Degree:
              <input
                className="uk-input"
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  handleEducationChange(index, "degree", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              Institution:
              <input
                className="uk-input"
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  handleEducationChange(index, "institution", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              Completion date:
              <input
                className="uk-input"
                type="date"
                value={edu.date}
                onChange={(e) =>
                  handleEducationChange(index, "date", e.target.value)
                }
              />
            </label>
            <br />
          </div>
        ))}
        <button type="button" onClick={handleAddEducation}>
          Add education
        </button>
        <br />
        <h2>Work Experience</h2>

        {experience.map((exp, index) => (
          <div key={index}>
            <label>
              Company:
              <input
                className="uk-input"
                type="text"
                value={exp.company}
                onChange={(e) =>
                  handleExperienceChange(index, "company", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              Position:
              <input
                className="uk-input"
                type="text"
                value={exp.position}
                onChange={(e) =>
                  handleExperienceChange(index, "position", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              Start date:
              <input
                className="uk-input"
                type="date"
                value={exp.startDate}
                onChange={(e) =>
                  handleExperienceChange(index, "startDate", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              End date:
              <input
                className="uk-input"
                type="date"
                value={exp.endDate}
                onChange={(e) =>
                  handleExperienceChange(index, "endDate", e.target.value)
                }
              />
            </label>
            <br />
            <label>
              Responsibilities:
              <input
                className="uk-input"
                type="text"
                value={exp.responsibilities}
                onChange={(e) =>
                  handleExperienceChange(
                    index,
                    "responsibilities",
                    e.target.value
                  )
                }
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}>
          Add work experience
        </button>
        <br />

        <div>
          <h2>Skills</h2>
          {skills.map((skill, index) => (
            <div key={index}>
              <input
                className="uk-input"
                type="text"
                value={skill}
                onChange={(e) => handleSkillsChange(e, index)}
              />
            </div>
          ))}
          <button onClick={handleAddSkill}>Add Skill</button>
        </div>
        <button onClick={newResume}>Generate Resume</button>
      </form>
      <div className="uk-card uk-card-default uk-card-body">
        <h2 className="uk-card-title">Your Resume</h2>
        <div  id="newResume"></div>
        <button className="uk-button"onClick={handleDownload}>Download PDF</button>
      </div>
    </div>
  );
}

export default ResumeForm;