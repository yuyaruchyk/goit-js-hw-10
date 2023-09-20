import axios from "axios";
import { fetchBreeds } from './cat-api.js';




  const apiKey = "live_eekCqlvlN5LRfFZcBPx3LID62ACJZ9Cut9F5j7tSYeMolG3b7goIiQ9jciXmnmHT";
axios.defaults.headers.common["x-api-key"] = apiKey;



const refs = {
    breedSelect: document.querySelector('.breed-select'),
};

document.addEventListener('DOMContentLoaded', () => {
    fetchBreeds()
        .then(breedsList => {
            breedsList.forEach(item => {
                const optionElement = document.createElement('option');
                optionElement.value = item.value; 
                optionElement.textContent = item.text; 
                refs.breedSelect.appendChild(optionElement);
            });
        })
        .catch(error => {
            console.error(error);
        });
});






