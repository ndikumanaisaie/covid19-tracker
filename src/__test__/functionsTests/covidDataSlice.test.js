import store from '../../redux/configureStore';
import { getCovidData } from '../../redux/covidData/covidDataSlice';
import {
  mockNetWorkResponse,
  responseData,
} from '../../utils/test.data';

/**
 * Testing the fetchUsers thunk
 */

describe('Get all covid19 data', () => {
  beforeAll(() => {
    mockNetWorkResponse();
  });

  it('Shoudl be able to fetch covid19 data', async () => {
    const result = await store.dispatch(getCovidData());

    const resultData = result.payload;

    expect(result.type).toBe('covid/getCovidData/fulfilled');
    expect(resultData).toEqual(responseData);

    const state = store.getState().covidData;

    expect(state.covidData).toEqual(responseData);
  });
});
