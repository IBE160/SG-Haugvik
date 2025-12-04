# Refleksjonsrapport - Programmering med KI

## 1. Gruppeinformasjon

**Gruppenavn:** 
[SG-Haugvik]

**Gruppemedlemmer:**
[210637/anette.haugvik@himolde.no]
[05.12.2025]
---
## 2. Utviklingsprosessen

### 2.1 Oversikt over prosjektet
I dette prosjektet utviklet jeg en enkel og brukervennlig webapplikasjon kalt KidChef, som genererer barnevennlige middagstips ved hjelp av kunstig intelligens. Brukeren kan velge ulike preferanser (for eksempel quick, pasta, chicken eller vegetarian), skrive inn ingredienser de allerede har hjemme, og deretter få et AI-generert middagstips med både ingrediensliste og steg-for-steg-instruksjoner. 

I tillegg til å utforske KI-drevet utvikling var et viktig mål å lage et verktøy som senker terskelen for barn og unge til å delta på kjøkkenet. Målet var å bidra til økt selvstendighet, mestringsfølelse og kreativitet, ved at appen gir trygge, tydelige og tilgjengelige instrukser som gjør matlaging mindre skummelt og mer motiverende for barn.

Hovedmålet med applikasjonen var todelt:
1. Teknologisk
- Å undersøke hvordan KI kan brukes både som utviklingsverktøy og som selve motoren i applikasjonen — altså hvordan en LLM:
- kan støtte utviklingsprosessen (debugging, arkitektur, kodegenerering), og samtidig generere innhold til sluttbrukeren (oppskrifter).
2. Pedagogisk / Kundeperspektiv
- Å skape et verktøy som inspirerer til læring, utforsking og mestring gjennom matlaging, og som gjør det enklere for barn og foreldre å lage middag sammen.

Min arbeidsmåte
Jeg jobber som regel slik at systemet først skal snakke sammen før jeg bygger funksjonalitet. Det vil si at jeg prioriterer:

- at frontend og backend kommuniserer riktig
- at API-kall fungerer
- at modellene returnerer data
- at datastrømmen er stabil

Først når dette fundamentet fungerer, går jeg videre til å bygge ut funksjonaliteten, legge inn logikk og forbedre brukeropplevelsen.
Dette prosjektet følger samme filosofi: det er fortsatt mye igjen av selve feature-utviklingen, men systemintegrasjonen er på plass, noe som er en av de viktigste milepælene i enhver applikasjon.


### 2.2 Arbeidsmetodikk
Arbeidet ble utført iterativt, der jeg jobbet i korte sykluser med planlegging, implementering, testing og forbedring. Prosessen fungerte slik:

Jeg beskrev behov eller problemer som oppsto.
KI foreslo løsninger, arkitekturvalg eller konkrete kodeendringer.
Jeg vurderte forslagene, implementerte dem og testet resultatet.
Når noe feilet, ga jeg KI-en detaljerte feilmeldinger og lot den analysere hva som burde endres.
På denne måten ble KI brukt som en kontinuerlig sparringspartner, mens jeg selv hadde ansvar for styring, vurdering og kvalitetssikring.

Jeg
- formulerte krav og funksjonalitet
- tok rollen som kunde, designer og tester
- vurderte kvaliteten på løsninger
- integrerte og testet koden i praksis

KI (ChatGPT og Gemini)
- foreslo programstruktur og arkitektur
- forklarte utviklingsvalg og feil
- genererte kodeforslag og forbedringer
- fungerte som "scrummaster" ved å foreslå neste steg

Dette gjorde at jeg kunne holde fokus på styring og forståelse, mens KI hjalp framdriften og teknisk problemløsning.
Verktøy for samarbeid og utvikling

For å gjennomføre prosjektet brukte jeg:

- ChatGPT (GPT-5.1) som hoved-KI-agent i utviklingsprosessen
- Google AI Studio / Gemini API, som også ble brukt aktivt i selve applikasjonen
- Visual Studio Code som utviklingsmiljø
- React + TypeScript i frontend
- Node.js med Express i backend
- Browser DevTools (Console & Network) for feilsøking
- Samarbeidet med KI fungerte som en kontinuerlig dialog: jeg testet, rapporterte hva som skjedde, og KI svarte med nye forslag, forklaringer eller forbedringer.

KI var involvert i alle deler av utviklingsløpet, blant annet:
- Planlegging: definere mål, funksjonalitet og teknologistack
- Design & arkitektur: strukturering av komponenter, API-ruter og dataflyt
- Programmering: generere kode i både frontend og backend
- Debugging: forklare feilmeldinger som
- JSON-parsingproblemer
- Gemini API 404-feil
- React-feilen "Objects are not valid as a React child"
- Forbedringer: optimalisering av komponenter og feilhåndtering

Testing: analysere testresultatene jeg rapporterte tilbake

KI fungerte som utviklingspartner som forsterket tempo, kvalitet og læring gjennom hele prosjektet.

### 2.3 Teknologi og verktøy
I prosjektet brukte jeg en kombinasjon av moderne webteknologier og KI-verktøy. Disse ble valgt fordi de er enkle å komme i gang med, godt støttet av KI-modeller, og passer godt med målsetningen om å lære AI-drevet utvikling.

**Frontend**
- React (med hooks som useState)
- TypeScript (gir bedre feilsøking og forståelse av komponenter)
- Vite (utviklingsserver og byggverktøy)
- TailwindCSS (for rask og enkel styling)

**Backend**
- Node.js (runtime-miljø)
- Express.js (enkel backend med én API-route)
- CORS (for kommunikasjon mellom server og frontend)
- dotenv (for sikker håndtering av API-nøkler)

**KI-verktøy**
- Google Gemini API  
  Brukt til å generere oppskrifter basert på preferanser og ingredienser.  
  Jeg brukte Gemini sitt REST-API direkte i backend fordi SDK-ene enten manglet riktig modell eller ga ustabile 404-feil. REST-kallet ble dermed den eneste stabile løsningen.
 
- ChatGPT (GPT-5.1)
Brukt som supervisor, programmerer, kvalitetssikrer, arkitekt og generell sparringspartner
Hjalp spesielt med: arkitekturvalg, feilretting, React-komponenter, backend-feil, parsing av JSON og modellvalg

### 2.4 Utviklingsfaser
Utviklingsprosessen fulgte en iterativ modell der jeg byttet mellom rollene kunde, designer, arkitekt, programmerer og tester, mens KI fungerte som både utviklingspartner og supervisor. Under beskrives fasene i prosjektet.

