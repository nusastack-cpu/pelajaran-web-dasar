# Web Storage (LocalStorage) Mastery

Modul ini mempelajari cara menyimpan data di browser pengguna secara permanen tanpa memerlukan database di server.

## Apa itu LocalStorage?
LocalStorage adalah fitur web yang memungkinkan kita menyimpan data (berupa teks) di dalam memori browser. Data ini **tidak akan hilang** meskipun browser ditutup atau komputer dimatikan.

## Perintah Utama yang Dipelajari:
1. **`localStorage.setItem(key, value)`**: Menyimpan data dengan nama kunci tertentu.
2. **`localStorage.getItem(key)`**: Mengambil data berdasarkan nama kuncinya.
3. **`localStorage.removeItem(key)`**: Menghapus data tertentu.
4. **`localStorage.clear()`**: Menghapus seluruh data yang ada di storage website tersebut.

## Kegunaan Umum:
- Menyimpan preferensi pengguna (seperti Mode Gelap/Dark Mode).
- Menyimpan draft tulisan agar tidak hilang saat mati lampu.
- Menyimpan skor tertinggi dalam game sederhana.

## Cara Menggunakan:
Buka `index.html`, ketikkan sesuatu, lalu klik **"Simpan"**. Coba muat ulang (refresh) halaman Anda, datanya akan tetap muncul di layar!
