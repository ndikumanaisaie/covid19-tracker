import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Spinner from '../components/Spinner';

const CountryDetails = () => {
  const { covidData, status } = useSelector((state) => ({ ...state.covidData }));
  const { id } = useParams();

  const navigate = useNavigate();

  const countryData = covidData.find((data) => data.id === id);

  if (status === 'loading') {
    return <Spinner />;
  }

  return (
    <div className="card-details-container">
      <BsFillArrowLeftCircleFill className="back-btn" onClick={() => navigate('/')} />
      <div className="card-details">
        <p>Country</p>
        <p className="country">{countryData?.Country}</p>
      </div>
      <div className="card-details">
        <p>Total Deaths</p>
        <p>{countryData?.TotalDeaths}</p>
      </div>
      <div className="card-details">
        <p>Total Recovered</p>
        <p>{countryData?.TotalRecovered}</p>
      </div>
      <div className="card-details">
        <p>Active Cases</p>
        <p>{countryData?.ActiveCases}</p>
      </div>
      <div className="card-details">
        <p>Total Tests</p>
        <p>{countryData?.TotalTests}</p>
      </div>
      <div className="card-details">
        <p>Serious or Critical</p>
        <p>{countryData?.Serious_Critical}</p>
      </div>
      <div className="card-details">
        <p>Tests per 1M Population</p>
        <p>{countryData?.Tests_1M_Pop}</p>
      </div>
    </div>

  );
};

export default CountryDetails;
