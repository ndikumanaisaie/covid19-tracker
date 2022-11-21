import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCovidData } from '../redux/covidData/covidDataSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, [dispatch]);

  const { covidData } = useSelector((state) => ({ ...state.covidData }));
  console.log('covidData', covidData);
  return (
    <div>
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
