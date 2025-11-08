
**STELLANTIS (RESOCONTO SVILUPPO CODICE)**


## Descrizione del progetto
Questo progetto,realizzato con **HTML** E **CSS**, consiste in una **pagina web statica**, ideata per permettere all’utente di **sfogliare e scaricare i report di sostenibilità** ufficiali pubblicati da **Stellantis**.  
L’interfaccia,da come si può vedere, è **semplice, pulita e responsive**, e pone particolare attenzione ad **accessibilità**, **leggibilità** e **usabilità**.

## 1. Obiettivi del progetto
- Presentare i documenti di sostenibilità (ESG, CSR, Climate Policy) in modo chiaro e ordinato.  
- Permettere all’utente di scaricare facilmente, dai link forniti, i PDF ufficiali 
- Assicurare **compatibilità multi-dispositivo** (desktop, tablet, mobile).  
- Utilizzare **buone pratiche HTML semantiche** e **CSS moderni**.  
- Presentare un design coerente con la **brand identity “green”** di Stellantis.
  
## 2. Analisi preliminare e scelte progettuali
Innanzitutto, prima di sviluppare il codice, sono state analizzate le pagine ufficiali di Stellantis per individuare  **stile grafico**, **tono** e **struttura** per mantenersi coerenti con l'immagine aziendale.

Da questa analisi è emersa la necessità di:
* Utilizzare un layout **pulito** e **minimalista**;
* Sfruttare colori che richiamano la **sostenibilità** (toni di verde e bianco);
* Implementare una struttura semantica in **HTML**.

## 3. Struttura e organizzazione del codice

Il progetto è stato realizzato come un singolo file HTML, suddiviso in tre macro-sezioni:
* **Head**: contiene le informazioni meta, il titolo e gli stili CSS interni.
* **Body**: racchiude il contenuto principale strutturato in un contenitore `.container.`  
*  **Footer**: sezione conclusiva con note e logo di riferimento.
  
 **Struttura dei contenuti principali:**

* **Header**: contiene il logo (stilizzato come “S”) e il titolo principale.
* **Sezione principale** (`<section>`) : elenca i report disponibili, dove ciascuno di essi è racchiuso in una card (`<article>`).
* **Card dei report**: mostra titolo, data, breve descrizione e pulsanti di download o approfondimento.

Ogni elemento viene seguito da attributi ARIA e tag semantici (`<main>`, `<header>`, `<section>`, `<article>`, `<footer>`) per migliorare l’esperienza degli utenti.

## 4. Stile e design CSS
**Principali scelte di design:**
* **Reset CSS** per conformare il rendering tra browser.
* **Colori**: Utilizzo di verde chiaro e bianco per richiamare sostenibilità e pulizia visiva.
* **Tipografia**: utilizzo di `system-ui` e `Segoe UI` per massima comprensibilità.
* **Card con ombre leggere e bordi arrotondati**: per un effetto moderno.
* **Bottoni in due varianti**: principale (verde) e secondario (trasparente con bordo).
* **Focus visibile** per assicurare accessibilità da tastiera tramite pulsanti e card.

## 5. Accessibilità

Il codice è stato sviluppato seguendo principi di accessibilità web (WCAG 2.1):
* utilizzo di **ruoli ARIA** (`role="main"`, `role="list"`, `role="listitem"`);
* presenza di **etichette nascoste per screen reader** (`.sr-only`);
* navigabilità tramite tastiera con focus visibile.

  
Queste scelte fanno sì che tutti i tipi di utenti possano usufruire di questa pagina web, aldilà dei dispositivi e capacità sensoriali. 

## 6. Test e ottimizzazione
Dopo il primo sviluppo, la pagina è stata testata su diversi browser (**Chrome e Edge**) ed anche su dispositivi mobili.

Sono stati verificati:
* il corretto funzionamento dei link di download e dei pulsanti;
* la leggibilità dei testi su schermi di dimensioni diverse;
* la validità del codice tramite **W3C Validator**.
## 7. Conclusioni

Il risultato finale è una pagina web **moderna**, **funzionale** e **accessibile**, che si attesta agli obiettivi iniziali di sostenibilità e chiarezza comunicativa.
Il codice è **leggero**, **semplice** e **coinciso**.

Il processo di sviluppo ha permesso di approfondire ancor di più l’utilizzo di HTML e CSS, che oltre all’applicazione concreta dei principi di **accessibilità** e **design** **responsivo**, sono risultati fondamentali per una comunicazione digitale efficace e inclusiva.

