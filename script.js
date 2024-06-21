document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    // Initial check when page loads
    fadeInOnScroll();

    // Check on scroll
    window.addEventListener('scroll', fadeInOnScroll);
});
