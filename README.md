# DVOLTTY Creative Studio — upgraded website source

A responsive multi-page creative studio website in DVOLTTY's navy, royal-blue, gold and white identity.

## Pages and features
- `index.html` — animated premium homepage, brand introduction, services and WhatsApp enquiry form.
- `services.html` — service details with WhatsApp order links for individual services.
- `pricing.html` — indicative service pricing.
- `portfolio.html` — filterable project gallery, with local admin-added projects rendered in the same browser.
- `admin.html` — local demo dashboard to add/edit/delete portfolio items, attach an image or image URL, keep enquiry follow-up notes, and export/import a JSON backup.
- `styles.css`, `script.js`, `assets/` — styling, mobile navigation, reveal animations and favicon.
- `robots.txt`, `sitemap.xml` — basic search indexing files.

## Publish to GitHub Pages
1. Download and extract the ZIP.
2. Open the GitHub repository `dvoltty/dvoltty-creative-studio`.
3. Back up existing files, then upload the **contents** of the `dvoltty-creative-studio` folder to the repository root (not the enclosing folder).
4. Commit to the `main` branch.
5. In Settings → Pages, select Deploy from a branch → `main` → `/ (root)`.
6. Wait for deployment, then test the live site on desktop and mobile.

Website: https://dvoltty.github.io/dvoltty-creative-studio/
WhatsApp: +234 907 888 4689

## Admin and enquiry limitations — please read
GitHub Pages is static hosting. The admin page is a **browser-local demonstration**, not a secure production CMS:
- Demo passcode: `DvolttyDemo26` (visible in page source; do not rely on it for security).
- Projects and follow-up notes are saved only in that browser's local storage. They do not sync to other devices or visitors.
- Images uploaded in the dashboard are stored as browser data and are subject to browser storage limits.
- The public enquiry form opens WhatsApp with a prefilled message. It does not automatically save enquiries into the admin dashboard.

For a real production admin dashboard with secure sign-in, shared project uploads and a central enquiry inbox, connect a backend such as Supabase (Auth + database + storage + row-level security) or another secure service. Do not store customer personal data in this demo dashboard.

## SEO checklist
- Page-specific titles and meta descriptions, canonical/social metadata on the homepage, sitemap and robots file are included.
- Add `https://dvoltty.github.io/dvoltty-creative-studio/` to Google Search Console and submit `/dvoltty-creative-studio/sitemap.xml`.
- Verify ownership and check indexing status. Search visibility is not guaranteed or instant.
- Replace concept gallery examples with real client-approved work and accurate project descriptions before advertising them as completed projects.

## Pricing and content
All listed prices are indicative starting prices in Nigerian naira. Confirm each final quote with the customer before payment.


## Latest visual and contact updates
- Added animated 1,000+ brand and 1,000+ customer counters (confirm these figures reflect your actual business records before publishing).
- Added a continuously moving service ribbon and a custom offline SVG technology illustration.
- Added the contact email dvoltty@gmail.com to website footers.
- Updated the shared script to safely support pages without an enquiry form and to animate the counters.
