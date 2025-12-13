# Product brief – KidChef

## Workflow-status
Prosjekt: ibe160 (Level 3 software)  
BMAD-fase: Fase 1 – Analyse  
Aktiv workflow: product-brief  

---

## Bakgrunn og problemforståelse

Mange barn er nysgjerrige på mat og matlaging, men opplever kjøkkenet som lite tilgjengelig uten hjelp fra voksne. Samtidig kan det være krevende for foresatte å følge opp barnas ønske om å lage mat selv, både på grunn av tidsbruk og manglende oversikt over hva som er tilgjengelig på kjøkkenet.

KidChef tar utgangspunkt i dette gapet. Målet er å utforske hvordan kunstig intelligens kan brukes til å støtte barn i å bli mer selvstendige på kjøkkenet, på en trygg og enkel måte. Løsningen retter seg mot barn som ønsker å lage mat basert på det som allerede finnes hjemme, uten at det stilles høye krav til forkunnskaper, lesing eller planlegging.

---

## Målgruppe

Primær målgruppe for KidChef er barn som ønsker å lage mat selv, enten alene eller sammen med foresatte. Løsningen skal være tilpasset barnas nivå, både språklig og funksjonelt, og bidra til mestring og læring fremfor effektivitet eller avansert funksjonalitet.

Sekundært retter løsningen seg mot foresatte, som ønsker et trygt og oversiktlig verktøy som kan støtte barnas initiativ på kjøkkenet, uten at de må styre hele prosessen selv.

---

## Overordnet mål med løsningen

Formålet med KidChef er å utforske hvordan en KI-basert webapplikasjon kan:
- gjøre matlaging mer tilgjengelig og gøy for barn
- støtte barn i å bruke ingredienser de allerede har tilgjengelig
- presentere oppskrifter på en enkel og forståelig måte
- fungere som et pedagogisk hjelpemiddel, ikke bare en oppskriftsgenerator

Prosjektet har et eksplorativt preg, der læring rundt KI-integrasjon, brukerflyt og tekniske valg står sentralt.

---

## Foreslått løsning

KidChef er tenkt som en webapplikasjon der brukeren legger inn informasjon om ingredienser de har tilgjengelig, og mottar et KI-generert oppskriftsforslag basert på dette.

Løsningen skal støtte både tekstbasert input og, som en mulig utvidelse, opplasting av bilde av en ingrediens eller vare fra kjøkkenet. Dette åpner for bruk også for barn som ikke kan stave godt eller foretrekker visuell interaksjon.

KI brukes som støtte for generering av innhold, mens selve applikasjonen har ansvar for struktur, flyt og presentasjon av resultatet.

---

## Kjernefunksjonalitet (MVP)

For å holde prosjektet innenfor et håndterbart omfang defineres følgende funksjonalitet som minimum:

- Bruker kan legge inn ingredienser via et enkelt grensesnitt
- Bruker kan sende en forespørsel om oppskrift
- Backend videresender strukturert input til en ekstern KI-tjeneste
- KI returnerer et oppskriftsforslag
- Oppskriften presenteres tydelig i frontend
- Løsningen håndterer tom eller ugyldig input på en enkel måte

MVP fokuserer på én hovedflyt og én hovedbrukerrolle.

---

## Avgrensninger

For å sikre gjennomførbarhet er følgende eksplisitt utelatt i første fase:

- Ingen brukerinnlogging eller kontohåndtering
- Ingen lagring av tidligere oppskrifter
- Ingen avansert personalisering
- Ingen betalingsløsning eller kommersielle funksjoner
- Ingen optimalisering for produksjonsbruk

Disse valgene er gjort for å prioritere læring og kjernefunksjonalitet.

---

## Teknisk kontekst og overordnede valg

Basert på gjennomført research legges det opp til en webbasert løsning med tydelig separasjon mellom frontend, backend og KI-tjeneste.

Frontend har ansvar for brukerinteraksjon og visning av resultat.  
Backend fungerer som et kontrollert mellomledd som håndterer input, kommunikasjon med KI og strukturering av respons.  
KI-tjenesten brukes eksternt via API og inngår ikke direkte i frontend.

Teknologivalgene er gjort med fokus på enkelhet, forståelighet og kontroll, og skal støtte prosjektets mål om å utforske KI-assistert utvikling på en ryddig måte.

---

## Risiko og usikkerheter

Prosjektet innebærer flere usikkerhetsmomenter, særlig knyttet til:
- kvalitet og forutsigbarhet i KI-genererte svar
- utforming av gode og robuste prompts
- tilpasning av KI-output til en barnevennlig presentasjon
- balansen mellom kreativ frihet og struktur

Disse risikoene håndteres gjennom bevisste avgrensninger, iterativ utvikling og tydelig rollefordeling mellom systemets komponenter.

---

## Videre arbeid

Dette product brief-dokumentet danner grunnlaget for overgang til neste fase i BMAD-rammeverket. Innholdet brukes videre til:
- detaljerte kravspesifikasjoner
- videre teknisk design
- utvikling av løsning i fase 2

Brainstorm- og research-filene fungerer som underlag for beslutningene som er tatt her, men videre arbeid skal forholde seg til dette dokumentet som styrende referanse.