**Planlegging**
I planleggingsfasen jobbet jeg som kunden som beskrev behovet, og som analytiker som definerte hva applikasjonen skulle gjøre. Målet var å skape en enkel og barnevennlig oppskriftsgenerator, der KI skulle foreslå middager basert på brukerens preferanser og ingredienser.

Hva jeg gjorde i denne fasen
- Definerte idéen: en app der barn og foreldre kan få raske, enkle middagstips generert av KI.
- Avklarte funksjonalitet: preferanser → ingredienser → KI genererer oppskrift.
- Bestemte teknologier sammen med KI (React frontend, Express backend, Gemini som KI-modell).
- Diskuterte brukeropplevelse: enkel, oversiktlig og barnevennlig grensesnitt.

Hvordan KI ble brukt i denne fasen
- Som analytiker: KI hjalp med å formulere krav og avgrense funksjonalitet.
- Som arkitekt: foreslo filstruktur og teknologistack.
- Som UX-designer: foreslo en enkel, logisk brukerflyt.
- Som supervisor: foreslo neste steg når jeg stod fast.

Eksempler på planleggings-prompter
- “Jeg vil lage en app som genererer barnevennlige middagsoppskrifter. Hvilken teknologi bør jeg bruke?”
- “Lag en filstruktur for en enkel React/Express-app.”
- “Hvordan bør komponentene se ut?”

**Utvikling**
Denne fasen var den mest omfattende. Jeg jobbet iterativt, og hver feil, hver utfordring og hver nye idé ble håndtert sammen med KI som kvalitetssikrer og programmerer. Dette er fasen som er enda pågående også. 

Frontend-utvikling:

Hva jeg gjorde
- Opprettet React-prosjektet i Vite.
- Laget komponenter:
- PreferenceSelector
- RecipeInput
- AiButton
- RecipeResults
- Implementerte state-håndtering med useState.
- Testet at UI oppdaterte riktig når data kom inn.

Hvordan KI ble brukt
- Skrev første versjon av komponentene.
- Forklarte React-feil, spesielt TypeScript-feil.
- Hjalp med omstrukturering av komponentprops.
- Foreslo beste praksis for state-håndtering.


Backend-utvikling:

Hva jeg gjorde
- Opprettet en Express-server med én route: /api/ai-suggest
- Testet API-kall med fetch fra frontend.
- Konfigurerte CORS.
- Implementerte sikring av API-nøkkel med dotenv.

Hvordan KI ble brukt
- Skrev store deler av første utkast av backend.
- Foreslo hvordan forespørselen til Gemini API burde struktureres.
- Hjalp med å håndtere alle feil som oppsto med modellvalg, JSON-parsing og feilformaterte svar.
- Lærte meg hvordan Gemini strukturerer content-responses.

**Integrasjon**

Hva jeg gjorde:

- Koble frontend til backend.
- Sikret at request-/response-format samsvarte.
- Testet at en oppskrift ble generert og vist i frontend.
- Hvordan KI ble brukt
- Foreslo hvordan jeg burde håndtere JSON-extracting fra KI-responsen.
- Hjalp med feilsøking når React klaget på "Objects are not valid as a React child".
- Rettet feil i RecipeResults-komponenten.

**Testing og forbedring**

Hva jeg gjorde

- Testet applikasjonen gjennom nettleseren.
- Sjekket feilmeldinger i DevTools og terminal.
- Justerte logikk i backend og frontend basert på testresultater.

Hvordan KI ble brukt

- Som kvalitetssikrer: analyserte feilmeldinger og foreslo fiks.
- Som scrummaster: foreslo neste steg når feil var løst.
- Som debugger: hjalp med alt fra små stavefeil til komplekse modellproblemer.


---
## 3. Utfordringer og løsninger

### 3.1 Tekniske utfordringer

**Utfordring 1: [Utviklingsmiljøet-krasjet]**
Problem:
En av de første store tekniske utfordringene var at prosjektet lå i en mappe som var synkronisert med OneDrive. Dette førte til en rekke mystiske og uforutsigbare feil i Vite/Tailwind/PostCSS-byggekjedene, slik som:

- “File: … index.css: undefined:NaN”
- problemer med postcss.config-filene
- node_modules som ikke lot seg slette
- konstant gjenoppståtte byggfeil selv etter reinstallering
Dette gjorde at applikasjonen ikke kunne starte lokalt, og det var uklart hvilke av feilene som var reelle og hvilke som kom av OneDrive.

Løsning:
Etter omfattende feilsøking fant jeg ut at problemet skyldtes at OneDrive låste filer mens Vite forsøkte å lese/skrive dem. Løsningen var å flytte hele prosjektet ut av OneDrive og inn i en lokal mappe på C:\–disk. Etter dette fungerte node_modules, Tailwind og Vite umiddelbart uten feil.

KI sin rolle:
KI bidro til å identifisere OneDrive som en potensiell årsak, noe jeg aldri ville tenkt på selv fordi feilene så tilfeldige ut. KI foreslo å flytte prosjektet lokalt, og dette viste seg å være avgjørende for at alt fungerte. Uten KI ville denne feilen sannsynligvis tatt svært mye lenger tid å oppdage og løse. Dette viste en viktig begrensning: KI forstår ikke målgruppen uten svært tydelige rammer, og kan lett generere kreative, men urealistiske forslag.

**Utfordring 2: [Fancy-forslag]**
KI foreslo retter som var for avanserte eller urealistiske for barn

En utfordring oppstod da jeg testet applikasjonen og så at Gemini stadig foreslo for avanserte eller lite barnevennlige retter. Den brukte ofte alle ingrediensene jeg skrev inn, selv om kombinasjonen ikke ga mening, eller den foreslo retter som «kremet pasta med trøffel» selv når bare egg og ost var valgt. Dette viste en kjent svakhet ved store språkmodeller: de prioriterer kreativitet fremfor praktisk gjennomførbarhet.

Løsning:

Jeg måtte gjøre prompten langt mer presis. Jeg innførte strenge regler:
- Rettene måtte være enkle, barnevennlige og korte
- Modellen fikk kun bruke 1–3 av ingrediensene som ble valgt
- Den fikk ikke lov til å finne på nye ingredienser, bortsett fra småting markert som OPTIONAL (f.eks. salt eller smør)
- Fancy retter ble eksplisitt forbudt
- Navn på retten ble påbudt
- JSON-strukturen ble strammet inn ytterligere

Dette førte til at Gemini begynte å levere mer realistiske, enkle oppskrifter som faktisk passer for målgruppen.

