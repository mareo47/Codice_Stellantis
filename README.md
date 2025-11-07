# Codice_Stellantis
# 🌿 Stellantis — Report di Sostenibilità (HTML + CSS)

## 📄 Descrizione del progetto
Questo progetto consiste in una **pagina web statica** realizzata in **HTML5** e **CSS3**, progettata per permettere all’utente di **consultare e scaricare i report di sostenibilità** ufficiali pubblicati da **Stellantis**.  
L’interfaccia è **semplice, pulita e responsive**, con un’attenzione particolare ad **accessibilità**, **leggibilità** e **usabilità**.

---

## 🧭 Obiettivi del progetto
- Presentare i documenti di sostenibilità (ESG, CSR, Climate Policy) in modo chiaro e ordinato.  
- Permettere all’utente di **scaricare facilmente i PDF ufficiali** dai link forniti.  
- Garantire **compatibilità multi-dispositivo** (desktop, tablet, mobile).  
- Utilizzare **buone pratiche HTML semantiche** e **CSS moderni**.  
- Offrire un design coerente con la **brand identity “green”** di Stellantis.

---

## ⚙️ Struttura del codice

### **1. HTML**
Il documento è suddiviso in tre sezioni principali:

- **Header (`<header>`)**  
  Contiene il logo “S”, il titolo principale e un breve testo introduttivo.

- **Main (`<main>`)**  
  È il contenitore principale della pagina (ruolo `role="main"` per l’accessibilità).  
  Include la **lista dei report** strutturata con elementi `<article>` per ogni documento disponibile.

- **Footer (`<footer>`)**  
  Riporta una nota informativa e un logo aziendale.

Ogni **report** è rappresentato da una **card** composta da:
- titolo del documento  
- data di pubblicazione  
- descrizione sintetica  
- due pulsanti:
  - 📄 *Scarica PDF* (download diretto)
  - 🌿 *Link esterno* (pagina ESG o sostenibilità)

---

### **2. CSS**
Gli stili sono scritti in un blocco `<style>` interno, per mantenere il progetto autoconcluso.

Principali scelte stilistiche:
- **Colori principali** gestiti tramite variabili CSS (`--green-main`, `--green-dark`, ecc.).  
- **Layout flessibile** con **Flexbox** e **CSS Grid** per la disposizione delle card.  
- **Stile responsive** con media query per adattamento su dispositivi mobili.  
- **Design moderno e minimale**: ombre leggere, angoli arrotondati, sfondi a gradiente.  
- **Accessibilità migliorata** con:
  - attributi `aria-labelledby`, `role="list"` e `role="listitem"`;
  - focus visibile per la navigazione da tastiera;
  - uso di `.sr-only` per contenuti destinati ai lettori di schermo.

---

## 🧩 Processo di sviluppo

1. **Analisi dei requisiti**  
   - Identificati i contenuti da mostrare (titoli, descrizioni, link PDF).  
   - Stabilita la necessità di una struttura responsive e accessibile.

2. **Progettazione della struttura HTML**  
   - Definita una gerarchia logica con `header`, `main`, `section`, `article`, `footer`.  
   - Inseriti i link ufficiali di Stellantis come riferimenti reali.

3. **Progettazione dello stile CSS**  
   - Creazione di un sistema di colori coerente con il tema “green”.  
   - Implementato un layout a **card** con **Flexbox**.  
   - Aggiunta una **media query** per la visualizzazione mobile.

4. **Ottimizzazione per l’accessibilità**  
   - Uso di `aria-*` per migliorare l’esperienza di lettori di schermo.  
   - Implementazione della classe `.sr-only` per titoli nascosti.  
   - Focus visibile per l’interazione da tastiera.

5. **Testing e rifinitura**  
   - Testata la compatibilità su diversi browser (Chrome, Firefox, Edge).  
   - Verificato il comportamento responsive su schermi da 360px a 1440px.  
   - Controllata la validità HTML e l’assenza di errori CSS.

---

## 💡 Funzionalità principali

| Funzione | Descrizione |
|-----------|--------------|
| 📄 **Download diretto dei PDF** | Ogni pulsante “Scarica PDF” apre o scarica il documento ufficiale. |
| 🌿 **Collegamento a pagine ESG** | Link esterni alle sezioni di sostenibilità del sito Stellantis. |
| 🧠 **Accessibilità migliorata** | Ruoli ARIA, testi alternativi e focus chiari. |
| 📱 **Responsive design** | Layout adattivo per mobile e desktop. |
| 🎨 **Tema coerente** | Tavolozza di verdi e sfondi chiari per riflettere i valori ecologici. |

---

## 🧱 Struttura dei file

