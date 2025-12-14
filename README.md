# KidChef – AI-basert middagsassistent

KidChef er en enkel og brukervennlig webapplikasjon som genererer barnevennlige middagstips basert på brukerens preferanser og ingredienser.
Applikasjonen bruker Google Gemini via REST API som KI-motor, og er bygget med React + TypeScript i frontend og Node.js + Express i backend.

Hovedmålet med prosjektet er å gjøre matlaging mer tilgjengelig og engasjerende for barn, samtidig som det demonstrerer bruk av generativ KI både i utviklingsprosessen og i selve applikasjonen.

---

## Funksjonalitet

- Brukeren kan skrive inn ingredienser som er tilgjengelige hjemme
- Applikasjonen genererer KI-baserte oppskrifter som inneholder:
  - Ingrediensliste
  - Steg-for-steg fremgangsmåte
  - Estimert tidsbruk
- Robust håndtering av ustrukturert eller ugyldig KI-respons
- Full frontend–backend-kommunikasjon via API
- Enkel og pedagogisk brukerflate tilpasset barn

Merk: Preferanseknapper er ikke aktive i nåværende versjon, men løsningen er forberedt for å kunne utvide med dette senere.

---

## Teknologistack

### Frontend
- React
- TypeScript
- Vite

### Backend
- Node.js
- Express
- Google Gemini 2.5 Flash (generativ språkmodell via REST API)

---

## Prosjektstruktur

SG-Haugvik/
├── bm/ # BMAD-dokumentasjon (analyse, planlegging, utvikling)
├── docs/ # Supplerende dokumentasjon
├── src/ # Frontend (React + TypeScript)
│ └── components/ # UI-komponenter
├── api / server # Backend (Express + Gemini REST-integrasjon)
├── public/ # Statiske ressurser
└── README.md

---

## Slik kjører du prosjektet lokalt

### 1. Klon repoet
git clone https://github.com/IBE160/SG-Haugvik.git  
cd SG-Haugvik/kidchef-app

### 2. Installer avhengigheter
npm install

### 3. Legg inn Gemini API-nøkkel

Opprett en `.env`-fil i rotmappen og legg inn:

GOOGLE_API_KEY=DIN_API_NØKKEL_HER

Variabelnavnet må være: `GOOGLE_API_KEY`

---

### 4. Start backend
npm run server

Backend kjører på:  
http://localhost:3001

---

### 5. Start frontend
npm run dev

Frontend kjører vanligvis på:  
http://localhost:5173

---

## Status og videre arbeid

Prosjektet er ferdigstilt som MVP, men kan videreutvikles med blant annet:

- Flere preferanser og kategorier for oppskrifter  
- Forbedret UI/UX spesielt tilpasset barn  
- Lagring av tidligere oppskrifter  
- Mer modulær backend-struktur  
- Bedre validering og feilhåndtering av brukerinput  
- Hosting via Vercel, Netlify eller GitHub Pages  

---

## Om prosjektet

Dette prosjektet er levert som del av emnet **IBE160 – Programmering med KI**.

I utviklingsprosessen ble KI brukt aktivt i flere roller, blant annet som:
- Analytiker  
- Arkitekt  
- Programmerer  
- Sparringspartner  

Prosjektet demonstrerer både praktisk bruk av generativ KI i en webapplikasjon, og refleksjon rundt styrker og begrensninger ved KI-støttet utvikling.
