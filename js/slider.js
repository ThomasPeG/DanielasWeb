class Slider {
    constructor() {
        this.slider = document.querySelector('.slider');
        this.prevBtn = document.querySelector('.prev');
        this.nextBtn = document.querySelector('.next');
        this.currentIndex = 0;
        this.images = [
            'assets/stitch/1.jpg',
            'assets/stitch/2.jpg',
            'assets/stitch/3.jpg',
            'assets/stitch/4.jpg',
            'assets/stitch/5.jpg',
            'assets/stitch/6.jpg',
            'assets/stitch/7.jpg',
            'assets/stitch/8.jpg',
            'assets/stitch/9.jpg',
            'assets/stitch/10.jpg',
            'assets/stitch/11.jpg',
            'assets/stitch/12.jpg',
            'assets/stitch/13.jpg',
            'assets/stitch/14.jpg',
            'assets/stitch/15.jpg',
            'assets/stitch/16.jpg',
            'assets/stitch/17.jpg',
            'assets/stitch/18.jpg',
            'assets/stitch/19.jpg',
            'assets/stitch/20.jpg',
            'assets/stitch/21.jpg',
            'assets/stitch/22.jpg',
            'assets/stitch/23.jpg',
            'assets/stitch/24.jpg',
            'assets/stitch/25.jpg',
            'assets/stitch/26.jpg',
            'assets/stitch/27.jpg',
            'assets/stitch/28.jpg',
            'assets/stitch/29.jpg',
        ];

        this.initialize();
    }

    initialize() {
        this.loadImages();
        this.addEventListeners();
    }

    loadImages() {
        this.images.forEach(src => {
            const div = document.createElement('div');
            div.className = 'slider-item';
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Stitch Collection';
            div.appendChild(img);
            this.slider.appendChild(div);
        });
    }

    addEventListeners() {
        this.prevBtn.addEventListener('click', () => this.slide('prev'));
        this.nextBtn.addEventListener('click', () => this.slide('next'));
    }

    slide(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }

        const offset = -this.currentIndex * 100;
        this.slider.style.transform = `translateX(${offset}%)`;
    }
}

class ImageGallery {
    constructor() {
        this.initializeGallery();
    }

    async initializeGallery() {
        // Crear contenedor principal
        const galleryContainer = document.createElement('div');
        galleryContainer.className = 'gallery-container';
        
        // Crear diferentes secciones
        this.createSlider(galleryContainer);
        this.createMasonryGrid(galleryContainer);
        this.createFadeGallery(galleryContainer);
        
        // Agregar al DOM
        document.getElementById('stitch-collection').appendChild(galleryContainer);
        
        // Inicializar animaciones
        this.initializeAnimations();
    }

    createSlider(container) {
        const sliderSection = document.createElement('section');
        sliderSection.className = 'gallery-section slider-section';
        sliderSection.innerHTML = `
            <h3>Slider de Stitch</h3>
            <div class="slider-container">
                <div class="slider"></div>
                <button class="slider-btn prev">←</button>
                <button class="slider-btn next">→</button>
            </div>
        `;
        container.appendChild(sliderSection);
        
        // Inicializar el slider existente
        new Slider();
    }

    createMasonryGrid(container) {
        const masonrySection = document.createElement('section');
        masonrySection.className = 'gallery-section masonry-section';
        masonrySection.innerHTML = `
            <h3>Colección Completa</h3>
            <div class="masonry-grid"></div>
        `;
        container.appendChild(masonrySection);

        // Cargar imágenes en la cuadrícula
        const grid = masonrySection.querySelector('.masonry-grid');
        this.loadImages(grid, 'masonry-item');
    }

    createFadeGallery(container) {
        const fadeSection = document.createElement('section');
        fadeSection.className = 'gallery-section fade-section';
        fadeSection.innerHTML = `
            <h3>Galería con Fade</h3>
            <div class="fade-grid"></div>
        `;
        container.appendChild(fadeSection);

        // Cargar imágenes con efecto fade
        const fadeGrid = fadeSection.querySelector('.fade-grid');
        this.loadImages(fadeGrid, 'fade-item');
    }

    loadImages(container, itemClass) {
        const images = [
            'assets/stitch/1.jpg',
            'assets/stitch/2.jpg',
            'assets/stitch/3.jpg',
            'assets/stitch/4.jpg',
            'assets/stitch/5.jpg',
            'assets/stitch/6.jpg',
            'assets/stitch/7.jpg',
            'assets/stitch/8.jpg',
            'assets/stitch/9.jpg',
            'assets/stitch/10.jpg'
        ];

        images.forEach(src => {
            const div = document.createElement('div');
            div.className = itemClass;
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Stitch Collection';
            img.loading = 'lazy';
            div.appendChild(img);
            container.appendChild(div);
        });
    }

    initializeAnimations() {
        // Animaciones con GSAP
        gsap.utils.toArray('.masonry-item').forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1
                },
                y: 100,
                opacity: 0
            });
        });

        gsap.utils.toArray('.fade-item').forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                duration: 1
            });
        });
    }
}

// Inicializar la galería cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new ImageGallery();
});