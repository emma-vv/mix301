# Quick Deployment Guide for Presentation

## Option 1: Deploy to Vercel (Recommended - 2 minutes)

### Steps:
1. **Install Vercel CLI** (one-time):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts (press Enter for defaults)
   - It will give you a URL like: `https://your-app.vercel.app`

3. **Done!** Share the URL with anyone - it works on any device!

### To update after changes:
```bash
vercel --prod
```

---

## Option 2: Deploy to Netlify (Alternative - 2 minutes)

### Steps:
1. **Install Netlify CLI** (one-time):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy --prod
   ```
   - First time: Login and follow prompts
   - It will give you a URL like: `https://your-app.netlify.app`

---

## Option 3: Build and Serve Locally

### Steps:
1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Serve it** (choose one):
   
   **Option A - Using Vite preview:**
   ```bash
   npm run preview
   ```
   Then access via Network URL shown in terminal
   
   **Option B - Using a simple server:**
   ```bash
   npx serve dist
   ```
   Or install globally: `npm install -g serve` then `serve dist`

---

## Option 4: Use ngrok (Temporary Public URL)

### Steps:
1. **Install ngrok**: Download from https://ngrok.com/download

2. **Start your dev server**:
   ```bash
   npm run dev
   ```

3. **In another terminal, run ngrok**:
   ```bash
   ngrok http 3000
   ```
   
4. **Copy the URL** (like `https://abc123.ngrok.io`) - works for 2 hours on free plan

---

## Recommendation for Presentation:

**Use Vercel** - It's:
- ✅ Free
- ✅ Fast (2 minutes to deploy)
- ✅ Professional URL
- ✅ Works on any device
- ✅ Easy to update

Just run `vercel` and you're done!