KI sin rolle:
KI bidro til å iterere frem promptreglene, men problemet var også et resultat av at modellen er vanskelig å styre uten svært presise instruksjoner. Jeg lærte at god prompt-engineering er avgjørende når man vil ha en bestemt stil, tone eller vanskelighetsgrad. Denne prosessen ga meg en mye dypere forståelse av hvordan LLM-er må “rammes inn” for å gi brukerrelevant output.

**Utfordring 3: [404]**
Problem:
En sentral utfordring var at modellene som vises i Google AI Studio ikke er de samme modellnavnene som API-et faktisk støtter.
Backend fikk gjentatte ganger feilen:
“models/gemini-1.5-flash is not found for API version v1beta …”
selv om modellen eksisterte i UI.
Dette skyldes at Google AI Studio viser UI-modellnavn som ikke samsvarer med modellnavnene API-et faktisk bruker.

Dette gjorde at backend ikke klarte å generere innhold, og jeg måtte forstå forskjellen mellom:

- modellnavn i UI
- modellnavn i REST API
- hvilke versjoner som faktisk støtter generateContent
- forskjellen mellom preview og stable

Løsning:
Jeg hentet en liste over støttede modeller via ListModels-endpointet og fant at API-et ikke støttet modellen jeg brukte. Riktig og stabil modell var:
models/gemini-2.5-flash:generateContent
Etter å ha byttet til denne modellen fungerte backend umiddelbart uten 404-feil.

KI sin rolle:
KI foreslo flere modellnavn, men noen av dem var feil eller ikke kompatible med API-versjonen, noe som skapte 404-feil. Samtidig hjalp KI med å forklare hvordan modellversjoner fungerer, og hvordan ListModels kan brukes for å verifisere hvilke modeller som faktisk er tilgjengelige. Dette gav bedre forståelse av dokumentasjon og API-håndtering.


### 3.2 Samarbeidsutfordringer
Selv om jeg jobbet alene på selve prosjektet, har jeg erfaring fra å jobbe i utviklingsteam, og jeg kjenner igjen flere typiske samarbeidsutfordringer som også ble relevante indirekte i dette KI-prosjektet. I tradisjonelle utviklingsprosjekter oppstår det ofte friksjon fordi utviklere har ulike preferanser når det gjelder arbeidsmetodikk, navngivningskonvensjoner, prosjektstruktur og måter å løse problemer på. Slike forskjeller kan føre til misforståelser, unødvendig kompleksitet og tid brukt på å rydde opp i kode eller dokumentasjon.

Selv i dette prosjektet, hvor KI i praksis fungerte som min “medutvikler”, opplevde jeg lignende situasjoner. KI foreslo ofte alternative måter å strukturere komponenter, backend-kode eller API-er på. Noen ganger foreslo KI navngivning eller arkitektur som ikke var konsistent med tidligere steg, noe som ligner de utfordringene som oppstår mellom mennesker i et team. Dette gjorde at jeg måtte gå aktivt inn i rollen som teknisk koordinator — jeg måtte sikre konsistens, justere forslag og ta endelige avgjørelser om hvordan prosjektet skulle struktureres.

I et menneskelig team ville denne typen utfordringer vanligvis løses gjennom felles retningslinjer, kodekonvensjoner, god kommunikasjon og jevnlige avklaringer. I dette prosjektet løste jeg det ved å be KI om å tilpasse seg tidligere mønstre, være mer konsekvent, og forklare begrunnelsen for valg som ble foreslått. Slik ble samarbeidet mer stabilt og mindre fragmentert.


### 3.3 KI-spesifikke utfordringer
Bruken av KI som både utviklingsverktøy og del av applikasjonens funksjonalitet introduserte en rekke utfordringer som tradisjonelle utviklingsmiljøer ikke nødvendigvis møter på samme måte. Disse utfordringene var ikke primært tekniske i klassisk forstand, men sprang ut av begrensninger i KI-modellenes evne til å forstå kontekst, følge presise instruksjoner, og levere konsistent strukturert output. Dette viser et viktig poeng fra kurset: KI kan innta rollene i et utviklingsteam, men kvaliteten på “arbeidet” avhenger sterkt av kvaliteten på prompt, kontekst og menneskelig kontroll.

1. Inkonsekvent eller feilaktig kodegenerering

En av de mest gjennomgående utfordringene var at KI-modellen produserte kode som ikke var konsistent eller fullt ut kompatibel med prosjektets teknologivalg.
Selv om modellen kunne generere React-komponenter, Express-endepunkter og konfigurasjonsfiler, skjedde det ofte at:
- koden var syntaktisk korrekt, men ikke kjørbar
- modellen antok en annen prosjektstruktur enn den som faktisk eksisterte
- den introduserte rammeverk eller funksjoner som ikke var en del av prosjektet
- små misforståelser i prompten førte til store avvik i løsningene

Denne utfordringen viser et sentralt innsiktspunkt: KI fungerer ikke som en deterministisk programmerer, men som en statistisk prediktiv modell. Den “gjetter” hva som passer, basert på treningsdata, noe som krever betydelig menneskelig validering.

Håndtering:
Problemet ble løst gjennom iterativ kommunikasjon, mer presise promter og manuell debugging. Dette understreker viktigheten av å kombinere KI med kritisk fagkompetanse — KI kan produsere forslag, men ikke kvalitetssikre dem selv.

2. Misforståelser i semantikk og kontekst

En betydelig utfordring var at KI ofte misforsto deler av konteksten, til tross for detaljerte beskrivelser. Dette førte til:
- endring av filnavn uten grunn
- omskriving av arbeid som allerede fungerte
- inkonsekvente referanser til API-endepunkter og variabler
- forslag basert på andre rammeverk enn de som faktisk ble brukt

Dette illustrerer en iboende svakhet ved LLM-er: selv om de fremstår som “intelligente”, har de ingen faktisk forståelse. De opererer utelukkende på mønstergjenkjenning. Når kontekst ikke er eksplisitt nok eller når historikken blir lang, oppstår semantiske misforståelser.

Håndtering:
Dette ble møtt ved å:
- dele opp oppgaver i svært små delsteg
- gjenta prosjektinformasjon for å “stabilisere” KI
- verifisere hvert enkelt svar før implementering

3. Ugyldig eller ustrukturert JSON-generering fra KI

Når Gemini-modellen ble brukt til å generere selve middagstipsene, oppstod et annet lag av utfordringer. KI-modeller er notorisk ustabile i produksjon av strukturert JSON. I dette prosjektet resulterte det i:
- JSON pakket inn i Markdown-blokker (json … )
- miks av vanlig tekst og JSON i samme svar
- manglende anførselstegn eller feil formatering
- flere JSON-objekter i samme svar

