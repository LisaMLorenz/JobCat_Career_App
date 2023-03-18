import React from 'react';
import { Link } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import '../components/styles/general.css';
import '../components/styles/buttons.css';
import { Container, Row, Col } from 'react-bootstrap';


UIkit.use(Icons);

function Home() {

  return (
    <Container id="main-container">

      <div className='welcome-message'>
        <Row>
          <Col>
            <Row>
              <Col>
                <div className='image-container'>
                  <img src='./images/jobcat-logo.png' alt='jobcat logo' id='logo' className="img-fluid" />
                  </div>
                  <div id="welcome-heading">
                    <h1 className='display-4'>Welcome to JobCat</h1>
                  </div>
                
              </Col>
            </Row>
            <Row>
              <Col id="welcome-text">
                <h3>With JobCat you can quickly create a professional resume, apply for your dream job and manage your job applications. Get to work!</h3>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link to="/resumeForm"><button id="home-button" className="uk-button uk-button-primary">Generate Resume</button></Link>
                <Link to="/jobSearch"><button id="home-button" className="uk-button uk-button-primary">Job Search</button></Link>
                <Link to="/JobApplicationHistory"><button id="home-button" className="uk-button uk-button-primary">Application History</button></Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    </Container >
  );
}

export default Home;
