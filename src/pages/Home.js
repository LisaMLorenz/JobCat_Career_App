import React from 'react';
import { Link } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

function Home() {

  return (
    <div>
        <h1>Welcome to JOBCAT</h1>
        <h3>With JobCat you can quickly create a professional resume, apply for your dream job and manage your job applications. Get to work!</h3>
        <Link to="/resumeForm"><button className="uk-button uk-button-default">Generate Resume</button></Link>
        <Link to="/jobSearch"><button className="uk-button uk-button-default">Job Search</button></Link>
        <Link to="/JobApplicationHistory"><button className="uk-button uk-button-default">Application History</button></Link>
    </div>
  );
}

export default Home