
KidChef – AI-basert middagsgenerator 

KidChef er en brukervennlig webapplikasjon som genererer barnevennlige middagstips basert på brukerens preferanser og ingredienser. Appen bruker Google Gemini som KI-motor og er bygget med React + TypeScript (frontend) og Node.js + Express (backend).

Funksjoner

Velg preferanser (quick, pasta, chicken, vegetarian, something new)

Skriv inn ingredienser du har tilgjengelig

Få AI-genererte middagsforslag

Inkluderer ingrediensliste og steg-for-steg-instruksjoner

Robust håndtering av JSON fra Gemini

Teknologistack
Frontend

React

TypeScript

Vite

Backend

Node.js

Express

Google Gemini (gemini-2.5-flash)

Utviklingsverktøy

VS Code

Git & GitHub

Browser DevTools

Installasjon
1. Klon prosjektet

git clone https://github.com/
<ditt-brukernavn>/kidchef-app.git
cd kidchef-app

2. Installer avhengigheter

npm install

3. Opprett .env

Lag en .env i rotmappen:

GEMINI_API_KEY=DIN_API_NOKKEL
PORT=3001

4. Start applikasjonen

Backend:
npm run server

Frontend:
npm run dev

Frontend kjører på: http://localhost:5173

Backend kjører på: http://localhost:3001

Prosjektstruktur

kidchef-app/
├── server.js
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.tsx
│ └── main.tsx
├── package.json
├── .env
└── README.md

Hvordan KI brukes

Backend sender prompt til Gemini

Gemini genererer oppskrift

Backend henter ut JSON og validerer

Frontend viser oppskrift med ingredienser og steg

Vanlige problemer
Gemini returnerer ikke gyldig JSON

Backend løser det ved å hente teksten mellom første { og siste }.

Modellfeil (404)

Bruk riktig modellnavn:
gemini-2.5-flash

CORS-feil

Backend må ha:

app.use(cors({ origin: "http://localhost:5173
" }));

Videre arbeid

Favorittoppskrifter

Flere preferanser

Bedre UI

Hosting på GitHub Pages eller Vercel

Lisens

MIT License.
