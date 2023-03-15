import React, { useState } from 'react';

function ResumeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');


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


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Location', location);
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
      <br/>
      <label>
        Location:
        <input type="text" value={location} onChange={handleLocationChange} />
      </label>
      <br/>
      <button type="submit">Create resume</button>
    </form>
  );
}

export default ResumeForm;
