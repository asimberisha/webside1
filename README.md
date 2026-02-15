# Barvanje & Prenova Website

Profesionalna spletna stran za podjetje, ki se ukvarja z barvanjem in prenovo stanovanj v Sloveniji.

## 📋 Opis projekta

Ta spletna stran je zasnovana za majhno družinsko podjetje, ki ponuja:
- Notranje barvanje
- Zunanje barvanje (fasade)
- Popravilo sten in ometavanje
- Manjše prenove prostorov

## 🚀 Tehnologije

- **HTML5** - Semantična struktura
- **CSS3** - Custom styling
- **Bootstrap 5.3.2** - Responsive framework
- **JavaScript (Vanilla)** - Interaktivnost
- **GLightbox** - Galerija slik z lightbox efektom
- **img-comparison-slider** - Before/After primerjave

## 📁 Struktura projekta

```
webside1/
├── index.html              # Domača stran
├── storitve.html           # Stran s storitvami
├── galerija.html           # Galerija projektov
├── kontakt.html            # Kontaktna stran
├── o-nas.html              # O nas - zgodovina podjetja
├── privacy.html            # Politika zasebnosti (GDPR)
├── css/
│   └── styles.css          # Custom CSS stilov
├── js/
│   └── script.js           # JavaScript funkcionalnosti
└── images/
    ├── portfolio/          # Slike projektov
    ├── services/           # Slike storitev
    └── team/               # Slike ekipe
```

## ✨ Funkcionalnosti

### Glavne funkcionalnosti:
- ✅ Responsive design (mobilni, tablični, desktop)
- ✅ Moderne animacije in hover efekti
- ✅ GDPR compliant cookie consent banner
- ✅ Kontaktni formular z validacijo
- ✅ Before/After image comparison sliders
- ✅ Galerija z lightbox in filtering
- ✅ Click-to-call & WhatsApp integration
- ✅ Smooth scrolling in navigation
- ✅ SEO optimizacija

### Strani:
1. **Domov** - Hero section, kratka predstavitev, storitve, portfolio preview
2. **Storitve** - Podrobno opisane vse storitve s cenami
3. **Galerija** - Before/after primerjave in celotna galerija projektov
4. **O nas** - Zgodovina podjetja, ekipa, vrednote, certifikati
5. **Kontakt** - Kontaktni formular, kontaktni podatki, social media
6. **Politika zasebnosti** - GDPR compliant privacy policy

## 🎨 Design

