const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
}

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const serviceSelect = document.querySelector('select[name="service"]');
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});

const bookingForm = document.getElementById('booking');
if (bookingForm) bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const name = String(formData.get('name') || '').trim();
  const phone = String(formData.get('phone') || '').trim();
  const service = String(formData.get('service') || '').trim();
  const location = String(formData.get('location') || '').trim();
  const date = String(formData.get('date') || '').trim();
  const details = String(formData.get('details') || '').trim();
  const error = document.querySelector('.form-error');

  if (!name || !phone || !service || !location) {
    error.textContent = 'Please complete your name, phone number, service and location.';
    return;
  }
  error.textContent = '';
  const message = [
    'Hello Cleaning Services Kenya, I would like to request a cleaning quote.',
    '',
    `Name: ${name}`,
    `My phone number: ${phone}`,
    `Service: ${service}`,
    `Property location: ${location}`,
    `Preferred date: ${date || 'Not specified'}`,
    `Additional details: ${details || 'None provided'}`,
    '',
    'Please let me know availability and the next steps. Thank you.'
  ].join('\n');

  window.open(`https://wa.me/524706855633?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
