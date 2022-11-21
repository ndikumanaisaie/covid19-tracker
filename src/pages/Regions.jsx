import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCovidData } from '../redux/covidData/covidDataSlice';
import Region from '../components/Region';
import Spinner from '../components/Spinner';

const Regions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, [dispatch]);

  const { covidData, status } = useSelector((state) => ({ ...state.covidData }));
  console.log('covidData', covidData);

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <div>
      <h1>
        Covid-19 Tracker
      </h1>
      {
        covidData.map((data) => (
          <Region key={data.id} covidData={data} />
        ))
      }
    </div>
  );
};

export default Regions;
