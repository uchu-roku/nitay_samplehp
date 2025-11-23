// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // ロゴクリック時はトップに戻る
        if (href === '#top' || href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 80) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.boxShadow = 'none';
    }
    
    // Hide header on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handler with animation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    
    // Animate button
    submitBtn.textContent = '送信中...';
    submitBtn.style.pointerEvents = 'none';
    
    // Simulate sending
    setTimeout(() => {
        submitBtn.textContent = '送信完了！';
        submitBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)';
        
        setTimeout(() => {
            alert('お問い合わせありがとうございます。\n担当者より折り返しご連絡させていただきます。');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.style.pointerEvents = '';
        }, 1000);
    }, 1500);
});

// Enhanced Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe sections with staggered animation
document.querySelectorAll('section').forEach((section, index) => {
    section.classList.add('fade-in-element');
    section.style.transitionDelay = `${index * 0.05}s`;
    fadeInObserver.observe(section);
});

// Observe cards and items
document.querySelectorAll('.mission-card, .service-block, .step-item, .record-item').forEach((item, index) => {
    item.classList.add('fade-in-element');
    item.style.transitionDelay = `${index * 0.08}s`;
    fadeInObserver.observe(item);
});

// Parallax effect for approach background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const approachBg = document.querySelector('.approach-bg');
    
    if (approachBg) {
        approachBg.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    }
});


// Scroll Progress Indicator
const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
};

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    createScrollIndicator();
    
    // Add smooth reveal to images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        img.style.animationDelay = `${index * 0.1}s`;
    });
});



// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


