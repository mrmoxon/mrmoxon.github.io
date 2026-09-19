const themeButton = document.querySelector('.footer-theme-toggle');
if (themeButton) {
  function updateThemeLabel() {
    const label = document.documentElement.dataset.theme === 'dark'
      ? 'Switch to light mode' : 'Switch to dark mode';
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
  }
  updateThemeLabel();
  new MutationObserver(updateThemeLabel).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme']
  });
  themeButton.addEventListener('click', toggleDarkMode);
}
