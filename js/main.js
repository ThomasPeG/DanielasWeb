// Configuración inicial
window.onload = function() {
    //alert("💙 Esta página está dedicada exclusivamente a Nikol Daniela Alvarez 💙");
    initializeMainContent();
    animateTitle();
};

function initializeMainContent() {
    // Inicializar animaciones GSAP
    gsap.from('header', { y: -100, opacity: 0, duration: 1 });
    gsap.from('.hero-content', { 
        y: 100, 
        opacity: 0, 
        duration: 1,
        delay: 0.5 
    });
}

function animateTitle() {
    const letters = gsap.utils.toArray('.letter');
    
    gsap.timeline()
        .from('.hero-title', {
            opacity: 0,
            duration: 1
        })
        .to(letters, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
}

// Función para manejar la reproducción del video con audio
document.addEventListener('DOMContentLoaded', function() {
    const videoWithAudio = document.querySelector('.video-with-audio');
    
    // Crear el observador de intersección
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // El video está visible en la pantalla
                videoWithAudio.play();
            } else {
                // El video no está visible en la pantalla
                videoWithAudio.pause();
            }
        });
    }, {
        threshold: 0.5 // El video se reproducirá cuando al menos el 50% sea visible
    });

    // Observar el video
    observer.observe(videoWithAudio);
});

// Función para el botón de volver arriba
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    // Mostrar/ocultar el botón basado en el scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Función para volver arriba suavemente
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});