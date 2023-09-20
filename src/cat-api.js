export { fetchBreeds };
    
function fetchBreeds() {
      
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(breeds => {
      
      const breedList = breeds.map(breed => ({
        value: breed.id,
        text: breed.name,
      }));
      return breedList;
    })
    .catch(error => {
      console.error(error);
    });
};






