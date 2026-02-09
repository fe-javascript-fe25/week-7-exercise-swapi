# Star Wars Karaktärsvisare – Övning med ES6-moduler

I denna övning bygger du en webbsida som visar Star Wars-karaktärer från ett API. Du ska använda **ES6-moduler** och modulär kodstruktur. Målet är att implementera funktioner steg för steg och få en fungerande sida där du kan:

- Visa 8 karaktärer per sida
- Navigera mellan sidor med pagination
- Klicka på en karaktär och se detaljer om karaktären och dess hemplanet

---

## Struktur

Projektet är uppdelat i mappar:

src/

- index.js # Startpunkt
- modules/ # Funktionell logik
    - api.js
    - gui.js
    - pagination.js
- utils/ # DOM- och hjälpfunktioner
    - domUtils.js
- components/ # Färdiga komponenter för sidan
    - characterDetails.js
    - homeworldDetails.js
- data/ # Datalagring
    - characters.js

---

### Starta sidan

`index.js`

Följande är i nuläget utkommenterat för att undvika krascher. Avkommentera allt eftersom ni bygger funktionerna nedan.

- Hämta karaktärer från API
- Lägg dem i data-modulen (`pushCharacters`)
- Sätt antal karaktärer för pagination
- Anropa `setupPagination()` och `renderCharacters()`
- Visa pagination display (`updatePaginationDisplay()`)

---

## Tips för att lyckas

- Testa varje funktion **steg för steg** i konsolen innan integration
- Följ **modulens ansvar**:
    - API → hämtar data
    - GUI → visar data
    - Pagination → hanterar state
    - Components → returnerar HTML-strängar
- Använd **utils/domUtils.js** för DOM-manipulation

---

## Ordning att bygga funktioner

Följ denna ordning för att stegvis bygga sidan:

### 1️⃣ Data-modul

`components/characters.js`

- `getCharacters()` → returnerar array med alla karaktärer
- `pushCharacters(list)` → lägg till karaktärer i arrayen

_Varför först:_  
Andra funktioner behöver data för att fungera.

---

### 2️⃣ GUI – skapa listobjekt

`modules/gui.js`

- `createCharacterItem(character)`
    - Skapa ett `<li>`-element med namn
    - Lägg till click-event för att visa detaljer

---

### 3️⃣ GUI – rendera karaktärer

`modules/gui.js`

- `renderCharacters()`
    - Visa 8 karaktärer per sida
    - Använd `createCharacterItem` för varje karaktär
    - Lägg till i DOM (#charactersList)

---

### 4️⃣ Pagination

`modules/pagination.js`

- `prevPage()` / `nextPage()`
    - Ändra currentPage
    - Uppdatera pagination display
- `updatePaginationDisplay()`
    - Visa aktuell sida
    - Aktivera/deaktivera pilar

---

### 5️⃣ GUI – koppla pagination till rendering

`modules/gui.js`

- `setupPagination()`
    - Lägg till event listeners på vänster- och högerpil
    - Anropa `renderCharacters()` vid klick

---

### 6️⃣ Detaljer för karaktärer

`components/characterDetails.js`

- `getCharacterDetails(character)`
    - Returnera HTML-sträng med namn, längd, vikt, hårfärg, hudfärg, ögonfärg, födelseår och kön

---

### 7️⃣ Detaljer för hemplanet

`components/homeworldDetails.js`

- `getHomeworldDetails(homeworld)`
    - Returnera HTML-sträng med namn, rotationsperiod, omloppstid, diameter, klimat, gravitation och terräng

---

### 8️⃣ Koppla detaljer till click-event

`modules/gui.js`

- `renderDetails(character)`
    - Hämta hemplanet från API
    - Visa karaktärsdetaljer och hemplansdetaljer i DOM

---

När alla steg är klara har du en komplett, modulär Star Wars-karaktärsvisare med ES6-moduler! 🎉
