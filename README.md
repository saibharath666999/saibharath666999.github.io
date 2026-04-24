# SUV Scout India 🚙⚡

**A static website for comparing compact SUVs in India — 2025 & 2026 models, ₹10–20 lakh range.**

Live at: [bharathmeher.org](https://bharathmeher.org)

---

## What's inside

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | All 17 vehicles, brand-wise, ICE + EV sections |
| ICE / Hybrid | `ice.html` | 12 petrol, diesel & hybrid SUVs |
| Electric (EV) | `ev.html` | 5 battery electric compact SUVs |
| Vehicle detail | `vehicle-{id}.html` | Per-vehicle sub-page with gallery, 360° drag view, color picker, full specs |
| Compare | `compare.html` | Side-by-side comparison with price range filter, select up to 4 vehicles |
| Shared styles | `styles.css` | All page styling — dark theme, responsive |
| Shared data | `data.js` | All vehicle data, glossary, card renderer, jargon highlighter |

---

## Features

- **17 vehicles** across 8 brands — Hyundai, Kia, Maruti Suzuki, Renault, Skoda, Tata, Toyota, Volkswagen
- **Separate ICE / EV sections** with distinct visual treatment
- **Per-vehicle detail pages** with:
  - Color swatches (6 colors per car)
  - Exterior / Interior / 360° drag-to-rotate view
  - 3 variant tabs (Base / Mid / Top) with individual pricing
  - Full specs: Specifications, Interior, Exterior, Performance, Safety
- **Inline jargon tooltips** — hover over terms like *torque*, *ADAS*, *mileage*, *ICE*, *kWh* for plain-English explanations
- **Glossary modal** — full 30-term glossary accessible from every page
- **Comparison tool** with:
  - Price range slider filter (₹7 L – ₹25 L)
  - ICE / EV / All type filter
  - Best-value highlighting (green) per row
  - Remove individual columns
  - Persistent via URL query string (`?ids=car1,car2`)
- **Filter bar** on every list page — year (2025/2026), fuel type
- **Select for comparison** — tick any card, sticky compare bar appears
- Fully **responsive** — works on mobile
- **No frameworks, no build step** — pure HTML + CSS + vanilla JS

---

## Vehicle list

### ICE & Hybrid (12 models)

| Brand | Model | Year | Price range |
|-------|-------|------|-------------|
| Hyundai | Creta | 2025 | ₹10.79 – 20.20 L |
| Hyundai | Venue | 2025 | ₹7.94 – 13.27 L |
| Kia | Seltos | 2025 | ₹10.99 – 20.19 L |
| Kia | Syros | 2026 | ₹8.99 – 18.99 L |
| Maruti Suzuki | Brezza | 2025 | ₹8.34 – 14.97 L |
| Maruti Suzuki | Fronx | 2025 | ₹7.51 – 13.47 L |
| Renault | Duster | 2025 | ₹10.49 – 18.49 L |
| Skoda | Kylaq | 2025 | ₹7.89 – 14.40 L |
| Tata | Nexon | 2025 | ₹8.14 – 15.49 L |
| Tata | Sierra | 2025 | ₹11.49 – 21.29 L |
| Toyota | Urban Cruiser Hyryder | 2025 | ₹10.99 – 20.19 L |
| Volkswagen | Taigun | 2025 | ₹11.00 – 19.30 L |

### Electric (5 models)

| Brand | Model | Year | Price range |
|-------|-------|------|-------------|
| Kia | Syros EV | 2026 | ₹18.00 – 22.00 L (est.) |
| Mahindra | XUV400 EV | 2025 | ₹15.49 – 19.99 L |
| MG | Windsor EV | 2025 | ₹13.49 – 17.26 L |
| Tata | Curvv EV | 2025 | ₹17.49 – 21.99 L |
| Tata | Nexon EV | 2025 | ₹12.49 – 17.49 L |

---

## File structure

```
/
├── index.html              ← Main page (all vehicles)
├── ice.html                ← ICE / Hybrid listing
├── ev.html                 ← EV listing
├── compare.html            ← Comparison tool
├── styles.css              ← Shared CSS (dark theme)
├── data.js                 ← All data, renderer, glossary
├── vehicle-{id}.html       ← Individual vehicle pages (17 files)
│   ├── vehicle-hyundai-creta-2025.html
│   ├── vehicle-hyundai-venue-2025.html
│   ├── vehicle-kia-seltos-2025.html
│   ├── vehicle-kia-syros-2026.html
│   ├── vehicle-maruti-brezza-2025.html
│   ├── vehicle-maruti-fronx-2025.html
│   ├── vehicle-renault-duster-2025.html
│   ├── vehicle-skoda-kylaq-2025.html
│   ├── vehicle-tata-nexon-2025.html
│   ├── vehicle-tata-sierra-2025.html
│   ├── vehicle-toyota-hyryder-2025.html
│   ├── vehicle-vw-taigun-2025.html
│   ├── vehicle-tata-nexon-ev-2025.html
│   ├── vehicle-mahindra-xuv400-2025.html
│   ├── vehicle-mg-windsor-ev-2025.html
│   ├── vehicle-tata-curvv-ev-2025.html
│   └── vehicle-kia-syros-ev-2026.html
└── README.md
```

---

## Deployment (GitHub Pages)

1. Push all files to the `main` branch of `saibharath666999.github.io`
2. GitHub Pages serves `index.html` at your root domain
3. Custom domain `bharathmeher.org` is configured via the `CNAME` file and DNS A records

```
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
CNAME www saibharath666999.github.io
```

---

## Roadmap

- [ ] Health check endpoint (`/health` or `health.html`) — planned for next phase
- [ ] Real vehicle images via manufacturer CDN or Unsplash
- [ ] Dealer pricing / on-road price calculator per city
- [ ] User reviews / ratings section
- [ ] Shortlist save (localStorage)

---

## Data sources

- [CarWale](https://www.carwale.com) — prices, specs, variants
- [CardEkho](https://www.cardekho.com) — specs, mileage
- Manufacturer websites (Tata, Hyundai, Kia, Maruti, etc.)
- Data current as of **April 2026**. Prices are ex-showroom and may vary by city.

---

*Built with vanilla HTML, CSS, and JavaScript. No frameworks. No build step. Just drop the files into your repo.*
