import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import ResumeForm from './pages/ResumeForm'
import JobSearch from './pages/JobSearch';
import JobApplicationHistory from './pages/JobApplicationHistory';
import Footer from './components/Footer'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


UIkit.use(Icons);

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <NavBar />

      <Routes>

        <Route path="/resumeForm" element={<ResumeForm />} />
        <Route path="/JobSearch" element={<JobSearch />} />
        <Route path="/JobApplicationHistory" element={<JobApplicationHistory />} />
        
      </Routes>
      
      {isHomePage && <main> <Home /> </main>}

      <Footer />
    </div>
  );
}

export default App;
