document.addEventListener('DOMContentLoaded', function () {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img.lazy');
    if (lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Defer non-critical JavaScript
    document.querySelectorAll('script[data-defer]').forEach(script => {
        const src = script.getAttribute('data-src');
        if (src) {
            const newScript = document.createElement('script');
            newScript.src = src;
            document.body.appendChild(newScript);
        }
    });

    // Gestión de cookies
    document.getElementById('accept-cookies')?.addEventListener('click', () => {
        document.getElementById('cookie-banner').style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    document.getElementById('reject-cookies')?.addEventListener('click', () => {
        alert("Debes aceptar las cookies para continuar navegando.");
    });

    // Redirección de descarga
    document.getElementById('descarga-link')?.addEventListener('click', event => {
        event.preventDefault();
        window.location.href = 'https://mega.nz/file/YVoEzISR#U7vaA-1NKicXilXR5L9tTyc8Dn-nwwJ-tUq9ybblsZQ';
    });
});
