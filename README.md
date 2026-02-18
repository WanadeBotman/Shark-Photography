<img width="1900" height="802" alt="Screenshot 2026-02-18 134621" src="https://github.com/user-attachments/assets/84032315-45d7-4ed1-9612-c84b66a216e3" />
# Sharkcxde Photography — Premium Landing Page 

A **premium, mobile-first photography landing page** built with **HTML, CSS, and JavaScript**.  
It’s designed to feel modern and cinematic with a clean booking flow, a curated gallery, and a smooth lightbox experience — perfect as a demo template or a real client starter.

---

## ✨ Features

- **Mobile-first, premium UI** (glass panels, strong typography, clean spacing)
- **Curated gallery grid**
  - Category **filter chips**
  - **Lightbox** with keyboard support (Esc / ← / →)
- **Smooth section navigation**
  - Sticky nav + active section highlighting
  - **Sticky CTA** on mobile
- **Consultation form (demo)**
  - Client-side validation
  - Demo submit success message (ready to connect to a backend)
- **One social section only**
  - Social icons in the **contact section**
  - Neutral default + **brand colors on hover**
- **Accessible basics**
  - Focus states, skip link, aria labels, readable contrast

---

## 🧱 Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- Google Fonts:
  - *Fraunces* (display)
  - *Source Sans 3* (body)

---

## 📁 Project Structure

.
├── index.html
├── style.css
├── script.js
└── images/
├── hero.png
├── axel-gallay-TVJo2DB_gB0-unsplash.jpg
├── al-elmes-ULHxWq8reao-unsplash.jpg
├── darwin-boaventura-s_S1tucCArY-unsplash.jpg
├── baptiste-buisson-N1UJRmTzumE-unsplash.jpg
├── brad-starkey-rrCsh37KY5I-unsplash.jpg
├── david-henrichs-72AYEEBJpz4-unsplash.jpg
├── javier-esteban-EVh1R7SkkQ4-unsplash.jpg
└── jakob-owens-mLIurLmSRAY-unsplash.jpg


✅ **Important:** The site expects images inside the `images/` folder.  
If images don’t load, double-check spelling and capitalization.

---

## 🚀 Getting Started

### Option 1 — Open directly
1. Download / clone the project
2. Open `index.html` in your browser

### Option 2 — Run with a local server (recommended)
Using VS Code:
1. Install **Live Server**
2. Right-click `index.html` → **Open with Live Server**

Or using Node:
```bash
npx serve .
🛠️ Customization Guide
1) Change the brand name
Edit in index.html:

Navbar brand text

Page title <title>

2) Replace images
Put new images in /images

Update gallery image src paths in index.html

Example:

<img src="images/my-new-photo.jpg" alt="Description" />
3) Add real social links
In index.html, replace href="#" for the social icon links inside the contact section:

<a class="si-link" data-brand="instagram" href="https://instagram.com/yourpage" target="_blank" rel="noopener">
4) Update packages + pricing
In the Packages section of index.html, change:

Package names

Pricing text

Bullet items

5) Make the form actually send messages
Right now the form uses a demo “success” message in script.js.

To connect it to a backend:

Use a service like Formspree, Netlify Forms, or a custom API endpoint

Replace the demo setTimeout() submit handler with a fetch() call

♿ Accessibility Notes
This project includes:

Skip link for keyboard users

Focus-visible rings

Dialog-style lightbox with keyboard navigation

Buttons used for gallery items (more accessible than clickable divs)

If you want to go further:

Add aria-live confirmation after lightbox opens

Add reduced motion support (prefers-reduced-motion)

🌍 Deployment
GitHub Pages
Push to GitHub

Go to Settings → Pages

Select your branch (main) and root (/)

Save — your site will publish with a public URL

👤 Author

Designed & developed by Sharkcxde Web Studio

📸 Image Credits
This demo uses placeholder photography.
Replace images with your own before using commercially.

