import { configureStore } from '@reduxjs/toolkit';
import covidDataSlice from './covidData/covidDataSlice';

const store = configureStore({
  reducer: {
    covidData: covidDataSlice,
  },
});

export default store;
