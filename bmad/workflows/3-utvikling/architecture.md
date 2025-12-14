# Architecture – KidChef

## Workflow-status
Prosjekt: ibe160 (Level 3 software)  
BMAD-fase: Fase 3 – Utvikling  
Aktiv workflow: Arkitektur og teknisk konkretisering  

Denne fasen fokuserer på å tydeliggjøre tekniske valg, ansvar og begrensninger i KidChef gjennom en overordnet arkitekturbeskrivelse.
Dokumentet gir en strukturert oversikt over systemets oppbygning og samspill mellom komponenter, uten å introdusere ny funksjonalitet.

---

## Formål
Dette dokumentet beskriver arkitekturen i KidChef på et overordnet nivå.
Målet er å fungere som bindeledd mellom produktdokumentasjon (PRD og epics) og den tekniske løsningen, og gjøre systemets oppbygning, ansvarsfordeling og tekniske rammer tydelige.

---

## Overordnet arkitektur

KidChef er bygget som en enkel klient–server-løsning med ekstern generativ KI-tjeneste.

**Hovedkomponenter:**
- **Frontend:** React-applikasjon for barnevennlig brukergrensesnitt
- **Backend:** Node.js / Express-basert API som mellomledd mot KI-tjeneste
- **KI-tjeneste:** Google Gemini (generativ språkmodell tilgjengelig via REST-API)
- **Kommunikasjon:** JSON over HTTP

**Dataflyt:**
1. Bruker velger ingredienser og preferanser i frontend  
2. Frontend sender strukturert forespørsel til backend  
3. Backend bygger forespørsel og sender denne til ekstern KI-tjeneste  
4. KI-tjenesten returnerer forslag til oppskrifter  
5. Backend mottar og videresender strukturert respons  
6. Frontend presenterer oppskriftene visuelt for brukeren  

---

## Ansvarsdeling

### Frontend
- Viser visuelle valg for ingredienser og preferanser
- Sikrer at nødvendig input er valgt før forespørsel sendes
- Starter KI-generering gjennom én tydelig handling
- Håndterer lastetilstand og enkel feilhåndtering
- Presenterer resultater som oversiktlige oppskriftskort

### Backend
- Mottar strukturert input fra frontend
- Bygger forespørsel til KI basert på ingredienser og preferanser
- Kommuniserer med ekstern KI-tjeneste via REST-API
- Håndterer og videresender KI-respons
- Skjuler API-nøkler og tekniske detaljer fra frontend

### KI-tjeneste
- Genererer oppskriftsforslag basert på mottatt forespørsel
- Returnerer innhold i forhåndsdefinert strukturformat

---

## Teknologivalg

- **Frontend:** React + TypeScript
- **Backend:** Node.js + Express
- **KI:** Google Gemini (generativ språkmodell via REST-API)
- **Dataformat:** JSON
- **Persistens:** Ingen database i MVP
- **Autentisering:** Ikke relevant i MVP

Valgene er gjort for å holde løsningen enkel, oversiktlig og godt egnet for eksperimentering med KI-integrasjon.

---

## Håndtering av KI-usikkerhet

Respons fra generativ KI er ikke deterministisk og kan variere i både struktur og innhold.
For å sikre en stabil brukeropplevelse benyttes følgende prinsipper:

- KI instrueres til å returnere strukturert JSON
- Responsen håndteres og tilpasses før visning
- Manglende eller ufullstendige felt håndteres kontrollert
- Brukeren får enten gyldige oppskriftsforslag eller tydelig feilmelding

---

## Kjente begrensninger

- Ingen lagring av tidligere oppskrifter
- Ingen brukerprofiler eller innlogging
- Tidsbruk på oppskrifter er basert på KI-estimat
- Ingen garanti for at alle foreslåtte ingredienser brukes
- Begrenset feilhåndtering utover kjerneflyten

Disse begrensningene er bevisste valg for å holde fokus på MVP og hovedflyt.

---

## Tekniske detaljer (utdrag)

- **API-endepunkt:** `POST /api/ai-suggest`
- **Input:**
  - `ingredients`: liste med valgte ingredienser
  - `preferences`: liste med valgte preferanser
- **Output:**
  - `recipes`: liste med oppskriftsforslag
    - `title`
    - `timeMin` (KI-estimat)
    - `ingredients`
    - `steps`
- **Feilhåndtering:**
  - 4xx ved ugyldig input
  - 5xx ved feil i KI-kall
- **Persistens:** Ingen

---

## Videre arbeid i Fase 3

Dette dokumentet etablerer et arkitekturgrunnlag for videre arbeid i Fase 3.
Videre arbeid kan omfatte:

- mer detaljert testing og kvalitetssikring
- videre refleksjon rundt bruk av generativ KI
- eventuell teknisk videreutvikling ved nye funksjonelle behov
