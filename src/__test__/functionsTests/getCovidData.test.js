import getCovidData from '../../api/index';

describe('Fetch covid data', () => {
  test('gets the correct data', async () => {
    const response = await getCovidData();
    const { data } = response;
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
