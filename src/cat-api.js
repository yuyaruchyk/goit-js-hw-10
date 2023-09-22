export { fetchBreeds };
    export { fetchCatByBreed };
    import axios from 'axios';

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

function fetchCatByBreed(breedId) 
      {
  const apiUrl = `https://api.thecatapi.com/v1/images/0XYvRd7oD?breed_ids=${breedId}`;

 

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
  