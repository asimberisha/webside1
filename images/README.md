# Images Folder

Ky folder përmban të gjitha imazhet për website-in.

## 📁 Struktura

```
images/
├── hero-bg.jpg              # Background për hero section
├── portfolio/               # Fotot e projekteve
│   ├── project1.jpg - project3.jpg    # Preview në homepage
│   ├── before1.jpg - before4.jpg      # Before photos për comparison
│   ├── after1.jpg - after4.jpg        # After photos për comparison
│   └── gallery1.jpg - gallery12.jpg   # Galerija fotosh
├── services/                # Fotot e shërbimeve
│   ├── notranje-barvanje.jpg
│   ├── zunanje-barvanje.jpg
│   ├── popravilo-sten.jpg
│   └── prenova.jpg
└── team/                    # Fotot e ekipës
    ├── team1.jpg
    ├── team2.jpg
    └── team3.jpg
```

## 📸 Kërkesat për Imazhe

### General Requirements:
- **Format:** JPG për fotografitë, PNG për logos
- **Optimization:** Optimizo me TinyPNG ose ImageOptim
- **File size:** Max 200KB për foto, max 500KB për hero images
- **Naming:** Përdor emra përshkrues (jo DSC_0001.jpg)

### Specifike për çdo lloj:

#### 1. Hero Background (`hero-bg.jpg`)
- **Dimension:** 1920x1080px (Full HD)
- **Subject:** Shtëpi e rinovuar/lyer, profesionale
- **Style:** Cilësi e lartë, ndriçim i mirë
- **File size:** <500KB

#### 2. Portfolio Projects (`portfolio/projectX.jpg`)
- **Dimension:** Min 1200px width
- **Aspect ratio:** 16:9 ose 4:3
- **Quality:** E lartë, profesionale
- **Content:** Punë të përfunduara, clean shots
- **File size:** <200KB per photo

#### 3. Before/After (`portfolio/beforeX.jpg & afterX.jpg`)
- **Dimension:** Të njëjta për before dhe after (min 800x600px)
- **Same angle:** Saktësisht i njëjti kënd kamerash
- **Same lighting:** Sa më e ngjashme të jetë ndriçimi
- **Clear difference:** Ndryshimi duhet të jetë i qartë
- **File size:** <150KB per photo

#### 4. Gallery Images (`portfolio/galleryX.jpg`)
- **Dimension:** Min 800px width
- **Aspect ratio:** Çfarëdo, por konsistente
- **Variety:** Lloje të ndryshme punësh
- **File size:** <150KB per photo

#### 5. Services Photos (`services/`)
- **Dimension:** 800x600px (4:3 ratio)
- **Quality:** Professional
- **Relevant:** Përfaqëso shërbimin specifik
- **File size:** <150KB per photo

#### 6. Team Photos (`team/teamX.jpg`)
- **Dimension:** 400x400px (square 1:1)
- **Background:** Neutral ose blurred
- **Professional:** Veshjë profesionale, portret
- **Centered:** Fytyra në qendër
- **File size:** <100KB per photo

#### 7. About Team Photo (`about-team.jpg`)
- **Dimension:** 1200x800px (3:2 ratio)
- **Content:** Ekipi në punë ose grup photo
- **Professional:** Cilësi e lartë
- **File size:** <200KB

## 🎨 Styling Guidelines

### Photography Style:
- **Natural lighting** kur është e mundur
- **Professional quality** - asnjë foto me telefon blur
- **Clean backgrounds** - minimal distractions
- **Show the work** - focus në rezultatin final
- **Action shots** - ekipi në punë (optional)

### Colors:
- **Natural colors** - mos editoni shumë
- **Consistent tone** - të gjitha fotot duhet të kenë një ndjenjë të ngjashme
- **Show details** - texture të mureve, cilësi e punës

## 📥 Ku të merrni imazhe

### Option 1: Foto të vërteta të projekteve
- **BEST OPTION** - Më autentike dhe më efektive
- Fotografoni projektet tuaja
- Merrni leje nga klientët për përdorim
- Përdorni smartphone me kamerë të mirë ose DSLR

### Option 2: Stock Photos (Temporary)
**VETËM PËR PLACEHOLDER - zamenjujte sa më shpejtë që të jetë e mundur**

Free stock photo websites:
- **Unsplash** (unsplash.com) - High quality, free
- **Pexels** (pexels.com) - Free stock photos
- **Pixabay** (pixabay.com) - Free images

**Search terms në Sllovene/Anglisht:**
- "house painting"
- "interior painting"
- "wall renovation"
- "painter working"
- "painted wall"
- "home renovation"
- "house facade"

### Option 3: Fotograf Profesional
- **Most professional** por më shtrenjtë
- Investim i mirë për long-term
- €200-500 për një shooting session
- Fotot do të jenë cilësi maksimale

## 🔧 Optimizimi i Imazheve

### Tools:
1. **TinyPNG** (tinypng.com) - Online compression
2. **ImageOptim** (imageoptim.com) - Mac app
3. **Squoosh** (squoosh.app) - Google's image optimizer
4. **GIMP** - Free image editor

### Process:
1. Resize to correct dimensions
2. Compress without losing much quality
3. Convert to WebP për më shumë optimizim (optional)
4. Test loading speed

### WebP Conversion (Advanced):
```bash
# Convert JPG to WebP
cwebp input.jpg -q 80 -o output.webp
```

## ✅ Checklist Para Upload-it

- [ ] Të gjitha imazhet janë optimizuar (<200KB)
- [ ] Dimensionet janë korrekte
- [ ] Alt text është relevant (në HTML)
- [ ] Before/After fotot kanë të njëjtin size
- [ ] Team photos janë square (1:1)
- [ ] Emrat e file-ve janë përshkrues
- [ ] Nuk ka foto blur ose me cilësi të ulët
- [ ] Të gjitha fotot janë profesionale

## 🚨 IMPORTANT

**CURRENTLY ALL IMAGES ARE PLACEHOLDERS!**

Website-i do të punojë pa imazhe, por do të shfaqë placeholder boxes ose broken image icons. Për një website profesional, **duhet të shtoni imazhe të vërteta sa më shpejtë të jetë e mundur**.

---

**Për pyetje rreth imazheve, kontaktoni:**
- Email: info@barvanje-prenova.si
- Phone: +386 40 123 456
