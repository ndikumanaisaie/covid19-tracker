import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import CountryDetails from '../../pages/CountryDetails';
import store from '../../redux/configureStore';

describe('CountryDetails page', () => {
  it('it renders correctly', () => {
    const details = renderer
      .create(
        <Provider store={store}>
          <CountryDetails />
        </Provider>,
      )
      .toJSON();
    expect(details).toMatchSnapshot();
  });
});
