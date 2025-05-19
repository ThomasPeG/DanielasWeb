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

// Función para manejar la pantalla de carga
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Esperar a que todas las imágenes y videos se carguen
    Promise.all([
        // Esperar a que se carguen todas las imágenes
        ...Array.from(document.images).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.addEventListener('load', resolve);
                img.addEventListener('error', resolve); // Manejar errores también
            });
        }),
        // Esperar a que se carguen todos los videos
        ...Array.from(document.getElementsByTagName('video')).map(video => {
            if (video.readyState >= 3) return Promise.resolve();
            return new Promise(resolve => {
                video.addEventListener('canplay', resolve);
                video.addEventListener('error', resolve);
            });
        })
    ]).then(() => {
        // Ocultar la pantalla de carga con una transición suave
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            // Remover la pantalla de carga después de la transición
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000); // Esperar 1 segundo adicional para asegurar que todo esté listo
    });
});