import axios from 'axios';

import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';


const refs = {
  
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};



document.addEventListener('DOMContentLoaded', function() {

refs.error.classList.add('hidden');
  refs.loader.classList.add('visible');

});



  

 

      
fetchBreeds()
  .then(breeds => {


  
    const firstElement = `<option>Please, select a cat</option>`;
    refs.breedSelect.insertAdjacentHTML('afterbegin', firstElement);

     

    const markupSelect = breeds
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
    
   

    refs.breedSelect.insertAdjacentHTML('afterbegin', markupSelect);
    refs.loader.classList.remove('visible');
    refs.loader.classList.add('hidden');
 
    
  })
  .catch(error => {
    console.error(error);
    refs.loader.classList.remove('visible');
    refs.loader.classList.add('hidden');
    refs.error.classList.remove('hidden');
    refs.error.classList.add('visible');
  });

refs.breedSelect.addEventListener('change', onchange);

function onchange(event) {
  const breedId = refs.breedSelect.value;

  refs.loader.classList.remove('hidden');
  refs.loader.classList.add('visible');

  fetchCatByBreed(breedId)
    .then(catInfo => {
      if (catInfo.length === 0) {
        refs.loader.classList.remove('visible');
        refs.loader.classList.add('hidden');
        refs.catInfo.classList.add('hidden');
        refs.error.textContent = 'No cats found for this breed.';
        refs.error.classList.remove('hidden');
      } else {
        refs.error.classList.add('hidden');
        refs.catInfo.classList.remove('hidden');

        const liArray = catInfo.map(cat => {
          const { url, breeds } = cat;
          const breedItems = breeds.map(breed => {
            return `
              <div class="image-container">
                <img class="cat-image" src="${url}" alt="${breed.name}">
                <div class="text-container"> 
                  <h1 class="title">${breed.name}</h1>
                  <p class="main-text">${breed.description}</p>
                  <p class="secondary-title">Temperament: ${breed.temperament}</p>
                </div>
              </div>
            `;
          });

          return breedItems.join('');
        });

        const markup = liArray.join('');
        refs.catInfo.innerHTML = markup;

        refs.loader.classList.remove('visible');
        refs.loader.classList.add('hidden');
      }
    })
    .catch(error => {
      console.error(error);
      refs.loader.classList.remove('visible');
      refs.loader.classList.add('hidden');
      refs.catInfo.classList.add('hidden')
      refs.error.classList.remove('hidden');
    });
}
