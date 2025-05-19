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
            start: "top top",
            end: "100% top", // Aumentamos significativamente el punto final
            scrub: 1, // Hacemos el scrub más suave
            
        },
        opacity: 0,
        scale: 1.5,
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




// Animación para el título del estudio
gsap.fromTo('.studio-title h1', 
    {
        fontSize: '20rem',
        filter: 'blur(5px)',
        opacity: 0
    },
    {
        scrollTrigger: {
            trigger: '.studio-section',
            start: 'top center',
            end: 'center center',
            scrub: 1,
            toggleActions: 'play none none reverse'
        },
        fontSize: '2rem',
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1
    }
);

// Animación responsive para móviles
gsap.fromTo('.studio-title h1', 
    {
        fontSize: '8rem',
        filter: 'blur(5px)',
        opacity: 0
    },
    {
        scrollTrigger: {
            trigger: '.studio-section',
            start: 'top center',
            end: 'center center',
            scrub: 1,
            toggleActions: 'play none none reverse',
            markers: false,
            // Solo se activa en móviles
            media: '(max-width: 768px)'
        },
        fontSize: '2rem',
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1
    }
);
gsap.fromTo('.studio-image',
    {
        scale: 1.2,
        filter: 'blur(5px)', 
        opacity:0
    },{
        scrollTrigger: {
            trigger: '.studio-image',
            start: 'top center',
            end: 'center 50%',
            scrub: 2,
            toggleActions: 'play none none reverse',
            markers: false,
        },
        fontSize: '2rem',
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
        scale: 1
    }
);

// Animación para video-full-section
gsap.to('.video-full-section', {
    scrollTrigger: {
        trigger: '.slider-section',
        start: 'bottom center',
        end: 'bottom top',
        scrub: true,
        zIndex: 10,
        opacity: 1,
    }
});


