const grid = document.querySelector("#certificate-grid");
const count = document.querySelector("#certificate-count");
const emptyState = document.querySelector("#empty-state");
const sortSelect = document.querySelector("#sort-order");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxMeta = document.querySelector("#lightbox-meta");
let activeFilter = "All";
let lastFocusedElement = null;
let certificates = [];

const escapeHTML = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );

const formatDate = (dateString) => {
  const date = new Date(`${dateString}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "Date not set";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
};

async function loadCertificates() {
  try {
    const response = await fetch("./certificates.json");

    if (!response.ok) {
      throw new Error(`HTTP error! ${response.status}`);
    }

    certificates = await response.json();
    renderCertificates();
  } catch (error) {
    console.error("Failed to load certificates:", error);
    count.textContent = "00";
    emptyState.classList.remove("hidden");
  }
}

function renderCertificates() {
  const sortDirection = sortSelect.value === "oldest" ? 1 : -1;
  const visible = certificates
    .filter((item) => activeFilter === "All" || item.category === activeFilter)
    .sort((a, b) => (new Date(a.date) - new Date(b.date)) * sortDirection);

  count.textContent = String(visible.length).padStart(2, "0");
  emptyState.classList.toggle("hidden", visible.length > 0);

  grid.innerHTML = visible
    .map((item, index) => {
      const safeTitle = escapeHTML(item.title);
      const safeIssuer = escapeHTML(item.issuer);
      const safeCategory = escapeHTML(item.category);
      const safeImage = escapeHTML(item.image);
      const safeDescription = escapeHTML(item.description);
      const safeDate = escapeHTML(formatDate(item.date));
      const credentialLink = item.credentialUrl
        ? `<a href="${escapeHTML(item.credentialUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-medium text-violet hover:text-violet-200">Verify credential ↗</a>`
        : `<span class="text-xs text-slate-600">Personal archive</span>`;
      const websiteLink = item.websiteUrl
        ? `<a
          href="${escapeHTML(item.websiteUrl)}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-xs font-medium text-violet hover:text-violet-200"
        >
          Visit website ↗
        </a>`
        : "";

      return `
      <article class="certificate-card reveal overflow-hidden rounded-2xl border border-white/[.08] bg-panel/80 p-3 sm:p-4" style="transition-delay:${Math.min(index * 45, 180)}ms">
        <button type="button" class="certificate-preview group block w-full overflow-hidden rounded-xl border border-white/[.06] bg-[#0b0d12] text-left" data-title="${safeTitle}" data-issuer="${safeIssuer}" data-date="${safeDate}" data-image="${safeImage}" aria-label="Lihat sertifikat ${safeTitle}">
          <div class="certificate-image relative grid place-items-center overflow-hidden">
            <img src="${safeImage}" alt="Gambar sertifikat ${safeTitle}" loading="lazy" class="h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="absolute inset-0 hidden flex-col items-center justify-center gap-3 bg-gradient-to-br from-violet/10 to-indigo-500/10 p-6 text-center">
              <span class="grid h-12 w-12 place-items-center rounded-2xl border border-violet/25 bg-violet/10 text-xl text-violet">✳</span>
              <span class="text-sm font-medium text-slate-200">${safeTitle}</span>
              <span class="text-xs text-slate-500">Add image at <code class="text-violet">${safeImage}</code></span>
            </div>
            <span class="absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-200 backdrop-blur">${safeCategory}</span>
            <span class="absolute bottom-3 right-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full border border-white/15 bg-black/60 text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">↗</span>
          </div>
        </button>
        <div class="px-1 pb-1 pt-4">
          <div class="mb-2 flex items-center justify-between gap-3 text-xs text-slate-500"><span>${safeIssuer}</span><span>${safeDate}</span></div>
          <h3 class="text-lg font-semibold tracking-tight text-slate-100">${safeTitle}</h3>
          <p class="mt-2 min-h-10 text-sm leading-5 text-slate-500">${safeDescription}</p>
          <div class="mt-4 border-t border-white/[.07] pt-3">
          <div class="flex items-center justify-between gap-3">
            ${credentialLink}
              <span class="text-xs text-slate-600">#${String(index + 1).padStart(2, "0")}</span>
            </div>
            ${websiteLink ? `<div class="mt-3">${websiteLink}</div>` : ""}
          </div>
        </div>
      </article>`;
    })
    .join("");

  observeRevealElements();
  grid.querySelectorAll(".certificate-preview").forEach((button) => {
    button.addEventListener("click", () => openLightbox(button));
  });
}

function observeRevealElements() {
  const items = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  items.forEach((item) => observer.observe(item));
}

function openLightbox(button) {
  lastFocusedElement = button;
  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = `Sertifikat ${button.dataset.title}`;
  lightboxTitle.textContent = button.dataset.title;
  lightboxMeta.textContent = `${button.dataset.issuer} · ${button.dataset.date}`;
  lightbox.classList.remove("hidden");
  lightbox.classList.add("flex");
  document.body.style.overflow = "hidden";
  document.querySelector("#lightbox-close").focus();
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
  lightboxImage.src = "";
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

// === FUNGSI UTAMA UNTUK FILTER & TOMBOL ===
function applyFilter(categoryName) {
  activeFilter = categoryName;
  filterButtons.forEach((item) => {
    const selected = item.dataset.filter === categoryName;
    item.classList.toggle("border-violet/40", selected);
    item.classList.toggle("bg-violet", selected);
    item.classList.toggle("text-ink", selected);
    item.classList.toggle("border-white/10", !selected);
    item.classList.toggle("text-slate-400", !selected);
  });
  renderCertificates();
}

// Event listener untuk tombol filter biasa
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});

// === TAMBAHAN: Event listener untuk div yang diklik agar scroll & auto-active ===
document.querySelectorAll(".trigger-item").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const targetCategory = trigger.dataset.filter; // Mengambil kategori dari atribut div
    
    // Cari tombol filter yang sesuai dengan kategori
    const targetButton = filterButtons.find(btn => btn.dataset.filter === targetCategory);

    if (targetButton) {
      // 1. Scroll halus ke tombol tersebut
      targetButton.scrollIntoView({ behavior: "smooth", block: "center" });

      // 2. Aktifkan filter & tampilkan data yang sesuai secara otomatis
      applyFilter(targetCategory);
    }
  });
});

sortSelect.addEventListener("change", renderCertificates);
document.querySelector("#lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.classList.contains("hidden"))
    closeLightbox();
});

const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mobileMenu.classList.toggle("hidden", isExpanded);
});
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
observeRevealElements();
loadCertificates();