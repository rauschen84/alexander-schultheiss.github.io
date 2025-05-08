// Smooth scroll to a section

const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
    });
};

// Form validation function

const validateForm = event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Message sent successfully!');
    } else {
        alert('Please fill in both fields');
    }
};