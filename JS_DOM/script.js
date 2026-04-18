// DOM MANIPULATION MASTERCLASS

// 1. SELEKSI ELEMEN
const judul = document.getElementById('judul');
const btnTeks = document.getElementById('btn-teks');
const box = document.getElementById('box');
const btnWarna = document.getElementById('btn-warna');
const btnBulat = document.getElementById('btn-bulat');
const inputNama = document.getElementById('input-nama');
const sapaan = document.getElementById('sapaan');

// 2. EVENT LISTENER (Mendengarkan Aksi Pengguna)

// Merubah Teks
btnTeks.addEventListener('click', function() {
    judul.innerText = "Judul Berhasil Diubah! ðŸŽ‰";
    judul.style.color = "#3b82f6";
});

// Merubah Gaya (Style)
btnWarna.addEventListener('click', () => {
    // Generate warna acak
    const warnaAcak = '#' + Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = warnaAcak;
});

btnBulat.addEventListener('click', () => {
    // Menambah/Menghapus class atau merubah border-radius langsung
    if (box.style.borderRadius === '50%') {
        box.style.borderRadius = '10px';
    } else {
        box.style.borderRadius = '50%';
    }
});

// Interaksi Input (Real-time)
inputNama.addEventListener('input', (e) => {
    const nilaiInput = e.target.value;
    if (nilaiInput === "") {
        sapaan.innerText = "Halo, Pengguna!";
    } else {
        sapaan.innerText = "Halo, " + nilaiInput + "!";
    }
});
