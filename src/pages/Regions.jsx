import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { getCovidData } from '../redux/covidData/covidDataSlice';
import Region from '../components/Region';
import Spinner from '../components/Spinner';
import isOdd from '../utils/utils';

const Regions = () => {
  const [category, setCategory] = useState('Africa');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, [dispatch]);

  const { covidData, status } = useSelector((state) => ({ ...state.covidData }));

  const filteredCovidData = covidData.filter((data) => data.Country !== 'Total:' && data.Country !== 'World');

  const Continents = ['North America', 'South America', 'Asia', 'Africa', 'Europe', 'Australia/Oceania'];

  const dataByContinent = filteredCovidData.filter((data) => data.Continent === category);

  const totalContinentCases = dataByContinent
    .reduce((acc, curr) => acc + curr.ActiveCases, 0);

  console.log('totalContinentCases: ', totalContinentCases);

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
      <Card>
        <Card.Body>
          <Card.Title>
            { category }
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {totalContinentCases}
            {' '}
            Cases
          </Card.Subtitle>
        </Card.Body>
      </Card>
      {
        dataByContinent.map((data, i) => (
          <Region cardClass={isOdd(i) ? 'evenCards' : 'oddCards'} key={data.id} data={data} />
        ))
      }
    </div>
  );
};

export default Regions;
