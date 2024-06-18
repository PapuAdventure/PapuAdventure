const currentPath = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll('.nav_links li a')

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

