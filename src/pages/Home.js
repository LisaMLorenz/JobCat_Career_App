import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
        <h1>Welcome to JOBCAT</h1>
        <h3>With JobCat you can quickly create a professional resume, apply for your dream job and manage your job applications. Get to work!</h3>
        <Link to="/resumeform"><button>Resume Form</button></Link>
        <Link to="/jobsearch"><button>Job Search</button></Link>
        <Link to="/projects"><button>Projects</button></Link>
    </div>
  );
}

export default Home