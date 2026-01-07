/* ========================================
   BOLIVIA FITNESS - STYLESHEET
   Diseño moderno, oscuro y profesional
   ======================================== */

/* ========== VARIABLES CSS ========== */
:root {
    /* Colores principales */
    --color-primary: #ff3333;
    --color-primary-dark: #cc0000;
    --color-secondary: #00ff88;
    --color-accent: #ff6600;
    
    /* Colores de fondo */
    --color-bg-dark: #0a0a0a;
    --color-bg-darker: #050505;
    --color-bg-light: #1a1a1a;
    --color-bg-card: #151515;
    
    /* Colores de texto */
    --color-text-primary: #ffffff;
    --color-text-secondary: #b0b0b0;
    --color-text-muted: #707070;
    
    /* Espaciado */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
    
    /* Tipografía */
    --font-primary: 'Montserrat', sans-serif;
    --font-secondary: 'Poppins', sans-serif;
    
    /* Transiciones */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Bordes */
    --border-radius: 8px;
    --border-radius-large: 16px;
    
    /* Sombras */
    --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.5);
    --shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.7);
    --shadow-glow: 0 0 30px rgba(255, 51, 51, 0.3);
}

/* ========== RESET & BASE ========== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-secondary);
    background-color: var(--color-bg-dark);
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
}

/* ========== UTILIDADES ========== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

/* ========== NAVBAR ========== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    transition: all var(--transition-normal);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar.scrolled {
    background-color: rgba(10, 10, 10, 0.98);
    box-shadow: var(--shadow-md);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem var(--spacing-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-weight: 800;
    font-size: 1.3rem;
    letter-spacing: 1px;
    font-family: var(--font-primary);
}

.logo-icon {
    width: 40px;
    height: 40px;
    filter: invert(1);
    transition: transform var(--transition-normal);
}

.nav-logo:hover .logo-icon {
    transform: scale(1.1) rotate(5deg);
}

.logo-text {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: var(--color-text-secondary);
    font-weight: 500;
    font-size: 0.95rem;
    transition: all var(--transition-fast);
    position: relative;
    padding: 0.5rem 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    transition: width var(--transition-normal);
}

.nav-link:hover {
    color: var(--color-text-primary);
}

.nav-link:hover::after {
    width: 100%;
}

/* Hamburger Menu */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 1001;
}

.hamburger .bar {
    width: 28px;
    height: 3px;
    background-color: var(--color-text-primary);
    border-radius: 3px;
    transition: all var(--transition-normal);
}

.hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* ========== HERO SECTION ========== */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--color-bg-darker) 0%, var(--color-bg-dark) 50%, #1a0a0a 100%);
    overflow: hidden;
    padding-top: 80px;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 51, 51, 0.03) 2px, rgba(255, 51, 51, 0.03) 4px);
    pointer-events: none;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 50%, rgba(255, 51, 51, 0.1) 0%, transparent 50%);
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 900px;
    padding: 0 var(--spacing-md);
}

.hero-title {
    font-family: var(--font-primary);
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: var(--spacing-md);
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.title-line {
    display: block;
    animation: fadeInUp 0.8s ease forwards;
    opacity: 0;
}

.title-line:nth-child(1) {
    animation-delay: 0.2s;
}

.title-line:nth-child(2) {
    animation-delay: 0.4s;
}

.title-line:nth-child(3) {
    animation-delay: 0.6s;
}

.highlight {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    text-shadow: 0 0 40px rgba(255, 51, 51, 0.5);
}

.hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.3rem);
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-lg);
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 0.8s;
    opacity: 0;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 1s;
    opacity: 0;
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    color: var(--color-primary);
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(10px);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ========== BUTTONS ========== */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2rem;
    font-weight: 600;
    font-size: 1rem;
    border-radius: var(--border-radius);
    transition: all var(--transition-normal);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
    width: 300px;
    height: 300px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    color: var(--color-text-primary);
    box-shadow: 0 4px 15px rgba(255, 51, 51, 0.4);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 51, 51, 0.6);
}

