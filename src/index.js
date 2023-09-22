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

    fetchCatByBreed(breedId)
        .then(catInfo => {
            const { url, breeds } = catInfo; // Destructure properties correctly
            const catBreeds = breeds.map(breed => ({
                name: breed.name,          // Assuming breed has a 'name' property
                description: breed.description,  // Assuming breed has a 'description' property
                temperament: breed.temperament  // Assuming breed has a 'temperament' property
            }));

            console.log(catBreeds)
    
            // Further processing or displaying of catBreeds can be done here
        })
        .catch(error => {
            console.error(error);
        });
});

 