Dette forårsaket parse-feil i backend og stoppet hele flyten mellom server og frontend.

Dette problemet er velkjent i KI-forskning og illustrerer at modeller ikke er deterministiske JSON-generatorer. De prioriterer “naturlig språk” fremfor “maskinlesbar struktur”, med mindre man bygger strenge sikkerhetsmekanismer rundt dem.

Håndtering:

Det ble utviklet en robust JSON-ekstraksjonsstrategi hvor serveren:
- henter hele teksten
- identifiserer første “{” og siste “}”
- trekker ut kun den delen
- prøver å parse trygt
Dette forbedret stabiliteten betydelig og demonstrerte viktigheten av defensive teknikker når KI brukes i API-integrasjoner.

4. Feil modellvalg og API-inkonsistens

En utfordring som skapte mye tidstap var at KI foreslo modeller som:
- ikke eksisterte
- var knyttet til feil API-versjon
- ikke støttet metoden generateContent
- kun var tilgjengelig i Google AI Studio, ikke i API
- Dette resulterte i gjentatte 404-feil og uforståelige API-responser.
 Denne utfordringen oppstår fordi LLM-er ofte har utdatert eller unøyaktig kunnskap om tredjeparts API-er. Dette viser hvorfor KI ikke bør ta beslutninger alene når det gjelder versjonering og kompatibilitet.

Håndtering:
Jeg hentet selv modelloversikten fra Gemini API og oppdaterte serveren basert på dette, i stedet for å stole på KI. Etter dette ble implementeringen mye mer forutsigbar.

**Kort oppsumert betyr det at:**

De KI-relaterte utfordringene i prosjektet var ikke tilfeldige — de illustrerer fundamentale begrensninger i dagens LLM-teknologi når den brukes i programvareutvikling:
- manglende determinisme
- manglende kontekstforståelse
- ustabil generering av strukturert data
- utdatert eller feil API-kunnskap
- behov for menneskelig kontroll og validering

Alt dette understreker hvorfor KI best fungerer som en assistent per nå, ikke en autonom utvikler.
Prosjektet gjorde svært tydelig hvor viktig kritisk vurdering, prompt-design, iterasjon og menneskelig kvalitetskontroll er når KI blir brukt i arbeidsprosesser som tradisjonelt krever presisjon.
---

## 4. Kritisk vurdering av KI sin påvirkning

### 4.1 Fordeler med KI-assistanse

**Effektivitet og produktivitet**
Bruken av KI hadde en svært tydelig effekt på arbeidshastigheten i prosjektet. I stedet for å bruke tid på å lete etter dokumentasjon, forstå API-endringer eller starte komponenter fra scratch, kunne jeg få raske og konkrete utkast som jeg deretter tilpasset. Dette gjorde at utviklingsprosessen gikk betydelig raskere enn om alt skulle vært skrevet manuelt.

Eksempler på oppgaver som gikk mye raskere:
- Å sette opp hele React-strukturen med komponenter, props og state-håndtering. KI genererte både skjelett og ferdige komponenter på sekunder.
- Å etablere en Express-server med CORS, routing og miljøvariabler. Normalt krever dette googling og oppsett, men KI foreslo en ferdig serverfil umiddelbart.
- Å skrive parsing-logikken for å hente ut gyldig JSON fra ustrukturert KI-output. Dette ville ha tatt langt lengre tid uten forslag fra KI.
- Feilsøking ble også raskere fordi KI forklarte feilmeldinger og foreslo løsninger, slik at jeg slapp å teste mange ting tilfeldig.

Samlet sett førte KI-assistanse til en vesentlig reduksjon i utviklingstid og gjorde det mulig å komme fra idé til fungerende prototype på relativt kort tid.

**Læring og forståelse**
Prosjektet ga en uventet sterk læringseffekt, fordi KI fungerte som en aktiv mentor gjennom hele prosessen. I stedet for å kun følge tutorials, fikk jeg forklaringer direkte knyttet til min egen kode. Det gjorde forståelsen mer relevant og anvendbar.

Jeg lærte spesielt mye om:
- React-arkitektur (props, state, komponentstruktur og dataflyt)
- Hvordan en fullstack-applikasjon henger sammen (fra UI → API → KI-modell → tilbake til UI)
- API-kommunikasjon og JSON-håndtering, som er kritisk når man bruker generative modeller
- KI-modellers begrensninger, særlig i generering av strukturert data
- Prompt-design, som viste seg å være avgjørende for å få brukbare svar
- Utviklerroller, fordi KI tok deler av rollen som designer, arkitekt og programmerer

KI bidro også til dypere forståelse av konsepter, fordi jeg kunne stille spørsmål på et hvilket som helst nivå — både helt grunnleggende (“hvorfor får jeg denne feilen?”) og mer komplekse (“hvorfor returnerer Gemini tekst i stedet for JSON?”).
På den måten ble læringen både tilpasset og umiddelbar.

**Kvalitet på koden**
Selv om ikke all kode KI genererte var feilfri, bidro den samlet sett til bedre kodekvalitet i prosjektet. KI foreslo moderne og idiomatisk bruk av både React og Express, og gjorde meg oppmerksom på mønstre og beste praksis jeg kanskje ikke ville valgt selv.

Eksempler på kvalitet som ble forbedret:
- KI foreslo å splitte frontend i mindre, gjenbrukbare komponenter (f.eks. PreferenceSelector, RecipeInput, RecipeResults), noe som gav renere og mer vedlikeholdbar kode.
- KI anbefalte bruk av try/catch rundt API-kall og ryddig feilhåndtering — noe som ellers lett blir glemt i prototyping.
- Parsing-logikken for AI-svar ble gjort mer robust ved å trekke ut JSON fra ustrukturert tekst, og ikke stole på at modellen gir perfekt format.
- Serveroppsettet ble mer profesjonelt strukturert med miljøvariabler, CORS-håndtering og tydelig modulinndeling.
- KI foreslo forbedringer i navngivning, feilmeldinger og struktur som gjorde koden mer lesbar.

Selv når KI foreslo “feil” kode, førte det til diskusjon og justeringer som igjen forbedret min egen forståelse — og dermed sluttkvaliteten.

### 4.2 Begrensninger og ulemper

**Kvalitet og pålitelighet:**
En av de største utfordringene var at KI ikke alltid leverte korrekt eller fungerende kode. Selv med identiske prompts kunne output variere betydelig, noe som gjorde utviklingen mindre forutsigbar. Dette skapte flere konkrete problemer:

