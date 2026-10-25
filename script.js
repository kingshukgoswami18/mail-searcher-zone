const form = document.getElementById('search-form');
const input = document.getElementById('email-input');
const message = document.getElementById('message');
const results = document.getElementById('results');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = input.value.trim();
  const at = email.lastIndexOf('@');
  const domain = at >= 0 ? email.slice(at + 1).toLowerCase() : '';
  const basicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  if (!basicFormat || !domain) {
    results.classList.add('hidden');
    message.textContent = 'Please enter an email address in a format like name@example.com.';
    return;
  }

  document.getElementById('result-format').textContent = 'Format looks valid';
  document.getElementById('result-domain').textContent = domain;
  document.getElementById('format-status').textContent = 'Basic check';
  results.classList.remove('hidden');
  message.textContent = 'Basic check complete. Advanced lookup features are not connected yet.';
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
