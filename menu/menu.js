const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.sidebar-overlay');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});