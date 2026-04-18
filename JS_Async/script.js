/**
 * MODUL: JAVASCRIPT ASYNC & FETCH API
 * Fungsi Utama: Mengambil data dari API publik (JSONPlaceholder)
 */

// 1. SELEKSI ELEMEN
const btnFetch = document.getElementById('btn-fetch');
const loader = document.getElementById('loader');
const container = document.getElementById('result-container');

/**
 * FUNGSI: ambilData()
 * Menggunakan kata kunci 'async' untuk menandakan fungsi ini berjalan secara asinkron.
 */
async function ambilData() {
    // A. Menampilkan indikator loading dan mematikan tombol
    loader.style.display = 'block';
    container.innerHTML = '';
    btnFetch.disabled = true;

    try {
        // B. FETCH: Meminta data ke URL API
        // 'await' digunakan agar JS menunggu sampai server membalas
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        
        // C. PARSING: Mengubah balasan server menjadi format JSON (Objek JS)
        const data = await response.json();

        // D. LOOPING & RENDER: Menampilkan data ke HTML
        data.forEach(post => {
            const card = document.createElement('div');
            card.className = 'post-card';
            card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        // E. ERROR HANDLING: Jika koneksi internet mati atau URL salah
        container.innerHTML = `<p style="color: red;">Gagal mengambil data: ${error.message}</p>`;
    } finally {
        // F. SELESAI: Sembunyikan loading dan aktifkan kembali tombol
        loader.style.display = 'none';
        btnFetch.disabled = false;
    }
}

// 2. EVENT LISTENER
// Saat tombol diklik, jalankan fungsi ambilData
btnFetch.addEventListener('click', ambilData);
