// main.js - SneakPeak Clone with API Integration

document.addEventListener('DOMContentLoaded', () => {
    console.log('SneakPeak API Integration Initialized');

    const API_BASE_URL = 'https://api-web-run.vercel.app/api/v1/shoe/';
    const productGrid = document.querySelector('#latest-drops .row');
    const heroTitle = document.querySelector('.hero-title');
    const heroPrice = document.querySelector('.hero-section .h2');
    const heroImage = document.querySelector('.hero-image');

    // --- Fetch and Render Hero Section ---
    async function fetchHeroProduct() {
        try {
            const response = await fetch(API_BASE_URL);
            const data = await response.json();
            
            // For now, take the first product as the hero if it's the Urban Eclipse
            // Or just use the first item in the list
            if (data && data.length > 0) {
                const hero = data.find(item => item.model.includes('URBAN ECLIPSE')) || data[0];
                
                if (heroTitle) heroTitle.innerHTML = `${hero.model} <span class="text-danger">'LOW'</span>`;
                if (heroPrice) heroPrice.textContent = `Rp ${hero.price.toLocaleString('id-ID')}`;
                if (heroImage) heroImage.src = hero.imageUrl;
            }
        } catch (error) {
            console.error('Error fetching hero product:', error);
        }
    }

    // --- Fetch and Render Product Grid ---
    async function fetchLatestDrops() {
        if (!productGrid) return;
        
        try {
            // Loading state
            productGrid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            `;

            const response = await fetch(API_BASE_URL);
            const shoes = await response.json();

            // Clear loading
            productGrid.innerHTML = '';

            if (shoes && shoes.length > 0) {
                shoes.slice(0, 6).forEach(shoe => {
                    const card = createProductCard(shoe);
                    productGrid.appendChild(card);
                });
            } else {
                productGrid.innerHTML = '<div class="col-12 text-center py-5 text-muted">Belum ada produk rilis terbaru.</div>';
            }
        } catch (error) {
            console.error('Error fetching latest drops:', error);
            productGrid.innerHTML = '<div class="col-12 text-center py-5 text-danger">Gagal memuat produk. Coba lagi nanti.</div>';
        }
    }

    function createProductCard(shoe) {
        const col = document.createElement('div');
        col.className = 'col';
        
        const isSoldOut = shoe.inStock === false || shoe.inStock === 'false';
        const badge = isSoldOut ? '<span class="badge bg-danger position-absolute top-0 start-0 m-2 z-1">SOLD OUT</span>' : '<span class="badge bg-dark position-absolute top-0 start-0 m-2 z-1">NEW</span>';
        const grayScale = isSoldOut ? 'style="filter: grayscale(0.8);"' : '';

        col.innerHTML = `
            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden p-3 bg-light product-card-hover animate-fade-in">
                <div class="position-relative">
                    ${badge}
                    <div class="card-img-container rounded-4 overflow-hidden mb-3" ${grayScale}>
                        <img src="${shoe.imageUrl}" class="card-img-top img-fluid" alt="${shoe.model}">
                    </div>
                </div>
                <div class="card-body px-2 py-0">
                    <h5 class="card-title fw-bold mb-2 small-title text-truncate">${shoe.model}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold text-secondary">Rp ${shoe.price.toLocaleString('id-ID')}</span>
                        <button class="btn btn-outline-dark btn-sm rounded-pill px-3 quick-view-btn" 
                                data-id="${shoe._id}"
                                data-bs-toggle="modal" 
                                data-bs-target="#quickViewModal">Quick View</button>
                    </div>
                </div>
            </div>
        `;

        // Add event listener for Quick View
        const qvBtn = col.querySelector('.quick-view-btn');
        qvBtn.addEventListener('click', () => populateModal(shoe));

        return col;
    }

    function populateModal(shoe) {
        const modal = document.querySelector('#quickViewModal');
        if (!modal) return;

        modal.querySelector('.modal-body img').src = shoe.imageUrl;
        modal.querySelector('.modal-body h2').textContent = shoe.model;
        modal.querySelector('.modal-body .h4').textContent = `Rp ${shoe.price.toLocaleString('id-ID')}`;
        modal.querySelector('.modal-body .text-muted').textContent = shoe.description || 'Siluet klasik yang tak pernah lekang oleh waktu. Dibuat dengan material berkualitas tinggi untuk kenyamanan maksimal sepanjang hari.';
    }

    // --- Add New Shoe Form Logic ---
    const addShoeForm = document.querySelector('#add-new-shoe-form');
    if (addShoeForm) {
        addShoeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = addShoeForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            const formData = new FormData(addShoeForm);
            const shoeData = {
                brand: formData.get('brand'),
                model: formData.get('model'),
                description: formData.get('description') || 'No description provided.',
                price: Number(formData.get('price')),
                inStock: formData.get('inStock') === 'on' || formData.get('inStock') === 'true',
                category: formData.get('category'),
                imageUrl: formData.get('imageUrl'),
                color: formData.get('color') || 'Neutral'
            };

            try {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Menambahkan...';

                const response = await fetch(API_BASE_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(shoeData)
                });

                if (response.ok) {
                    alert('Berhasil menambahkan sepatu baru!');
                    addShoeForm.reset();
                    // Optional: redirect to home
                    // window.location.href = 'index.html';
                } else {
                    const error = await response.json();
                    alert('Gagal: ' + (error.message || 'Error tidak diketahui'));
                }
            } catch (err) {
                console.error('Submit error:', err);
                alert('Gagal menghubungkan ke server.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }

    // Initialize
    fetchHeroProduct();
    fetchLatestDrops();
});