- Feil modellnavn i Gemini API, som førte til gjentatte 404-feil fordi KI foreslo modeller som ikke eksisterte eller ikke støttet generateContent.
- En del av feilene skyldtes også at Google AI Studio viste modellnavn som ikke finnes i API-et, noe som skapte uklarhet og førte til flere 404-feil.
- Kode som ikke kompilerte, spesielt i React – f.eks. feil props, manglende typer eller ugyldig JSX.
- Ugyldig JSON, hvor AI returnerte kodeblokker, backticks eller tekst blandet med JSON, noe som førte til parsing-feil i backend.
- Ustabil responsstruktur, der KI noen ganger returnerte arrays og andre ganger ikke, noe som gjorde frontend-logikken uforutsigbar.

Disse utfordringene viser at KI ikke kan regnes som en pålitelig kilde alene, og at menneskelig vurdering og overprøving er helt avgjørende. KI kan bistå, men den krever kontinuerlig kontroll, testing og korrigering for å sikre kvalitet.

**Avhengighet og forståelse:**
En potensiell ulempe var faren for å bli for avhengig av KI som problemløser. KI kan generere ferdige løsninger uten at brukeren nødvendigvis forstår hele logikken. I enkelte tilfeller oppdaget jeg at:

- Jeg hadde implementert deler av kode uten full forståelse av hvorfor den fungerte.
- Det var lett å falle i fellen av å “kopiere og lime inn” fremfor å analysere og validere løsningen grundig.
- KI av og til skjulte kompleksiteten heller enn å forklare den — særlig når løsningen var lang, eller modellen antok ting i stedet for å basere seg på faktisk kode.

Dette viser at KI kan hemme læringsprosessen dersom man ikke aktivt stopper opp og spør hvorfor.

**Kreativitet og problemløsning:**
KI kan både utvide og begrense kreativiteten. I dette prosjektet var det særlig to områder hvor kreativiteten ble påvirket:

1. Løsningsforslagene ble ofte like
KI foreslo lignende filstruktur og komponentdesign gjentatte ganger, noe som gjorde det lett å bare følge "standardveien" fremfor å utforske alternative tilnærminger.

2. For raske svar hemmer refleksjon
Når man får et ferdig forslag med én gang, hopper man lett over å tenke på alternative teknologivalg, potensielle arkitekturer eller mer kreative interaksjonsdesign.

Dette kan gjøre utvikleren mer passiv hvis man ikke aktivt forsøker å forstå og utfordre løsningene modellen foreslår.

**Misforståelser og kontekttap**
KI-modeller mister ofte konteksten eller glemmer tidligere instruksjoner, noe som fører til misforståelser — særlig i lengre utviklingsløp.

Eksempler:
- KI endret komponentnavn selv om jeg uttrykkelig ba den slutte.
- Modellen foreslo nye måter å strukturere backend på uten å ta hensyn til tidligere valg.
- KI glemte hvilke props som fantes og foreslo nye som ikke eksisterte.

Dette førte til frustrasjon og ekstra arbeid, og demonstrerte at KI fortsatt har begrensninger når det gjelder konsistens i større prosjekter.

**Begrensning:** 
KI-modellen produserte ofte retter som var for avanserte eller upraktiske for barn, og brukte alle ingrediensene jeg oppga – selv når det ikke ga mening. Dette krevde at jeg laget en mye strengere prompt med klare regler for enkelhet, antall ingredienser og stil. Dette viser en viktig begrensning: KI forstår ikke målgruppen uten eksplisitt styring, og kan lett generere kreative, men urealistiske løsninger.

### 4.3 Sammenligning: Med og uten KI
Å sammenligne utviklingsprosessen med og uten KI synliggjør tydelig hvordan moderne språkmodeller endrer både arbeidsflyt, læringsprosess og sluttresultatet. KidChef-prosjektet kunne i teorien vært gjennomført uten KI, men det ville vært en helt annen type oppgave og langt mer tidkrevende – spesielt siden prosjektet brukte både frontend, backend, API-integrasjoner og asynkron kommunikasjon. 
I tillegg kommer det veldig an på kompetanse hos de som skal utvikle. 

Uten KI måtte alle deler av systemet blitt designet, programmert og feilsøkt manuelt. Det ville innebåret:
Manuell bygging av Express-backend, routing og CORS-konfigurasjon.
Selvstendig innhenting av dokumentasjon om Gemini API, inklusive autentisering, endepunkter, modellnavn og responsformat.
Manuell parsing av AI-respons, inklusive regex-løsninger for å håndtere rotete tekst.
Full utvikling av hele React-frontend uten forslag til komponentstruktur, props, tilstandshåndtering og layout.
KI tok i praksis over ansvaret for roller som arkitekt, programmerer, feilsøker og designer, og gjorde at arbeidet kunne gå direkte fra idé til implementering uten omfattende research i forkant. Uten KI ville startfasen vært preget av mye mer dokumentasjonslesing, planlegging og strukturell utvikling før noe kunne testes.

**Flere deler av prosjektet ville vært betydelig mer krevende uten KI:**
1. Integrasjon mot Gemini API

Dokumentasjonen for Gemini er omfattende, og modellnavn, URL-struktur og responsformat er komplekst.
Uten KI ville mye tid gått til å:
- lete etter riktig modell som støtter generateContent
- forstå JSON-strukturen i responsen
- håndtere feilrespons, token-grenser og HTTP-problemer
- lage egen JSON-sanitiseringslogikk
- KI forkortet denne prosessen dramatisk.

2. Debugging av frontend

Feil som:
- “Objects are not valid as a React child”
- props-feil
- implicit “any” i TypeScript
- feil struktur i komponentene

ville vært langt vanskeligere for noen uten flere års React-erfaring. KI fungerte her nesten som en mentor som forklarte hvorfor feilen oppstod.

3. Arkitekturvalg
Uten KI ville det vært vanskeligere å velge:
- hvordan filstrukturen skulle se ut
- hvordan komponentene burde organiseres
- hvordan data skulle flyte fra input → backend → Gemini → frontend
KI tilrettela for en struktur som lot systemet “snakke sammen” tidlig, noe som er viktig for din arbeidsmåte.


Disse oppgavene er teknisk komplekse og forutsetter erfaring med API-integrasjoner, dokumentasjonslesing, datastrukturer og feilhåndtering. KI reduserte vanskelighetsgraden ved å forklare, foreslå og generere fungerende kode, noe som gjorde at jeg kunne fokusere mer på funksjonalitet enn på omfattende teknisk research.


