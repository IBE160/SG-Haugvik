# Research – Teknisk analyse av backend-løsning (Node.js + Express)

## Workflow-status
Prosjekt: ibe160 (Level 3 software)
BMAD-fase: Analyse
Aktiv workflow: research-project

## Formål med analysen
Jeg ønsker å gjøre en teknisk analyse av bruken av **Node.js med Express** som backend-løsning i prosjektet KidChef.

Formålet er å vurdere hvordan en lettvekts backend kan støtte samhandling mellom frontend og en ekstern KI-tjeneste, håndtere brukerinput, og returnere strukturerte svar på en kontrollert måte. Analysen fokuserer på backendens rolle som bindeledd mellom brukergrensesnitt og KI, ikke på detaljer rundt implementasjon eller ferdig arkitektur.

## Kontekst for vurderingen
KidChef er en webapplikasjon der brukeren legger inn ingredienser i et frontend-grensesnitt og mottar en KI-generert oppskrift som svar. Dette innebærer at backend må kunne:
- motta forespørsler fra frontend
- validere og videreformidle input
- kommunisere med en ekstern KI-tjeneste via HTTP
- returnere et ryddig og forutsigbart svar til frontend

Backend-løsningen trenger ikke å håndtere autentisering, persistens eller komplekse forretningsregler, men må være stabil, forståelig og enkel å utvide.
I denne konteksten vurderes Node.js med Express som en mulig backend-tilnærming.

## Hva er Node.js og Express
Node.js er et JavaScript-basert runtime-miljø som gjør det mulig å kjøre server-side kode utenfor nettleseren. Express er et minimalistisk rammeverk bygget på Node.js, som forenkler oppsett av servere, ruter og API-endepunkter.

Kombinasjonen brukes ofte i prosjekter der backend primært fungerer som et API-lag, og der rask utvikling og tydelig flyt mellom forespørsel og respons er viktigere enn omfattende rammeverksstruktur.

## Backendens rolle i KidChef

I KidChef skal backend fungere som et mellomledd mellom bruker og KI-tjeneste. Denne rollen innebærer blant annet:
- å samle og strukturere brukerinput før den sendes videre
- å kontrollere hvordan forespørsler til KI-tjenesten bygges opp
- å motta og tilpasse KI-respons før den sendes tilbake til frontend

Backend bidrar dermed til å redusere kompleksitet i frontend, samtidig som den gir meg bedre kontroll over dataflyt og ansvarfordeling.

## Funksjonelle hensyn

Fra et funksjonelt perspektiv må backend-løsningen støtte en enkel, men tydelig flyt:
- én forespørsel fra frontend per brukerhandling
- tydelig skille mellom input, behandling og output
- konsistent responsstruktur uavhengig av KI-respons

Backend bør også gjøre det mulig å justere hvordan forespørsler til KI-tjenesten bygges, uten at dette påvirker frontend-koden direkte. Dette gir større fleksibilitet ved videreutvikling

## Ikke-funksjonelle hensyn

I tillegg til funksjonalitet stiller KidChef krav til lesbarhet, vedlikeholdbarhet og forutsigbarhet. Backend-koden må være enkel å forstå og forklare, både for videre utvikling og for faglig vurdering.

En lettvektsløsning som Express kan bidra til dette ved å unngå unødvendig kompleksitet. Samtidig stiller en slik løsning større krav til struktur og disiplin fra utviklerens side, siden rammeverket ikke påtvinger arkitektur eller mønstre.

## Fordeler ved Node.js + Express i prosjektkontekst

En sentral fordel med denne backend-tilnærmingen er at den passer godt til prosjektets omfang. Løsningen er rask å komme i gang med, lett å justere, og egner seg for applikasjoner der backend hovedsakelig fungerer som et API-lag.

I tillegg muliggjør bruken av JavaScript på både frontend og backend en mer helhetlig forståelse av systemet, noe som kan være fordelaktig i et studentprosjekt der oversikt og sammenheng er viktig


## Utfordringer og hensyn
Samtidig finnes det forhold som må tas i betraktning:
- backend-logikken må struktureres bevisst for å unngå at all logikk samles i én fil
- manglende struktur kan gjøre løsningen vanskeligere å videreutvikle
- ansvar for validering og feilhåndtering ligger fullt på utvikler

Disse utfordringene handler primært om designvalg og kodeorganisering, ikke om teknologien i seg selv.

## Vurdering

Node.js med Express fremstår som en backend-tilnærming som passer godt til behovene i KidChef. Løsningen gir nødvendig funksjonalitet uten å introdusere unødig kompleksitet, og støtter prosjektets fokus på tydelig dataflyt mellom bruker, backend og KI-tjeneste.

Analysen bidrar til å belyse backendens rolle i systemet og danner grunnlag for videre tekniske vurderinger i prosjektet.