# Research – Teknisk analyse av React  

## Workflow-status  
Prosjekt: ibe160 (Level 3 software)  
BMAD-fase: Analyse 
Aktiv workflow: research-project   

---

## Formål med analysen  
Jeg ønsker å analysere bruken av **React** som frontend-teknologi for utvikling av brukergrensesnittet i prosjektet.

Analysen fokuserer på hvordan React kan benyttes til:
- håndtering av brukerinput via skjema  
- asynkron kommunikasjon med backend (API-kall)  
- dynamisk presentasjon av KI-generert innhold uten side-reload  

Målet er å vurdere om React er et hensiktsmessig valg for å støtte prosjektets tekniske behov i analyse- og konseptfasen.

---

## Prosjektkontekst  
Prosjektet er en webapplikasjon der brukeren legger inn input (for eksempel ingredienser og preferanser), som sendes til backend for videre behandling av en KI-tjeneste.

Frontend-løsningen må derfor:
- samle og validere brukerinput  
- sende forespørsler til backend via API  
- håndtere ventetid og mottak av svar  
- oppdatere visningen basert på mottatt KI-generert resultat  

Dette stiller krav til strukturert håndtering av tilstand, kontrollert oppdatering av brukergrensesnittet og tydelig separasjon mellom visning og logikk.

---

## Avgrensning av analysen  
Denne analysen fokuserer på React brukt til **visnings- og interaksjonslogikk i frontend**.

---

## Hva er React  
React er et JavaScript-bibliotek for bygging av brukergrensesnitt, basert på en komponentorientert og deklarativ tilnærming.

I stedet for direkte DOM-manipulasjon beskrives grensesnittet som en samling komponenter som oppdateres automatisk når tilstanden (state) endres.

Dette gjør React spesielt egnet for applikasjoner der brukerinput og eksterne datakilder fører til hyppige endringer i visningen.

---

## Relevans for prosjektets behov  
React vurderes som relevant i dette prosjektet fordi:
- brukerinput utløser asynkrone API-kall  
- mottatt KI-respons skal presenteres dynamisk  
- samme data kan påvirke flere deler av brukergrensesnittet  

Ved å bruke state og komponenter kan frontend håndtere hele flyten fra input → forespørsel → respons → visning på en strukturert og forutsigbar måte.

Dette reduserer behovet for manuell DOM-håndtering og gjør koden lettere å følge og videreutvikle.

---

## Komponentbasert struktur  
En sentral egenskap ved React er komponentbasert utvikling.

I dette prosjektet kan grensesnittet naturlig deles opp i:
- en komponent for brukerinput (skjema)  
- en komponent for status/ventetid (loading/feil)  
- en komponent for visning av KI-generert resultat  

En slik oppdeling gir:
- bedre oversikt i kodebasen  
- tydelig ansvar per komponent  
- enklere endringer og utvidelser i senere faser  

Dette er relevant dersom prosjektet videreutvikles med flere input-valg eller mer avansert presentasjon av resultater.

---

## Arbeidsform og kompleksitet  
Bruk av React innebærer en mer strukturert arbeidsform sammenlignet med helt enkle løsninger basert på ren JavaScript.

Utvikleren må forholde seg til begreper som:
- komponenter  
- state  
- props  
- oppdateringsflyt og gjenbruk  

Dette gir en noe høyere startterskel, men samtidig en mer ryddig og forutsigbar kodebase når applikasjonen vokser i omfang.

---

## Sammenligning med enklere løsninger  
For svært små eller midlertidige løsninger kan direkte DOM-manipulasjon med ren JavaScript være tilstrekkelig.

I dette prosjektet innebærer derimot:
- flere UI-elementer  
- asynkron kommunikasjon med backend  
- behov for dynamisk oppdatering av innhold  

at kompleksiteten raskt kan øke uten et strukturert rammeverk.

React tilbyr etablerte mønstre som reduserer denne kompleksiteten og gjør frontend-koden mer vedlikeholdbar.

---

## Vurdering  
Basert på analysen vurderes React som et egnet valg for frontend-utvikling i dette prosjektet.

React støtter prosjektets behov for:
- strukturert håndtering av brukerinput  
- kontrollert oppdatering av brukergrensesnittet  
- tydelig presentasjon av KI-generert innhold  

Samtidig innebærer valget en høyere teknisk kompleksitet enn helt enkle løsninger, noe som må veies opp mot prosjektets videre utviklingsbehov i senere faser av BMAD-modellen.
