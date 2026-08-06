# Karra Hrishikesh Reddy — Portfolio

Static site (no build step) — plain HTML/CSS/JS.

- `index.html` — main portfolio page
- `resume.html` — printable resume backup (not linked from the site anymore,
  since the header/contact "Resume" links now point to your real Drive PDF)
- `style.css`, `script.js`
- `assets/profile.jpg`, `assets/profile-avatar.jpg` — your photo (full-res and
  a cropped/resized headshot used for the circular nav avatar)

## Run locally

```
python3 -m http.server 8000
```
then open http://localhost:8000

## Deploy to Vercel (free)

1. `npm i -g vercel` (or use the Vercel dashboard)
2. From this folder: `vercel` → follow prompts → `vercel --prod`

No config/build settings needed — it's a static site, Vercel serves it as-is.

### Alternative free hosts
- **Netlify**: drag-and-drop this folder onto app.netlify.com/drop
- **GitHub Pages**: push to a repo, enable Pages on the `main` branch root

## Contact form

The contact form posts to [FormSubmit](https://formsubmit.co) using your email
(`karra.hrishikesh@gmail.com`) as the target — no backend/server needed. The
**first** submission after deploying will trigger a one-time confirmation
email from FormSubmit to that address; click the link in it to activate the
form. After that, all submissions land directly in your inbox.

## Resume link

The "Resume" buttons (header + contact section) link straight to your Google
Drive PDF — one for viewing (`.../view`), one for direct download
(`uc?export=download&id=...`). These work as plain navigation links. Note:
Google Drive does **not** support hotlinking files as embedded `<img>`/PDF
viewers reliably (it returned a 503 when tried) — that's why the photo is a
local file in `assets/` instead of a Drive link. If you replace the resume
later, re-share the new file and swap the file ID in `index.html`.

## Notes / things to revisit

- Phone number from the resume was intentionally left off the public site.
- No GitHub link is included since a GitHub URL wasn't provided — add one to
  the `.contact-links` block in `index.html` if you want it listed.
- Swap the `.viz-*` CSS placeholders in the "Selected Work" section for real
  screenshots/diagrams whenever you have them.
