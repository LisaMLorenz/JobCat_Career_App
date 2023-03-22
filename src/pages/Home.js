import React from "react";
import { Link } from "react-router-dom";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "../components/styles/general.css";
import "../components/styles/buttons.css";
import { Row, Col } from "react-bootstrap";

UIkit.use(Icons);

function Home() {
  return (
    <div id="main-container">
      <div className="welcome-message">
      <div id="headingAndText">
        <img
          src="./images/jobcat-logo.png"
          alt="jobcat logo"
          id="logo"
          className="img-fluid. max-width: 100%"
        />
        <div id="welcome-heading">
          <h1 className="display-4">Welcome to JobCat</h1>
          <div id="welcome-text">
            <h3>
              With JobCat you can quickly create a professional resume, apply
              for your dream job and manage your job applications. Get to work!
            </h3>
          </div>
        </div>
        </div>
      </div>

      <Row>
        <Col id="buttons-container" className="text-center">
          <Link to="/resumeForm">
            <button id="home-button" className="uk-button uk-button-primary">
              Generate Resume
            </button>
          </Link>
          <Link to="/jobSearch">
            <button id="home-button" className="uk-button uk-button-primary">
              Job Search
            </button>
          </Link>
          <Link to="/JobApplicationHistory">
            <button id="home-button" className="uk-button uk-button-primary">
              Application History
            </button>
          </Link>
        </Col>
      </Row>
      
    </div>
  );
}

export default Home;
