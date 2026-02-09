import fetchData from "./modules/api.js";
import { renderCharacters, setupPagination } from "./modules/gui.js";
import { setNumberOfCharacters, updatePaginationDisplay } from "./modules/pagination.js";
import { pushCharacters } from './data/characters.js';

pageSetup();

async function pageSetup() {
    const characters = await fetchData('https://swapi.info/api/people');
    // pushCharacters(characters);
    // setNumberOfCharacters(characters.length);
    // setupPagination();
    // renderCharacters();
    // updatePaginationDisplay();
}