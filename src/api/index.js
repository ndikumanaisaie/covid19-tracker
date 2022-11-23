/* eslint-disable import/extensions */
import axios from 'axios';

import REACT_APP_RAPIDAPI_KEY from '../config.js';

const API = axios.create({
  method: 'GET',
  baseURL: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
  },
});

export default () => API.get('/');
