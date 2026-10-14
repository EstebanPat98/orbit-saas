const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');

  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  } catch (e) {}
});