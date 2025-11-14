# How to Run the App

## ⚠️ Important: You Can't Open index.html Directly!

With React and Vite, you **cannot** just double-click `index.html` to open the app. You need to run a development server.

## 🚀 Quick Start

### Step 1: Install Dependencies (First Time Only)

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

The terminal will show you a URL like:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

**Click the URL or copy it to your browser!**

The app will automatically reload when you make changes.

## 🛑 To Stop the Server

Press `Ctrl + C` in the terminal where the server is running.

## 📝 Other Commands

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## ❓ Troubleshooting

### Port Already in Use?
If port 3000 is busy, Vite will automatically use the next available port (3001, 3002, etc.)

### Dependencies Not Found?
Make sure you've run `npm install` first.

### Still Having Issues?
1. Delete `node_modules` folder
2. Delete `package-lock.json` (if it exists)
3. Run `npm install` again
4. Run `npm run dev`

## 💡 Why Can't I Open index.html Directly?

React apps need to be:
1. **Transpiled** - JSX needs to be converted to JavaScript
2. **Bundled** - Multiple files need to be combined
3. **Served** - Modules need to be loaded correctly

The Vite dev server does all of this automatically!

