export { fetchBreeds };
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
      
  