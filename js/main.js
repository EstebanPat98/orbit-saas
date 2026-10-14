/* ===== Modo oscuro ===== */
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');

  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  } catch (e) {}
});

/* ===== Menú móvil ===== */
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

function setMenu(open) {
  mobileMenu.classList.toggle('hidden', !open);
  iconOpen.classList.toggle('hidden', open);
  iconClose.classList.toggle('hidden', !open);
  menuToggle.setAttribute('aria-expanded', open);
}

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('hidden');
  setMenu(isOpen);
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

/* ===== Interruptor de precios ===== */
const billingToggle = document.getElementById('billing-toggle');
const billingKnob = document.getElementById('billing-knob');
const labelMonthly = document.getElementById('label-monthly');
const labelYearly = document.getElementById('label-yearly');
const prices = document.querySelectorAll('.price');
const periods = document.querySelectorAll('.price-period');

let isYearly = false;

function updateBilling() {
  prices.forEach((price) => {
    price.textContent = isYearly ? price.dataset.yearly : price.dataset.monthly;
  });

  billingKnob.classList.toggle('translate-x-5', isYearly);
  billingToggle.classList.toggle('bg-brand-600', isYearly);
  billingToggle.setAttribute('aria-checked', isYearly);

  labelMonthly.classList.toggle('text-slate-500', isYearly);
  labelMonthly.classList.toggle('dark:text-slate-400', isYearly);
  labelYearly.classList.toggle('text-slate-500', !isYearly);
  labelYearly.classList.toggle('dark:text-slate-400', !isYearly);
}

billingToggle.addEventListener('click', () => {
  isYearly = !isYearly;
  updateBilling();
});

/* ===== FAQ acordeón ===== */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const arrow = item.querySelector('.faq-arrow');

  question.addEventListener('click', () => {
    const isOpen = answer.classList.toggle('hidden') === false;
    arrow.classList.toggle('rotate-180', isOpen);
    question.setAttribute('aria-expanded', isOpen);
  });
});