Selv om mye ville vært mer krevende, finnes det også områder hvor arbeidet kunne vært **lettere** uten KI:

- Ingen inkonsistent eller “fantasert” kode å rydde opp i.
- Ingen behov for å håndtere feil modellnavn, tilfeldig endrede JSON-strukturer eller utdaterte API-anbefalinger.
- Ingen risiko for at KI plutselig foreslår en ny arkitektur midt i prosjektet.
- Når man skriver alt selv, har man full kontroll — noe som KI noen ganger kompliserer.

**Ville sluttresultatet vært bedre eller dårligere?**
På kort sikt:
Sluttresultatet ville sannsynligvis vært dårligere uten KI, eller i beste fall veldig mye mindre omfattende.
Det er lite realistisk å rekke både full backend, full frontend og full AI-integrasjon på samme tid innenfor tidsrammen uten KI.

På lang sikt:
Koden kunne vært mer konsistent og personlig tilpasset dersom den var skrevet manuelt fra starten.
KI genererer ofte kode som er funksjonell, men ikke nødvendigvis optimal eller elegant.

Pedagogisk:
Bruk av KI ga en mye brattere læringskurve, spesielt for React, backend-arkitektur og API-forståelse.

### 4.4 Samlet vurdering
Totalt sett hadde KI en klart positiv innvirkning på både prosess og resultat. Selv om bruken av KI også introduserte utfordringer – spesielt knyttet til inkonsistente svar, feil JSON-formatering og stadige justeringer av modellvalg – var gevinsten større enn ulempene. KI fungerte som en multifunksjonell utviklingspartner som bidro i roller som arkitekt, programmerer, problemløser og kvalitetssikrer. Det gjorde det mulig å realisere en fungerende applikasjon langt raskere enn jeg ville klart uten disse verktøyene.

Den viktigste lærdommen fra prosjektet er at KI ikke erstatter forståelse, men forsterker den. Når KI genererte feil eller ufullstendig kode, ble det nødvendig å forstå hva som faktisk foregikk i backend, API-en eller frontend-rammeverket. Dette førte til en dypere innsikt i React, Express, JSON-strukturer og API-integrasjoner enn jeg kanskje ville fått uten disse feilene. Samtidig lærte jeg hvordan man kommuniserer med KI mer presist — at gode resultater krever god kontekst og målrettede prompts.

KI var en nettoppositiv kraft i prosjektet. Den økte tempoet, støttet læringen og gjorde det mulig å bygge en helhetlig løsning som fungerer. Men prosjektet viste også at KI ikke er en «magisk knapp»: kvaliteten på resultatet avhenger sterkt av kritisk vurdering, egen forståelse og evnen til å samarbeide med KI som et verktøy — ikke som en fasit.
---

## 5. Etiske implikasjoner

### 5.1 Ansvar og eierskap
Selv om KI bidro med forslag og kode gjennom hele prosjektet, ligger det endelige ansvaret for løsningen hos meg som utvikler. KI fungerer som et støtteverktøy, men den har ikke forståelse for prosjektets kontekst, krav eller konsekvenser av valgene som tas. Det er derfor mitt ansvar å kontrollere, teste og validere alt innhold før det tas i bruk.

For å sikre kvalitet når KI genererer kode, måtte jeg gå gjennom alle forslag manuelt: teste dem opp mot applikasjonen, identifisere feil, og vurdere om løsningen faktisk var hensiktsmessig. Flere ganger leverte KI kode som var ufullstendig, ikke kjørbar eller basert på feil antakelser. Kvaliteten ble først god nok når jeg selv justerte, forenklet eller skrev om deler av logikken.

Når det gjelder opphavsrett og eierskap, regnes KI-generert kode i praksis som “assistert innhold”, og det er utvikleren som sitter med det juridiske og faglige ansvaret for sluttproduktet. KI kan ikke eie kode eller kreve rettigheter til den. Det viktigste er likevel å være transparent om at KI har vært brukt, særlig i akademiske og profesjonelle sammenhenger, slik at andre kan forstå utviklingsprosessen og vurdere arbeidet på riktig grunnlag.

### 5.2 Transparens
Det er viktig å være åpen om at KI er brukt i utviklingen fordi det gir et mer korrekt bilde av hvordan prosjektet er gjennomført. Transparens gjør det også enklere for andre å forstå hvilke deler som er KI-generert og hvilke valg som er tatt av utvikleren.

KI-bidrag kan dokumenteres ved å beskrive hvilke oppgaver KI hjalp med, og hvordan forslagene ble brukt og videre bearbeidet. Dette gir innsikt i både prosessen og læringen som har skjedd.

Manglende åpenhet kan skape usikkerhet rundt produktets kvalitet og utviklerens kompetanse. Det kan også gjøre vedlikehold vanskeligere, siden man ikke vet hvilke deler som bygger på automatiske forslag. Samtidig er det viktig å presisere at selv med KI-bruk ligger ansvaret for kvalitet og vurdering alltid hos utvikleren.

### 5.3 Påvirkning på læring og kompetanse
KI kan på kort sikt styrke læring ved å gi raske forklaringer, eksempler og løsninger som gjør det enklere å forstå nye konsepter. Samtidig ligger den største risikoen i at hyppig KI-bruk kan redusere dybdelæring. Dersom man lar KI løse problemer før man selv har forsøkt, får man mindre trening i helt grunnleggende ferdigheter som:
- systematisk feilsøking
- forståelse av hvorfor kode fungerer, ikke bare hvordan
- evnen til å lese dokumentasjon og vurdere alternativer
- arkitektonisk helhetsforståelse

Over tid kan dette føre til en kompetanseprofil der man “vet hvordan man bruker KI”, men ikke nødvendigvis forstår teknologien KI bygger på. Det kan gjøre utviklere mer sårbare dersom KI gir feil eller inkonsistente svar.

Det er derfor avgjørende å etablere en bevisst balanse: bruke KI som en mentor, ikke en krykke. KI bør være et verktøy som styrker egen læring — ikke et som gradvis erstatter den. Den langsiktige alvorligheten ligger i at manglende grunnkompetanse kan begrense videre utvikling, faglig selvstendighet og evnen til å ta komplekse vurderinger senere i karrieren.

### 5.4 Arbeidsmarkedet
Utbredt KI-bruk vil trolig endre IT-rollen, men ikke fjerne den. Rutinepregede oppgaver blir automatisert, mens roller som krever analyse, vurdering, domeneforståelse og kvalitetssikring blir viktigere.

