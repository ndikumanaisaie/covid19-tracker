import React from 'react';

import covidData from '../api/index';

const App = () => (
  <div>
    <h1>
      Hallo React
      {covidData()}
    </h1>

  </div>
);

export default App;
