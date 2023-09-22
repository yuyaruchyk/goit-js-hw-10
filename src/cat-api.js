export { fetchBreeds };
export { fetchCatByBreed };
import axios from 'axios';


axios.defaults.headers.common['x-api-key'] = 'live_eekCqlvlN5LRfFZcBPx3LID62ACJZ9Cut9F5j7tSYeMolG3b7goIiQ9jciXmnmHT';
const apiKey = 'live_eekCqlvlN5LRfFZcBPx3LID62ACJZ9Cut9F5j7tSYeMolG3b7goIiQ9jciXmnmHT';
function fetchBreeds() {
  const apiUrl = 'https://api.thecatapi.com/v1/breeds';

  return axios.get(apiUrl)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

function fetchCatByBreed(breedId) {
  
 const apiUrl = `https://api.thecatapi.com/v1/images/search?x-api-key&breed_ids=${breedId}`;

  return axios.get(apiUrl)
    .then(response => {
        console.log(response.data);
        console.log(response.data)
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}