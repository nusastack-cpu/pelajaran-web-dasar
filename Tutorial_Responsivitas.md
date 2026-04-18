# Panduan Web Responsif: HP vs Desktop

Web Responsif adalah teknik desain di mana website dapat menyesuaikan tampilannya secara otomatis agar tetap nyaman dibaca di perangkat apa pun, mulai dari HP kecil hingga monitor Desktop besar.

---

## 1. Aturan Emas: Meta Viewport
Hal pertama yang **PENTING** ada di dalam tag `<head>` setiap file HTML Anda:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
*Tanpa tag ini, Media Queries tidak akan bekerja dengan benar di perangkat mobile.*

---

## 2. Media Queries (@media)
Ini adalah "senjata" utama CSS untuk memberikan gaya yang berbeda pada ukuran layar yang berbeda.

```css
/* GAYA UNTUK DESKTOP (Default) */
.sidebar { display: block; }

/* GAYA UNTUK HP (Layar di bawah 600px) */
@media screen and (max-width: 600px) {
    .sidebar { display: none; } /* Sembunyikan sidebar di HP */
    body { font-size: 14px; }    /* Perkecil teks di HP */
}
```

---

## 3. Breakpoints Populer
Gunakan angka-angka standar ini sebagai acuan:
- **< 576px**: HP (Portrait).
- **576px - 768px**: Tablet / HP (Landscape).
- **768px - 992px**: Tablet Besar / Desktop Kecil.
- **> 1200px**: Monitor Desktop Besar.

---

## 4. Menggunakan Flexbox & Grid
Jangan gunakan lebar tetap (fixed width) seperti `width: 1000px;`. Gunakan sistem yang fleksibel:
- **Flexbox**: Gunakan `flex-wrap: wrap;` agar item turun ke bawah saat ruang sempit.
- **Grid**: Gunakan `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` untuk kolom yang otomatis menyesuaikan jumlahnya.

---

## 5. Satuan Reaktif (Units)
Hindari `px` untuk tata letak besar. Gunakan:
- **`%`**: Lebar relatif terhadap kontainer.
- **`rem`**: Ukuran teks relatif terhadap ukuran dasar browser.
- **`vw` / `vh`**: Relative terhadap lebar/tinggi layar (Viewport Width/Height).

---

## 6. Contoh Responsif di Bootstrap
Jika Anda menggunakan Bootstrap, cukup tambahkan kelas kolom:
`<div class="col-12 col-md-6 col-lg-4">...</div>`
- **col-12**: Full di HP.
- **col-md-6**: Setengah layar di Tablet.
- **col-lg-4**: Sepertiga layar di Laptop.
