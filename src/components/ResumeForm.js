import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

function ResumeForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState([]);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
      };

      const handleEducationChange = (event) => {
        setEducation(event.target.value);
      };

      const handleSkillsChange = (event) => {
        setSkills(event.target.value);
      };

      const handleExperienceChange = (event) => {
        setExperience(event.target.value);
      };
  
  
    return (
      <div>
        <TextField label="Name" value={name} onChange={handleNameChange} />
        <TextField label="Email" value={email} onChange={handleEmailChange} />
        <TextField label="Phone" value={phone} onChange={handlePhoneChange} />
  
        <FormControl>
          <InputLabel>Education</InputLabel>
          <Select value={education} onChange={handleEducationChange}>
            <MenuItem value="highschool">High School</MenuItem>
            <MenuItem value="undergrad">Undergraduate Degree</MenuItem>
            <MenuItem value="masters">Masters Degree</MenuItem>
            <MenuItem value="doctorate">Doctorate Degree</MenuItem>
          </Select>
        </FormControl>
  
        // ... and so on for other fields
  
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Generate Resume
        </Button>
      </div>
    );
  }
  
  export default ResumeForm