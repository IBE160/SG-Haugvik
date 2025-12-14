# Epics – KidChef (Fase 2)

## Workflow-status
Prosjekt: ibe160 (Level 3 software)  
BMAD-fase: Fase 2 – Planlegging  
Aktiv workflow: epics  

---

## Formål
Dette dokumentet bryter PRD-en ned i konkrete epics som kan realiseres stegvis. Epicsene beskriver sentrale deler av brukeropplevelsen og systemflyten i KidChef, og fungerer som et bindeledd mellom overordnede mål (PRD) og senere detaljert implementasjon.

KidChef har én tydelig hovedflyt: barn velger ingredienser, starter KI-generering, og mottar et lite sett med oppskriftsforslag som presenteres på en enkel og forståelig måte. Epicene er strukturert rundt denne flyten.

---

## Epic 1 – Valg av ingredienser gjennom visuelle valg
**Mål:** Gjøre det mulig for barn å velge ingredienser uten å skrive tekst.

Løsningen skal tilby et sett med forhåndsdefinerte ingredienser som kan velges ved å trykke på visuelle elementer. Ingrediensene grupperes i kategorier og støttes av symboler eller emoji for å gjøre valgene intuitive og barnevennlige.

Denne tilnærmingen gjør løsningen mer visuelt tilgjengelig og engasjerende for barn, reduserer behovet for lesing og skriving, og gir samtidig mer strukturert og forutsigbart input til KI enn friteks. 

**Akseptansekriterier:**
- Bruker kan velge ingredienser ved å trykke på visuelle knappe valg.
- Ingrediensene er gruppert i tydelige kategorier.
- Systemet viser hvor mange ingredienser som er valgt.
- Brukeren veiledes til å velge et minimums- og maksimumsantall ingredienser.
- Det er enkelt å legge til flere ingredienser og kategorier over tid.

---

## Epic 2 – Enkle preferansevalg for type oppskrift
**Mål:** La barnet påvirke typen oppskrift på en enkel og intuitiv måte.

Løsningen skal tilby et begrenset sett med forhåndsdefinerte preferanser som barnet kan velge blant ved å trykke på visuelle elementer. Preferansene representerer enkle ønsker som gir overordnede føringer for KI-genereringen, for eksempel knyttet til type ingredienser eller generell stil på oppskriften.

Valgene krever ikke skriving eller forklaring fra brukeren, men fungerer som støttende signaler til KI uten å gi presis kontroll over resultatet.


**Akseptansekriterier:**
- Bruker kan velge mellom 2 og 10 preferanser.
- Valgte preferanser vises tydelig visuelt.
- Preferanser inngår som del av forespørselen til KI.

---

## Epic 3 – Start av KI-generering gjennom én tydelig handling
**Mål:** Gi brukeren en enkel og forståelig måte å starte KI-flyten på.

Løsningen skal ha én tydelig handling som starter generering av oppskrifter. Brukeren skal få klar tilbakemelding på at systemet jobber, og ikke kunne starte flere forespørsler samtidig.

Dette er spesielt viktig for barn, som trenger tydelige signaler rundt venting og status.

**Akseptansekriterier:**
- Generering kan kun startes når gyldig input er valgt.
- Brukeren får tydelig tilbakemelding mens KI jobber.
- Systemet hindrer gjentatte forespørsler mens en forespørsel pågår.
- Ny generering kan startes etter mottatt resultat.

---

## Epic 4 – Backend som mellomledd mellom bruker og KI
**Mål:** Sikre kontrollert og trygg kommunikasjon med KI-tjenesten.

Løsningen skal benytte en backend som mottar strukturert input fra frontend, videresender forespørselen til en ekstern KI-tjeneste, og returnerer et kontrollert svar tilbake.

Dette gir bedre kontroll over dataflyt, feilhåndtering og sikkerhet, og sørger for at KI-tjenesten ikke eksponeres direkte mot sluttbruker.

**Akseptansekriterier:**
- Backend mottar ingredienser og preferanser i strukturert form.
- KI-nøkler håndteres sikkert og eksponeres ikke mot frontend.
- Backend håndterer feil og returnerer forståelige feilmeldinger.
- Kommunikasjonen er tilpasset lokal utvikling og testing.

---

## Epic 5 – Strukturert prompting mot KI
**Mål:** Sikre forutsigbare og barnevennlige KI-svar.

KI må instrueres på en måte som legger til rette for svar i et strukturert format som kan presenteres direkte i brukergrensesnittet. Promptene skal legge føringer for både innhold og språk, slik at oppskriftene blir forståelige for barn.

Denne epicen handler om kvalitet og stabilitet i KI-svarene, ikke om kreativ utforskning.

**Akseptansekriterier:**
- KI instrueres til å returnere oppskrifter i et strukturert format.
- Svaret kan inneholde flere oppskriftsforslag.
- Språk og instruksjoner er tilpasset barn.
- Steg i oppskriften presenteres tydelig og i riktig rekkefølge.

---

## Epic 6 – Håndtering og normalisering av KI-respons
**Mål:** Gjøre systemet robust mot variasjoner i KI-svar.

KI-respons kan variere i struktur og innhold. Løsningen må derfor håndtere manglende eller ufullstendige felt på en kontrollert måte, slik at brukeropplevelsen forblir stabil.

**Akseptansekriterier:**
- KI-respons tilpasses et fast internt format før visning.
- Manglende felt håndteres uten at løsningen feiler.
- Systemet returnerer enten gyldige oppskriftsforslag eller en tydelig feilmelding.

---

## Epic 7 – Presentasjon av oppskrifter for barn
**Mål:** Vise oppskrifter på en oversiktlig og motiverende måte.

Oppskriftsforslagene skal presenteres som tydelige kort med navn på rett, omtrentlig tidsbruk basert på KI-estimat, ingredienser og steg. Presentasjonen skal være enkel å forstå, støtte mestring og gjøre det gøy for barn å komme i gang med matlaging.

**Akseptansekriterier:**
- Brukeren får presentert et lite sett med oppskrifter.
- Hver oppskrift viser navn, tid, ingredienser og steg.
- Visningen er ryddig og lett å forstå, også på små skjermer.

---

## Epic 8 – Mulige utvidelser etter MVP
**Mål:** Legge til rette for videre utvikling uten å endre kjerneflyten.

KidChef har flere naturlige utvidelser som kan øke verdien for målgruppen. Et konkret ønske som har kommet frem, blant annet fra barn, er muligheten til å ta bilde av en vare eller ingrediens på kjøkkenet og få hjelp til å identifisere den.

Disse funksjonene inngår ikke i MVP, men er viktige domeneinnsikter for videre arbeid.

**Eksempler på utvidelser:**
- Opplasting av bilde og KI-basert tolkning av ingrediens.
- Utvidet ingrediensbibliotek med flere valg.
- Mer styring av antall og type oppskrifter.
- brukerkonto.
- Enkel lagring for å huske preferanser og tidligere valg.

---

## Oppsummering
Epicene dekker hele hovedflyten i KidChef, fra trygg og barnevennlig input til ferdig presentert oppskrift. Dokumentet fungerer som en kravnær struktur for videre utvikling, og sikrer at tekniske valg og implementasjon senere kan forankres i tydelige, faglige beslutninger tatt i fase 2.
