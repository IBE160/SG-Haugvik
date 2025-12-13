# Research – Analyse av prompting i KI-baserte løsninger (Deep Prompt)

## Workflow-status
Prosjekt: ibe160 (Level 3 software)  
BMAD-fase: Analyse  
Aktiv workflow: research-project  

---

## Formål med analysen
Jeg ønsker å gjøre en analyse av hvordan utforming av prompts påvirker kvalitet, forutsigbarhet og brukervennlighet i en KI-basert løsning som KidChef.

Formålet er å forstå hvilken rolle prompt-design spiller når KI brukes til å generere strukturert innhold for sluttbruker, og hvordan bevisste valg i formulering av forespørsler kan bidra til mer stabile og relevante resultater. Analysen fokuserer på prompting som et sentralt bindeledd mellom brukerinput og KI-respons, ikke på den tekniske implementasjonen av selve KI-integrasjonen.

---

## Kontekst for vurderingen
KidChef er en applikasjon der sluttbrukeren, hovedsakelig barn, gir relativt enkel input i form av ingredienser eller forespørsler, og forventer et forståelig og trygt resultat i retur. Dette stiller særlige krav til hvordan forespørsler til KI bygges opp.

Siden brukeren ikke kommuniserer direkte med KI-modellen, men via et grensesnitt, er det mitt ansvar å formulere prompts som både tolker brukerens intensjon korrekt og samtidig styrer KI-modellen mot ønsket struktur, språk og detaljnivå. Promptene fungerer dermed som en form for oversettelseslag mellom bruker og KI.

---

## Hva menes med deep prompt
Deep prompting handler om mer enn å stille et tydelig og enkelt spørsmål til en KI-modell. Det innebærer å gi tydelige rammer for hvordan KI-en skal svare, hvilken rolle den skal ta, hvilket format svaret skal ha, og hvilke begrensninger som gjelder.

I kontekst av KidChef betyr dette å styre KI til å:
- gi oppskrifter som er enkle å forstå
- bruke et språk tilpasset barn
- levere strukturert innhold som kan vises direkte i grensesnittet
- unngå irrelevante eller uforutsigbare tillegg

Prompten blir dermed en viktig del av applikasjonens logikk, selv om den ikke er synlig for sluttbruker.

---

## Promptens rolle i KidChef
I KidChef er målet ikke bare å få et kreativt svar fra KI, men et svar som kan brukes direkte i applikasjonen. Dette innebærer at prompten må bidra til konsistens og forutsigbarhet i responsen.

En godt utformet prompt kan redusere behovet for komplisert etterbehandling av KI-svar i backend, samtidig som den gir bedre kontroll over brukeropplevelsen i frontend. Prompting blir på denne måten et viktig virkemiddel for å sikre at KI-oppskriftene faktisk fungerer som en del av løsningen, og ikke bare som fritekst.

---

## Funksjonelle hensyn
Fra et funksjonelt perspektiv må promptene støtte prosjektets grunnleggende flyt. De må ta høyde for at brukerinput kan være kort, ufullstendig eller upresis, og samtidig sørge for at KI-responsen følger en forventet struktur.

Promptene må også gjøre det mulig å justere hvordan KI-en responderer uten at frontend eller brukerinteraksjon endres. Dette gir fleksibilitet ved videreutvikling og gjør det enklere å forbedre kvaliteten på oppskriftene over tid.

---

## Ikke-funksjonelle hensyn
Utover funksjonalitet spiller også lesbarhet, stabilitet og forutsigbarhet en viktig rolle. Promptene må være forståelige og vedlikeholdbare for meg, slik at det er mulig å forklare og justere dem ved behov.

Samtidig må promptene bidra til å begrense uønskede variasjoner i KI-responsen. For et prosjekt rettet mot barn er det særlig viktig at språket er trygt, tydelig og konsekvent, noe som stiller høyere krav til hvordan forespørslene formuleres.

---

## Utfordringer knyttet til prompting
En sentral utfordring med promting er at kvaliteten på KI-responsene i stor grad avhenger av hvordan promptene er formulert. Siden applikasjonen skal generere oppskrifter basert på relativt enkel brukerinput, må prompten fungere som et bindeledd mellom ustrukturert input fra bruker og et strukturert, barnevennlig resultat.

En konkret utfordring er å sikre at KI-modellen forstår hva som faktisk er viktig i brukerens input. Brukere kan skrive ingredienser på ulike måter, bruke ufullstendige setninger eller blande inn irrelevante ord. Prompten må derfor være robust nok til å gi konsistente resultater selv når inputen varierer.

Videre må prompten styre format og nivå på innholdet. I KidChef er målgruppen hovedsakelig barn, noe som stiller krav til språk, kompleksitet og tydelighet. Uten tydelige instruksjoner kan KI generere oppskrifter som er for avanserte, inneholder uklare steg eller bruker begreper som ikke er tilpasset målgruppen.

En annen utfordring er balansen mellom fleksibilitet og kontroll. For stramme prompt-instruksjoner kan føre til rigide eller repetitive svar, mens for åpne instrukser kan gi uforutsigbare resultater. Å finne riktig nivå av styring er derfor en iterativ prosess som krever testing og justering.

Til slutt innebærer prompting også et vedlikeholdsansvar. Små endringer i prompt-struktur kan ha stor effekt på resultatet, noe som gjør det nødvendig å forstå sammenhengen mellom formulering, kontekst og output. Dette gjør prompting til en viktig del av den tekniske løsningen, selv om den ikke er synlig for sluttbruke

---

## Vurdering
Prompt-design fremstår som en sentral del av løsningen i KidChef, selv om den ikke er synlig for sluttbruker. Kvaliteten på promptene har direkte innvirkning på hvor brukbar, forståelig og forutsigbar KI-funksjonaliteten blir.

Analysen viser at bevisst og strukturert arbeid med prompting er avgjørende for å få KI til å fungere som en pålitelig del av applikasjonen, og ikke bare som en kreativ tekstgenerator. Dette gjør deep prompt-analyse til et naturlig og viktig element i analysefasen av prosjektet.
