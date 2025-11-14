# Project Structure

```
MIX301/
├── src/                          # React source code
│   ├── components/              # Reusable React components
│   │   ├── BackgroundBlur.jsx   # Background blur effect component
│   │   ├── BottomNav.jsx       # Bottom navigation bar
│   │   └── StarButton.jsx      # Star/favorite button component
│   │
│   ├── pages/                   # Page components (routes)
│   │   ├── Login1.jsx          # First login page
│   │   ├── Login2.jsx          # Second login page (to be created)
│   │   ├── Dashboard.jsx       # Dashboard page (to be created)
│   │   ├── Courses.jsx         # Courses listing page (to be created)
│   │   ├── Rooms.jsx           # Rooms page (to be created)
│   │   └── Mix100.jsx          # MIX100 course detail page (to be created)
│   │
│   ├── styles/                  # CSS stylesheets
│   │   ├── styles.css          # Main styles
│   │   └── components.css     # Component-specific styles
│   │
│   ├── hooks/                   # Custom React hooks (optional)
│   │   └── (future hooks)
│   │
│   ├── utils/                   # Utility functions (optional)
│   │   └── (future utilities)
│   │
│   ├── assets/                  # Static assets (images, etc.)
│   │   └── (future assets)
│   │
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # React entry point
│   └── index.css               # Global CSS imports
│
├── legacy/                      # Old HTML files (for reference)
│   ├── login1.html
│   ├── login2.html
│   ├── dashboard.html
│   ├── courses.html
│   ├── index.html (old)
│   ├── mix100.html
│   └── components.html
│
├── public/                      # Static public files
│   └── (static assets)
│
├── index.html                   # Main HTML entry point (Vite)
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── .gitignore                  # Git ignore rules
├── README.md                   # Project documentation
├── REACT_MIGRATION.md          # Migration status
└── PROJECT_STRUCTURE.md        # This file
```

## Folder Purposes

### `src/components/`
Reusable React components that can be used across multiple pages:
- **BackgroundBlur**: Background blur effect
- **BottomNav**: Navigation bar with active state
- **StarButton**: Interactive star/favorite button

### `src/pages/`
Page-level components that represent different routes:
- Each page is a route in the React Router
- Pages can use components from `src/components/`

### `src/styles/`
CSS files organized by purpose:
- **styles.css**: Main application styles
- **components.css**: Component-specific styles

### `src/hooks/`
Custom React hooks for reusable logic (optional):
- Can add hooks like `useFavorites`, `useNavigation`, etc.

### `src/utils/`
Utility functions and helpers (optional):
- Helper functions, constants, etc.

### `src/assets/`
Static assets like images, fonts, etc.

### `legacy/`
Old HTML files kept for reference during migration.

## Benefits of This Structure

1. **Clear Separation**: Components, pages, styles, and utilities are clearly separated
2. **Scalability**: Easy to add new components, pages, or features
3. **Maintainability**: Related files are grouped together
4. **Reusability**: Components can be easily shared across pages
5. **Organization**: Easy to find and modify specific parts of the app