Utviklere vil i større grad jobbe som “problemløsere og arkitekter” enn som rene kodeprodusenter. Å kunne samarbeide effektivt med KI-modeller blir derfor en nøkkelferdighet. Samtidig vil behovet for kritisk tenkning og evnen til å evaluere KI-forslag øke.

For egen karriere betyr dette at det å kombinere teknisk forståelse med evnen til å bruke KI på en smart måte blir en konkurransefordel. 

### 5.5 Datasikkerhet og personvern
I dette prosjektet ble ingen persondata delt med KI, men API-forespørsler inneholdt kode, prompts og systeminformasjon. Selv om dette regnes som lav risiko, er det viktig å være bevisst på at KI-tjenester behandler data eksternt.

En ekstra utfordring i prosjektet var håndtering av API-nøkler, som måtte lagres riktig i .env og aldri eksponeres i frontend eller GitHub. Underveis oppstod flere feil relatert til API-autorisasjon, og dette understreket hvor viktig det er å ha kontroll på nøkkelhåndtering og aldri la slike verdier lekke ut.

Risikoer inkluderer uønsket lagring av kode, potensial for datalekkasjer eller at sensitive opplysninger utilsiktet sendes til tredjeparter. Derfor bør man alltid unngå å dele persondata, interne nøkler eller konfidensiell informasjon med KI-verktøy.

Sikker bruk handler om å vite hva man sender, bruke miljøvariabler for nøkler, og følge grunnleggende personvernprinsipper.

Når man bruker KI-verktøy må man anta at alt man sender kan lagres, analyseres eller brukes til videre modelltrening, avhengig av leverandørens policy. Derfor bør man ha et «zero-trust»-prinsipp: ikke send noe til KI som du ikke kunne delt offentlig. Dette gjelder særlig personopplysninger, API-nøkler, interne systemdetaljer og sensitiv kode.

Man bør også vurdere:
- Modellens treningspolicy: blir data brukt til å forbedre modellen, eller forblir de isolert?
- Lagring: hvor lagres data (EU, USA eller globalt), og under hvilke lover?
- Tilgangsstyring: hvem i organisasjonen kan bruke KI-verktøy og hva har de lov til å sende inn?
- Valg av plattform: noen KI-tjenester (f.eks. enterprise-versjoner) tilbyr strengere sikkerhet enn åpne versjoner.

For å bruke KI på en trygg måte i utviklingsarbeid bør man:
- maskere eller anonymisere data før innsending
- aldri dele hemmelige nøkler eller passord
- være oppmerksom på at output kan inneholde feil som gir sikkerhetssårbarheter
- validere all kode KI genererer før den tas i bruk

Dette handler ikke bare om teknisk sikkerhet, men også om ansvarlig profesjonell praksis. Som utvikler må man forstå at KI ikke fritar oss for ansvar — det gjør sikkerhetsbevissthet enda viktigere.

---
## 6. Teknologiske implikasjoner

### 6.1 Kodekvalitet og vedlikehold
KI-generert kode kan være effektiv å produsere, men den skaper særskilte utfordringer for langsiktig vedlikehold. Selv om KI ofte skriver syntaktisk korrekt kode, er den ikke alltid strukturert med tanke på lesbarhet, konsistens eller skalerbarhet. Dette kan gi teknisk gjeld på sikt dersom utvikleren kun implementerer løsninger uten å forstå dem.

I mitt prosjekt opplevde jeg at KI noen ganger leverte løsninger som fungerte der og da, men som manglet forklaringer, hadde unødvendig kompleksitet, eller brukte mønstre som var vanskeligere å debugge senere. KI-kode kan også mangle helhetlig arkitektur, fordi modellen kun ser én prompt av gangen og ikke hele systemet.

Debugging av KI-generert kode er spesielt utfordrende fordi feilene ofte oppstår som en konsekvens av at KI «gjetter» hvordan komponenter bør henge sammen. Det kan føre til misforståelser i datatyper, ufullstendige responser fra API, eller manglende håndtering av edge cases. Derfor krever KI-basert utvikling en mer aktiv rolle fra utvikleren for å validere logikk, forenkle strukturer og sikre konsistens.

Kort sagt så kan KI øke produktiviteten kraftig, men den gjør det også viktigere enn noen gang å forstå kodegrunnlaget man jobber med, slik at vedlikehold og videreutvikling blir mulig og bærekraftig over tid.

### 6.2 Standarder og beste praksis
KI følger ikke alltid gjeldende industristandarder, og den kan foreslå løsninger som enten er utdaterte, ineffektive eller unødvendig kompliserte. I mitt prosjekt foreslo KI blant annet feil modellendepunkter i Gemini, bruk av deprecated funksjoner, og løsninger som ikke fungerte med moderne React-praksis (f.eks. feil bruk av props eller parsing av JSON).

Dette viser at KI ikke har sanntidsforståelse av et helt kodebase-økosystem, og derfor må alle forslag vurderes kritisk. Det er avgjørende å validere KI-generert kode mot dokumentasjon og egen faglig forståelse. Ellers risikerer man å bygge videre på svakheter som kunne vært unngått.

KI er et godt verktøy, men det er fortsatt utviklerens ansvar å sikre at løsningen følger beste praksis.

### 6.3 Fremtidig utvikling
KI vil trolig bli en integrert del av programvareutvikling fremover, og mye av rutinearbeidet kommer til å automatiseres. Dette betyr at utviklere i større grad må mestre problemløsning, arkitektur, kritisk vurdering av kode og evnen til å samarbeide med KI-systemer.

En viktig ferdighet blir å skrive presise prompts og gi riktig kontekst, siden kvaliteten på resultatet avhenger av hvordan man kommuniserer med modellen. Evnen til å forstå og kvalitetssikre KI-forslag vil bli like viktig som tradisjonell koding.

Jeg anbefaler å bruke KI som et støtteverktøy – ikke som en autopilot. Man bør bruke KI til å generere forslag, men samtidig utvikle egen kompetanse ved å lese, forstå og forbedre koden som produseres. En ansvarlig balanse mellom automatisering og menneskelig fagforståelse gir best resultater både faglig og over tid.

---
## 7. Konklusjon og læring

