# Habib — Developer Portfolio

## Menjalankan
1. Ekstrak folder proyek.
2. Buka folder di VS Code.
3. Buka `index.html` langsung di browser atau gunakan ekstensi Live Server.
4. Internet diperlukan untuk memuat Tailwind CDN dan Google Fonts.

## Menambahkan sertifikat
1. Simpan gambar sertifikat ke folder `images/`.
2. Buka `script.js` dan tambahkan objek ke array `certificates`.
3. Isi `title`, `issuer`, `date` (format `YYYY-MM-DD`), `category`, `image`, `credentialUrl`, dan `description`.
4. Kategori yang didukung: `Programming`, `Cloud & AI`, `Other`.

Contoh:
```js
{
  title: "Nama Sertifikat",
  issuer: "Nama penyedia",
  date: "2026-09-15",
  category: "Programming",
  image: "images/nama-sertifikat.png",
  credentialUrl: "https://contoh-link-verifikasi.com",
  description: "Ringkasan singkat sertifikat."
}
```

## Ganti profil dan kontak
- Ganti nama, deskripsi, dan skill di `index.html`.
- Ganti `your.email@example.com` pada link email di bagian contact.
- Ganti placeholder sertifikat di `script.js` dengan data dan gambar sertifikat milikmu.

Catatan: data sertifikat yang ada di `script.js` adalah contoh placeholder. Ganti dengan data asli sebelum dipublikasikan.
