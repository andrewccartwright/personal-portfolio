import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMe from './about-me/AboutMe';
import Navbar from './Navbar';
import Projects from './projects/Projects';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
