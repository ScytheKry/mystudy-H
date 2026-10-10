/*
  CARA MENAMBAHKAN SERTIFIKAT:
  1. Simpan file gambar ke folder images/ (contoh: images/oracle-ai.png).
  2. Tambahkan objek baru ke array certificates di bawah.
  3. category harus salah satu: "Programming", "Cloud & AI", atau "Other".
  4. Gunakan tanggal YYYY-MM-DD supaya sorting berjalan benar.
*/
const certificates = [
  {
    title: "Mengenal Pemrograman Komputer",
    issuer: "Codepolitan",
    date: "2024-10-23",
    category: "Programming",
    image: "images/codepolitan1.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar pemrograman komputer.",
  },
  {
    title: "Algoritma dan Pemrograman Dasar",
    issuer: "Codepolitan",
    date: "2024-11-09",
    category: "Programming",
    image: "images/codepolitan2.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami algoritma dan pemrograman dasar.",
  },
  {
    title: "Mahir menggunakan Text Editor buat Pemula",
    issuer: "Codepolitan",
    date: "2024-11-09",
    category: "Programming",
    image: "images/codepolitan3.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam menguasai penggunaan text editor untuk pemula.",
  },
  {
    title: "Menggunakan Terminal atau CMD untuk Development",
    issuer: "Codepolitan",
    date: "2024-11-09",
    category: "Programming",
    image: "images/codepolitan4.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami penggunaan terminal atau command prompt untuk pengembangan perangkat lunak.",
  },
  {
    title: "Belajar Git Pemula",
    issuer: "Codepolitan",
    date: "2025-02-15",
    category: "Programming",
    image: "images/codepolitan5.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar penggunaan Git untuk pemula.",
  },
  {
    title: "Belajar GIT Lanjutan",
    issuer: "Codepolitan",
    date: "2025-02-23",
    category: "Programming",
    image: "images/codepolitan6.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami konsep dan praktik lanjutan penggunaan Git.",
  },
  {
    title: "Belajar Dasar HTML",
    issuer: "Codepolitan",
    date: "2025-02-23",
    category: "Programming",
    image: "images/codepolitan7.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar HTML untuk pengembangan web.",
  },
  {
    title: "Belajar Dasar CSS",
    issuer: "Codepolitan",
    date: "2025-02-28",
    category: "Programming",
    image: "images/codepolitan8.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar CSS untuk desain web.",
  },
  {
    title: "Belajar Bootstrap CSS Framework",
    issuer: "Codepolitan",
    date: "2025-03-04",
    category: "Programming",
    image: "images/codepolitan10.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar Bootstrap CSS Framework.",
  },
  {
    title: "Belajar JavaScript",
    issuer: "Codepolitan",
    date: "2025-04-13",
    category: "Programming",
    image: "images/codepolitan10.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar JavaScript.",
  },
  {
    title: "Belajar Konsep OOP di JavaScript",
    issuer: "Codepolitan",
    date: "2025-04-18",
    category: "Programming",
    image: "images/codepolitan11.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami konsep Object-Oriented Programming (OOP) di JavaScript.",
  },
  {
    title: "Belajar JavaScript Asynchronous",
    issuer: "Codepolitan",
    date: "2025-04-25",
    category: "Programming",
    image: "images/codepolitan12.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami konsep asynchronous programming di JavaScript.",
  },
  {
    title: "Belajar JavaScript DOM",
    issuer: "Codepolitan",
    date: "2025-04-26",
    category: "Programming",
    image: "images/codepolitan13.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami konsep DOM (Document Object Model) di JavaScript.",
  },
  {
    title: "Belajar AJAX dan Web API",
    issuer: "Codepolitan",
    date: "2025-04-26",
    category: "Programming",
    image: "images/codepolitan14.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami konsep AJAX dan penggunaan Web API di JavaScript.",
  },
  {
    title: "Developer & Desain: Membangun Dasar UI/UX yang Solid",
    issuer: "Codepolitan",
    date: "2025-04-26",
    category: "Programming",
    image: "images/codepolitan15.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar UI/UX untuk pengembangan dan desain web menggunakan Figma.",
  },
  {
    title: "Belajar JQuery Dasar",
    issuer: "Codepolitan",
    date: "2025-05-13",
    category: "Programming",
    image: "images/codepolitan16.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar penggunaan JQuery untuk pengembangan web.",
  },
  {
    title: "Membuat Landing Page Website dengan Bootstrap 4",
    issuer: "Codepolitan",
    date: "2025-05-14",
    category: "Programming",
    image: "images/codepolitan17.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam membuat landing page website menggunakan Bootstrap 4.",
  },
  {
    title: "Membuat Halaman Website Portofolio Menggunakan Tailwind CSS",
    issuer: "Codepolitan",
    date: "2025-05-23",
    category: "Programming",
    image: "images/codepolitan18.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam membuat portofolio website menggunakan Tailwind CSS.",
  },
  {
    title: "Studi Laravel 11 : Membangun Aplikasi E-Wallet",
    issuer: "Codepolitan",
    date: "2025-06-08",
    category: "Programming",
    image: "images/codepolitan19.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam membangun aplikasi E-Wallet menggunakan Laravel 11.",
  },
  {
    title: "Membuat Website Crowd Funding dengan Tailwind - Slicing",
    issuer: "Codepolitan",
    date: "2025-07-12",
    category: "Programming",
    image: "images/codepolitan20.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam membuat website Crowd Funding menggunakan Tailwind CSS.",
  },
  {
    title: "Pengenalan SASS Pada CSS",
    issuer: "Codepolitan",
    date: "2025-07-28",
    category: "Programming",
    image: "images/codepolitan21.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami pengenalan SASS pada CSS.",
  },
  {
    title: "Belajar Cepat Vue.js",
    issuer: "Codepolitan",
    date: "2025-08-20",
    category: "Programming",
    image: "images/codepolitan22.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar penggunaan Vue.js untuk pengembangan web.",
  },
  {
    title: "Belajar VueJS 3",
    issuer: "Codepolitan",
    date: "2025-09-02",
    category: "Programming",
    image: "images/codepolitan23.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar penggunaan VueJS 3 untuk pengembangan web.",
  },
  {
    title: "Belajar Fetch API Dengan Vue 3",
    issuer: "Codepolitan",
    date: "2025-09-11",
    category: "Programming",
    image: "images/codepolitan24.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami penggunaan Fetch API dengan Vue 3",
  },
  {
    title: "Belajar State Management Vue 3",
    issuer: "Codepolitan",
    date: "2025-09-19",
    category: "Programming",
    image: "images/codepolitan25.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami konsep State Management di Vue 3",
  },
  {
    title: "Belajar Vue 3 dan Firebase Studi Kasus Blog",
    issuer: "Codepolitan",
    date: "2025-09-26",
    category: "Programming",
    image: "images/codepolitan26.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami penggunaan Vue 3 dan Firebase melalui studi kasus pembuatan blog.",
  },
  {
    title: "Belajar ReactJS",
    issuer: "Codepolitan",
    date: "2025-11-17",
    category: "Programming",
    image: "images/codepolitan27.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar penggunaan React.js untuk pengembangan web yang interaktif.",
  },
  {
    title:
      "React.js 101 - Membuat dan Menggunakan Komponen dalam Aplikasi Berbasis React.js",
    issuer: "Codepolitan",
    date: "2025-11-23",
    category: "Programming",
    image: "images/codepolitan28.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami pembuatan dan penggunaan komponen dalam aplikasi berbasis React.js.",
  },
  {
    title:
      "React.js State - Mengelola Perubahan Tampilan dengan Data bersama Event Handler",
    issuer: "Codepolitan",
    date: "2025-11-25",
    category: "Programming",
    image: "images/codepolitan29.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami pengelolaan perubahan tampilan dengan data bersama event handler di React.js.",
  },
  {
    title: "React.js State Management - Panduan Menggunakan State yg Baik",
    issuer: "Codepolitan",
    date: "2026-02-19",
    category: "Programming",
    image: "images/codepolitan30.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami panduan penggunaan state yang baik dalam pengembangan aplikasi React.js.",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    date: "2025-01-26",
    category: "Programming",
    image: "images/dicoding1.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar pemrograman JavaScript.",
  },
  {
    title: "Intro to Software Engineering",
    issuer: "RevoU",
    date: "2024-03-29",
    category: "Programming",
    image: "images/revou1.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami pengenalan rekayasa perangkat lunak (Software Engineer).",
  },
  {
    title: "UX Writing",
    issuer: "MySkill",
    date: "2024-04-17",
    category: "Programming",
    image: "images/myskill1.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar UX Writing untuk pengembangan pengalaman pengguna yang lebih baik.",
  },
  {
    title: "Basic English and TOEFL",
    issuer: "MySkill",
    date: "2024-04-16",
    category: "Other",
    image: "images/myskill2.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar bahasa Inggris dan materi TOEFL.",
  },
  {
    title: "Data Visualization",
    issuer: "MySkill",
    date: "2024-04-24",
    category: "Other",
    image: "images/myskill3.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar visualisasi data untuk analisis dan presentasi informasi menggunakan Microsoft Excel.",
  },
  {
    title: "Frontend Development",
    issuer: "MySkill",
    date: "2024-04-18",
    category: "Programming",
    image: "images/myskill3.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar pengembangan frontend untuk membangun antarmuka pengguna yang interaktif dan responsif di HTML.",
  },
  {
    title: "Belajar Pemrograman Python Dari Dasar",
    issuer: "ZilLearn",
    date: "2024-04-08",
    category: "Programming",
    image: "images/zillearn1.png",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar pemrograman Python dari nol.",
  },
  {
    title: "Java for Beginners (Core Concepts): Easy Course on Java",
    issuer: "ZilLearn",
    date: "2024-04-28",
    category: "Programming",
    image: "images/zillearn2.png",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar pemrograman Java dari nol.",
  },
  {
    title: "Multithreading and Parallel Programming in C#",
    issuer: "ZilLearn",
    date: "2024-09-12",
    category: "Programming",
    image: "images/zillearn3.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami konsep multithreading dan pemrograman paralel di C#.",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    date: "2024-06-17",
    category: "Programming",
    image: "images/dicoding2.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar pemrograman web.",
  },
  {
    title: "Marketing your NFTs for Beginners",
    issuer: "BitDegree",
    date: "2024-03-18",
    category: "Other",
    image: "images/bitdegree1.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami pemasaran NFT untuk pemula.",
  },
  {
    title: "NFT - Everything you need to know about Non-Fungible Tokens",
    issuer: "BitDegree",
    date: "2024-03-18",
    category: "Other",
    image: "images/bitdegree2.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami segala hal tentang Non-Fungible Tokens (NFT).",
  },
  {
    title: "Photoshop - Create Quickly Simple & Modern Text Effects",
    issuer: "BitDegree",
    date: "2024-03-18",
    category: "Other",
    image: "images/bitdegree3.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami cara membuat efek teks sederhana dan modern dengan cepat menggunakan Photoshop.",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "2025-10-29",
    category: "Cloud & AI",
    image: "images/oracle1.jpg",
    credentialUrl: "",
    description:
      "Sertifikat ini menandai pencapaian saya dalam memahami dasar-dasar AI dan layanan cloud Oracle.",
  },
];

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
          <div class="mt-4 flex items-center justify-between border-t border-white/[.07] pt-3">${credentialLink}<span class="text-xs text-slate-600">#${String(index + 1).padStart(2, "0")}</span></div>
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

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("border-violet/40", selected);
      item.classList.toggle("bg-violet", selected);
      item.classList.toggle("text-ink", selected);
      item.classList.toggle("border-white/10", !selected);
      item.classList.toggle("text-slate-400", !selected);
      item.classList.toggle("text-slate-400", !selected);
    });
    renderCertificates();
  });
});

sortSelect.addEventListener("change", renderCertificates);
document
  .querySelector("#lightbox-close")
  .addEventListener("click", closeLightbox);
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
renderCertificates();
