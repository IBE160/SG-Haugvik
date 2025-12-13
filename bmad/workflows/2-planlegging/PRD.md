# PRD – Product Requirements Document  
## KidChef

## Workflow-status
Prosjekt: ibe160 (Level 3 software)  
BMAD-fase: Fase 2 – Planlegging  
Aktiv workflow: planlegging  

---

## 1. Innledning

Dette dokumentet beskriver produktkravene for KidChef, basert på `proposal.md` og `product-brief.md`.
Formålet med PRD-en er å konkretisere **hva løsningen skal gjøre**, hvilke krav som stilles til funksjonalitet og kvalitet, og hvilke avgrensninger som gjelder for første iterasjon.

Dokumentet fungerer som et styrende grunnlag for videre utvikling og prioritering i prosjektet.

---

## 2. Produktoversikt

KidChef er planlagt som en KI-støttet webapplikasjon som hjelper barn med å lage mat basert på ingredienser de allerede har tilgjengelig.
Løsningen skal legge til rette for mestring, utforsking og læring, og presentere innhold på en måte som er forståelig og trygg for målgruppen.

Applikasjonen kombinerer:
- et enkelt brukergrensesnitt
- en backend som strukturerer forespørsler
- en ekstern KI-tjeneste som genererer oppskrifter

---

## 3. Målgruppe

### Primær målgruppe
Barn som ønsker å lage mat selv, enten alene eller sammen med foresatte.
Løsningen skal være tilpasset barnas nivå, både språklig og funksjonelt, og ikke forutsette avansert lese- eller skriveferdighet.

### Sekundær målgruppe
Foresatte som ønsker et trygt verktøy som støtter barnas selvstendighet på kjøkkenet, uten å måtte styre hele prosessen.

---

## 4. Overordnede mål

Målet med KidChef er å:
- gjøre matlaging tilgjengelig og motiverende for barn
- støtte bruk av eksisterende ingredienser
- presentere oppskrifter på en enkel og strukturert måte
- utforske praktisk bruk av KI i en reell, men avgrenset applikasjon

Prosjektet har et tydelig læringsfokus og er ikke ment som et ferdig kommersielt produkt.

---

## 5. Funksjonelle krav

### 5.1 Brukerinput
Brukerinput i KidChef skal være tilpasset målgruppen og baseres på enkel og trygg interaksjon fremfor fritekst.

Systemet skal:
- la bruker velge ingredienser via forhåndsdefinerte valgbrikker (chips)
- gruppere ingredienser i kategorier for bedre oversikt
- begrense antall valgte ingredienser til et definert intervall
- gi tydelig tilbakemelding ved for få eller for mange valg
- la bruker velge enkle preferanser via valgbrikker
- sende strukturert og validert input videre til backend

Som en mulig utvidelse kan løsningen støtte mer avansert input:
- opplasting av bilde av ingrediens eller vare
- bruk av KI til å tolke bilde og foreslå relevante ingredienser
- generering av flere oppskriftsforslag

Disse utvidelsene inngår ikke i MVP, men er relevante for videre utvikling og videre utforskning av domenet

---

### 5.2 Oppskriftsgenerering
Systemet skal:
- sende brukerinput til en ekstern KI-tjeneste via backend
- motta et oppskriftsforslag fra KI
- sikre at responsen har en forutsigbar struktur

Oppskriften skal inneholde:
- ingrediensliste
- enkel fremgangsmåte
- språk og tone tilpasset barn

---

### 5.3 Presentasjon
Systemet skal:
- vise oppskriften tydelig i brukergrensesnittet
- presentere innhold uten behov for side-reload
- holde fokus på lesbarhet og enkelhet

---

## 6. Ikke-funksjonelle krav

### 6.1 Brukervennlighet
Løsningen skal være:
- enkel å forstå uten forklaring
- tilpasset barn både visuelt og språklig
- fri for unødvendig kompleksitet

---

### 6.2 Forutsigbarhet og kontroll
Systemet skal:
- ha tydelig flyt mellom input og output
- håndtere uventede KI-svar på en kontrollert måte
- unngå å eksponere rå KI-respons direkte til bruker

---

### 6.3 Vedlikeholdbarhet
Koden skal være:
- lett å lese og forklare
- strukturert på en måte som støtter videre utvikling
- tilpasset et studentprosjekt på nivå 3

---

## 7. Avgrensninger

Følgende funksjonalitet inngår ikke i denne fasen:
- brukerinnlogging og kontohåndtering
- lagring av historikk
- avansert personalisering
- betalingsløsninger
- produksjonsoptimalisering

Disse avgrensningene er gjort for å sikre gjennomførbarhet og fokus på kjernefunksjonalitet.

---

## 8. Risiko og usikkerheter

Kjente risikofaktorer inkluderer:
- varierende kvalitet på KI-genererte svar
- behov for god prompt-struktur for stabile resultater
- tilpasning av KI-output til barnevennlig format
- balanse mellom kreativitet og kontroll

Disse risikoene håndteres gjennom:
- tydelig struktur i backend
- bevisst prompt-design
- iterativ utvikling og testing

---

## 9. Suksesskriterier

Prosjektet anses som vellykket dersom:
- bruker kan generere en forståelig oppskrift basert på egne ingredienser
- løsningen oppleves enkel og trygg for barn
- KI-integrasjonen fungerer stabilt innenfor definerte rammer
- prosjektet gir tydelig læring innen KI-assistert utvikling

---

## 10. Videre arbeid

Dette PRD-dokumentet danner grunnlaget for:
- definering av epics og user stories
- prioritering av utviklingsarbeid
- overgang til implementasjonsfase

Videre detaljer spesifiseres i `epics.md` og tilhørende oppgaver.
