/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Region = ({ data, cardClass }) => {
  const {
    ActiveCases, Country, id, flagUrl,
  } = data;
  return (
    <Link to={`/country-details/${id}`}>
      <Card className={cardClass}>
        <Card.Img variant="top" src={flagUrl} style={{ width: '7rem', height: '7rem' }} />
        <Card.Body>
          <Card.Title>
            { Country }
          </Card.Title>
          <Card.Subtitle className="mb-2">
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
  data: PropTypes.PropTypes.shape({
    ActiveCases: PropTypes.number,
    Country: PropTypes.string,
    id: PropTypes.string,
    flagUrl: PropTypes.string,
  }).isRequired,
  cardClass: PropTypes.string.isRequired,
};

export default Region;
