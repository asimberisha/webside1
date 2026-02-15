// ===========================
// Cookie Consent
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');
    
    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            if (cookieConsent) {
                cookieConsent.classList.add('show');
            }
        }, 1000);
    }
    
    // Accept cookies
    if (acceptCookies) {
        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.classList.remove('show');
        });
    }
});

// ===========================
// Gallery Filter
// ===========================
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item-wrapper, .gallery-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = '';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ===========================
// GLightbox Initialization
// ===========================
if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
}

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.phone || !data.service || !data.message) {
            showMessage('Prosimo, izpolnite vsa obvezna polja.', 'danger');
            return;
        }
        
        // Simulate form submission (replace with actual backend call)
        // For production, use FormSpree, EmailJS, or your own backend
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Pošiljanje...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Success
            showMessage('Hvala za vaše sporočilo! Odgovorili vam bomo v najkrajšem možnem času.', 'success');
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // For production with FormSpree:
            /*
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showMessage('Hvala za vaše sporočilo! Odgovorili vam bomo v najkrajšem možnem času.', 'success');
                    contactForm.reset();
                } else {
                    showMessage('Prišlo je do napake. Prosimo, poskusite ponovno.', 'danger');
                }
            })
            .catch(error => {
                showMessage('Prišlo je do napake. Prosimo, poskusite ponovno.', 'danger');
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
            */
        }, 1500);
    });
}

function showMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `alert alert-${type}`;
        formMessage.classList.remove('d-none');
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('d-none');
        }, 5000);
    }
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Animation on Scroll
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .portfolio-item, .stat-card, .process-step, .team-member').forEach(el => {
    observer.observe(el);
});

// ===========================
// Mobile Menu Close on Link Click
// ===========================
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// ===========================
// Form Input Focus Effect
// ===========================
const formControls = document.querySelectorAll('.form-control, .form-select');

formControls.forEach(control => {
    control.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    control.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// ===========================
// Lazy Loading for Images
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Back to Top Button (Optional)
// ===========================
const createBackToTop = () => {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
    backToTop.className = 'btn btn-primary back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: none;
        z-index: 999;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Uncomment to enable back to top button
// createBackToTop();

// ===========================
// Console Welcome Message
// ===========================
console.log('%c🎨 Barvanje & Prenova', 'font-size: 20px; font-weight: bold; color: #0d6efd;');
console.log('%cProfesionalne storitve barvanja in prenove', 'font-size: 12px; color: #6c757d;');
console.log('%cWebsite developed with ❤️', 'font-size: 10px; font-style: italic;');
