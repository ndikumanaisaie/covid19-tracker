import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Region = ({ covidData }) => {
  const { ActiveCases, Country, id } = covidData;
  return (
    <Link to={`/country-details/${id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            { Country }
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {ActiveCases}
            {' '}
            Cases
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};

Region.propTypes = {
  covidData: PropTypes.arrayOf(PropTypes.shape({
    ActiveCases: PropTypes.string,
    Country: PropTypes.string,
  })).isRequired,
};

export default Region;
