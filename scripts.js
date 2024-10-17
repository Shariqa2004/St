// Email Collector Form
const emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    // Integrate with Google Sheets or Excel using Google Apps Script or API
    console.log(`Email submitted: ${email}`);
});

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    // Integrate with Google Sheets or Excel using Google Apps Script or API
    console.log(`Contact form submitted: ${name}, ${email}, ${phone}, ${message}`);
});
