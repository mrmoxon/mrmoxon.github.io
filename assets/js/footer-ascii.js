document.querySelectorAll('[data-ascii-src]').forEach(async function (artwork) {
  const text = artwork.querySelector('.footer-ascii-text');
  try {
    const response = await fetch(artwork.dataset.asciiSrc);
    if (!response.ok) throw new Error('ASCII source unavailable');
    const source = (await response.text()).replace(/\r\n/g, '\n').replace(/\n$/, '');
    if (!source.trim()) throw new Error('ASCII source is empty');
    text.textContent = source;

    // Scale the entire character grid, preserving whitespace and a fixed font.
    function fit() {
      if (!text.offsetWidth || !text.offsetHeight) return;
      text.style.transform = 'scale(' + artwork.clientWidth / text.offsetWidth + ', ' + artwork.clientHeight / text.offsetHeight + ')';
      artwork.classList.add('is-ready');
    }
    fit();
    new ResizeObserver(fit).observe(artwork);
    document.fonts.ready.then(fit);
  } catch (error) {
    // Keep the original image if the text cannot be loaded.
    console.warn('Footer ASCII:', error.message);
  }
});
