import axios from 'axios';

import apiKey from '../config';

const API = axios.create({
  method: 'GET',
  baseURL: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
  },
});

export default () => API.get('/');
