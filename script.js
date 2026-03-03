// Placeholder for any interactive JavaScript you might want to add
// For example, smooth scrolling or project filtering

// Smooth scroll behavior for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        }
    });
});