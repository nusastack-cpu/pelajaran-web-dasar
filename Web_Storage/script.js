/**
 * MODUL: JAVASCRIPT WEB STORAGE (LocalStorage)
 * Fungsi Utama: Menyimpan data ke memori browser
 */

// 1. SELEKSI ELEMEN
const inputData = document.getElementById('input-data');
const btnSave = document.getElementById('btn-save');
const btnClear = document.getElementById('btn-clear');
const output = document.getElementById('output');

/**
 * FUNGSI: tampilkanData()
 * Mengambil data dari localStorage dan menampilkannya di layar.
 */
function tampilkanData() {
    // A. GET: Mengambil item bernama 'catatanKu' dari memori browser
    const dataTersimpan = localStorage.getItem('catatanKu');

    // B. VALIDASI: Cek apakah datanya ada atau kosong
    if (dataTersimpan) {
        output.innerText = "Data Tersimpan: " + dataTersimpan;
    } else {
        output.innerText = "Tidak ada data yang disimpan.";
    }
}

// 2. EVENT LISTENERS

// A. Tombol Simpan
btnSave.addEventListener('click', () => {
    const teks = inputData.value;
    if (teks === "") {
        alert("Harap masukkan teks!");
        return;
    }

    // SET: Menyimpan data ke localStorage dengan kunci 'catatanKu'
    localStorage.setItem('catatanKu', teks);
    
    // Perbarui tampilan
    tampilkanData();
    inputData.value = ""; // Kosongkan input
});

// B. Tombol Hapus
btnClear.addEventListener('click', () => {
    // REMOVE: Menghapus data tertentu
    localStorage.removeItem('catatanKu');
    
    // Atau bisa pakai localStorage.clear() untuk menghapus SEMUA data
    
    tampilkanData();
});

// 3. JALANKAN SAAT HALAMAN DIBUKA
// Ini memastikan data lama muncul kembali meskipun browser di-refresh
tampilkanData();
