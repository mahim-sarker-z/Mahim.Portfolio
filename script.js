// Keep dynamic footer date accurate
document.getElementById('year').textContent = new Date().getFullYear();

// Simple Mobile Navigation Toggle logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0f172a';
        navLinks.style.padding = '1.5rem';
        navLinks.style.gap = '1rem';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    }
});