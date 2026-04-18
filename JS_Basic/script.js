// JAVASCRIPT FUNDAMENTALS

// 1. VARIABEL (Tempat menyimpan data)
// let: nilainya bisa diubah
// const: nilainya tetap (constant)
const namaWebsite = "Belajar Web";
let skor = 100;

// 2. TIPE DATA
let nama = "Andi";              // String
let umur = 25;                  // Number
let sudahMenikah = false;       // Boolean
let hobi = ["Membaca", "Musik"]; // Array

// 3. OPERASI MATEMATIKA
let a = 10;
let b = 5;
let hasilTambah = a + b;

// 4. FUNCTION (Kumpulan perintah yang bisa dipanggil ulang)
function sapaPengguna(namaUser) {
    return "Halo, " + namaUser + "! Selamat belajar JavaScript.";
}

// 5. MENAMPILKAN OUTPUT KE HTML
const outputDiv = document.getElementById('js-output');

outputDiv.innerHTML = `
    <strong>Hasil Variabel:</strong> ${namaWebsite} <br>
    <strong>Hasil Hitung:</strong> 10 + 5 = ${hasilTambah} <br>
    <strong>Pesan Fungsi:</strong> ${sapaPengguna(nama)}
`;

// 6. MENAMPILKAN KE CONSOLE (Buka F12 di browser untuk melihat ini)
console.log("Array Hobi:", hobi);
console.log("Status Menikah:", sudahMenikah);
