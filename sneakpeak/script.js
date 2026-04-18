/**
 * SNEAKPEAK - JAVASCRIPT INTERACTION
 * ----------------------------------
 * Modul ini menangani logika interaksi website dan 
 * integrasi AI Dummy API sesuai permintaan.
 */

// 1. CONFIGURATION
const API_URL = "MASUKKANAPI"; // Placeholder untuk API AI di masa depan

// 2. AI DUMMY INTEGRATION
/**
 * Fungsi ini disiapkan jika Anda ingin menghubungkan website dengan AI.
 * @param {string} prompt - Pertanyaan atau instruksi untuk AI.
 */
async function callSneakPeakAI(prompt) {
    if (API_URL === "MASUKKANAPI") {
        console.warn("[AI Alert] URL API belum diatur. Menjalankan mode SIMULASI.");
        return `Simulasi AI: Anda menanyakan "${prompt}". Sebagai AI SneakPeak, saya merekomendasikan Nike Panda untuk gaya classic.`;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt })
        });
        const data = await response.json();
        return data.reply;
    } catch (error) {
        console.error("Gagal menghubungi AI:", error);
        return "Maaf, sedang terjadi gangguan pada koneksi AI.";
    }
}

// 3. UI INTERACTIONS
document.addEventListener('DOMContentLoaded', () => {
    console.log("SneakPeak Clone Loaded Successfully!");

    // Contoh memanggil fungsi AI di konsol
    callSneakPeakAI("Rekomendasi sepatu harian").then(res => console.log(res));

    // Logika tombol Buy Now
    const buyButtons = document.querySelectorAll('.btn-dark');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Item ditambahkan ke keranjang! (Simulasi)");
        });
    });

    // Smooth Scrolling untuk navigasi
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
