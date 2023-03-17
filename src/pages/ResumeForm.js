import React, { useState } from "react";
import Resume from "./Resume";
import ReactDOM from "react-dom";
import html2pdf from "html2pdf.js"; //To download PDF of resume
import confetti from "canvas-confetti";
import '../components/styles/resumestyling.css'

//State for Resume Form.
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

  //Functions for handling changing of form input
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

  //Function for button to add more experience
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

  //Function for button to add more skills
  const handleAddSkill = (e) => {
    e.preventDefault();
    setSkills([...skills, ""]);
  };

  //  state variable for download button so it shows only when Generate Resume clicked
  const [showDownload, setShowDownload] = useState(false);

  //Function for PDF download button
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

  //Function for Generate Resume Button = renders new resume one page
  const newResume = (event) => {
    event.preventDefault();

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
    setShowDownload(true); // show download button when resume is generated
  };

  //CONFETTI
  const generateConfetti = () => {
    var duration = 2 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 90, zIndex: 0 };
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      var particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
    confetti.create(document.getElementById("canvas"), defaults);
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
    <div className="uk-container-expand" id="resumePageContainer">
      <form id="resumeForm" className="uk-form-horizontal">
        <h2>Personal information</h2>
        <label>
          Name:
          <input
            className="uk-input uk-form-width-large"
            id="forminputfield"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            className="uk-input uk-form-width-large"
            type="email"
            id="forminputfield"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            className="uk-input uk-form-width-large"
            id="forminputfield"
            type="text"
            value={phone}
            onChange={handlePhoneChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            className="uk-input uk-form-width-large"
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
                className="uk-input uk-form-width-large"
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
                className="uk-input uk-form-width-large"
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
                className="uk-input uk-form-width-large"
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
                className="uk-input uk-form-width-large"
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
                className="uk-input uk-form-width-large"
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
                className="uk-input uk-form-width-large"
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
                className="uk-input uk-form-width-large"
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
              <textarea
                className="uk-textarea"
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
                className="uk-input uk-form-width-large"
                type="text"
                value={skill}
                onChange={(e) => handleSkillsChange(e, index)}
              />
            </div>
          ))}
          <button onClick={handleAddSkill}>Add Skill</button>
        </div>

        <button
          onClick={(e) => {
            newResume(e);
            generateConfetti();
          }}
        >
          Generate Resume
        </button>
      </form>
      <div
        id="newResumeContainer"
        className="uk-card uk-card-default uk-card-body uk-card-hover"
      >
        <h2>Your Resume</h2>
        <div id="newResume"></div>
        <div className="uk-margin">
          {/* Only show download button when Generate Resume clicked */}
          {showDownload && (
            <button
              className="uk-button uk-button-secondary"
              onClick={handleDownload}
            >
              Download PDF
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeForm;
