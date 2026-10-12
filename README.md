# Fair Handy – Website

Neue Website für [fairhandy.eu](https://fairhandy.eu), gebaut mit [Astro](https://astro.build) als statische Seite.
Jeder Push auf `main` wird automatisch gebaut und per FTP zu Hostinger hochgeladen.

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # erzeugt ./dist
```

## Wo ändere ich was?

| Was | Datei |
| --- | --- |
| Adresse, Telefon, Öffnungszeiten, USt-ID | `src/data/site.json` |
| Reparaturpreise für den Preisrechner | `src/data/preise.json` |
| Startseite (Texte, Abschnitte) | `src/pages/index.astro` |
| Preisrechner-Seite | `src/pages/reparatur.astro` |
| Impressum / Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |
| Farben und Grundstil | `src/styles/global.css` |

### Preise eintragen

In `src/data/preise.json` hat jedes Modell ein Feld `preise`. Schlüssel sind die Schadens-IDs
(`display`, `akku`, `ladebuchse`, `kamera`, `rueckglas`, `wasser`, `software`), Werte sind Euro-Beträge:

```json
{ "name": "iPhone 13", "preise": { "display": 129, "akku": 69 } }
```

Fehlt ein Preis, zeigt der Rechner „Preis auf Anfrage“ und bietet die Anfrage per WhatsApp an.
Bei mehreren Schäden wird automatisch der Mehrfachrabatt (`rabattMehrfach`, aktuell 10 %) abgezogen.

## Deployment (Hostinger)

In GitHub unter **Settings → Secrets and variables → Actions** diese Secrets anlegen
(Daten aus hPanel → Dateien → FTP-Konten):

| Secret | Beispiel |
| --- | --- |
| `FTP_SERVER` | `ftp.fairhandy.eu` oder die IP aus hPanel |
| `FTP_USERNAME` | FTP-Benutzername |
| `FTP_PASSWORD` | FTP-Passwort |
| `FTP_SERVER_DIR` | optional, Standard `./` (das FTP-Konto von Hostinger startet bereits in `public_html`) |

Die Domain bleibt bei IONOS registriert. Dort nur die DNS-Einträge `A` (für `@` und `www`) auf die
IP von Hostinger ändern. Die `MX`-Einträge für E-Mail **nicht** ändern.

## Vor dem Livegang

- [ ] Echte Preise in `src/data/preise.json`
- [ ] Vollständige Datenschutzerklärung in `src/pages/datenschutz.astro`
- [ ] Echte Fotos aus dem Laden (statt der Illustration)
- [ ] DNS bei IONOS umstellen
