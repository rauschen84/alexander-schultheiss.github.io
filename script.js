// DARK MODE TOGGLE (with localStorage, system preference fallback, and visual feedback)
const toggleButton = document.getElementById("theme-toggle");

const updateToggleIcon = (theme) => {
    if (toggleButton) {
        toggleButton.textContent = theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode";
        toggleButton.setAttribute("aria-pressed", theme === "dark");
    }
};

const setTheme = (theme) => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    updateToggleIcon(theme);
};

const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
};

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        const newTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });
}

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

// ANCHOR SCROLL OFFSET FIX
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
