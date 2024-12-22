let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling Down
        nav.style.top = "-10vh"; // Hide navbar
    } else {
        // Scrolling Up
        nav.style.top = "0"; // Show navbar
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
