import store from '../../redux/configureStore';
import { getCovidData } from '../../redux/covidData/covidDataSlice';
import {
  mockNetWorkResponse,
  responseData,
} from '../../utils/test.data';

jest.setTimeout(200000);

describe('Get all covid19 data', () => {
  beforeAll(() => {
    mockNetWorkResponse();
  });

  it('Shoudl be able to fetch covid19 data', async () => {
    const result = await store.dispatch(getCovidData());

    const resultData = result.payload;
    const filteredCovidData = resultData.filter((data) => data.Country === 'France' || data.Country === 'Brazil');

    expect(result.type).toBe('covid/getCovidData/fulfilled');
    expect(filteredCovidData).toEqual(responseData);

    const state = store.getState().covidData;

    expect(state.covidData[4].id).toEqual(responseData[0].id);
  });
});
