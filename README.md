<img width="1900" height="802" alt="Screenshot 2026-02-18 134621" src="https://github.com/user-attachments/assets/a6f491ba-97ad-44e6-9024-aca83eb6a8e1" />

# 🦈 Sharkcxde Photography

A premium, cinematic photography landing page designed for events, weddings, portraits, and brand shoots. Built with a mobile-first approach, this template features a clean UI, dynamic gallery filtering, a keyboard-accessible lightbox, and a consultation-first booking flow.

Pre-configured for the South African market with default ZAR (R) pricing.

## 🔗 Live Demo

Experience the template in action: **[https://wanadebotman.github.io/Shark-Photography/]**

## ✨ Features

* **Cinematic Dark UI:** A moody, professional aesthetic utilizing custom CSS variables, gradients, and a sleek typography pairing (Fraunces & Source Sans 3).
* **Fully Responsive:** Mobile-first design with a sticky mobile CTA that seamlessly adapts to desktop layouts.
* **Dynamic Gallery:** * Category filtering (Weddings, Events, Portraits, etc.) without page reloads.
    * Custom, vanilla JavaScript lightbox with keyboard navigation (`Arrow keys`, `Esc`) and focus trapping for accessibility.
* **Smooth UX:** Scroll-spy navigation highlights the active section as you scroll, complemented by smooth scroll reveals using `IntersectionObserver`.
* **Consultation Form:** Built-in vanilla JS form validation ensuring valid email formats and minimum message lengths before submission.

## 🛠️ Tech Stack

* **HTML5:** Semantic markup with strict accessibility (ARIA labels, focus states).
* **CSS3:** Custom properties, CSS Grid/Flexbox, and keyframe animations. Zero external CSS frameworks.
* **JavaScript (ES6+):** Vanilla JS for DOM manipulation, form validation, and intersection observers. Zero dependencies.

## 🚀 Getting Started

Since this is a static website, no complex build tools are required.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/sharkcxde-photography.git](https://github.com/yourusername/sharkcxde-photography.git)
    ```
2.  **Open the project:**
    Simply open the `index.html` file in your preferred web browser, or use a local server extension like VS Code's "Live Server" for hot-reloading.

## 🎨 Customization Guide

To make this template your own, you will need to update a few key areas:

* **Images:** Replace the placeholder images in the `images/` directory with your own portfolio work. Update the `src` and `alt` attributes in the `#work` section.
* **Pricing:** The packages are currently set to demo pricing in ZAR (R3,000 / R7,500). Update the `.price-tag` elements in the `index.html` file to reflect your actual rates.
* **Social Links:** Update the `href` attributes in the `.social-icons` block and remove the `data-demo="true"` attributes to activate the links.
* **Backend Integration:** The consultation form currently simulates a successful submission. To receive real inquiries, hook the `<form id="consultationForm">` up to a form-handling service (like Formspree or Netlify Forms) or your own backend API inside the `script.js` submission event listener.

## 👨‍💻 Created By

**Sharkcxde Web Studio**
