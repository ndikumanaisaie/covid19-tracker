import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import App from '../../components/App';

it('renders correctly Header component', () => {
  const app = renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>,

  ).toJSON();
  expect(app).toMatchSnapshot();
});