### 7.1 Viktigste lærdommer
1. KI er et kraftig verktøy – men krever kritisk vurdering.
Jeg erfarte at KI kan lage raske løsninger, men også feil og misforståelser som jeg måtte oppdage selv.
2. God kontekst gir gode resultater.
Kvaliteten på KI-generert kode var direkte avhengig av hvor presist jeg beskrev problemet og hvor godt jeg forstår det jeg beskriver. 
4. Debugging er fortsatt en menneskelig oppgave.
Selv om KI kan foreslå løsninger, må utvikleren forstå hva som skjer i systemet, lese feilmeldinger og strukturere prosjektet riktig.
5. Utviklingsprosessen blir mer iterativ.
I stedet for lange planleggingsfaser jobbet jeg i små, raske sykluser hvor KI foreslo endringer som jeg testet og justerte.
6. KI kan fylle mange roller, men ikke ansvar.
Arkitektur, kvalitet og sikkerhet må fortsatt sikres av utvikleren, selv om KI hjelper til i utførelsen.
7. Stabilitet krever at utvikleren overstyrer KI når nødvendig.
Etter at KI foreslo flere modellnavn som ga 404-feil i Gemini API, måtte jeg selv finne riktig modell via ListModels og endre backend fra SDK til ren REST– fordi det var den eneste stabile løsningen.
8. KI må styres hardt for å tilpasse seg målgruppen.
Da appen begynte å generere egne oppskrifter, ble det tydelig at KI ofte foreslår løsninger som ikke passer målgruppen. Den lagde avanserte eller urealistiske retter selv basert på få og enkle ingredienser. Dette lærte meg hvor viktig det er å bruke klare begrensninger og regler i prompten, slik at KI faktisk leverer det som er relevant for brukeren — ikke det som er kreativt eller fancy.

### 7.2 Hva ville dere gjort annerledes?

**teknisk**
1. Definert API-kontrakter tidlig (frontend ↔ backend)
I prosjektet oppsto flere feil fordi frontend forventet et annet JSON-format enn det backend leverte.
Hvis jeg tidligere hadde definert hvordan responsen skulle se ut, hvilke felter som alltid måtte være med, én standard for feilrespons ville jeg spart mye tid på debugging.

2. Testet modellene i Gemini Studio før integrasjon

Mange av feilene kom fra at modellen returnerte:
- Markdown i stedet for ren JSON
- API-endepunkt som ikke eksisterte
- Ulike modellnavn / versjonsfeil

Hvis jeg hadde testet modellen i Google AI Studio først, ville jeg oppdaget formatet tidligere.

3. Lagt inn robust feilhåndtering fra starten av
Parsing-feil kunne vært unngått hvis jeg brukte try/catch rundt JSON.parse, logget hele AI-responsen konsekventog og hadde en fallback hvis responsen ikke var gyldig JSON
Dette er god praksis i API-utvikling, og ville gjort utviklingen enklere.

4. Unngått å bygge UI før backend var stabil
En stor del av React-feilene (f.eks. “Objects are not valid React children”) kom fordi backend ikke leverte data i riktig format.
Det er ofte mer effektivt å:
- få backend til å fungere 100%
- mocke responsen i frontend
- koble dem sammen til slutt
- Jeg gjorde det motsatt — noe som førte til ekstra kompleksitet.

5. Dokumentert prompts og beslutninger bedre
På grunn av tidspress ble dokumentasjon ofte nedprioritert. I ettertid ser jeg at:
- bedre loggføring av prompts
- systematisk lagring av feil
- begrunnelse for tekniske valg
ville gitt bedre oversikt og redusert duplisering av arbeid.

**Bruk av KI** 
1. Planlagt arkitekturen litt tydeligere fra start.
Mange feil oppsto fordi KI og jeg gikk i ulike retninger når strukturen ikke var tydelig definert.
2. Lagret prompts og feil mer systematisk.
Dette ville gjort det lettere å lære av prosessen og unngå repetisjon av de samme problemene.
3. Brukt mer tid på testing underveis.
Flere problemer (f.eks. parsingfeil og modellvalg) kunne vært oppdaget tidligere med bedre testpraksis.
4.  Vært tydeligere mot KI når noe ikke fungerte.
Jeg erfarte at når jeg ga KI mer presis feedback — “dette løser ikke feilen, her er nøyaktig hva som skjer” — ble løsningene mye bedre.
Klare tilbakemeldinger gir bedre assistanse.


### 7.3 Anbefalinger
- Bruk KI aktivt, men aldri ukritisk.
Sjekk kode mot dokumentasjon – ikke ta alt for god fisk.

- Jobb i korte iterasjoner.
Test ofte, og gi KI tydelige tilbakemeldinger etter hvert steg.

- Lær deg grunnleggende konsepter selv.
Det gjør deg i stand til å oppdage feil KI ikke ser.

- Vær tålmodig – KI kan bomme mange ganger.
Spesielt når modeller, API-er eller teknologier endres underveis.

- Skriv egne notater underveis.
Det gjør refleksjonsdelen enklere og forbedrer egen læring.

### 7.4 Personlig refleksjon (individuelt)
**[Anette Haugvik]:**
Gjennom dette prosjektet opplevde jeg hvordan KI kan fungere både som en kraftig støtte i utviklingsarbeid og som en kilde til nye typer utfordringer. Jeg lærte tidlig at bruk av KI ikke handler om å generere kode automatisk, men om å stille presise spørsmål, forstå svarene og kontinuerlig vurdere kvaliteten på det som produseres.

Prosjektet gjorde at jeg måtte sette meg grundig inn i teknologier som React, Express, API-integrasjon og JSON-håndtering. KI ga raske forslag, men jeg måtte selv forstå hvorfor ting fungerte – eller ikke fungerte. Denne prosessen gjorde at jeg lærte mer enn jeg ville gjort ved kun å følge tradisjonelle tutorials eller oppskrifter.

Jeg erfarte også hvor viktig det er å gi KI tydelig kontekst og rammer. Uten klare instruksjoner blir resultatet fort for kreativt, feilstrukturert eller irrelevant. Når jeg derimot justerte promptene og satte tydelige krav, ble output mer stabil og nyttig. Dette ga meg bedre innsikt i hvordan dialogen med KI er en del av selve utviklingsarbeidet.

Prosjektet har gjort meg mer bevisst på både styrkene og begrensningene ved KI. Jeg ser tydelig at KI kan senke terskelen for å utforske nye områder, men at det likevel er utviklerens ansvar å forstå helheten, validere løsninger og sikre kvalitet. Denne balansen mellom automatisering og teknisk forståelse er noe jeg tar med videre.



---
## 8. Vedlegg (valgfritt)
- Skjermbilder av applikasjonen
- Lenke til GitHub repository: https://github.com/IBE160/SG-Haugvik.git
- Annen relevant dokumentasjon
---
**Ordantall:** [ca 6500]
**Forventet lengde:** 3000-5000 ord (avhengig av gruppestørrelse og prosjektets
kompleksitet)
