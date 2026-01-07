/* ========================================
   BOLIVIA FITNESS - JAVASCRIPT
   Funcionalidades interactivas y animaciones
   ======================================== */

// ========== VARIABLES GLOBALES ==========
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scrollTop');

// ========== NAVBAR SCROLL EFFECT ==========
/**
 * Agrega clase 'scrolled' al navbar cuando el usuario hace scroll
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Mostrar/ocultar botón scroll to top
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

// ========== MENU MOBILE (HAMBURGER) ==========
/**
 * Toggle del menú móvil al hacer click en el hamburger
 */
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevenir scroll cuando el menú está abierto
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// ========== CERRAR MENU AL HACER CLICK EN LINKS ==========
/**
 * Cierra el menú móvil cuando se hace click en un enlace
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ========== CERRAR MENU AL HACER CLICK FUERA ==========
/**
 * Cierra el menú móvil si se hace click fuera de él
 */
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========== SMOOTH SCROLL ==========
/**
 * Implementa scroll suave para todos los enlaces internos
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== SCROLL TO TOP BUTTON ==========
/**
 * Scroll suave hacia arriba al hacer click en el botón
 */
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== ANIMACIONES AL HACER SCROLL (AOS Simple) ==========
/**
 * Sistema simple de animaciones al hacer scroll
 * Detecta elementos con atributo data-aos y los anima cuando entran en viewport
 */
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Elemento está visible en viewport
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('aos-animate');
        }
    });
};

// Ejecutar al cargar la página
window.addEventListener('load', animateOnScroll);

// Ejecutar al hacer scroll
window.addEventListener('scroll', animateOnScroll);

// ========== ACTIVE LINK INDICATOR ==========
/**
 * Marca como activo el enlace de navegación correspondiente a la sección visible
 */
const sections = document.querySelectorAll('section[id]');

const highlightNavLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// ========== HERO PARALLAX EFFECT ==========
/**
 * Efecto parallax sutil en el hero
 */
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// ========== CARD HOVER EFFECTS ==========
/**
 * Efectos adicionales al hacer hover sobre las cards
 */
const cards = document.querySelectorAll('.producto-card, .beneficio-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========== PRELOAD IMAGES ==========
/**
 * Precarga las imágenes para una mejor experiencia
 */
const preloadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    images.forEach(img => {
        const src = img.getAttribute('data-src');
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
        }
    });
};

window.addEventListener('load', preloadImages);

// ========== PERFORMANCE: DEBOUNCE FUNCTION ==========
/**
 * Función debounce para optimizar eventos que se disparan frecuentemente
 */
const debounce = (func, wait = 10, immediate = true) => {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Aplicar debounce a funciones que se ejecutan en scroll
window.addEventListener('scroll', debounce(() => {
    animateOnScroll();
    highlightNavLink();
}, 10));

// ========== COUNTER ANIMATION (STATS) ==========
/**
 * Anima los números en la sección de estadísticas
 */
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Velocidad de la animación
    
    counters.forEach(counter => {
        const animate = () => {
            const value = counter.textContent;
            const target = parseInt(value.replace(/\D/g, ''));
            const suffix = value.replace(/[0-9]/g, '');
            
            if (isNaN(target)) return;
            
            const increment = target / speed;
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                
                if (current < target) {
                    counter.textContent = Math.ceil(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + suffix;
                }
            };
            
            updateCounter();
        };
        
        // Observar cuando el elemento es visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counter.classList.contains('counted')) {
                    animate();
                    counter.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
};

// Ejecutar animación de contadores
window.addEventListener('load', animateCounters);

// ========== FORM VALIDATION (para futuras implementaciones) ==========
/**
 * Validación básica de formularios
 */
const validateForm = (formElement) => {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
};

// ========== WHATSAPP BUTTON TRACKING ==========
/**
 * Tracking simple para el botón de WhatsApp (opcional)
 */
const whatsappButtons = document.querySelectorAll('[href*="wa.me"]');

whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('WhatsApp button clicked');
        // Aquí puedes agregar tracking con Google Analytics, Facebook Pixel, etc.
    });
});

// ========== CONSOLE MESSAGE ==========
/**
 * Mensaje en consola (opcional - puede eliminarse en producción)
 */
console.log('%c🦁 Bolivia Fitness 🦁', 'font-size: 20px; font-weight: bold; color: #ff3333;');
console.log('%c💪 Potencia tu rendimiento al máximo', 'font-size: 14px; color: #00ff88;');

// ========== INICIALIZACIÓN ==========
/**
 * Función de inicialización que se ejecuta cuando el DOM está listo
 */
const init = () => {
    console.log('Bolivia Fitness - Website loaded successfully');
    
    // Agregar clase al body cuando la página esté completamente cargada
    document.body.classList.add('loaded');
    
    // Ejecutar animaciones iniciales
    animateOnScroll();
    
    // Ocultar loader si existe
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
};

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========== MANEJO DE ERRORES ==========
/**
 * Manejo global de errores (opcional)
 */
window.addEventListener('error', (e) => {
    console.error('Error detectado:', e.error);
});

// ========== RESPONSIVE: DETECTAR CAMBIOS DE ORIENTACIÓN ==========
/**
 * Detecta cambios de orientación en dispositivos móviles
 */
window.addEventListener('orientationchange', () => {
    // Cerrar menú si está abierto
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Recalcular animaciones
    setTimeout(() => {
        animateOnScroll();
    }, 100);
});

// ========== MEJORA DE RENDIMIENTO: INTERSECTION OBSERVER ==========
/**
 * Uso de Intersection Observer para animaciones más eficientes
 */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observar todos los elementos con data-aos
document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// ========== EASTER EGG (Opcional - puede eliminarse) ==========
/**
 * Easter egg: Konami code
 */
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

window.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        console.log('🏆 ¡Código Konami activado! ¡Eres un verdadero atleta! 💪');
        document.body.style.animation = 'rainbow 2s linear infinite';
    }
});

// ========== EXPORT FUNCTIONS (para uso modular si es necesario) ==========
window.BoliviaFitness = {
    animateOnScroll,
    highlightNavLink,
    validateForm,
    debounce
};
