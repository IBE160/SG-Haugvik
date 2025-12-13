# Proposal – KidChef

## Prosjektoversikt
KidChef er en webapplikasjon som har som mål å gjøre matlaging mer tilgjengelig og gøy for barn.  
Løsningen bruker kunstig intelligens til å generere enkle, forståelige oppskrifter basert på det brukeren har tilgjengelig på kjøkkenet.

Prosjektet retter seg primært mot barn, med fokus på å støtte selvstendighet, nysgjerrighet og mestring i en trygg og enkel digital løsning. Samtidig skal løsningen være enkel nok til at også foreldre kan bruke den sammen med barna.

---

## Problemstilling
Mange barn ønsker å lage mat selv, men møter utfordringer knyttet til:
- manglende oversikt over ingredienser
- vanskelige oppskrifter med avansert språk
- høye krav til lesing, skriving og presis input

Samtidig finnes det få digitale løsninger som er tilpasset barn, både språklig og funksjonelt, og som tar utgangspunkt i det man faktisk har tilgjengelig hjemme.

---

## Mål for prosjektet
Målet med KidChef er å utvikle et proof of concept som viser hvordan kunstig intelligens kan brukes til å støtte barn i matlaging på en enkel og forståelig måte.

Prosjektet har som mål å:
- gjøre det enklere for barn å komme i gang med matlaging
- senke terskelen for å bruke oppskrifter ved å ta utgangspunkt i tilgjengelige ingredienser
- presentere KI-generert innhold på en strukturert og forutsigbar måte
- utforske samspillet mellom frontend, backend og KI-tjenester i en helhetlig løsning

---

## Målgruppe
Primær målgruppe for KidChef er barn i skolealder som ønsker å lage mat selv eller sammen med voksne.

Løsningen må derfor:
- bruke et enkelt og tydelig språk
- ha lav terskel for input
- gi oversiktlige og lett forståelige resultater
- støtte brukere som ikke nødvendigvis kan stave eller lese flytende

---

## Overordnet funksjonalitet
KidChef skal tilby en enkel hovedflyt der brukeren:
1. legger inn ingredienser som er tilgjengelige
2. eventuelt legger til enkle preferanser
3. sender forespørselen til systemet
4. mottar en KI-generert oppskrift tilpasset input

Oppskriften skal presenteres med:
- tydelig ingrediensliste
- enkel fremgangsmåte
- et språk og format tilpasset målgruppen

---

## Avgrensning (MVP)
For å holde prosjektet innenfor et realistisk omfang er følgende avgrensninger gjort i første versjon:

- ingen brukerkonto eller innlogging
- ingen lagring av tidligere oppskrifter
- ingen avansert personalisering
- én hovedbrukerrolle
- fokus på kjerneflyt fremfor design og visuelle effekter

Løsningen utvikles som et proof of concept, ikke et ferdig kommersielt produkt.

---

## Rollefordeling i systemet
Systemet deles konseptuelt i tre hoveddeler:

- **Frontend**: håndterer brukerinput og presentasjon av resultat
- **Backend**: fungerer som et kontrollert mellomledd mellom frontend og KI
- **KI-tjeneste**: genererer oppskrifter basert på strukturert input

Denne oppdelingen gir tydelig ansvar, bedre kontroll over dataflyt og et godt grunnlag for videre utvikling.

---

## Bruk av kunstig intelligens
Kunstig intelligens brukes som en sentral del av funksjonaliteten, men ikke som en “svart boks”.  
KI-en skal:
- motta strukturert input
- generere forutsigbare og forståelige svar
- fungere innenfor rammer definert av systemet

Arbeid med prompting og kontroll av KI-respons anses som en viktig del av prosjektet.

---

## Videre arbeid
Dette dokumentet danner grunnlaget for:
- utarbeidelse av `project-brief.md`
- prioritering av funksjonalitet
- videre design- og implementasjonsarbeid i neste fase

Alle brainstorm- og research-dokumenter fungerer som underlag for beslutningene som er tatt i denne proposalen.
