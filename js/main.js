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