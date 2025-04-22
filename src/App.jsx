import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import AboutUs from './components/AboutUs.jsx';
import UpcomingGigs from './components/UpcomingGigs.jsx';
import Products from './components/StoreFront.jsx';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lyrics" element={<AboutUs />} />
        <Route path="/upcoming-gigs" element={<UpcomingGigs />} />
        <Route path="/storefront" element={<Products />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
