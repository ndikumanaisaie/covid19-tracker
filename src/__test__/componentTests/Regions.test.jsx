import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Regions from '../../pages/Regions';
import store from '../../redux/configureStore';

describe('Regions page tests', () => {
  it('it renders', () => {
    const regions = renderer
      .create(
        <Provider store={store}>
          <Regions />
        </Provider>,
      )
      .toJSON();
    expect(regions).toMatchSnapshot();
  });
});