.btn-secondary {
    background-color: transparent;
    color: var(--color-text-primary);
    border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
    background-color: var(--color-primary);
    transform: translateY(-3px);
}

.btn-card {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
}

.btn-large {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
}

.btn-whatsapp {
    background: linear-gradient(135deg, #25D366, #128C7E);
    color: white;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
}

.btn-whatsapp:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
}

/* ========== SECCIONES GENERALES ========== */
section {
    padding: var(--spacing-xl) 0;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-lg);
}

.section-title {
    font-family: var(--font-primary);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: var(--spacing-sm);
}

.title-accent {
    color: var(--color-primary);
}

.section-subtitle {
    font-size: 1.1rem;
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

/* ========== PRODUCTOS SECTION ========== */
.productos {
    background-color: var(--color-bg-dark);
}

.productos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.producto-card {
    background: linear-gradient(135deg, var(--color-bg-card), var(--color-bg-light));
    border-radius: var(--border-radius-large);
    overflow: hidden;
    transition: all var(--transition-normal);
    border: 1px solid rgba(255, 255, 255, 0.05);
    position: relative;
}

.producto-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 51, 51, 0.1), transparent);
    opacity: 0;
    transition: opacity var(--transition-normal);
}

.producto-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
}

.producto-card:hover::before {
    opacity: 1;
}

.card-image {
    position: relative;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(255, 51, 51, 0.1), rgba(255, 102, 0, 0.1));
}

.card-icon {
    font-size: 4rem;
    color: var(--color-primary);
    transition: all var(--transition-normal);
}

.producto-card:hover .card-icon {
    transform: scale(1.2) rotate(5deg);
}

.card-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.card-content {
    padding: 1.5rem;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    font-family: var(--font-primary);
}

.card-description {
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
    line-height: 1.6;
}

.card-benefits {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.card-benefits span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
}

.card-benefits i {
    color: var(--color-secondary);
}

/* ========== BENEFICIOS SECTION ========== */
.beneficios {
    background-color: var(--color-bg-darker);
}

.beneficios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.beneficio-card {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, var(--color-bg-card), var(--color-bg-light));
    border-radius: var(--border-radius-large);
    transition: all var(--transition-normal);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.beneficio-card:hover {
    transform: translateY(-10px);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-glow);
}

.beneficio-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    border-radius: 50%;
    font-size: 2rem;
    color: white;
    transition: all var(--transition-normal);
}

.beneficio-card:hover .beneficio-icon {
    transform: scale(1.1) rotate(10deg);
}

.beneficio-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: var(--font-primary);
}

.beneficio-description {
    color: var(--color-text-secondary);
    line-height: 1.7;
}

/* ========== NOSOTROS SECTION ========== */
.nosotros {
    background-color: var(--color-bg-dark);
}

.nosotros-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem;
    align-items: center;
}

.nosotros-image {
    position: relative;
}

.image-placeholder {
    aspect-ratio: 1;
    background: linear-gradient(135deg, var(--color-bg-card), var(--color-bg-light));
    border-radius: var(--border-radius-large);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: var(--color-primary);
    border: 2px solid rgba(255, 51, 51, 0.2);
}

.nosotros-text h2 {
    text-align: left;
    margin-bottom: var(--spacing-md);
}

.nosotros-description {
    color: var(--color-text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.05rem;
}

.nosotros-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--color-primary);
    font-family: var(--font-primary);
}

.stat-label {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    margin-top: 0.5rem;
}

/* ========== CTA SECTION ========== */
.cta {
    position: relative;
    padding: var(--spacing-xl) 0;
    background: linear-gradient(135deg, #1a0a0a, var(--color-bg-darker));
    overflow: hidden;
}

.cta::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 51, 51, 0.15) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.cta-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 51, 51, 0.02) 10px, rgba(255, 51, 51, 0.02) 20px);
}

.cta-content {
    position: relative;
    z-index: 2;
    text-align: center;
}

