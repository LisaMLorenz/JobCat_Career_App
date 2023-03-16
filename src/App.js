import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar'
import ResumeForm from './pages/ResumeForm'
import JobSearch from './pages/JobSearch';
import JobApplicationHistory from './pages/JobApplicationHistory';
import FAQ from './pages/FAQ';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />

      <Routes>

        <Route path="/resumeform" element={<ResumeForm />} />
        <Route path="/JobSearch" element={<JobSearch />} />
        <Route path="/JobApplicationHistory" element={<JobApplicationHistory />} />
        <Route path="/FAQ" element={<FAQ />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
