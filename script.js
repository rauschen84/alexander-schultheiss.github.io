// DARK MODE TOGGLE (with localStorage and system preference fallback)
const setTheme = (theme) => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
};

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
};

document.getElementById("theme-toggle").addEventListener("click", () => {
    const newTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
});

initTheme();


// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
const fadeInElements = document.querySelectorAll("section, .project");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(el => {
    el.classList.add("invisible"); // Initially hidden
    observer.observe(el);
});

// OPTIONAL: Improve anchor scroll behavior if needed (offset fix)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
