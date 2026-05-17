# Harshit Kumar — Portfolio

Built with **React + Vite**.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── assets/
│   └── harshit.png          ← your photo (replace with actual)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionHeader.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   └── Contact.jsx
├── data/
│   └── resume.js            ← all your content lives here
├── App.jsx
├── main.jsx
└── index.css
```

## Adding New Sections

1. Create `src/components/YourSection.jsx`
2. Import and add it in `App.jsx`
3. Add a link in `Navbar.jsx`
4. Add data in `src/data/resume.js`
