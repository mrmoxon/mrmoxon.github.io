const menuToggle = document.querySelector('.menu-toggle');
const menuPanel = document.querySelector('.personal-menu-panel');
const pageContent = document.querySelector('.page-content > .wrapper');
if (menuToggle && menuPanel && pageContent) {
  function setMenuOpen(open) {
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menuPanel.inert = !open;
    menuPanel.setAttribute('aria-hidden', String(!open));
    pageContent.inert = open;
    pageContent.setAttribute('aria-hidden', String(open));
  }
  menuToggle.addEventListener('click', function () {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('click', function (event) {
    if (!menuPanel.contains(event.target) && !menuToggle.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
  menuPanel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setMenuOpen(false); });
  });
}
