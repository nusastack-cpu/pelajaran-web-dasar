# Panduan Lengkap: Git & GitHub Mastery

Dokumen ini akan membimbing Anda bagaimana cara mengirim kode dari komputer lokal ke GitHub menggunakan Git, termasuk cara menggunakan Token (ghp_...) yang Anda miliki.

---

## 1. Instalasi Git
Sebelum memulai, Anda harus memiliki Git terinstall di komputer Anda:
1. Download Git di [git-scm.com](https://git-scm.com/).
2. Install dengan mengikuti petunjuk "Next" hingga selesai.
3. Buka Terminal (CMD atau PowerShell) dan ketik:
   `git --version` (Jika muncul angka versi, berarti berhasil).

---

## 2. Konfigurasi Awal
Beri tahu Git siapa Anda (hanya perlu sekali):
```bash
git config --global user.name "Nama Anda"
git config --global user.email "emailanda@example.com"
```

---

## 3. Langkah Mengirim Kode ke GitHub

### Langkah A: Persiapan di GitHub
1. Buka [GitHub.com](https://github.com/) dan login.
2. Klik tombol **New** untuk membuat repositori baru.
3. Beri nama (misal: `belajar-html-lists`) lalu klik **Create repository**.

### Langkah B: Di Terminal Komputer Anda
Masuk ke folder proyek Anda (contoh: `HTML_Lists`):
1. **Inisialisasi Git**:
   ```bash
   git init
   ```
2. **Tambah File ke Keranjang**:
   ```bash
   git add .
   ```
3. **Catat Perubahan (Commit)**:
   ```bash
   git commit -m "Upload materi HTML Lists"
   ```
4. **Ganti Nama Branch**:
   ```bash
   git branch -M main
   ```

### Langkah C: Menghubungkan ke GitHub Menggunakan Token
Gunakan format link ini agar Anda tidak perlu mengetik password terus-menerus (Ganti bagian bertanda `<...>`):
```bash
git remote add origin https://TOKEN_ANDA@github.com/USERNAME_ANDA/NAMA_REPO.git
```
*Contoh:*
`git remote add origin https://ghp_m9Ch...IZ@github.com/UserKu/belajar-html-lists.git`

5. **Kirim Sekarang!**:
   ```bash
   git push -u origin main
   ```

---

## 4. Tips Keamanan Token
> [!CAUTION]
> Jangan pernah membagikan Token Anda (ghp_...) kepada orang asing atau mengupload file yang berisi token tersebut ke publik. Token tersebut adalah kunci rahasia ke akun Anda.

---

## 5. Perintah yang Sering Digunakan
- `git status`: Cek file mana yang berubah.
- `git log`: Lihat riwayat commit.
- `git pull`: Mengambil perubahan terbaru dari GitHub ke komputer.
