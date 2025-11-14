# Aurora - MIX301 React App

A modern mobile-first React application built with Vite and React Router.

## 📁 Project Structure

```
src/
├── components/       # Reusable React components
├── pages/           # Page components (routes)
├── styles/          # CSS stylesheets
├── hooks/           # Custom React hooks (optional)
├── utils/           # Utility functions (optional)
└── assets/          # Static assets
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed structure.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📦 Dependencies

- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **Vite** - Build tool and dev server

## 🎨 Features

- ✅ React Router for navigation
- ✅ Reusable component library
- ✅ Mobile-first responsive design
- ✅ Glassmorphism UI effects
- ✅ Star/favorite functionality with state management
- ✅ Active navigation state detection

## 📝 Migration Status

See [REACT_MIGRATION.md](./REACT_MIGRATION.md) for migration progress.

## 🗂️ Legacy Files

Old HTML files are preserved in the `legacy/` folder for reference during migration.

## 🛠️ Development

### Adding a New Component

1. Create component in `src/components/`
2. Import and use in pages

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`

### Styling

- Main styles: `src/styles/styles.css`
- Component styles: `src/styles/components.css`
- Global imports: `src/index.css`

## 📄 License

MIT
