const footerCircle = document.querySelector('.footer-circle');
if (footerCircle) {
  const root = document.documentElement;

  function updateLabel() {
    const label = root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    footerCircle.setAttribute('aria-label', label);
    footerCircle.title = label;
  }
  updateLabel();
  new MutationObserver(updateLabel).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  footerCircle.addEventListener('click', function () {
    toggleDarkMode();
  });
}
