import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ResumeForm from './components/ResumeForm'
import JobSearch from './components/JobSearch';
import ApplicationHistory from './components/ApplicationHistory';

function App() {
  return (
    <div>
   <Header/>
   <ResumeForm/>
   <JobSearch/>
   <ApplicationHistory/>
   <Footer/>
    </div>
  );
}

export default App;
