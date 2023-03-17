import React from 'react';
import { Link } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import '../components/styles/general.css';
import '../components/styles/buttons.css';

UIkit.use(Icons);

function Home() {

  return (

    <div className='welcome-message'>

      <div className='image-container'>
        <img src='./images/jobcat-logo.png' alt='jobcat logo' id='logo'/>
        <h1>Welcome to JobCat</h1>
      </div>

      <div>
        <h3>With JobCat you can quickly create a professional resume, apply for your dream job and manage your job applications. Get to work!</h3>
        <Link to="/resumeForm"><button id="home-button" className="uk-button uk-button-primary">Generate Resume</button></Link>
        <Link to="/jobSearch"><button id="home-button" className="uk-button uk-button-primary">Job Search</button></Link>
        <Link to="/JobApplicationHistory"><button id="home-button" className="uk-button uk-button-primary">Application History</button></Link>
      </div>

    </div>
  );
}

export default Home;
