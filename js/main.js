/* =============================================
   Colores de Ensueño — JavaScript principal
   ============================================= */

/**
 * Oculta el indicador de scroll al hacer scroll hacia abajo
 */
function initScrollIndicator() {
  const indicator = document.querySelector('.hero-scroll');
  if (!indicator) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      indicator.style.opacity = '0';
    } else {
      indicator.style.opacity = '1';
    }
  }, { passive: true });
}

/**
 * Anima los elementos al entrar en el viewport
 */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.product-card, .fair-card, .about-inner > div, .stat-number'
  );

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/**
 * Inicialización
 */
document.addEventListener('DOMContentLoaded', () => {
  initScrollIndicator();
  initScrollReveal();
});
