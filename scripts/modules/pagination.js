let currentPage = 1;
const charactersPerPage = 8;
let nmbrOfCharacters = 0;
let totalPages = 0;

export function getCurrentPage() {
    return currentPage;
}

export function setNumberOfCharacters(nmbr) {
    nmbrOfCharacters = nmbr;
    totalPages = Math.ceil(nmbrOfCharacters / charactersPerPage);
}

export function prevPage() {
    // TODO:
    // 1. Kolla om currentPage > 1
    // 2. Minska currentPage med 1
    // 3. Uppdatera pagination display
}

export function nextPage() {
    // TODO:
    // 1. Kolla om currentPage < totalPages
    // 2. Öka currentPage med 1
    // 3. Uppdatera pagination display
}

export function updatePaginationDisplay() {
    // TODO:
    // 1. Uppdatera sidindikator-text (#pageIndicator)
    // 2. Sätt 'active'-klass på vänsterpil om currentPage > 1, annars ta bort
    // 3. Sätt 'active'-klass på högerpil om currentPage < totalPages, annars ta bort

    // Använd funktionerna i domUtils.js
}