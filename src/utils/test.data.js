import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const responseData = [
  {
    id: '911f9162-c39d-4e1c-9768-4d147cce2604',
    rank: 3,
    Country: 'France',
    Continent: 'Europe',
    TwoLetterSymbol: 'fr',
    ThreeLetterSymbol: 'fra',
    Infection_Risk: 56.43,
    Case_Fatality_Rate: 0.43,
    Test_Percentage: 413.95,
    Recovery_Proporation: 97.97,
    TotalCases: 37012318,
    NewCases: 0,
    TotalDeaths: 157546,
    NewDeaths: 0,
    TotalRecovered: '36261179',
    NewRecovered: 0,
    ActiveCases: 593593,
    TotalTests: '271490188',
    Population: '65584518',
    one_Caseevery_X_ppl: 2,
    one_Deathevery_X_ppl: 416,
    one_Testevery_X_ppl: 0,
    Deaths_1M_pop: 2402,
    Serious_Critical: 869,
    Tests_1M_Pop: 4139547,
    TotCases_1M_Pop: 564345,
  },
  {
    id: '338a3103-483a-4292-9559-1aac2ed47a90',
    rank: 5,
    Country: 'Brazil',
    Continent: 'South America',
    TwoLetterSymbol: 'br',
    ThreeLetterSymbol: 'bra',
    Infection_Risk: 16.21,
    Case_Fatality_Rate: 1.97,
    Test_Percentage: 29.61,
    Recovery_Proporation: 97.64,
    TotalCases: 34909480,
    NewCases: 0,
    TotalDeaths: 688539,
    NewDeaths: 0,
    TotalRecovered: '34085759',
    NewRecovered: 0,
    ActiveCases: 135182,
    TotalTests: '63776166',
    Population: '215353593',
    one_Caseevery_X_ppl: 6,
    one_Deathevery_X_ppl: 313,
    one_Testevery_X_ppl: 3,
    Deaths_1M_pop: 3197,
    Serious_Critical: 8318,
    Tests_1M_Pop: 296146,
    TotCases_1M_Pop: 162103,
  },
];

// Adding mock network response that is used in tests

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axios);

  mock.onGet('/').reply(200, responseData);
};

export {
  mockNetWorkResponse,
  responseData,
};
