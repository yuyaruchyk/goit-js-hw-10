import axios from 'axios';
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(breeds => {
    const breedList = breeds.map(breed => ({
      value: breed.id,
      text: breed.name,
    }));

    breedList.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      refs.breedSelect.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error(error);
  });



refs.breedSelect.addEventListener("change", () => {
  const breedId = refs.breedSelect.value;

  // Call fetchCatByBreed with the selected breed ID
  fetchCatByBreed(breedId)
    .then(catInfo => {
      console.log(catInfo);
    })
    .catch(error => {
      // Handle any errors here
      console.error(error);
    });
});
      
     
 
  

    

