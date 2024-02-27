const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.mobile-nav-toggle');
const overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
    const visibility = navLinks.getAttribute('data-visible');

    if (visibility === "false") {
        navLinks.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        overlay.style.display = 'block';
    } else {
        navLinks.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        overlay.style.display = 'none';
    }
});