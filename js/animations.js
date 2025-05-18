// Configuración de animaciones GSAP para el video y el scroll
gsap.registerPlugin(ScrollTrigger);

// Animación del video al hacer scroll
gsap.to('.video-section', {
    scrollTrigger: {
        trigger: '#app',
        start: 'top center',
        end: 'top top',
        scrub: true
    },
    opacity: 0,
    backgroundColor: 'black', // Agregamos un fondo negro
    scale: 1.2
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

// Animaciones para las imágenes al aparecer
gsap.utils.toArray('.gallery-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'top center',
            scrub: 1
        },
        y: 100,
        opacity: 0,
        scale: 0.8
    });
});

// Animaciones para la sección home
gsap.utils.toArray('.grid-item').forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top -150%", // Aumentamos significativamente el punto final
            scrub: 2, // Hacemos el scrub más suave
            onUpdate: (self) => {
                const progress = self.progress;
                if (progress > 0.85) { // Ajustamos el punto de activación
                    item.classList.add('darkening');
                } else {
                    item.classList.remove('darkening');
                }
            }
        },
        opacity: 0,
        y: -100, // Aumentamos la distancia de desplazamiento
        duration: 2 // Aumentamos la duración
    });
});

// Efecto parallax en las imágenes
gsap.utils.toArray('.grid-item').forEach(item => {
    const speed = item.dataset.speed || 0.5; // Reducimos la velocidad base del parallax
    gsap.to(item, {
        y: `${50 * speed}`, // Reducimos la distancia del parallax
        scrollTrigger: {
            trigger: '.home-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 2 // Hacemos el parallax más suave
        }
    });
});

// Animación para la sección de ancho completo
// Animación para la sección de ancho completo
gsap.to('.full-width-image', {
    scrollTrigger: {
        trigger: '.full-width-section',
        start: "top bottom",
        end: "top -150%",
        scrub: 2,
        
    },
    opacity: 1,
    scale: 1.1,
    duration: 2,
    backgroundColor: 'black'
});

// Animación para el título de Stitch
gsap.from('.stitch-title', {
    scrollTrigger: {
        trigger: '.full-width-section',
        start: "top center",
        end: "top top",
        scrub: 1
    },
    y: 100,
    opacity: 0,
    scale: 0.5
});

// Animación para el slider
gsap.to('.slider-container', {
    scrollTrigger: {
        trigger: '.slider-section',
        start: 'top center',
        end: 'top 20%',
        scrub: 1,
        onEnter: () => {
            document.querySelector('.slider-container').classList.add('visible');
        },
        onLeaveBack: () => {
            document.querySelector('.slider-container').classList.remove('visible');
        }
    }
});

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

// Animación para el nuevo indicador de scroll
gsap.to('.scroll-indicator-section', {
    scrollTrigger: {
        trigger: '.full-width-section',
        start: 'bottom center',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            const section = document.querySelector('.scroll-indicator-section');
            const text = section.querySelector('span');
            const arrow = section.querySelector('.arrow-down');
            
            // Reducir altura y tamaño de texto gradualmente
            section.style.height = `${50 - (progress * 30)}vh`;
            text.style.fontSize = `${3 - (progress * 1.8)}rem`;
            arrow.style.fontSize = `${4 - (progress * 2)}rem`;
        }
    },
    opacity: 1,
    y: 0,
    duration: 1
});
