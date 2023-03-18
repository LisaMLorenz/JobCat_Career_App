import { Form, Button, Card } from "react-bootstrap";

return (
  <div className="container-fluid" id="resumePageContainer">
    <Form id="resumeForm">
      <h2>Personal information</h2>
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone:</Form.Label>
        <Form.Control
          type="text"
          value={phone}
          onChange={handlePhoneChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location:</Form.Label>
        <Form.Control
          type="text"
          value={location}
          onChange={handleLocationChange}
        />
      </Form.Group>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <Form.Group>
            <Form.Label>Degree:</Form.Label>
            <Form.Control
              type="text"
              value={edu.degree}
              onChange={(e) =>
                handleEducationChange(index, "degree", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Institution:</Form.Label>
            <Form.Control
              type="text"
              value={edu.institution}
              onChange={(e) =>
                handleEducationChange(index, "institution", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Completion date:</Form.Label>
            <Form.Control
              type="date"
              value={edu.date}
              onChange={(e) =>
                handleEducationChange(index, "date", e.target.value)
              }
            />
          </Form.Group>
        </div>
      ))}
      <Button variant="primary" onClick={handleAddEducation}>
        Add education
      </Button>
      <br />
      <h2>Work Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <Form.Group>
            <Form.Label>Company:</Form.Label>
            <Form.Control
              type="text"
              value={exp.company}
              onChange={(e) =>
                handleExperienceChange(index, "company", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Position:</Form.Label>
            <Form.Control
              type="text"
              value={exp.position}
              onChange={(e) =>
                handleExperienceChange(index, "position", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Start date:</Form.Label>
            <Form.Control
              type="date"
              value={exp.startDate}
              onChange={(e) =>
                handleExperienceChange(index, "startDate", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>End date:</Form.Label>
            <Form.Control
              type="date"
              value={exp.endDate}
              onChange={(e) =>
                handleExperienceChange(index, "endDate", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Responsibilities:</Form.Label>
            <Form.Control
              as="textarea"
