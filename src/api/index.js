import axios from 'axios';

const API = axios.create({
  method: 'GET',
  baseURL: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
  headers: {
    'X-RapidAPI-Key': '4b45196971mshda8f4f3676c8c3ap1cb460jsncf5cf53c390a',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
  },
});

export default () => API.get('/');
