# AUTUMN RUN 2026 — GitHub Pages

Landing page statica pronta per GitHub Pages.

## Pubblicazione rapida

1. Crea un nuovo repository GitHub, ad esempio `autumn-run-2026`.
2. Carica nella root del repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - cartella `assets/`
3. In GitHub vai su **Settings → Pages**.
4. In **Build and deployment**, scegli **Deploy from a branch**.
5. Seleziona branch `main` e cartella `/ (root)`.
6. Salva. GitHub pubblicherà la pagina all'indirizzo `https://TUO-USERNAME.github.io/autumn-run-2026/`.

## Prima di pubblicare

### 1. Hero video
Il sito funziona già con il poster grafico incluso.
Per usare un tuo video:
- comprimi un clip MP4 breve, preferibilmente 8–15 secondi;
- rinominalo `hero.mp4`;
- inseriscilo nella cartella `assets/`.

Per GitHub Pages conviene tenere il video molto leggero. Se pesa troppo, valuta di usare solo una foto compressa oppure hosting esterno.

### 2. Privacy
In `index.html`, nella sezione **Privacy**, sostituisci:
`inserire qui un indirizzo e-mail o un recapito dedicato prima della pubblicazione.`
con il recapito che vuoi rendere pubblico.

### 3. Condizioni hotel
Rivedi la clausola sulle cancellazioni quando avrai le condizioni definitive della struttura.

### 4. Prezzi
I prezzi correnti sono:
- quadrupla: 140 CHF/persona
- tripla: 140 CHF/persona
- doppia: 160 CHF/persona
- singola: 180 CHF/persona

### 5. Revolut
Il pulsante di pagamento apre:
`https://revolut.me/GabrielePosca`

## Come funziona il form

È volutamente statico: GitHub Pages non ha un backend.

Il form:
- calcola l'importo in base alla camera;
- permette di pagare per 1–4 persone;
- genera la causale con tutti i nomi;
- consente di copiarla;
- apre Revolut in una nuova scheda.

Non salva i dati dell'utente e non invia alcun modulo a un server.

Se in futuro vuoi raccogliere automaticamente le iscrizioni, conviene collegare un servizio form esterno o un piccolo backend/serverless.
