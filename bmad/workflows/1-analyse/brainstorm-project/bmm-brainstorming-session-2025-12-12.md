# Brainstorm – Fase 1 (Analyse)

## Workflow-status
Project: ibe160 (Level 3 software)  
Phase: Analyse 
Current workflow: brainstorm-project  
---

## Formål med brainstorm
Denne brainstormen er en del av **Fase 1 – Analyse** i BMAD-rammeverket.

Formålet er å:
- bygge videre på idéen beskrevet i `proposal.md`
- utforske kjernefunksjonalitet og overordnet brukerflyt
- identifisere viktige valg, avgrensninger og usikkerheter
- legge et solid grunnlag før videre planlegging og strukturering

Brainstorm-fasen brukes spesielt til å avdekke aspekter av løsningen som ikke nødvendigvis var fullt gjennomtenkt i proposal-fasen.

---

## Utgangspunkt
- `proposal.md` brukes som hovedgrunnlag
- Fokus er på funksjon og flyt, ikke implementasjonsdetaljer
- Løsningen er rettet mot én hovedbrukerrolle
- KI brukes som støtte for funksjonalitet, ikke som en «svart boks»

---

## Hva brainstormes i denne sesjonen
Denne sesjonen fokuserer på:
- kjernefunksjonalitet
- brukerflyt
- prioriteringer og avgrensninger

---

## Core features – idéutforskning

### Overordnet idé
Prosjektet er en webapplikasjon som bruker kunstig intelligens til å generere oppskrifter basert på brukerinput.

Brukeren legger inn ingredienser og enkle preferanser, og systemet genererer et strukturert oppskriftsforslag som presenteres tydelig i brukergrensesnittet.

Første versjon av løsningen skal være enkel og oversiktlig med fokus på kjernefunksjonalitet fremfor avanserte valg.

---

### Kjernefunksjonalitet (foreløpig)
Applikasjonen skal kunne:
- ta imot ingredienser fra bruker
- ta imot enkle preferanser (for eksempel type rett)
- sende brukerinput til en KI-modell via et kontrollert prompt
- motta et generert oppskriftsforslag
- vise oppskriften tydelig i grensesnittet

Tekniske detaljer vurderes senere og inngår ikke i denne fasen.

---

## MVP – Must-have funksjonalitet
Følgende funksjonalitet defineres som **Minimum Viable Product (MVP)**:

- Bruker kan skrive inn ingredienser
- Bruker kan sende forespørsel til systemet
- KI genererer minst én oppskrift
- Oppskriften inneholder:
  - ingrediensliste
  - enkel fremgangsmåte
- Resultatet vises i et webgrensesnitt
- Enkel input-validering (for eksempel håndtering av tom input)

Dette representerer minimumskravene for at løsningen skal fungere og demonstrere idéen.

---

## Nice-to-have (ikke del av MVP)
Følgende funksjonalitet vurderes som utvidelser:
- generering av flere oppskriftsforslag
- mer detaljerte KI-instruksjoner for bedre kvalitet
- strengere krav til struktur og format i KI-responsen
- visuelle forbedringer
- ekstra brukerinnstillinger
- mer omfattende feilhåndtering

Disse vurderes først etter at MVP er på plass.

---

## User flow – hovedflyt
En forenklet brukerreise for løsningen:

1. Bruker åpner applikasjonen
2. Bruker legger inn ingredienser og eventuelle preferanser
3. Bruker sender forespørsel
4. Systemet sender input til KI
5. KI returnerer et oppskriftsforslag
6. Oppskriften vises til brukeren
7. Bruker kan gjøre en ny forespørsel eller avslutte

---

## Avgrensninger
For å holde prosjektet innenfor valgt omfang er følgende avgrensninger gjort:
- ingen brukerkonto eller innlogging
- ingen lagring av tidligere oppskrifter
- ingen avansert personalisering i første fase
- fokus på funksjonalitet fremfor avansert design
- én hovedbrukerrolle

---

## Forhold til BMAD
Denne brainstormen er en del av **analysefasen (Fase 1)** i BMAD.

Innholdet brukes videre som grunnlag for:
- videre research
- utarbeidelse av `product-brief.md`
- overgang til neste steg i prosjektet