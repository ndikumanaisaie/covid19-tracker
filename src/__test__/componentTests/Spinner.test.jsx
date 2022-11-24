import React from 'react';
import renderer from 'react-test-renderer';

import Spinner from '../../components/Spinner';

it('renders correctly the Home component', () => {
  const spinner = renderer.create(<Spinner />).toJSON();
  expect(spinner).toMatchSnapshot();
});
