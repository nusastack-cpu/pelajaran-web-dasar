const API_BASE_URL = 'https://api-web-run.vercel.app/api/v1/shoe/';

document.addEventListener('DOMContentLoaded', () => {
    const addShoeForm = document.getElementById('add-new-shoe-form');
    
    if (!addShoeForm) {
        console.error('Form dengan ID add-new-shoe-form tidak ditemukan!');
        return;
    }

    addShoeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = addShoeForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        const formData = new FormData(addShoeForm);
        
        // Buat objek data sepatu sesuai kebutuhan API
        const shoeData = {
            brand: formData.get('brand'),
            model: formData.get('model'),
            description: formData.get('description') || 'No description.',
            price: Number(formData.get('price')),
            inStock: formData.get('inStock') === 'on', // Checkbox mengirim 'on' jika dicentang
            category: formData.get('category'),
            imageUrl: formData.get('imageUrl'),
            color: formData.get('color') || 'Neutral'
        };

        console.log('Mengirim data:', shoeData);

        try {
            // Tampilan loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'PROSES...';

            const response = await fetch(API_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(shoeData)
            });

            const result = await response.json();

            if (response.ok) {
                alert('Berhasil! Sepatu baru telah ditambahkan.');
                addShoeForm.reset();
            } else {
                console.error('API Error:', result);
                alert('Gagal menambahkan sepatu: ' + (result.message || 'Error tidak diketahui'));
            }
        } catch (error) {
            console.error('Fetch Error:', error);
            alert('Kesalahan jaringan. Pastikan API dapat diakses.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
});