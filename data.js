/* ═══════════════════════════════════════════
   FREEK BOES · PORTFOLIO — data.js
   Bilingual content (EN / NL).
   Loaded before script.js in index.html.
═══════════════════════════════════════════ */

const DATA = {
  en: {
    status:  'Final-year student · Thomas More',
    role:    'Applied Computer Science',
    tagline: 'Software developer focused on building mobile and web applications that solve real business problems.',
    nav: { about: 'About', skills: 'Skills', work: 'Work', experience: 'Experience', education: 'Education', resume: 'Resume', contact: 'Contact' },
    hero: {
      primaryCta:   'View my work',
      secondaryCta: 'Download CV',
      availability: 'Available for graduate roles · Summer 2026',
    },
    about: {
      title: 'About.',
      body:  "I'm a final-year Applied Computer Science student at Thomas More who builds software that actually works in the real world, not just in a classroom. Three years of hands-on projects and an internship at H.Essers have taught me how to take an idea from concept to a product people use. I care about writing code that other developers can maintain, and designing experiences that make sense to the people using them.",
      body2: 'Outside of code: handball, the gym, and reading about whatever rabbit-hole technology I\'m currently obsessed with.',
      facts: [
        { label: 'Based in',   value: 'LOMMEL, BE' },
        { label: 'Experience', value: '5 YEARS'     },
        { label: 'Focus',      value: 'MOBILE · WEB · APIS' },
        { label: 'Open to',    value: 'INTERNSHIPS · JUNIOR ROLES' },
      ],
    },
    dataCard: { name: 'Name', role: 'Role', focus: 'Focus', status: 'Status' },
    skills: {
      groups: [
        { title: 'Languages'       },
        { title: 'Frameworks'      },
        { title: 'Tools & Platforms' },
      ],
    },
    featured: {
      periodRole: 'Sep 2025 – May 2026 · Software Engineering Intern',
      problem:    'Logistics coordinators at H.Essers spent significant time context-switching between Outlook and internal dispatch systems. Shipment data arriving by email had to be copy-pasted into the gateway — slow, error-prone, and hard to audit.',
      approach:   'I designed and built an Outlook Add-in that parses incoming shipment emails and surfaces structured actions inline. On the backend I extended the existing Gateway API and implemented a new Ingest API so data can flow cleanly from email into the core dispatch platform.',
      solution:   "The add-in turns a 4-minute manual task into a two-click confirmation, and the Ingest API gives operations a single source of truth for incoming shipments — complete with validation, retry and audit trails.",
      outcomes: [
        'Outlook Add-in rolled out to the logistics team',
        'Ingest API handling live shipment traffic',
        'Gateway API extended with new endpoints and auth flows',
        'End-to-end CI/CD on Azure with GitHub Actions',
      ],
      learned: [
        'Shipping software inside an enterprise release process',
        'Designing APIs for other teams to actually consume',
        'Security, auth and observability in production systems',
        'How to translate vague business requests into technical specs',
      ],
    },
    projects: {
      title: 'Other Work.',
      items: [
        { key: 'de-beerse-bende',  category: 'web-app',    name: 'De Beerse Bende',  type: 'Web Application · Team of 6', year: '2024', stack: ['Laravel','Tailwind CSS','MySQL'],  blurb: 'Full business platform for a local client — inventory, calendar, role-based auth and reporting. I owned the calendar module, contributed to the API and ran code reviews.', link: 'https://app.debeersebende.be/', github: null },
{ key: 'handbal-overpelt', category: 'client',     name: 'Handbal Overpelt', type: 'Client Website · Solo',       year: '2024', stack: ['HTML','Tailwind CSS','JS'],        blurb: 'First independent client project — a full team website for my local handball club. Responsive, deployed and still live.', link: 'https://handbalcluboverpelt.be/', github: 'https://github.com/FreekBoes/HandbalOverpelt' },
{ key: 'zentech',          category: 'e-commerce', name: 'ZenTech',          type: 'E-commerce · Solo',           year: '2024', stack: ['Laravel','Tailwind CSS'],          blurb: 'A complete webshop built for the Web Development course — product catalog, cart, checkout and an admin panel. Top marks.', link: null, github: null },
{ key: 'first-portfolio',  category: 'personal',   name: 'First Portfolio',  type: 'Personal · Solo',             year: '2023', stack: ['Bootstrap','HTML','CSS'],          blurb: 'My first portfolio, built in my own time. Kept here to show how far the craft has come.', link: 'src/First_portfolio/index.html', github: 'https://github.com/FreekBoes/freekboes.github.io' },
      ],
    },
    experience: {
      title: 'EXPERIENCE',
      items: [
        { period: 'Sep 2025 – Present', role: 'Software Engineering Intern',  company: 'H.Essers',                              location: 'Genk, BE',       summary: 'Built an Outlook Add-in, extended the Gateway API and shipped a new Ingest API for the logistics platform.' },
        { period: '2024 – 2025',        role: 'Freelance Web Developer',      company: 'Handbal Overpelt',                      location: 'Overpelt, BE',   summary: "Designed, built and maintain the club's public website. Ongoing small-scope contract." },
        { period: '2024',               role: 'Student Developer',            company: 'De Beerse Bende (school client)',       location: 'Thomas More',    summary: 'Team member on a live client project — 6-person agile team delivering a full business application over one semester.' },
      ],
    },
    education: {
      title: 'EDUCATION',
      items: [
        { period: '2023 – 2026', degree: 'Bachelor Applied Computer Science', school: 'Thomas More · Geel',    detail: 'Specialisation: Software development. Focus on mobile, web and cloud architecture.' },
        { period: '2017 – 2023', degree: 'Industrial Sciences',               school: 'Secondary · TIO',       detail: 'Mathematics, physics and the foundations that made computer science feel natural.' },
      ],
    },
    contact: {
      body: "I'm actively looking for a first role after graduation — ideally somewhere I can keep shipping real software and learning from senior engineers. If that sounds like your team, let's talk.",
    },
    footer: 'Designed and built by Freek Boes · 2026',

    projectDetails: {
      'de-beerse-bende': {
        title: 'De Beerse Bende',
        type: 'Web Application · Team of 6',
        year: '2024',
        stack: ['Laravel', 'Tailwind CSS', 'MySQL', 'PHP'],
        link: 'https://app.debeersebende.be/',
        summary: 'A full business platform built for a real local client during the second year at Thomas More. The application manages inventory, staff calendars, role-based access and reporting — all delivered within a single semester by a team of six.',
        role: 'I owned the calendar module end-to-end, contributed to the API layer, and ran code reviews across the team to keep quality consistent throughout the project.',
        whatWentWell: [
          'Delivered a fully working product to a real paying client on time',
          'Calendar module worked flawlessly in production from day one',
          'Team collaboration stayed smooth despite six people sharing one codebase',
          'Role-based auth system covered all edge cases the client needed',
        ],
        improved: [
          'Test coverage was minimal — manual testing caught most bugs but automated tests would have saved time',
          'Some API endpoints grew too large and should have been split earlier',
          'Git workflow was inconsistent at the start; we fixed it mid-project but lost time merging',
        ],
        learned: [
          'How to work directly with a client — gathering requirements, managing expectations, demoing features',
          'Agile sprint planning in a real team setting',
          'Advanced Eloquent relationships and query optimisation under real data volume',
          'Importance of code reviews for shared ownership and knowledge transfer',
        ],
        growthPoints: 'I underestimated how much client communication matters. In the first sprint I built what I thought was needed rather than what was asked. After the first demo I changed approach and started asking more questions before writing code — a habit I\'ve kept ever since.',
      },
      'handbal-overpelt': {
        title: 'Handbal Overpelt',
        type: 'Client Website · Solo',
        year: '2024',
        stack: ['HTML', 'Tailwind CSS', 'JavaScript'],
        link: 'https://handbalcluboverpelt.be/',
        summary: 'My first independent project outside school — a fully responsive public website for my local handball club. Built solo, deployed on a live domain, and still maintained today.',
        role: 'Sole developer: requirements gathering with the club board, design, development, deployment and ongoing maintenance.',
        whatWentWell: [
          'Site was live and used by the club within two weeks',
          'Mobile-first approach meant it worked perfectly on phones from day one',
          'Client (club board) was happy with the result after the first demo — no major revisions needed',
          'Clean semantic HTML made it easy to add new pages later',
        ],
        improved: [
          'No CMS was integrated — every content update requires me to edit the HTML manually',
          'Initial page-load performance could be better; images were not optimised at launch',
          'No analytics were set up, so I have no data on how people actually use the site',
        ],
        learned: [
          'How to run a project completely independently from brief to deployment',
          'Client communication without a project manager or teacher as buffer',
          'Deploying and maintaining a live production website',
          'Image optimisation and basic web performance techniques',
        ],
        growthPoints: 'I learned that a website is never really "done". After launch the club kept asking for small changes and I realised a CMS would have been the right call. Next time I build a client site I\'ll evaluate a headless CMS from the start.',
      },
      zentech: {
        title: 'ZenTech',
        type: 'E-commerce · Solo',
        year: '2024',
        stack: ['Laravel', 'Tailwind CSS', 'MySQL'],
        link: null,
        summary: 'A complete e-commerce platform built solo for the Web Development course at Thomas More. Includes a product catalogue, shopping cart, secure checkout, order management and a full admin panel. Received top marks.',
        role: 'Sole developer — responsible for architecture, backend, frontend, database design, testing and deployment.',
        whatWentWell: [
          'Full shopping flow worked end-to-end: browse, cart, checkout, order confirmation',
          'Admin panel gave full control over products, orders and users',
          'Clean MVC architecture made the codebase easy to extend',
          'Received the highest grade in the class',
        ],
        improved: [
          'No real payment gateway — used a mock checkout which is fine for school but not production-ready',
          'Search and filtering was basic; a proper search index would improve the UX significantly',
          'Email notifications for orders were not implemented due to time constraints',
        ],
        learned: [
          'E-commerce architecture: cart sessions, order state machines, inventory management',
          'Laravel middleware, service providers and the request lifecycle in depth',
          'Designing a database schema that handles real business logic correctly',
          'Building an admin panel from scratch versus using a package',
        ],
        growthPoints: 'This project taught me that planning the data model before writing a single line of code saves enormous time. I had to refactor the orders table twice because I hadn\'t thought through the relationship between orders, order items and product variants upfront.',
      },
      'first-portfolio': {
        title: 'First Portfolio',
        type: 'Personal · Solo',
        year: '2023',
        stack: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
        link: 'src/First_portfolio/index.html',
        summary: 'My very first portfolio website, built in personal time during the first year of studies. It was my introduction to web development beyond coursework — an attempt to present myself professionally before I really knew what that meant.',
        role: 'Solo project — design concept, development and deployment entirely self-directed.',
        whatWentWell: [
          'Actually shipped it — many first projects never get published',
          'Responsive layout worked across devices',
          'Passed W3C validation',
          'Gave me a concrete thing to show when applying for projects',
        ],
        improved: [
          'Design was generic Bootstrap — no visual identity or personality',
          'Content was vague; "I love coding" is not a value proposition',
          'No clear call-to-action for visitors',
          'Performance was not considered at all',
        ],
        learned: [
          'The basics of HTML, CSS and JavaScript in a real project context',
          'How to use Bootstrap and work with a component framework',
          'Why W3C validation matters',
          'That shipping something imperfect is better than waiting for perfect',
        ],
        growthPoints: 'Keeping this here as a benchmark. Comparing it to the current portfolio shows clearly how much has changed — not just technically, but in how I think about who I\'m building for and what I want to communicate.',
      },
    },
  },

  nl: {
    status:  'Laatste jaar · Thomas More',
    role:    'Toegepaste Informatica',
    tagline: 'Software developer gespecialiseerd in mobiele en webapplicaties die echte bedrijfsproblemen oplossen.',
    nav: { about: 'Over', skills: 'Skills', work: 'Projecten', experience: 'Ervaring', education: 'Opleiding', resume: 'CV', contact: 'Contact' },
    hero: {
      primaryCta:   'Bekijk mijn werk',
      secondaryCta: 'Download CV',
      availability: 'Beschikbaar voor starterfuncties · Zomer 2026',
    },
    about: {
      title: 'Over mij.',
      body:  'Ik ben een laatstejaarsstudent Toegepaste Informatica aan Thomas More en loop momenteel stage bij H.Essers. In drie jaar ben ik gegroeid van mijn eerste regel HTML naar software die dagelijks gebruikt wordt door logistieke teams. Ik hecht veel belang aan propere architectuur, doordachte UX en code die andere developers kunnen onderhouden.',
      body2: 'Naast code: handbal, de gym en verdiepen in welke tech-rabbit-hole me nu boeit.',
      facts: [
        { label: 'Locatie',   value: 'LOMMEL, BE' },
        { label: 'Ervaring',  value: '5 JAAR'      },
        { label: 'Focus',     value: 'MOBILE · WEB · APIS' },
        { label: 'Open voor', value: 'STAGES · STARTER' },
      ],
    },
    dataCard: { name: 'Naam', role: 'Functie', focus: 'Focus', status: 'Status' },
    skills: {
      groups: [
        { title: 'Talen'             },
        { title: 'Frameworks'        },
        { title: 'Tools & Platformen'},
      ],
    },
    featured: {
      periodRole: 'Sep 2025 – Mei 2026 · Software Engineering Stagiair',
      problem:    'Logistieke coördinatoren bij H.Essers verloren tijd met schakelen tussen Outlook en interne dispatch-systemen. Zendingdata in e-mails moest manueel overgetypt worden in de gateway — traag, foutgevoelig en moeilijk te auditen.',
      approach:   'Ik heb een Outlook Add-in ontworpen en gebouwd die inkomende zending-e-mails parset en gestructureerde acties in-context toont. Aan de backend heb ik de bestaande Gateway API uitgebreid en een nieuwe Ingest API geïmplementeerd zodat data proper van e-mail naar het dispatch-platform stroomt.',
      solution:   'De add-in maakt van een manuele taak van 4 minuten een bevestiging in twee kliks, en de Ingest API geeft operations één bron van waarheid voor inkomende zendingen — met validatie, retry en audit trail.',
      outcomes: [
        'Outlook Add-in uitgerold bij het logistieke team',
        'Ingest API verwerkt live zending-verkeer',
        'Gateway API uitgebreid met nieuwe endpoints en auth flows',
        'End-to-end CI/CD op Azure met GitHub Actions',
      ],
      learned: [
        'Software leveren binnen een enterprise release-proces',
        'APIs ontwerpen die andere teams effectief gebruiken',
        'Security, auth en observability in productie',
        'Vage business-vragen vertalen naar technische specs',
      ],
    },
    projects: {
      title: 'Ander Werk.',
      items: [
        { key: 'de-beerse-bende',  name: 'De Beerse Bende',  type: 'Web Applicatie · Team van 6',  year: '2024', stack: ['Laravel','Tailwind CSS','MySQL'],  blurb: 'Volledig business-platform voor een lokale klant — inventaris, kalender, role-based auth en rapportering. Ik was verantwoordelijk voor de kalender, API-bijdragen en code reviews.', link: 'https://app.debeersebende.be/', github: null },
        { key: 'handbal-overpelt', name: 'Handbal Overpelt', type: 'Klant Website · Solo',          year: '2024', stack: ['HTML','Tailwind CSS','JS'],        blurb: 'Mijn eerste onafhankelijk klantproject — een volledige teamwebsite voor mijn lokale handbalclub. Responsive, live en nog steeds in gebruik.', link: 'https://handbalcluboverpelt.be/', github: 'https://github.com/FreekBoes/HandbalOverpelt' },
        { key: 'zentech',          name: 'ZenTech',          type: 'E-commerce · Solo',             year: '2024', stack: ['Laravel','Tailwind CSS'],          blurb: 'Volledige webshop voor de cursus Web Development — productcatalogus, cart, checkout en admin-panel. Hoogste cijfer.', link: null, github: null },
        { key: 'first-portfolio',  name: 'First Portfolio',  type: 'Persoonlijk · Solo',            year: '2023', stack: ['Bootstrap','HTML','CSS'],          blurb: 'Mijn eerste portfolio, gebouwd in eigen tijd. Bewaard om te tonen hoever het vakmanschap is gekomen.', link: 'src/First_portfolio/index.html', github: 'https://github.com/FreekBoes/freekboes.github.io' },
      ],
    },
    experience: {
      title: 'ERVARING',
      items: [
        { period: 'Sep 2025 – Heden', role: 'Software Engineering Stagiair', company: 'H.Essers',                           location: 'Genk, BE',      summary: 'Outlook Add-in gebouwd, Gateway API uitgebreid en een nieuwe Ingest API uitgerold voor het logistieke platform.' },
        { period: '2024 – 2025',      role: 'Freelance Web Developer',       company: 'Handbal Overpelt',                   location: 'Overpelt, BE',  summary: 'De publieke website van de club ontworpen, gebouwd en nog steeds onderhouden.' },
        { period: '2024',             role: 'Student Developer',             company: 'De Beerse Bende (schoolklant)',      location: 'Thomas More',   summary: 'Teamlid op een live klantproject — agile team van 6 dat één semester lang een volledig business-systeem afleverde.' },
      ],
    },
    education: {
      title: 'OPLEIDING',
      items: [
        { period: '2023 – 2026', degree: 'Bachelor Toegepaste Informatica', school: 'Thomas More · Geel', detail: 'Afstudeerrichting: Software development. Focus op mobile, web en cloud-architectuur.' },
        { period: '2017 – 2023', degree: 'Industriële Wetenschappen',       school: 'Secundair · TIO',    detail: 'Wiskunde, fysica en de basis die informatica natuurlijk deed aanvoelen.' },
      ],
    },
    contact: {
      body: 'Ik ben actief op zoek naar een eerste job na mijn studie — liefst ergens waar ik echte software kan blijven bouwen en leren van senior engineers. Klinkt dat als jouw team? Laten we praten.',
    },
    footer: 'Ontworpen en gebouwd door Freek Boes · 2026',

    projectDetails: {
      'de-beerse-bende': {
        title: 'De Beerse Bende',
        type: 'Web Applicatie · Team van 6',
        year: '2024',
        stack: ['Laravel', 'Tailwind CSS', 'MySQL', 'PHP'],
        link: 'https://app.debeersebende.be/',
        summary: 'Een volledig business platform gebouwd voor een echte lokale klant tijdens het tweede jaar aan Thomas More. De applicatie beheert inventaris, personeelskalenders, rolgebaseerde toegang en rapportage — allemaal geleverd binnen één semester door een team van zes.',
        role: 'Ik was verantwoordelijk voor de kalendermodule van begin tot einde, droeg bij aan de API-laag en voerde code reviews uit over het hele team om de kwaliteit consistent te houden.',
        whatWentWell: [
          'Werkend product op tijd geleverd aan een echte betalende klant',
          'Kalendermodule werkte foutloos in productie vanaf dag één',
          'Teamcollaboratie bleef soepel ondanks zes mensen op één codebase',
          'Role-based auth dekte alle edge cases die de klant nodig had',
        ],
        improved: [
          'Testdekking was minimaal — handmatig testen werkte maar geautomatiseerde tests hadden tijd bespaard',
          'Sommige API-endpoints groeiden te groot en hadden eerder opgesplitst moeten worden',
          'Git workflow was inconsistent in het begin; halverwege bijgesteld maar tijd verloren aan merges',
        ],
        learned: [
          'Hoe je rechtstreeks met een klant werkt — requirements verzamelen, verwachtingen managen, features demonstreren',
          'Agile sprintplanning in een echte teamomgeving',
          'Geavanceerde Eloquent-relaties en query-optimalisatie onder echte datavolumes',
          'Het belang van code reviews voor gedeeld eigenaarschap en kennisoverdracht',
        ],
        growthPoints: 'Ik onderschatte hoe belangrijk klantcommunicatie is. In de eerste sprint bouwde ik wat ik dacht dat nodig was in plaats van wat gevraagd werd. Na de eerste demo veranderde ik aanpak en begon meer vragen te stellen voor ik code schreef — een gewoonte die ik sindsdien heb gehouden.',
      },
      'handbal-overpelt': {
        title: 'Handbal Overpelt',
        type: 'Klant Website · Solo',
        year: '2024',
        stack: ['HTML', 'Tailwind CSS', 'JavaScript'],
        link: 'https://handbalcluboverpelt.be/',
        summary: 'Mijn eerste onafhankelijk project buiten school — een volledig responsive publieke website voor mijn lokale handbalclub. Solo gebouwd, live op een eigen domein, en nog steeds onderhouden vandaag.',
        role: 'Enige ontwikkelaar: requirements verzamelen met het clubbestuur, ontwerp, ontwikkeling, deployment en doorlopend onderhoud.',
        whatWentWell: [
          'Site was live en in gebruik bij de club binnen twee weken',
          'Mobile-first aanpak betekende dat het van dag één perfect werkte op telefoons',
          'Klant (clubbestuur) was tevreden na de eerste demo — geen grote revisies nodig',
          'Propere semantische HTML maakte het eenvoudig om later nieuwe paginas toe te voegen',
        ],
        improved: [
          'Geen CMS geïntegreerd — elke content-update vereist manueel HTML-bewerking',
          'Initiële laadprestaties konden beter; afbeeldingen waren niet geoptimaliseerd bij de lancering',
          'Geen analytics ingesteld, dus geen data over hoe mensen de site gebruiken',
        ],
        learned: [
          'Hoe je een project volledig zelfstandig leidt van briefing tot deployment',
          'Klantcommunicatie zonder projectmanager of leerkracht als buffer',
          'Deployen en onderhouden van een live productiewebsite',
          'Afbeeldingsoptimalisatie en basisprincipes van webprestaties',
        ],
        growthPoints: 'Ik leerde dat een website nooit echt "klaar" is. Na de lancering vroeg de club voortdurend om kleine aanpassingen en ik besefte dat een CMS de juiste keuze was geweest. De volgende keer dat ik een klantensite bouw, evalueer ik een headless CMS vanaf het begin.',
      },
      zentech: {
        title: 'ZenTech',
        type: 'E-commerce · Solo',
        year: '2024',
        stack: ['Laravel', 'Tailwind CSS', 'MySQL'],
        link: null,
        summary: 'Een volledig e-commerce platform solo gebouwd voor de cursus Web Development aan Thomas More. Inclusief productcatalogus, winkelwagen, beveiligde checkout, orderbeheer en een volledig adminpanel. Hoogste cijfer ontvangen.',
        role: 'Enige ontwikkelaar — verantwoordelijk voor architectuur, backend, frontend, databaseontwerp, testen en deployment.',
        whatWentWell: [
          'Volledige shoppingflow werkte end-to-end: browsen, winkelwagen, checkout, orderbevestiging',
          'Adminpanel gaf volledige controle over producten, bestellingen en gebruikers',
          'Propere MVC-architectuur maakte de codebase eenvoudig uitbreidbaar',
          'Hoogste cijfer van de klas ontvangen',
        ],
        improved: [
          'Geen echte betaalgateway — gebruikte een mock checkout, goed voor school maar niet productierijp',
          'Zoeken en filteren was basic; een proper zoekindex zou de UX aanzienlijk verbeteren',
          'E-mailmeldingen voor bestellingen niet geïmplementeerd door tijdsgebrek',
        ],
        learned: [
          'E-commerce architectuur: cart sessions, order state machines, voorraadbeheer',
          'Laravel middleware, service providers en de request lifecycle in detail',
          'Een databaseschema ontwerpen dat echte bedrijfslogica correct afhandelt',
          'Adminpanel zelf bouwen versus een pakket gebruiken',
        ],
        growthPoints: 'Dit project leerde me dat het datamodel plannen voordat je een regel code schrijft enorme tijd bespaart. Ik moest de ordertabel twee keer refactoren omdat ik de relatie tussen orders, orderitems en productvarianten niet goed had doordacht.',
      },
      'first-portfolio': {
        title: 'First Portfolio',
        type: 'Persoonlijk · Solo',
        year: '2023',
        stack: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
        link: 'src/First_portfolio/index.html',
        summary: 'Mijn allereerste portfoliowebsite, gebouwd in eigen tijd tijdens het eerste jaar van de studie. Het was mijn introductie tot webontwikkeling buiten de cursussen — een poging mezelf professioneel te presenteren voordat ik echt wist wat dat betekende.',
        role: 'Solo project — designconcept, ontwikkeling en deployment volledig zelfsturend.',
        whatWentWell: [
          'Effectief gelanceerd — veel eerste projecten worden nooit gepubliceerd',
          'Responsive layout werkte op alle apparaten',
          'W3C-validatie geslaagd',
          'Gaf me iets concreets om te tonen bij het solliciteren naar projecten',
        ],
        improved: [
          'Ontwerp was generieke Bootstrap — geen visuele identiteit of persoonlijkheid',
          'Inhoud was vaag; "Ik hou van coderen" is geen waardepropositie',
          'Geen duidelijke call-to-action voor bezoekers',
          'Prestaties werden helemaal niet in overweging genomen',
        ],
        learned: [
          'De basics van HTML, CSS en JavaScript in een echte projectcontext',
          'Hoe Bootstrap te gebruiken en werken met een componentframework',
          'Waarom W3C-validatie belangrijk is',
          'Dat iets onperfects lanceren beter is dan wachten op perfectie',
        ],
        growthPoints: 'Dit bewaar ik als referentiepunt. Het vergelijken met de huidige portfolio toont duidelijk hoeveel er veranderd is — niet alleen technisch, maar in hoe ik nadenk over wie ik voor bouw en wat ik wil communiceren.',
      },
    },
  },
};