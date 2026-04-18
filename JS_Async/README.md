# JavaScript Async & Fetch API

Modul ini mempelajari cara website berkomunikasi dengan data dari server luar tanpa mengganggu pengalaman pengguna.

## Konsep Penting:
1. **Asinkron (Async)**: Kode yang berjalan di "latar belakang" sehingga website tidak membeku (freeze) saat menunggu balasan dari server.
2. **`fetch()`**: Fungsi bawaan JavaScript untuk meminta data ke sebuah URL.
3. **`async` & `await`**: Cara modern untuk menulis kode asinkron agar terbaca seperti kode biasa yang berurutan.
4. **JSON (JavaScript Object Notation)**: Format data standar yang dikirim oleh server ke browser.
5. **Error Handling (`try...catch`)**: Cara menangkap masalah jika server mati atau internet terputus agar website tidak error total.

## Apa yang Terjadi di Modul Ini?
Saat Anda klik tombol, JavaScript akan mengirim "permintaan" ke API JSONPlaceholder, menunggu balasannya, mengubahnya dari teks menjadi objek JS, lalu menampilkannya sebagai kartu-kartu artikel secara otomatis.

## Cara Menggunakan:
Buka `index.html` dan klik tombol **"Ambil Data dari Server"**. Perhatikan bagaimana data muncul secara dinamis.
