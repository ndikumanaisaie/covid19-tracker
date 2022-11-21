import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
  headers: {
    'X-RapidAPI-Key': 'd7ec23a06fmsh3e7bf70a809778ap18b7f3jsna5e55b18f5e3',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
  },
};

export default () => {
  axios.request(options).then((response) => {
    console.log(response.data);
    return response.data;
  }).catch((error) => {
    console.error(error);
  });
};
