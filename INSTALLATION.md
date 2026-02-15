# 🚀 Uputstva za postavitev / Installation Guide

Dobrodošli! Ta vodnik vam bo pomagal pri nastavitvi in objavi spletne strani.

## 📋 Predpogoji

Za razvoj in testiranje lokalno potrebujete:
- **Web Browser** (Chrome, Firefox, Edge, Safari)
- **Text Editor** (VS Code, Sublime Text, Notepad++)
- **Live Server** za lokalno testiranje (opcijsko, priporočeno)

## 🔧 Lokalna postavitev

### Metoda 1: Neposredno odpiranje datotek

1. **Prenesite projekt** (če še niste)
   ```
   Prenesite ZIP ali klonirajte repository
   ```

2. **Odprite index.html**
   - Enostavno dvojni klik na `index.html`
   - Ali desni klik → Odpri z → izberite browser

3. **Navigacija**
   - Vse povezave bodo delale normalno
   - Formular ne bo deloval brez email konfiguracije

### Metoda 2: Live Server (Priporočeno)

#### Z Visual Studio Code:

1. **Namestite VS Code**
   - Prenesite: https://code.visualstudio.com/

2. **Namestite Live Server razširitev**
   - Odprite VS Code
   - Pojdite v Extensions (Ctrl+Shift+X)
   - Poiščite "Live Server"
   - Kliknite Install

3. **Zaženite projekt**
   - Odprite projekt folder v VS Code
   - Desni klik na `index.html`
   - Izberite "Open with Live Server"
   - Browser se bo odprl na http://localhost:5500

#### Z Python SimpleHTTPServer:

```bash
# Python 3
cd /pot/do/webside1
python -m http.server 8000

# Odprite browser: http://localhost:8000
```

#### Z Node.js http-server:

```bash
# Namestite http-server globalno
npm install -g http-server

# V projektu
cd /pot/do/webside1
http-server

# Odprite browser: http://localhost:8080
```

## 🌐 Objava na internet (Deployment)

### Option 1: Netlify (PRIPOROČENO - Brezplačno)

1. **Ustvarite račun**
   - Pojdite na https://netlify.com
   - Sign up (lahko z GitHub accountom)

2. **Deploy site**
   
   **Metoda A: Drag & Drop**
   - Kliknite "Sites" → "Add new site" → "Deploy manually"
   - Povlecite celotno `webside1` folder v Netlify
   - ✅ Gotovo! Site je live v nekaj sekundah

   **Metoda B: Git (Advanced)**
   ```bash
   # Push projekt na GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO
   git push -u origin main
   
   # Na Netlify: Import from Git → izberite repository
   ```

3. **Konfiguracija**
   - Domen: Spremenite v custom domain (opcijsko)
   - SSL: Avtomatično vključeno (HTTPS)
   - Continuous deployment: Avtomatsko ob push-u

### Option 2: GitHub Pages (Brezplačno)

