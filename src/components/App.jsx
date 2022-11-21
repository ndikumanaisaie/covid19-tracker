import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from '../pages/CountryDetails';
import Regions from '../pages/Regions';

const App = () => (
  <div className="main-container">
    <Routes>
      <Route path="/" element={<Regions />} />
      <Route
        path="/country-details/:id"
        element={<CountryDetails />}
      />
    </Routes>
  </div>

);

export default App;
