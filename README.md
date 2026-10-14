# Harshad Khatale Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit content
All text, links, projects and certificates live in `src/data.js`.
Images, the showcase video and the resume PDF live in `public/`.

## Build & deploy
```bash
npm run build      # outputs to dist/
```
- **Vercel / Netlify:** import this folder. Build command `npm run build`, output directory `dist`.
- **Render (static site):** same build command, publish directory `dist`.
- **AWS EC2 + Nginx:** copy `dist/` to the server and point the Nginx `root` at it.
