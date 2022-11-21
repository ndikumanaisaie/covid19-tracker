import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Region = ({ data }) => {
  const { ActiveCases, Country, id } = data;
  return (
    <Link to={`/country-details/${id}`}>
      <Card>
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
  data: PropTypes.PropTypes.shape({
    ActiveCases: PropTypes.number,
    Country: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Region;
