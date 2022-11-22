import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findFlagUrlByCountryName } from 'country-flags-svg';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getCovidData } from '../redux/covidData/covidDataSlice';
import Spinner from '../components/Spinner';
// import isOdd from '../utils/utils';

const Regions = () => {
  const [category, setCategory] = useState('Africa');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData());
  }, [dispatch]);

  const { covidData, status } = useSelector((state) => ({ ...state.covidData }));

  const filteredCovidData = covidData.filter((data) => data.Country !== 'Total:' && data.Country !== 'World');

  const countryWithFlag = filteredCovidData.map((data) => (
    {
      ...data,
      flagUrl: findFlagUrlByCountryName(data.Country),
    }
  ));

  const Continents = ['North America', 'South America', 'Asia', 'Africa', 'Europe', 'Australia/Oceania'];

  const dataByContinent = countryWithFlag.filter((data) => data.Continent === category);

  const totalContinentCases = dataByContinent
    .reduce((acc, curr) => acc + curr.ActiveCases, 0);

  // const myClass = 'cardItem';

  const handleChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <div className="container-fluid">
      <h1>
        Covid-19 Tracker
      </h1>
      <Form.Select
        aria-label="Select Continent"
        onChange={handleChange}
        name="category"
        className="continent-select"
      >
        <option>Continents</option>
        {
          Continents.map((data) => (
            <option value={data} key={data}>{data}</option>
          ))
        }
      </Form.Select>
      <Card className="continent-card">
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
      <div className="card-container">
        {
          dataByContinent.map((data) => (
            <Link className="card-item" to={`/country-details/${data.id}`} key={data.useDispatch}>
              <div>
                <Card.Img variant="top" src={data.flagUrl} style={{ width: '7rem', height: '7rem' }} />
                <Card.Body>
                  <Card.Title>
                    { data.Country }
                  </Card.Title>
                  <Card.Subtitle className="mb-2">
                    {data.ActiveCases}
                    {' '}
                    Cases
                  </Card.Subtitle>
                </Card.Body>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Regions;
