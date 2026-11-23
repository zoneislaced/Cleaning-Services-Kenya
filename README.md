# Cleaning Services Kenya website

A responsive static website built with HTML, CSS and JavaScript.

## Run locally
Open `index.html` in your browser.

## Deploy to Netlify
1. Extract this ZIP.
2. Open Netlify and choose **Add new site** > **Deploy manually**.
3. Drag the extracted `cleaning-services-kenya` folder (or its contents) into the deploy area.
4. Your site will be published.

No build command is required. Publish directory: `.`

## Contact integration
The website uses:
- Phone: `tel:+524706855633`
- WhatsApp: `https://wa.me/254708556633`

The booking form opens WhatsApp with the visitor's enquiry pre-filled. The visitor still needs to press Send in WhatsApp.

## Before going live
- Confirm that +524 706 855633 is the correct business number and that its WhatsApp account is active.
- Replace stock photography if you have your own team and cleaning photos.
- Add verified testimonials, exact service areas, business hours and any pricing details.
- Test phone and WhatsApp links on a mobile device.

## Website image assets

The four main image areas now use images from the repository Assets folder:

- Hero image: https://raw.githubusercontent.com/zoneislaced/Cleaning-Services-Kenya/refs/heads/main/Assets/portrait-of-happy-female-janitor-cleaning-floor.webp
- Residential service card: https://raw.githubusercontent.com/zoneislaced/Cleaning-Services-Kenya/refs/heads/main/Assets/stock-photo-professional-cleaning-service-team-cleans-living-room-in-modern-apartment.webp
- Commercial service card: https://raw.githubusercontent.com/zoneislaced/Cleaning-Services-Kenya/refs/heads/main/Assets/african-commercial-janitor-cleaning-staff.webp
- About section: https://raw.githubusercontent.com/zoneislaced/Cleaning-Services-Kenya/refs/heads/main/Assets/depositphotos_390354242-stock-photo-positive-multiethnic-cleaners-holding-mop.webp


## Managing the website images

The four main website images are now regular HTML `<img>` elements in `index.html` (hero, residential service, commercial service, and about section). To replace one, update the image URL in that element’s `src` attribute. The image sizing and cropping remain controlled in `styles.css`. The images are not inserted by JavaScript.


## Programmatic SEO town pages

The PSEO setup includes:
- `towns.csv` — 84 selected towns and their counties/regions.
- `town-template.html` — shared HTML template for each location page.
- `generate_pages.py` — generates one page per CSV row under `towns/<town-slug>/` and a town directory at `towns/index.html`. When `SITE_URL` is set, it also writes a root `sitemap.xml`.

### Generate pages

Run from this project folder:

```bash
python generate_pages.py
```

Optional: add your live domain for canonical URLs (replace with your real domain):

```bash
SITE_URL=https://www.yourdomain.co.ke python generate_pages.py
```

On Windows PowerShell:

```powershell
$env:SITE_URL="https://www.yourdomain.co.ke"
python generate_pages.py
```

Upload the generated `towns` folder together with `index.html`, `styles.css` and `script.js` to the website root. The generated pages use root-relative asset paths so they can share the main site's CSS and JavaScript.

**SEO quality note:** these are location-page foundations, not proof that cleaning teams are already available in every town. Confirm operational coverage and add genuinely local details, real photos/reviews, neighbourhoods served and town-specific FAQs before indexing each page. Avoid publishing pages that only swap the town name or imply an office/service presence that does not exist.
