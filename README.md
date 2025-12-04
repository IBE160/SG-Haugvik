🍳 KidChef – AI-basert middagsassistent

KidChef er en enkel og brukervennlig webapplikasjon som genererer barnevennlige middagstips basert på brukerens preferanser og ingredienser.
Appen bruker Google Gemini via REST API som KI-motor, og er bygget med React + TypeScript (frontend) og Node.js + Express (backend).

Hovedmålet er å gjøre matlaging både gøy og tilgjengelig for barn, samtidig som prosjektet demonstrerer hvordan moderne KI kan brukes både i utviklingsprosessen og i selve applikasjonen.

🌟 Funksjoner

Skriv inn ingredienser du har hjemme

Generer AI-baserte oppskrifter med:

📝 Ingrediensliste

👣 Steg-for-steg fremgangsmåte

⏱️ Estimert tid

Robust håndtering av ustrukturerte KI-svar

Full frontend–backend kommunikasjon

Minimal og pedagogisk UI for barn

(Preferanse-knapper er fjernet i nåværende versjon, men kan aktiveres senere.)

🛠️ Teknologistack
Frontend
- React
- TypeScript
- Vite

Backend
- Node.js
- Express
- Google Gemini 2.5 Flash – REST API (ingen SDK nødvendig)

Verktøy
- Visual Studio Code
- Git & GitHub
- Google AI Studio

Browser DevTools

📂 Prosjektstruktur
kidchef-app/
│
├── public/               # Static assets
├── src/
│   ├── components/       # React-komponenter
│   ├── pages/            # (valgfritt) fremtidige sider
│   └── main.tsx          # Inngangspunkt frontend
│
├── server.js             # Express backend + Gemini-integrasjon (REST-basert)
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

Opprett en .env-fil i rotmappen og legg inn:

GOOGLE_API_KEY=DIN_API_NØKKEL_HER


(Viktig: variabelnavnet må være GOOGLE_API_KEY, ikke GEMINI_API_KEY.)

4. Start backend
npm run server


Backend kjører på:
👉 http://localhost:3001

5. Start frontend
npm run dev


Frontend kjører vanligvis på:
👉 http://localhost:5173

📌 Status & videre arbeid

Dette prosjektet er fortsatt under utvikling. Fremtidige forbedringer kan inkludere:

Legge til flere preferanser og kategorier

Forbedret UI/UX for barn

Lagring av tidligere oppskrifter

Modulær backend (egen routing + service-lag)

Validering av brukerinput

Hosting via Vercel / Netlify / GitHub Pages

📚 Om prosjektet

Prosjektet er levert i forbindelse med IBE160 – Programmering med KI.
I utviklingsprosessen ble KI brukt aktivt som:

🔍 Analytiker

🧩 Arkitekt

👨‍💻 Programmerer

🤝 Sparringspartner