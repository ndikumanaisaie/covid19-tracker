import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCovidData } from '../redux/covidData/covidDataSlice';
import CountryDetails from '../pages/CountryDetails';
import Regions from '../pages/Regions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, [dispatch]);

  const { covidData } = useSelector((state) => ({ ...state.covidData }));
  console.log('covidData', covidData);
  return (
    <div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Regions />} />
          <Route
            path="/country-details/:id"
            element={<CountryDetails />}
          />
        </Routes>
      </div>
      <h1>
        Hallo React
      </h1>
      {
        covidData.map((data) => (
          <h2 key={data.id}>
            { data.id }
          </h2>
        ))
      }
    </div>
  );
};

export default App;
