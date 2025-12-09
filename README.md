# Sustainability Reports - Stellantis Group

Applicazione web moderna per la consultazione e il download dei report di sostenibilità di Stellantis Group.

## 📋 Descrizione

Applicazione React sviluppata con TypeScript che permette di:
- Visualizzare i report di sostenibilità ESG di Stellantis
- Filtrare i report per anno
- Cercare report tramite barra di ricerca
- Visualizzare statistiche aggregate (totale report, anni coperti, ultimo anno)
- Scaricare i report in formato PDF

## 🛠 Stack Tecnologico

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TanStack Query** - State management e caching
- **Ant Design** - UI Component Library
- **Tailwind CSS v3** - Styling
- **Axios** - HTTP client

## 📦 Prerequisiti

Prima di avviare il progetto, assicurarsi di avere installato:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (incluso con Node.js)

Per verificare le versioni installate:
```bash
node --version
npm --version
```

## 🚀 Installazione e Avvio

### 1. Clonare o scaricare il progetto

Se il progetto è su GitHub:
```bash
git clone https://github.com/mareo47/Codice_Stellantis.git
cd Codice_Stellantis\codice_stellantis

```

Oppure estrarre lo ZIP nella cartella desiderata.

### 2. Installare le dipendenze

Aprire un terminale nella cartella del progetto ed eseguire:
```bash
npm install
```

Questo comando installerà tutte le dipendenze necessarie (potrebbero volerci 2-3 minuti).

### 3. Avviare il server di sviluppo
```bash
npm run dev
```

Il terminale mostrerà un messaggio simile a:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 4. Aprire l'applicazione nel browser

Aprire il browser e navigare su:
```
http://localhost:5173
```

L'applicazione si aprirà automaticamente mostrando la pagina principale con i report di sostenibilità.

## 📱 Funzionalità da Testare

Una volta aperta l'applicazione:

1. **Visualizzazione Report**
    - Nella pagina principale verranno visualizzati tutti i report disponibili
    - Ogni card mostra: titolo, anno, descrizione, formato e dimensione file

2. **Statistiche**
    - In alto sono presenti 3 card con statistiche:
        - Total Reports: 10
        - Years Covered: 4 (2021-2024)
        - Latest Year: 2024

3. **Filtro per Anno**
    - Cliccare sul dropdown "Select Year"
    - Selezionare un anno specifico (es. 2024)
    - I report verranno filtrati automaticamente

4. **Ricerca Testuale**
    - Digitare nella barra "Search reports..."
    - Provare a cercare parole come "Environmental", "Annual", "Social"
    - I risultati vengono filtrati in tempo reale

5. **Filtri Combinati**
    - È possibile usare sia il filtro anno che la ricerca contemporaneamente
    - Esempio: Anno 2024 + Ricerca "Annual"

6. **Download**
    - Cliccare sul pulsante "Download" di qualsiasi report
    - Si aprirà una nuova scheda (comportamento simulato con mock data)

7. **Responsive Design**
    - Ridimensionare la finestra del browser
    - Oppure aprire DevTools (F12) e testare varie dimensioni
    - L'interfaccia si adatta automaticamente

## 🔧 Comandi Disponibili
```bash
# Avviare il server di sviluppo
npm run dev

# Creare la build di produzione
npm run build

# Visualizzare la build di produzione in locale
npm run preview

# Eseguire il linting del codice
npm run lint
```

## 📁 Struttura del Progetto
```
src/
├── application/              # Business logic
│   ├── hooks/               # Custom hooks con TanStack Query
│   └── usecases/            # Use cases per i componenti
├── core/                    # Entities e configurazioni
│   ├── clients/            # HTTP client (Axios)
│   ├── data/               # Mock data
│   └── types/              # TypeScript types
├── infrastructure/          # API calls
│   └── api/
│       └── Reports/
├── presentation/            # UI Components
│   └── components/
│       ├── Layout/         # Layout components
│       ├── Reports/        # Report-specific components
│       └── Statistics/     # Statistics components
├── assets/                 # Immagini, loghi
├── App.tsx                 # Main component
└── main.tsx               # Entry point
```

## 🌐 Browser Supportati

L'applicazione è stata testata e funziona correttamente su:
- Google Chrome (consigliato)
- Mozilla Firefox
- Microsoft Edge
- Safari

## 📊 Mock Data

L'applicazione utilizza dati mock (simulati) per la dimostrazione. I report non sono file reali ma simulazioni. In un contesto produttivo, questi dati verrebbero recuperati da API backend reali.

## 🎓 Note per la Valutazione

Aspetti tecnici implementati:
- ✅ Architettura Clean Architecture (4 layer)
- ✅ Type safety completo con TypeScript
- ✅ State management con TanStack Query
- ✅ Componenti riutilizzabili React
- ✅ Filtri dinamici con derived state
- ✅ Responsive design
- ✅ Code quality con ESLint
- ✅ Performance optimization (caching)

## 📞 Supporto

Per problemi durante l'installazione o l'esecuzione:
- Email: matt12345annunziata@gmail.com
- Verificare di avere Node.js >= 18.0.0 installato

## 📄 Licenza

Progetto accademico - Università Telematica Pegaso
Anno Accademico 2024/2025

---

**Sviluppato da**: Matteo Annunziata  
**Corso**: Informatica per le Aziende Digitali (L-31)
