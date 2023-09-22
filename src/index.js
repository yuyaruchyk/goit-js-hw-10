import axios from 'axios';
import SlimSelect from 'slim-select'
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

refs.loader.classList.add("visible");

refs.error.classList.add("hidden")

fetchBreeds()

  .then(breeds => {
    
    const markupSelect = breeds
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
const select = new SlimSelect(refs.breedSelect);
    refs.breedSelect.insertAdjacentHTML('afterbegin', markupSelect);
   
    
  })
  .catch(error => {
    console.error(error);
    refs.error.classList.add("visible");
  });

refs.breedSelect.addEventListener('change', onchange);



function onchange(event) {

   
    
  const breedId = refs.breedSelect.value;

  

  fetchCatByBreed(breedId)
      .then(catInfo => {
        
      const liArray = catInfo.map(cat => {
        const { url, breeds } = cat;
        const breedItems = breeds.map(breed => {
   return `
    <div class="image-container">
        
        <img class="cat-image" src="${url}" alt="${breed.name}">
        <h1 class="title">${breed.name}</h1>
        <p>${breed.description}</p>
        <p>${breed.temperament}</p>
    </div>
`;
        });

        return breedItems.join('');
      });

      const markup = liArray.join('');

      refs.catInfo.innerHTML = markup;
 refs.loader.classList.remove("visible");
    refs.loader.classList.add("hiden");
      
    })
    .catch(error => {
        console.error(error);
       
    });
}