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
            const { url, breeds } = catInfo; 
            const catBreeds = breeds.map(breed => ({
                name: breed.name,         
                description: breed.description, 
                temperament: breed.temperament 
            }));

            console.log(catBreeds)
const catArray = breeds.map(({ name, description, temperament }) => {
  return `
   
      <img 
        src="${url}"
        alt="${name}"
      />

      <h1>${name}</h1>
      <p>${description}</p>
      <h2>Temperament: ${temperament}</h2>



    
  `;

  
});





const markup = catArray.join('');

refs.catInfo.insertAdjacentHTML("afterbegin", markup);

  


         
        })
        .catch(error => {
            console.error(error);
        });
});

 

