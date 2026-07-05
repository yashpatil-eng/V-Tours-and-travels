# Vrunda Tours & Travels — Website

A premium, production-ready marketing and booking website for **Vrunda Tours & Travels**, built with React 19, Vite, and Tailwind CSS.

## ✨ Features

- Modern, mobile-first, luxury travel brand design
- 10 fully built pages: Home, About, Fleet, Services, Gallery, FAQ, Contact, Privacy Policy, Terms & Conditions, 404
- Animated hero, statistics counters, scroll reveals, and hover effects (Framer Motion)
- Fleet showcase (4 / 6 / 7 seater cars, 20 seater bus) with a "Book Now" inquiry modal
- Full booking form with validation, success/error toasts, and EmailJS integration
- Testimonials carousel (SwiperJS), FAQ accordion, gallery with lightbox
- Floating WhatsApp and Call buttons, back-to-top button, dark mode toggle
- Route-based code splitting (lazy loaded pages) for fast load times
- SEO: per-page meta tags, Open Graph, Twitter Cards, canonical URLs, Schema.org `TravelAgency` JSON-LD, `robots.txt`, `sitemap.xml`
- Single configuration file (`src/constants/config.js`) for all business data — no need to touch components to update phone numbers, services, fleet, gallery, or testimonials

## 🧱 Tech Stack

React 19 · Vite · Tailwind CSS · React Router 6 · Framer Motion · React Icons · SwiperJS · EmailJS · React Helmet Async

## 📁 Project Structure

```
vrunda-tours/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/       # Reusable UI components
│   ├── constants/
│   │   └── config.js     # ⭐ Single source of truth for all business data
│   ├── hooks/             # useDarkMode, useScrollTop, useCountUp
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/             # One file per route
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── .env.example
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure EmailJS (for the booking form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service and an Email Template with these variables: `from_name`, `phone`, `email`, `pickup`, `drop`, `journey_date`, `return_date`, `vehicle`, `passengers`, `message`
3. Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Note: If these are left unconfigured, the booking form will still work in the browser (it simulates a successful submission) so you can test the UI, but no email will actually be sent. Fill these in before going live.

### 3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

### 5. Preview the production build locally

```bash
npm run preview
```

## 🔧 Updating Business Information

Everything the business owner needs to change lives in **`src/constants/config.js`**:

- `BUSINESS` — name, owner, phone, email, WhatsApp number, address, Google Maps embed URL
- `FLEET` — vehicle cards (name, image, capacity, features)
- `SERVICES` — the 13 service offerings
- `GALLERY` — gallery images
- `TESTIMONIALS` — customer reviews
- `FAQS` — frequently asked questions
- `STATS` — animated statistics on Home/About

No other file needs to be touched to update this content.

## 🌐 Deployment

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # choose `dist` as the public directory, configure as a single-page app (rewrite all URLs to /index.html)
npm run build
firebase deploy
```

### Other static hosts (Vercel, Netlify, etc.)

- Build command: `npm run build`
- Output directory: `dist`
- Make sure to configure a SPA rewrite rule (`/* → /index.html`) since this is a client-side routed app.

## ✅ Before Going Live Checklist

- [ ] Fill in real EmailJS credentials in `.env`
- [ ] Replace the Google Maps embed URL in `config.js` with your exact business location
- [ ] Update `sitemap.xml` and canonical URLs in `index.html` / `SEO.jsx` if the domain differs from `vrundatours.com`
- [ ] Replace placeholder social links in `config.js` with real profiles
- [ ] Run `npm run build` and check Lighthouse scores before deploying

## 📄 License

This project was custom built for Vrunda Tours & Travels. All content and branding rights belong to the business owner.
