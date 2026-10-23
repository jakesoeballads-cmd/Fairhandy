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
| Adresse, Telefon, Öffnungszeiten, USt-ID, RepairDash-Link | `src/data/site.json` |
| Startseite (Texte, Abschnitte) | `src/pages/index.astro` |
| Preise & Online-Auftrag (RepairDash-Widget) | `src/pages/reparatur.astro` |
| Impressum / Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |
| Farben und Grundstil | `src/styles/global.css` |

### Preise

Die Reparaturpreise kommen direkt aus **RepairDash** (RepairWidget, Link in `site.json` → `bookingUrl`).
Preise werden nur in RepairDash gepflegt; Aufträge von der Website landen automatisch dort.

Widget vorübergehend ausschalten (z. B. während Preisanpassungen): in `site.json` `"bookingAktiv": false` setzen. Dann zeigt /reparatur/ statt des Widgets einen Hinweis mit WhatsApp- und Telefon-Knopf. Mit `true` ist das Widget wieder da.

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

- [ ] RepairDash-Widget auf /reparatur/ geprüft (Preise sichtbar, Buchung klappt)
- [ ] Vollständige Datenschutzerklärung in `src/pages/datenschutz.astro`
- [ ] Echte Fotos aus dem Laden (statt der Illustration)
- [ ] DNS bei IONOS umstellen
