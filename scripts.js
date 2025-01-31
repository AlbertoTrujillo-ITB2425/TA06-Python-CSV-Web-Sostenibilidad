// Datos del CSV extendidos hasta 2100
const years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100
];
const totalPrecip = [
    7974, 4677, 4884, 4322, 2961, 4676, 4450, 6240, 5584, 4896, 7259, 4894, 5162, 8548, 6536, 4577, 8314, 2865, 4473, 4101, 5752, 8106, 3675, 3670, 6567, 5801, 6781, 6157, 4079, 3693, 5154, 5865, 3971, 6615, 4934, 4003, 4214, 5825, 5177, 4888, 5652, 5127, 4765, 6469, 4534, 4575, 2858, 4783, 6317, 3284, 6210, 5295, 4123, 3281, 3975, 4211, 3679, 4985, 3704, 4890, 4537, 5056, 4400, 5500, 4300, 6100, 3200, 7100, 3500, 6500, 2900, 5000, 4600, 3800, 6200, 3000, 6800, 3300, 5300, 4500, 4800, 5500, 4800, 4600, 4900, 5000, 5600, 5700, 5100, 5200, 4900, 4700, 4900, 5200, 5100, 5000, 5300, 5400
];
const annualVariation = [
    null, -41.35, 4.43, -11.51, -31.49, 57.92, -4.83, 40.22, -10.51, -12.32, 48.26, -32.58, 5.48, 65.59, -23.54, -29.97, 81.65, -65.54, 56.13, -8.32, 40.26, 40.92, -54.66, -0.14, 78.94, -11.66, 16.89, -9.20, -33.75, -9.46, 39.56, 13.80, -32.29, 66.58, -25.41, -18.87, 5.27, 38.23, -11.12, -5.58, 15.63, -9.29, -7.06, 35.76, -29.91, 0.90, -37.53, 67.35, 32.07, 89.10, -14.73, -22.13, -20.42, 21.15, 5.94, -12.63, 35.50, -25.70, 32.02, -7.22, 11.44, -8.00, 3.50, -6.10, 4.50, -4.00, 2.10, -2.50, 6.10, 0.30, -1.50, 2.30, -3.00, 1.80, -2.50, 3.60, 1.20, -1.80, 2.90, -3.10, 4.00, -2.80, 3.00, -2.20, 1.70, 0.50, 1.10, -0.50, 1.80, -1.40, 0.30, 2.60, -0.30, 1.10, 1.60, -2.00, 1.90, -0.80, 2.30, -1.70, 2.00, -1.40, 3.00, 0.90, -0.50
];

// Configuración del gráfico de Precipitación Total
const precipitationChart = new Chart(document.getElementById('precipitationChart'), {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: 'Precipitación Total (mm)',
            data: totalPrecip,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Roboto',
                        weight: '500'
                    }
                }
            }
        }
    }
});

// Configuración del gráfico de Variación Anual
const annualVariationChart = new Chart(document.getElementById('annualVariationChart'), {
    type: 'bar',
    data: {
        labels: years,
        datasets: [{
            label: 'Variación Anual (%)',
            data: annualVariation,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function(value) { return value + '%' }
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Roboto',
                        weight: '500'
                    }
                }
            }
        }
    }
});



document.addEventListener('DOMContentLoaded', function () {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img.lazy');
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

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Defer non-critical JavaScript
    const scriptsToDefer = document.querySelectorAll('script[data-defer]');
    scriptsToDefer.forEach(script => {
        const src = script.getAttribute('data-src');
        if (src) {
            const newScript = document.createElement('script');
            newScript.src = src;
            document.body.appendChild(newScript);
        }
    });
});

        // Función para aceptar cookies
        document.getElementById('accept-cookies').addEventListener('click', function () {
            document.getElementById('cookie-banner').style.display = 'none';
            document.body.style.overflow = 'auto'; // Desbloquear la página
        });

        // Función para rechazar cookies
        document.getElementById('reject-cookies').addEventListener('click', function () {
            alert("Debes aceptar las cookies para continuar navegando.");
        });
