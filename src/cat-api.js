import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_eekCqlvlN5LRfFZcBPx3LID62ACJZ9Cut9F5j7tSYeMolG3b7goIiQ9jciXmnmHT';

function fetchBreeds() {
  const apiUrl = 'https://api.thecatapi.com/v1/breeds';

  return axios.get(apiUrl)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      return Promise.reject(error);
    });
}

function fetchCatByBreed(breedId) {
  const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return axios.get(apiUrl)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      return Promise.reject(error);
    });
}

export { fetchBreeds, fetchCatByBreed };