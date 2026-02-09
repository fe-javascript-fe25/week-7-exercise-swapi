import { getElement } from "../utils/domUtils.js";
import fetchData from "./api.js";
import { prevPage, nextPage, getCurrentPage } from "./pagination.js";
import getCharacterDetails from "../components/characterDetails.js";
import getHomeworldDetails from "../components/homeworldDetails.js";

export function renderCharacters() {
    // TODO:
    // 1. Hämta currentPage från pagination
    // 2. Beräkna startIndex och endIndex (endast 8 karaktärer visas per sida), ex sida 1 är startIndex 0 och endIndex 8, på sida 2 är startIndex 8 och endIndex 16
    // 3. Hämta listan med karaktärer från characters-modulen och slicea den med hjälp av startIndex och endIndex
    // 4. Töm listan med karaktärer i DOMen 
    // 5. Loopa igenom de karaktärer som ska visas
    //    - Anropa createCharacterItem för varje karaktär
    //    - Lägg till varje element i listan av karaktärer
}

export function setupPagination() {    
    getElement('.fa-chevron-left').addEventListener('click', () => {
        prevPage();
        renderCharacters();
    });
    getElement('.fa-chevron-right').addEventListener('click', () => {
        nextPage();
        renderCharacters();
    });
}

function createCharacterItem(character) {
    // TODO:
    // 1. Skapa ett <li>-element
    // 2. Lägg till klassen 'characters__list-item'
    // 3. Sätt textContent till karaktärens namn
    // 4. Lägg till click-event som triggar renderDetails() och skicka med aktuell karaktär
    // 5. Returnera elementet
}

async function renderDetails(character) {
    const homeworld = await fetchData(character.homeworld);
    getElement('#characterDetails').innerHTML = getCharacterDetails(character);
    getElement('#homeworldDetails').innerHTML = getHomeworldDetails(homeworld);
}