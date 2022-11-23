import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import App from '../../components/App';
import store from '../../redux/configureStore';

describe('App tests', () => {
  it('it renders', () => {
    const app = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
