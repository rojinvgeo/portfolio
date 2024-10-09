const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const closeButton = document.getElementById('close-button');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate form success (replace with your actual form submission logic)
  successMessage.style.display = 'block';

  // Close popup on button click
  closeButton.addEventListener('click', () => {
    successMessage.style.display = 'none';
  });
});