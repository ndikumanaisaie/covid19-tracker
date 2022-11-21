import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { getCovidData } from '../redux/covidData/covidDataSlice';
import Region from '../components/Region';
import Spinner from '../components/Spinner';

const Regions = () => {
  const [category, setCategory] = useState('Africa');
  const dispatch = useDispatch();

  console.log(category);

  useEffect(() => {
    dispatch(getCovidData());
  }, [dispatch]);

  const { covidData, status } = useSelector((state) => ({ ...state.covidData }));

  const filteredCovidData = covidData.filter((data) => data.Country !== 'Total:' && data.Country !== 'World');

  const Continents = ['North America', 'South America', 'Asia', 'Africa', 'Europe', 'Australia/Oceania'];

  const dataByContinent = filteredCovidData.filter((data) => data.Continent === category);

  console.log('dataByContinent', dataByContinent);

  const handleChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <div>
      <h1>
        Covid-19 Tracker
      </h1>
      <Form.Select
        aria-label="Select Continent"
        onChange={handleChange}
        name="category"
      >
        <option>Continents</option>
        {
          Continents.map((data) => (
            <option value={data} key={data}>{data}</option>
          ))
        }
      </Form.Select>
      {
        dataByContinent.map((data) => (
          <Region key={data.id} data={data} />
        ))
      }
    </div>
  );
};

export default Regions;
