# Paulina Raniecka — website

- `frontend/` — React + Vite single-page site, hosted on **Vercel**
- `backend/` — Node.js + Express API (contact form → email), hosted on **Hostinger**

## Run locally

```bash
npm run install:all   # first time only
npm run dev           # starts backend (:3001) and frontend (:5173)
```

Open http://localhost:5173. In development the frontend proxies `/api` to the backend, and
contact messages are printed in the terminal (no SMTP needed).

## Editing content

- All text: `frontend/src/content.js` (search for `TODO`)
- Photos: `frontend/public/images/` — see the README there for the expected file names

## Deploy the frontend (Vercel)

1. Push the repo to GitHub and import it in Vercel.
2. **Root Directory:** `frontend` · Framework: Vite (auto-detected).
3. Environment variable: `VITE_API_URL=https://<your-backend-domain>` (no trailing slash).
4. `frontend/vercel.json` already rewrites all routes to `index.html`.

## Deploy the backend (Hostinger)

1. hPanel → **Websites → Add website → Node.js app** (Business/Cloud plan), or a VPS.
2. Connect the GitHub repo (or upload the `backend` folder as a zip).
   **Root directory:** `backend` · **Entry file:** `server.js` · **Start command:** `npm start`.
3. Add the environment variables from `backend/.env.example`:
   - `NODE_ENV=production`
   - `CORS_ORIGINS=https://your-domain.com,https://your-project.vercel.app`
   - `SMTP_HOST=smtp.hostinger.com`, `SMTP_PORT=465`, `SMTP_USER`, `SMTP_PASS` (a Hostinger mailbox)
   - `CONTACT_TO` — where messages should arrive
4. Check `https://<backend-domain>/api/health` returns `{"status":"ok"}`.

On a VPS instead: `cd backend && npm install && pm2 start server.js --name paulina-api`, behind Nginx.
