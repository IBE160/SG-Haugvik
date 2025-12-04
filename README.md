🍳 KidChef – AI-basert middagsassistent

KidChef er en enkel og brukervennlig webapplikasjon som genererer barnevennlige middagstips basert på brukerens preferanser og ingredienser.
Appen bruker Google Gemini som KI-motor, og er bygget med React + TypeScript (frontend) og Node.js + Express (backend).

Hovedmålet er å gjøre matlaging tilgjengelig og motiverende for barn, samtidig som prosjektet demonstrerer hvordan moderne KI kan brukes både i utviklingsprosessen og i selve applikasjonen.

🌟 Funksjoner

Velg matpreferanser (quick, pasta, chicken, vegetarian, something new)

Skriv inn ingredienser du har hjemme

Generer AI-baserte oppskrifter med:

📝 Ingrediensliste

👣 Steg-for-steg fremgangsmåte

⏱️ Estimert tid

Robust håndtering av ustrukturerte AI-svar fra Gemini

Full frontend–backend kommunikasjon

🛠️ Teknologistack

Frontend
- React
- TypeScript
- Vite

Backend
- Node.js
- Express
- Google Generative AI (Gemini 2.5 Flash)

Verktøy
- Visual Studio Code
- Git & GitHub
- Google AI Studio
- Browser DevTools

📂 Prosjektstruktur
kidchef-app/
│
├── public/               # Static assets
├── src/
│   ├── components/       # React-komponenter
│   ├── pages/            # (valgfritt) fremtidige sider
│   └── main.tsx          # Inngangspunkt frontend
│
├── server.js             # Express backend + Gemini-integrasjon
├── package.json
├── vite.config.ts
└── README.md

🚀 Slik kjører du prosjektet lokalt
1. Klon repoet
git clone https://github.com/IBE160/SG-Haugvik.git
cd SG-Haugvik/kidchef-app

2. Installer avhengigheter
npm install

3. Legg inn Gemini API-nøkkel

Opprett en .env-fil:

GEMINI_API_KEY=DIN_API_NØKKEL_HER

4. Start backend
node server.js


Backend kjører nå på:
👉 http://localhost:3001

5. Start frontend
npm run dev


Frontend kjører vanligvis på:
👉 http://localhost:5173

📌 Status & videre arbeid

Dette prosjektet er fortsatt under utvikling. Neste steg:

Legge til flere preferanser og kategorier

Forbedre UI/UX for barn

Modulere backend i egne ruter

Validering av input og bedre feilhåndtering

Hosting via Vercel / Netlify / GitHub Pages

📚 Om prosjektet

Prosjektet er en del av IBE160 – Programmering med KI.
I utviklingen ble KI brukt aktivt som:

Analytiker

Arkitekt

Programmerer

Sparringspartner

Dette README-dokumentet dekker det sensorene trenger for å forstå og kjøre prosjektet.