.cta-title {
    font-family: var(--font-primary);
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    margin-bottom: var(--spacing-md);
    background: linear-gradient(135deg, var(--color-text-primary), var(--color-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.cta-subtitle {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-lg);
}

.cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* ========== FOOTER ========== */
.footer {
    background-color: var(--color-bg-darker);
    padding: var(--spacing-lg) 0 var(--spacing-md);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: var(--spacing-lg);
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-weight: 800;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-family: var(--font-primary);
}

.footer-logo-img {
    width: 40px;
    height: 40px;
    filter: invert(1);
}

.footer-description {
    color: var(--color-text-secondary);
    line-height: 1.7;
}

.footer-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--color-primary);
}

.footer-links li,
.footer-contact li {
    margin-bottom: 0.8rem;
}

.footer-links a {
    color: var(--color-text-secondary);
    transition: all var(--transition-fast);
}

.footer-links a:hover {
    color: var(--color-primary);
    padding-left: 5px;
}

.footer-contact li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--color-text-secondary);
}

.footer-contact i {
    color: var(--color-primary);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--color-bg-card), var(--color-bg-light));
    border-radius: 50%;
    font-size: 1.2rem;
    color: var(--color-text-primary);
    transition: all var(--transition-normal);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.social-link:hover {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 51, 51, 0.4);
}

.footer-bottom {
    text-align: center;
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    color: var(--color-text-muted);
}

/* ========== BOTONES FLOTANTES ========== */
.whatsapp-float {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #25D366, #128C7E);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: white;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
    z-index: 999;
    transition: all var(--transition-normal);
    animation: pulse 2s infinite;
}

.whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(37, 211, 102, 0.7);
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.scroll-top {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
    box-shadow: var(--shadow-md);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
}

.scroll-top.active {
    opacity: 1;
    visibility: visible;
}

.scroll-top:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

/* ========== RESPONSIVE ========== */
@media screen and (max-width: 768px) {
    /* Navbar Mobile */
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        max-width: 300px;
        height: 100vh;
        background-color: rgba(10, 10, 10, 0.98);
        backdrop-filter: blur(10px);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 2rem;
        gap: 1.5rem;
        transition: left var(--transition-normal);
        box-shadow: var(--shadow-lg);
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-item {
        width: 100%;
    }
    
    .nav-link {
        font-size: 1.2rem;
        display: block;
        width: 100%;
        padding: 0.8rem 0;
    }
    
    /* Hero */
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }
    
    .btn {
        width: 100%;
        justify-content: center;
    }
    
    /* Productos */
    .productos-grid {
        grid-template-columns: 1fr;
    }
    
    /* Nosotros */
    .nosotros-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .nosotros-text h2 {
        text-align: center;
    }
    
    .nosotros-stats {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    /* Footer */
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    /* Botones flotantes */
    .whatsapp-float {
        bottom: 1rem;
        right: 1rem;
        width: 55px;
        height: 55px;
    }
    
    .scroll-top {
        bottom: 1rem;
        left: 1rem;
        width: 45px;
        height: 45px;
    }
}

@media screen and (max-width: 480px) {
    html {
        font-size: 14px;
    }
    
    .nav-logo {
        font-size: 1.1rem;
    }
    
    .logo-icon {
        width: 35px;
        height: 35px;
    }
    
    section {
        padding: var(--spacing-lg) 0;
    }
    
    .cta-buttons {
        flex-direction: column;
    }
}

/* ========== ANIMACIONES AOS (scroll) ========== */
[data-aos] {
    opacity: 0;
    transition: all 0.8s ease;
}

[data-aos].aos-animate {
    opacity: 1;
}

[data-aos="fade-up"] {
    transform: translateY(50px);
}

[data-aos="fade-up"].aos-animate {
    transform: translateY(0);
}

[data-aos="fade-right"] {
    transform: translateX(-50px);
}

[data-aos="fade-right"].aos-animate {
    transform: translateX(0);
}

[data-aos="fade-left"] {
    transform: translateX(50px);
}

[data-aos="fade-left"].aos-animate {
    transform: translateX(0);
}

[data-aos="zoom-in"] {
    transform: scale(0.8);
}

[data-aos="zoom-in"].aos-animate {
    transform: scale(1);
}
