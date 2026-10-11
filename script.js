const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});

const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    messageDiv.className = 'form-message error-msg'; 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        messageDiv.textContent = 'Please fill out all required fields (Name, Email, and Message).';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageDiv.textContent = 'Please enter a valid email address.';
        return;
    }

    messageDiv.className = 'form-message success-msg';
    messageDiv.textContent = 'Thank you! Your message has been sent successfully.';
    form.reset(); 
});