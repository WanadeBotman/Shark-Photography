const form = document.getElementById("consultationForm");
const statusEl = document.getElementById("formStatus");

const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  shootType: document.getElementById("shootType"),
  message: document.getElementById("message"),
};

const sticky = document.querySelector(".sticky-cta");
const navLinks = document.querySelectorAll(".nav-link");
const revealEls = document.querySelectorAll(".reveal");

const chips = document.querySelectorAll(".chip");
const shots = document.querySelectorAll(".shot");

const lb = document.getElementById("lightbox");
const lbImg = document.querySelector(".lb-img");
const lbClose = document.querySelector(".lb-close");
const lbPrev = document.querySelector(".lb-prev");
const lbNext = document.querySelector(".lb-next");

let visibleShots = [];
let currentIndex = 0;
let lastFocusEl = null;

/* ---------- Helpers ---------- */
function setStatus(msg, tone = "neutral") {
  if (!statusEl) return;
  statusEl.textContent = msg || "";
  statusEl.dataset.tone = tone;
}

function setError(el, msg) {
  const id = el?.id;
  if (!id) return;
  const err = document.getElementById(id + "Error");
  if (err) err.textContent = msg || "";
  el?.setAttribute("aria-invalid", msg ? "true" : "false");
}

function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

function validate() {
  let ok = true;

  const name = fields.name.value.trim();
  if (name.length < 2) { setError(fields.name, "Please enter your name."); ok = false; }
  else setError(fields.name, "");

  const email = fields.email.value.trim();
  if (!validateEmail(email)) { setError(fields.email, "Please enter a valid email."); ok = false; }
  else setError(fields.email, "");

  const type = fields.shootType.value.trim();
  if (!type) { setError(fields.shootType, "Please select a shoot type."); ok = false; }
  else setError(fields.shootType, "");

  const msg = fields.message.value.trim();
  if (msg.length < 10) { setError(fields.message, "Please add a short message (10+ chars)."); ok = false; }
  else setError(fields.message, "");

  return ok;
}

/* ---------- Demo links (prevent jump) ---------- */
document.querySelectorAll('[data-demo="true"]').forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    setStatus("Demo link — add your real URLs when going live.", "neutral");
  });
});

/* ---------- Smooth scroll ---------- */
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href^='#']");
  if (!a) return;

  const id = a.getAttribute("href");
  if (!id) return;
  if (id === "#") { e.preventDefault(); return; }

  const target = document.querySelector(id);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ---------- Spy ---------- */
const spyIds = [...navLinks].map((l) => l.dataset.spy).filter(Boolean);

function updateSpy() {
  const y = window.scrollY + 120;
  let active = "top";

  spyIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop;
    if (y >= top) active = id;
  });

  navLinks.forEach((l) => {
    l.classList.toggle("is-active", l.dataset.spy === active);
  });
}

window.addEventListener("scroll", updateSpy, { passive: true });
updateSpy();

/* ---------- Sticky CTA hide near consultation ---------- */
function updateSticky() {
  if (!sticky) return;
  const consult = document.getElementById("consultation");
  if (!consult) return;

  const rect = consult.getBoundingClientRect();
  const near = rect.top < window.innerHeight * 0.6;
  sticky.classList.toggle("is-hidden", near);
}
window.addEventListener("scroll", updateSticky, { passive: true });
updateSticky();

/* ---------- Reveal ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("is-in")),
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));

/* ---------- Gallery filter ---------- */
function applyFilter(type) {
  visibleShots = [];
  shots.forEach((s) => {
    const isMatch = type === "all" || s.dataset.type === type;
    s.style.display = isMatch ? "" : "none";
    if (isMatch) visibleShots.push(s);
  });
}

chips.forEach((c) => {
  c.addEventListener("click", () => {
    chips.forEach((x) => x.classList.remove("is-active"));
    c.classList.add("is-active");
    applyFilter(c.dataset.filter || "all");
  });
});
applyFilter("all");

/* ---------- Lightbox (no captions) ---------- */
function openLightboxAt(index) {
  if (!lb || !lbImg) return;
  currentIndex = index;

  const shot = visibleShots[currentIndex];
  const img = shot.querySelector("img");
  if (!img) return;

  lbImg.src = img.src;
  lbImg.alt = img.alt || "Gallery image";

  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lastFocusEl = document.activeElement;
  lbClose?.focus?.();
}

function closeLightbox() {
  if (!lb) return;
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusEl && typeof lastFocusEl.focus === "function") lastFocusEl.focus();
}

function prev() {
  if (!visibleShots.length) return;
  currentIndex = (currentIndex - 1 + visibleShots.length) % visibleShots.length;
  openLightboxAt(currentIndex);
}

function next() {
  if (!visibleShots.length) return;
  currentIndex = (currentIndex + 1) % visibleShots.length;
  openLightboxAt(currentIndex);
}

function trapFocus(e){
  if (!lb?.classList.contains("is-open")) return;
  if (e.key !== "Tab") return;

  const focusables = [lbClose, lbPrev, lbNext].filter(Boolean);
  if (!focusables.length) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === first){
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last){
    e.preventDefault();
    first.focus();
  }
}

shots.forEach((s) => {
  s.addEventListener("click", () => {
    const idx = visibleShots.indexOf(s);
    if (idx >= 0) openLightboxAt(idx);
  });
});

lbClose?.addEventListener("click", closeLightbox);
lbPrev?.addEventListener("click", prev);
lbNext?.addEventListener("click", next);

lb?.addEventListener("click", (e) => {
  if (e.target === lb) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lb?.classList.contains("is-open")) return;
  trapFocus(e);
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
});

/* ---------- Form ---------- */
Object.values(fields).forEach((el) => {
  el?.addEventListener("input", () => {
    setStatus("");
    if (el === fields.email && el.value) setError(el, validateEmail(el.value) ? "" : "Please enter a valid email.");
    if (el === fields.name && el.value) setError(el, el.value.trim().length >= 2 ? "" : "Please enter your name.");
    if (el === fields.message && el.value) setError(el, el.value.trim().length >= 10 ? "" : "Please add a short message (10+ chars).");
    if (el === fields.shootType) setError(el, el.value ? "" : "Please select a shoot type.");
  });
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  setStatus("");

  if (!validate()) {
    setStatus("Please fix the highlighted fields.", "warn");
    return;
  }

  setStatus("Sending…", "neutral");
  const btn = form.querySelector("button[type='submit']");
  if (btn) btn.disabled = true;

  setTimeout(() => {
    if (btn) btn.disabled = false;
    form.reset();
    Object.values(fields).forEach((el) => setError(el, ""));
    setStatus("Thanks! Your request was sent (demo). Replace this with your real backend.", "ok");
  }, 900);
});
