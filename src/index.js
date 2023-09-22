import axios from 'axios';
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(breeds => {
    const markupSelect = breeds
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');

    refs.breedSelect.insertAdjacentHTML('afterbegin', markupSelect);
  })
  .catch(error => {
    console.error(error);
  });

refs.breedSelect.addEventListener('change', onchange);

function onchange(event) {
  const breedId = refs.breedSelect.value;

  console.log(breedId);

  fetchCatByBreed(breedId)
    .then(catInfo => {
      const liArray = catInfo.map(cat => {
        const { url, breeds } = cat;
        const breedItems = breeds.map(breed => {
          return `
            <div>
              <img src="${url}" alt="${breed.name}">
              <h1>${breed.name}</h1>
              <p>${breed.description}</p>
              <p>${breed.temperament}</p>
            </div>
          `;
        });

        return breedItems.join('');
      });

      const markup = liArray.join('');

      refs.catInfo.innerHTML = markup;

      
    })
    .catch(error => {
      console.error(error);
    });
}