- **Barve:** Modra (#0d6efd) kot primarna, bela in temno siva
- **Tipografiya:** 'Segoe UI', Tahoma, Geneva, Verdana
- **Ikone:** Bootstrap Icons 1.11.3
- **Layout:** Mobile-first approach

## 📱 Kontakt informacije (za prilagoditev)

Trenutne placeholder vrednosti, ki jih je treba zamenjati:

- **Telefon:** +386 40 123 456
- **Email:** info@barvanje-prenova.si
- **Lokacija:** Ljubljana, Slovenija
- **Matična številka:** 1234567000
- **Davčna številka:** SI12345678

## 🖼️ Slike

**POMEMBNO:** Trenutno so vse slike placeholder-ji. Za popolno delovanje je treba dodati dejanske slike:

### Potrebne slike:

1. **Hero background** (`images/hero-bg.jpg`) - 1920x1080px
2. **Portfolio projekti** (`images/portfolio/projectX.jpg`) - min 1200px širina
3. **Before/After primerjave** (`images/portfolio/beforeX.jpg` & `afterX.jpg`)
4. **Galerija** (`images/portfolio/galleryX.jpg`) - min 800px širina
5. **Storitve** (`images/services/`) - 800x600px
6. **Ekipa** (`images/team/teamX.jpg`) - 400x400px
7. **O nas** (`images/about-team.jpg`) - 1200x800px

### Format slik:
- **Format:** JPG za fotografije, WebP za optimizacijo
- **Kvaliteta:** Visoka kvaliteta ampak optimizirane (<200KB po sliki)
- **Aspect ratio:** 16:9 za landscape, 1:1 za team photos

## 🔧 Prilagoditve

### Za prilagoditev za vaše podjetje:

1. **Kontaktni podatki:**
   - Poiščite vse instance "+386 40 123 456" in zamenjajte z dejansko številko
   - Zamenjajte "info@barvanje-prenova.si" z vašim emailom
   - Posodobite naslov in poslovno območje

2. **Družbeni mediji:**
   - Dodajte dejanske linke do Facebook, Instagram, LinkedIn strani
   - V vseh HTML datotekah poiščite `href="#"` v social links

3. **Imena podjetja:**
   - Če želite drugo ime namesto "Barvanje & Prenova", zamenjajte po vseh datotekah

4. **Matična in davčna številka:**
   - V footer-ju vseh strani posodobite te številke

5. **Kontaktni formular:**
   - Odkomentirajte in konfigurirajte FormSpree v `js/script.js`
   - Ali uporabite svoj backend za obdelavo formularjev

6. **Google Maps:**
   - Odkomentirajte map section v `kontakt.html`
   - Dodajte svoj Google Maps embed link

## 🌐 Deployment

### Priporočeni hosting:
- **Netlify** (brezplačno za statične strani)
- **GitHub Pages** (brezplačno)
- **Vercel** (brezplačno)
- **Tradicional hosting** (Webhostbox, Domenca, itd.)

### Navodila za deployment:

1. **Netlify:**
   ```bash
   # Povlecite folder v Netlify dashboard
   # Ali uporabite Netlify CLI
   netlify deploy --prod
   ```

2. **GitHub Pages:**
   - Ustvarite repository na GitHub
   - Push-ajte kodo
   - Omogočite GitHub Pages v Settings

3. **Tradicional hosting:**
   - Prenesite vse datoteke preko FTP
   - Pripravite se, da je index.html v root direktoriju

## 📧 Kontaktni formular setup

Za delovanje kontaktnega formularja je priporočeno:

### Option 1: FormSpree (Easy)
1. Registrirajte se na https://formspree.io
2. Ustvarite Nov form
3. Dobite Form ID
4. Odkomentirajte FormSpree kodo v `js/script.js` (linija ~75)
5. Zamenjajte `YOUR_FORM_ID` z vašim ID-jem

### Option 2: EmailJS (Free tier available)
1. Registrirajte se na https://www.emailjs.com/
2. Setup email service
3. Ustvarite email template
4. Integrirajte v JavaScript

### Option 3: Backend (Advanced)
- PHP mail() function
- Node.js backend
- Python Flask/Django

## 🔒 GDPR Compliance

Spletna stran vključuje:
- ✅ Cookie consent banner
- ✅ Privacy policy stran
- ✅ Explicitno soglasje v kontaktnem formularju
- ✅ Informacije o obdelavi podatkov

**OPOMBA:** Privacy policy je generičen template. Priporočam konsultacijo s pravnikom za finalno različico.

## 📊 SEO Optimizacija

### Že vključeno:
- Meta descriptions na vseh straneh
- Semantic HTML5 tags
- Alt text za slike (dodajte pri upload-u)
- Responsive design
- Fast loading (CDN za knjižnice)

### Priporočeno dodatno:
- Google Analytics
- Google Search Console
- Schema.org markup (Local Business)
- Sitemap.xml
- robots.txt

## 🐛 Troubleshooting

### Slike se ne prikažejo:
- Preverite pot do slik
- Dodajte dejanske slike v `images/` folder

### Formular ne deluje:
- Konfigurirajte FormSpree ali drug email service
- Preverite console za JavaScript napake

### Lightbox ne dela:
- Preverite, da je GLightbox pravilno vključen
- Preverite console za napake

## 📄 Licenca

Projekt je namenjen za uporabo za podjetje Barvanje & Prenova.

## 👨‍💻 Razvoj

Developed with ❤️ using modern web technologies.

---

## 📞 Podpora

Za vprašanja ali podporo:
- Email: info@barvanje-prenova.si
- Telefon: +386 40 123 456

**Zadnja posodobitev:** Februar 2026
