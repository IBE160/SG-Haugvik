# Research – Teknisk analyse av KI som utviklingsstøtte (ChatGPT)

## Workflow-status
Prosjekt: ibe160 (Level 3 software)  
BMAD-fase: Analyse  
Aktiv workflow: research-project  

---

## Formål med analysen
Jeg ønsker å gjøre en teknisk analyse av bruken av **ChatGPT** som KI-basert utviklingsstøtte i arbeidet med prosjektet.

Formålet er å vurdere hvordan et samtalebasert KI-verktøy kan støtte utviklingsprosessen i KidChef, en webapplikasjon som kombinerer brukergrensesnitt, backend-logikk og KI-basert generering av innhold. Analysen fokuserer på hvordan verktøyet kan bidra i arbeidet med idéutvikling, refleksjon og tekniske avklaringer knyttet til prosjektets funksjonalitet og arkitektur. Vurderingen omhandler verktøyets egnethet som støtte for utvikler, og ikke som en del av den tekniske løsningen som leveres til sluttbruker.

---

## Kontekst for vurderingen
KidChef utvikles som en webapplikasjon der brukeren legger inn ingredienser, sender en forespørsel til backend og mottar en KI-generert oppskrift som presenteres i brukergrensesnittet. Utviklingsarbeidet innebærer derfor flere typer beslutninger før implementasjon kan starte, blant annet avklaring av MVP, avgrensning av funksjonalitet, valg av frontend- og backend-teknologi, samt vurdering av hvordan KI-respons skal struktureres og presenteres.

I denne konteksten er det relevant å vurdere verktøy som kan støtte utvikleren i analyse- og planleggingsfasen. ChatGPT vurderes her som et generelt samtalebasert KI-verktøy som kan bidra til strukturert tenkning og refleksjon rundt disse beslutningene, uten å være integrert i applikasjonens runtime eller brukerflyt.

---

## ChatGPT som utviklingsstøtte
ChatGPT er et samtalebasert KI-verktøy som muliggjør dialog rundt problemstillinger i naturlig språk. I en utviklingskontekst kan dette verktøyet fungere som en form for teknisk sparringspartner, der jeg kan formulere spørsmål, utforske alternativer og få forklaringer på både konseptuelle og tekniske temaer.

I motsetning til API-baserte KI-løsninger, som brukes direkte i applikasjoner, er ChatGPT først og fremst et støtteverktøy for menneskelig beslutningstaking. Verdien ligger ikke i automatisering, men i dialogen som oppstår når utvikleren tester tanker, stiller oppfølgingsspørsmål og justerer problemformuleringer.

---

## Funksjonelle hensyn i analysefasen
I analysefasen av KidChef oppstår det flere funksjonelle spørsmål som må avklares før implementasjon kan starte. Dette gjelder blant annet hvilke brukerhandlinger som skal støttes i første versjon, hvordan input fra bruker skal tolkes, og hvilke krav som stilles til struktur og innhold i KI-genererte oppskrifter.

Et samtalebasert KI-verktøy kan støtte denne fasen ved å hjelpe utvikleren med å formulere og presisere funksjonelle krav, for eksempel hva som faktisk inngår i en “ferdig” oppskrift, hvilke elementer som er nødvendige for å gi verdi til brukeren, og hvilke funksjoner som kan utsettes til senere iterasjoner.

Denne typen støtte kan bidra til at funksjonalitet defineres tydeligere før tekniske løsninger velges, noe som er særlig relevant i et prosjekt der KI-generert innhold er sentralt.

---

## Ikke-funksjonelle hensyn
I tillegg til funksjonalitet må KidChef ivareta ikke-funksjonelle hensyn som forståelighet, forutsigbarhet og struktur. Siden applikasjonen presenterer KI-generert innhold direkte til sluttbruker, er det viktig at resultatet fremstår konsistent, lett å lese og enkelt å forklare faglig.

Et samtalebasert KI-verktøy kan støtte utvikleren i å tydeliggjøre disse kravene, blant annet ved å diskutere hvordan svar bør struktureres, hvilke elementer som bør være faste, og hvordan uforutsigbar KI-output kan håndteres gjennom tydelige rammer og validering.

Dette er særlig relevant i et prosjekt der kvaliteten på resultatet ikke bare avhenger av korrekt kode, men også av hvordan innholdet oppleves av brukeren.

---

## Fordeler ved samtalebasert KI-støtte
En sentral fordel ved samtalebasert KI-støtte i KidChef er at verktøyet muliggjør refleksjon før implementasjon. I stedet for å gå direkte til kode, kan utvikleren utforske ulike tilnærminger til brukerflyt, avgrensninger og KI-bruk gjennom dialog.

Verktøyet kan også bidra til raskere avklaringer rundt tekniske og konseptuelle spørsmål, for eksempel hvordan frontend og backend bør samhandle, eller hvordan KI-respons bør struktureres før den vises i grensesnittet. Dette kan redusere risikoen for omarbeiding senere i prosjektet.

I tillegg kan samtalebasert KI støtte arbeidet med dokumentasjon ved å hjelpe utvikleren med å formulere tydeligere begrunnelser og mer sammenhengende beskrivelser av valg og avgrensninger.

---

## Ulemper og begrensninger
Samtidig har samtalebaserte KI-verktøy begrensninger som er relevante i et prosjekt som KidChef. Når dialogen blir lang og kompleks, kan det bli vanskelig å holde full oversikt over tidligere avklaringer, og viktige detaljer kan gradvis forsvinne dersom de ikke eksplisitt gjentas.

Dette stiller krav til at jeg selv tar ansvar for å dokumentere viktige beslutninger underveis,
og ikke baserer seg på at verktøyet husker hele prosessen.

I tillegg kan svar fremstå overbevisende uten nødvendigvis å være fullt tilpasset prosjektets faktiske arkitektur eller kodebase. Dette stiller krav til at jeg alltid vurderer forslag kritisk og ikke behandler verktøyet som en autoritativ kilde.

---

## Vurdering
ChatGPT fremstår som et relevant KI-verktøy å vurdere som utviklingsstøtte i et prosjektet KidChef. Verktøyet er også egnet i analyse- og planleggingsfasen, der fokus ligger på forståelse, refleksjon og struktur, fremfor ferdig implementasjon.

Analysen viser samtidig at verdien av verktøyet er avhengig av bevisst bruk. ChatGPT kan støtte meg i å ta bedre informerte beslutninger, men kan ikke erstatte egen faglig vurdering. Som del av teknisk research bidrar denne analysen til å avklare hvilken rolle samtalebasert KI kan ha i en KI-assistert utviklingsprosess.