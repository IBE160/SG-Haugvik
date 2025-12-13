# Research – Teknisk analyse av Vanilla JavaScript

## Workflow-status
Prosjekt: ibe160 (Level 3 software)  
BMAD-fase: Analyse 
Aktiv workflow: research-project   

---

## Formål med analysen
Jeg ønsker å gjøre en teknisk analyse av bruken av **Vanilla JavaScript** som frontend-tilnærming for utvikling av brukergrensesnittet i prosjektet.

Analysen tar for seg hvordan frontend-løsningen i KidChef kan bygges uten bruk av rammeverk, og hvilke konsekvenser dette har for struktur, arbeidsform
og videreutvikling av applikasjonen.

---

## Kontekst for vurderingen
KidChef er en webapplikasjon der brukeren:
- legger inn ingredienser via et enkelt skjema
- sender en forespørsel til backend
- mottar en KI-generert oppskrift som presenteres i grensesnittet

Frontend-løsningen må derfor håndtere både brukerinput og dynamisk visning av innhold basert på data fra backend, uten at siden lastes på nytt.

I denne konteksten vurderes Vanilla JavaScript som en mulig frontend-tilnærming uten rammeverk.

---

## Hva menes med Vanilla JavaScript
Vanilla JavaScript innebærer bruk av standard JavaScript og nettleserens innebygde API-er, uten støtte fra frontend-rammeverk eller biblioteker.

All håndtering av:
- DOM-manipulasjon
- hendelser
- tilstand
- oppdatering av visning

må implementeres eksplisitt av utvikler.

---

## Relevans for prosjektets frontend-behov
I KidChef-prosjektet består frontend-flyten hovedsakelig av:
- innsamling av tekstbasert input fra bruker
- sending av forespørsel til backend
- mottak og presentasjon av en ferdig strukturert oppskrift

Denne typen flyt kan teknisk sett implementeres ved hjelp av Vanilla JavaScript, for eksempel ved å lytte på submit-hendelser
og oppdatere DOM direkte når svar mottas.

Tilnærmingen er derfor funksjonelt mulig for prosjektets grunnleggende behov.

---

## Struktur og kodeorganisering
En konsekvens av å bruke Vanilla JavaScript i dette prosjektet er at struktur og organisering av frontend-kode
må håndteres manuelt.

Uten komponentbaserte mønstre må utvikler selv:
- sørge for tydelig oppdeling mellom input-logikk og visning
- unngå at DOM-manipulasjon og forretningslogikk blandes
- håndtere økende kompleksitet etter hvert som funksjonalitet utvides

Sammenlignet med React stiller dette større krav til struktur og disiplin i kodebasen, spesielt dersom applikasjonen videreutvikles.

---

## Arbeidsform og utviklingsopplevelse
Vanilla JavaScript gir lav terskel for oppstart, siden det ikke kreves kjennskap til rammeverk eller verktøykjede.

I praksis innebærer dette i KidChef-prosjektet at:
- all oppdatering av UI må gjøres eksplisitt
- utvikler må selv holde oversikt over applikasjonens tilstand
- endringer i flyt eller funksjonalitet kan kreve manuelle tilpasninger flere steder

Arbeidsformen kan fungere godt i enkle løsninger, men gir mindre støtte for struktur enn rammeverksbaserte alternativer som React.

---

## Sammenligning med rammeverksbasert frontend
Sammenlignet med React mangler Vanilla JavaScript:
- innebygde mønstre for komponentdeling
- eksplisitt håndtering av tilstand og oppdatering av visning
- struktur som skalerer naturlig når funksjonalitet øker

For et prosjekt som KidChef, der frontend hovedsakelig fungerer som et grensesnitt mellom bruker og KI-tjeneste, kan dette føre til økt manuelt arbeid
dersom applikasjonen videreutvikles.

---

## Vurdering
Vanilla JavaScript fremstår som en teknisk mulig tilnærming for utvikling av frontend i dette prosjektet.

Analysen viser at løsningen kan dekke de grunnleggende behovene for brukerinput og visning av KI-generert innhold,
samtidig som den stiller større krav enn React til struktur, disiplin og manuell håndtering i kodebasen.