1. **Ustvarite GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/USERNAME/REPO_NAME
   git push -u origin main
   ```

2. **Omogočite GitHub Pages**
   - Repository → Settings → Pages
   - Source: Deploy from branch → main
   - Save

3. **Dostopajte site**
   - URL: https://USERNAME.github.io/REPO_NAME

### Option 3: Vercel (Brezplačno)

1. **Ustvarite račun** na https://vercel.com
2. **Import project**
   - New Project → Import Git Repository
   - Izberite svoj GitHub repo
3. **Deploy**
   - Vercel bo avtomatsko deployol
   - Dobite URL kot https://PROJECT.vercel.app

### Option 4: Tradicionalni Hosting (FTP)

1. **Kupite hosting in domeno**
   - Priporočeni slovenski hostingi:
     - Domenca.com
     - Hosting.si
     - Webhostbox.net

2. **Naložite datoteke preko FTP**
   ```
   FTP Client: FileZilla (brezplačno)
   1. Connect: ftp://yourdomain.si
   2. Username & Password od hosting provider
   3. Prenesite vse datoteke v public_html ali www folder
   ```

3. **Konfigurirajte domen**
   - Povežite domeno z hosting
   - Počakajte DNS propagacijo (do 48ur)

## 📧 Konfiguracija kontaktnega formularja

### FormSpree Setup (Najlažje - Brezplačno za 50 submissions/mesec)

1. **Registracija**
   - https://formspree.io
   - Sign up brezplačno

2. **Ustvarite nov form**
   - "New Form"
   - Ime: "Kontakt"
   - Vaš email za prejemanje sporočil

3. **Dobite Form ID**
   - Kopirajte Form ID (npr: `abc123xyz`)

4. **Posodobite JavaScript**
   
   Odprite `js/script.js`, poiščite linijo ~75:
   
   ```javascript
   // UNCOMMENT THIS:
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
   
   // REPLACE YOUR_FORM_ID WITH YOUR ACTUAL ID:
   fetch('https://formspree.io/f/abc123xyz', {
   ```

5. **Testirajte**
   - Pošljite test sporočilo
   - Preverite svoj email

### EmailJS Setup (Alternative)

1. **Registracija** na https://emailjs.com
2. **Dodajte email service** (Gmail, Outlook, itd.)
3. **Ustvarite email template**
4. **Integrirajte v JS** (navodila na EmailJS)

### Custom Backend (Advanced)

Če imate svoj server, lahko uporabite:
- PHP `mail()` funkcijo
- Node.js z Nodemailer
- Python Flask/Django

## 🖼️ Dodajanje slik

1. **Pripravite slike**
   - Optimizirajte z TinyPNG (tinypng.com)
   - Preimenujte v skladne imenike (project1.jpg, not DSC_0001.jpg)

2. **Naložite v pravilne folderje**
   ```
   images/
   ├── hero-bg.jpg
   ├── portfolio/
   │   ├── project1.jpg - project3.jpg
   │   ├── before1.jpg - before4.jpg
   │   ├── after1.jpg - after4.jpg
   │   └── gallery1.jpg - gallery12.jpg
   ├── services/
   │   ├── notranje-barvanje.jpg
   │   ├── zunanje-barvanje.jpg
   │   ├── popravilo-sten.jpg
   │   └── prenova.jpg
   └── team/
       ├── team1.jpg
       ├── team2.jpg
       └── team3.jpg
   ```

3. **Posodobite Alt Text**
   - Odprite HTML datoteke
   - Poiščite `<img>` tags
   - Posodobite `alt` attribute z opisom

## ✏️ Prilagoditev vsebine

### Kontaktni podatki

Poiščite in zamenjajte v VSEH HTML datotekah:
- `+386 40 123 456` → VAŠ TELEFON
- `info@barvanje-prenova.si` → VAŠ EMAIL
- `Ljubljana, Slovenija` → VAŠA LOKACIJA
- `1234567000` → MATIČNA ŠTEVILKA
- `SI12345678` → DAVČNA ŠTEVILKA

**TIP:** Uporabite Find & Replace (Ctrl+H v VS Code)

### Social Media Links

V vsakem footer-ju najdite:
```html
<a href="#" class="text-white me-3"><i class="bi bi-facebook fs-4"></i></a>
```

Zamenjajte `href="#"` z:
- Facebook: `https://facebook.com/yourpage`
- Instagram: `https://instagram.com/yourprofile`
- LinkedIn: `https://linkedin.com/company/yourcompany`

### WhatsApp

Zamenjajte:
```html
https://wa.me/38640123456
```
Z vašo številko (brez + ali presledkov):
```html
https://wa.me/38640123456
```

## 🔍 SEO Setup

### Google Analytics (Optional)

1. Ustvarite GA4 account: https://analytics.google.com
2. Dobite Tracking ID
3. Dodajte v `<head>` vsake HTML datoteke:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Google Search Console

1. Registrirajte site: https://search.google.com/search-console
2. Verificirajte lastništvo
3. Predložite sitemap.xml (ga morate ustvariti)

### Sitemap.xml

Ustvarite `sitemap.xml` v root:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://yoursite.si/</loc><priority>1.0</priority></url>
  <url><loc>https://yoursite.si/storitve.html</loc><priority>0.8</priority></url>
  <url><loc>https://yoursite.si/galerija.html</loc><priority>0.8</priority></url>
  <url><loc>https://yoursite.si/o-nas.html</loc><priority>0.7</priority></url>
  <url><loc>https://yoursite.si/kontakt.html</loc><priority>0.9</priority></url>
</urlset>
```

## ✅ Checklist pred objavo

- [ ] Vse kontaktne informacije posodobljene
- [ ] Slike naložene in optimizirane
- [ ] Kontaktni formular konfiguriran
- [ ] Social media linki dodani
- [ ] Privacy policy pregledana (konsultirajte pravnika)
- [ ] Matična in davčna številka posodobljeni
- [ ] Testirano na mobile, tablet, desktop
- [ ] Testirano v različnih browserjih
- [ ] SSL certifikat aktiven (HTTPS)
- [ ] Google Analytics nameščen (optional)
- [ ] favicon.ico dodan (optional)

## 🐛 Common Issues & Solutions

### Problem: Slike se ne pokažejo
**Solution:** 
- Preverite pot (mora biti relativna: `images/...`)
- Preverite, da datoteke obstajajo
- Preverite case-sensitivity (portfolio vs Portfolio)

### Problem: CSS ni naložen
**Solution:**
- Preverite pot v `<link>` tag
- Preverite, da je `css/styles.css` na pravem mestu
- Clear browser cache (Ctrl+F5)

### Problem: JavaScript ne dela
**Solution:**
- Odprite Developer Tools (F12)
- Preverite Console za napake
- Preverite pot do `js/script.js`

### Problem: Formular ne pošlje
**Solution:**
- Konfigurirajte FormSpree ali EmailJS
- Preverite console za napake
- Test z različnim browserjem

## 📱 Mobile Testing

Testirajte na:
- **Chrome DevTools** (F12 → Device Toolbar)
- **Actual devices:** iPhone, Android, Tablet
- **Different browsers:** Safari, Chrome Mobile, Firefox Mobile

## 🎯 Performance Optimization

1. **Optimizirajte slike** (TinyPNG, ImageOptim)
2. **Enable caching** (s hosting settings)
3. **Use CDN** za knjižnice (Bootstrap, etc.) - že vključeno
4. **Minify CSS/JS** (optional, za advanced users)

## 📞 Potrebujete pomoč?

Če imate težave:
1. Preverite [README.md](README.md) za več info
2. Preverite [images/README.md](images/README.md) za navodila o slikah
3. Google the error message
4. Contact: info@barvanje-prenova.si

---

**Uspešno namestitev! 🎉**

Website je pripravljen za uporabo. Sledite navodilom po korakih in site bo live v nekaj minutah!
