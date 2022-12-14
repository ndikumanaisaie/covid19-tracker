import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CountryDetails from '../../pages/CountryDetails';
import store from '../../redux/configureStore';

describe('CountryDetails page', () => {
  it('it renders correctly', () => {
    const details = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <CountryDetails />
          </Provider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(details).toMatchSnapshot();
  });
});
