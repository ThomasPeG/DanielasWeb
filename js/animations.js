// Configuración de animaciones GSAP para el video y el scroll
gsap.registerPlugin(ScrollTrigger);

// Animación del video al hacer scroll
gsap.to('.video-section', {
    scrollTrigger: {
        trigger: '#app',
        start: 'top center',
        end: '90% top',
        scrub: 1,
    },
    scale: 1.2,
    opacity: 0,
    display: 'none',
    backgroundColor: 'black'
});

// Animación para el indicador de scroll
gsap.to('.scroll-indicator', {
    scrollTrigger: {
        trigger: '#app',
        start: 'top bottom',
        end: 'top center',
        scrub: true
    },
    opacity: 0,
    y: 100
});



// Animación para la sección de ancho completo
// Animación para la sección de ancho completo
gsap.to('.full-width-image', {
    scrollTrigger: {
        trigger: '.full-width-section',
        start: "top top",
        end: "100% top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        
    },
    opacity: 0,
    backgroundColor: 'black'
});
gsap.to('.full-width-image-', {
    scrollTrigger: {
        trigger: '.full-width-section-',
        start: "top top",
        end: "100% top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        
    },
    opacity: 0,
    backgroundColor: 'black'
});

// Animación para el título de Stitch
gsap.from('.stitch-title', {
    scrollTrigger: {
        trigger: '.full-width-section',
        start: "top center",
        end: "top top",
        scrub: 1,
    },
    opacity: 0,
    scale: 0.5
});

// Animación para el slider

// Funcionalidad del slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextBtn?.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

prevBtn?.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});



// Animación para la sección de estudio
// Modificamos la animación de la sección de estudio
gsap.from('.studio-image', {
    scrollTrigger: {
        trigger: '.studio-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        markers: false,
        scrub: false // Aseguramos que no haya scrub
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: {
        amount: 0.5,
        from: "start"
    }
});



// Función para manejar la reproducción de videos basada en visibilidad
function handleVideoVisibility() {
    const videos = document.querySelectorAll('video');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Obtener el video del entry
            const video = entry.target;
            
            if (entry.isIntersecting) {
                // El video está visible en la pantalla
                video.play();
            } else {
                // El video no está visible en la pantalla
                video.pause();
            }
        });
    }, {
        threshold: 0.3 // El video se reproducirá cuando al menos el 30% sea visible
    });

    // Observar todos los videos
    videos.forEach(video => {
        observer.observe(video);
    });
}

// Inicializar el observador de videos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', handleVideoVisibility);



