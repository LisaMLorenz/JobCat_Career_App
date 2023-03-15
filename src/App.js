import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ResumeForm from './components/ResumeForm'
import JobSearch from './components/JobSearch';

function App() {
  return (
    <div>
   <Header/>
   <ResumeForm/>
   <JobSearch/>
   <Footer/>
    </div>
  );
}

export default App;
