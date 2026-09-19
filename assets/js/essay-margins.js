(() => {
  const content = document.querySelector('.h-entry .post-content');
  if (!content) return;
  const contents = document.querySelector('.essay-contents');
  const headings = Array.from(content.querySelectorAll('h1, h2, h3'));
  const wide = window.matchMedia('(min-width: 1280px)');
  const figures = [];

  let imageDialog;
  function showImage(img, caption) {
    if (!imageDialog) {
      imageDialog = document.createElement('dialog');
      imageDialog.className = 'figure-dialog';
      imageDialog.setAttribute('aria-label', 'Figure preview');
      imageDialog.innerHTML = '<button type="button" class="figure-dialog-close" aria-label="Close image" title="Close image"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="m18 6-12 12M6 6l12 12"/></svg></button><img class="figure-dialog-image" alt=""><p class="figure-dialog-caption"></p>';
      document.body.append(imageDialog);
      imageDialog.querySelector('button').addEventListener('click', () => imageDialog.close());
      imageDialog.addEventListener('click', event => {
        if (event.target.closest('a[href^="#"]')) imageDialog.close();
        const bounds = imageDialog.getBoundingClientRect();
        if (event.target === imageDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) imageDialog.close();
      });
      imageDialog.addEventListener('close', () => document.documentElement.classList.remove('figure-dialog-open'));
    }
    const preview = imageDialog.querySelector('img');
    preview.src = img.currentSrc || img.src;
    preview.alt = img.alt;
    const previewCaption = caption.cloneNode(true);
    previewCaption.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
    imageDialog.querySelector('p').replaceChildren(...previewCaption.childNodes);
    imageDialog.showModal();
    document.documentElement.classList.add('figure-dialog-open');
  }

  content.querySelectorAll('a[href^="#ref-"]').forEach((link, index) => {
    const number = link.textContent.trim().match(/^\[?(\d+)\]?$/)?.[1];
    if (!number) return;
    const previous = link.previousSibling;
    if (previous?.nodeType === Node.TEXT_NODE) previous.textContent = previous.textContent.trimEnd();
    link.textContent = number;
    link.classList.add('citation-reference');
    if (!link.id) link.id = `citation-${number}-${index + 1}`;
    link.setAttribute('aria-label', `Reference ${number}`);
  });

  if (headings.length) {
    const list = contents.querySelector('ol');
    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = `essay-section-${index + 1}`;
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent.trim();
      item.append(link);
      list.append(item);
    });
    contents.hidden = false;
  }

  // Only lift standalone illustrations; tables and mixed prose stay untouched.
  Array.from(content.children).forEach(block => {
    if (!block.matches('p, figure') || block.querySelectorAll('img').length !== 1) return;
    const img = block.querySelector('img');
    if (img.closest('table, .keep-inline, [data-layout="inline"]')) return;
    if (!img.matches('[data-layout="margin"]') && /table|tabular/i.test(`${img.alt} ${img.getAttribute('src')}`)) return;
    const media = img.parentElement.matches('a') ? img.parentElement : img;
    if (media.parentElement !== block) return;
    const others = Array.from(block.childNodes).filter(node => node !== media);
    if (others.some(node => node.nodeType === Node.TEXT_NODE ? node.textContent.trim() : node.nodeType !== Node.ELEMENT_NODE || !node.matches('em, br, figcaption'))) return;

    const figure = document.createElement('div');
    figure.className = 'essay-figure';
    figure.id = block.id || `essay-figure-${figures.length + 1}`;
    const artwork = document.createElement('figure');
    artwork.className = 'margin-art';
    const caption = document.createElement('figcaption');
    const marker = document.createElement('a');
    marker.className = 'figure-marker';
    marker.href = img.currentSrc || img.src;
    marker.target = '_blank';
    marker.rel = 'noopener';
    marker.textContent = `Fig. ${figures.length + 1}.`;
    marker.setAttribute('aria-label', `Open figure ${figures.length + 1}: ${img.alt}`);
    caption.append(marker);
    others.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE && node.matches('em, figcaption')) {
        caption.append(document.createTextNode(' '), ...Array.from(node.childNodes));
      }
    });
    const next = block.nextElementSibling;
    if (caption.childNodes.length === 1 && next?.matches('p') && next.children.length === 1 && next.firstElementChild.matches('em') && next.textContent.trim() === next.firstElementChild.textContent.trim()) {
      caption.append(document.createTextNode(' '), ...Array.from(next.firstElementChild.childNodes));
      next.remove();
    }
    // The generated marker replaces legacy figure numbers in caption text.
    const captionText = document.createTreeWalker(caption, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = captionText.nextNode())) {
      if (marker.contains(textNode) || !textNode.textContent.trim()) continue;
      textNode.textContent = textNode.textContent.replace(/^\s*(?:Figures?|Figs?\.?)\s+\d+(?:\s*(?:&|and|,|–|-)\s*\d+)*[.:]\s*/i, '');
      break;
    }
    const imageButton = document.createElement('button');
    imageButton.type = 'button';
    imageButton.className = 'figure-image-button';
    imageButton.setAttribute('aria-label', `Enlarge figure ${figures.length + 1}: ${img.alt}`);
    imageButton.setAttribute('aria-haspopup', 'dialog');
    imageButton.title = 'Enlarge image';
    imageButton.append(img);
    imageButton.addEventListener('click', () => showImage(img, caption));
    artwork.append(imageButton);
    artwork.append(caption);
    figure.append(artwork);
    block.replaceWith(figure);
    figures.push(figure);
  });

  // Keep multi-paragraph notes together without swallowing later sections or figures.
  content.querySelectorAll('a[id^="ref-"]').forEach(anchor => {
    const paragraph = anchor.parentElement;
    const number = anchor.id.match(/^ref-(\d+)$/)?.[1];
    if (!number || !paragraph.matches('p') || paragraph.parentElement !== content) return;
    const prefix = paragraph.firstChild;
    if (prefix?.nodeType === Node.TEXT_NODE) prefix.textContent = prefix.textContent.replace(/^\s*\[\d+\]\s*/, '');
    const note = document.createElement('div');
    note.className = 'reference-note';
    const body = document.createElement('div');
    body.className = 'reference-note-body';
    const citation = content.querySelector(`.citation-reference[href="#${anchor.id}"]`);
    const label = document.createElement(citation ? 'a' : 'span');
    label.className = 'reference-number';
    label.textContent = number;
    if (citation) {
      label.href = `#${citation.id}`;
      label.setAttribute('aria-label', `Back to citation ${number}`);
      label.title = 'Back to text';
    }
    paragraph.before(note);
    let next = paragraph.nextElementSibling;
    body.append(paragraph);
    while (next && next.matches('p, ul, ol, blockquote') && !next.querySelector('[id^="ref-"], img')) {
      const following = next.nextElementSibling;
      body.append(next);
      next = following;
    }
    note.append(label, body);
  });

  content.querySelectorAll('a[href^="#essay-figure-"]').forEach(link => {
    const figure = document.getElementById(link.hash.slice(1));
    const artwork = figure?.querySelector('.margin-art');
    if (!artwork) return;
    link.classList.add('figure-reference');
    artwork.tabIndex = -1;
    let highlightTimer;
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      artwork.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      artwork.focus({ preventScroll: true });
      artwork.classList.add('figure-highlight');
      clearTimeout(highlightTimer);
      highlightTimer = setTimeout(() => artwork.classList.remove('figure-highlight'), 1800);
    });
  });

  let layoutFrame;
  function positionFigures() {
    cancelAnimationFrame(layoutFrame);
    layoutFrame = requestAnimationFrame(() => {
      if (!wide.matches) {
        content.style.paddingBottom = '';
        figures.forEach(figure => figure.style.removeProperty('--figure-offset'));
        return;
      }
      const origin = content.getBoundingClientRect().top;
      let bottom = 0;
      figures.forEach(figure => {
        const anchor = figure.getBoundingClientRect().top - origin;
        const imageHeight = figure.querySelector('img').getBoundingClientRect().height;
        const artworkHeight = figure.querySelector('.margin-art').getBoundingClientRect().height;
        const caption = figure.querySelector('figcaption');
        const captionLines = Math.round(caption.getBoundingClientRect().height / parseFloat(getComputedStyle(caption).lineHeight));
        const alignedHeight = captionLines < 7 ? artworkHeight : imageHeight;
        const top = Math.max(anchor - alignedHeight - 24, bottom);
        figure.style.setProperty('--figure-offset', `${top - anchor}px`);
        bottom = top + artworkHeight + 24;
      });
      const currentPadding = parseFloat(getComputedStyle(content).paddingBottom) || 0;
      const naturalHeight = content.getBoundingClientRect().height - currentPadding;
      const needed = Math.max(0, bottom - naturalHeight);
      if (Math.abs(needed - currentPadding) > 1) content.style.paddingBottom = `${needed}px`;
    });
  }
  const observer = new ResizeObserver(positionFigures);
  observer.observe(content);
  figures.forEach(figure => {
    observer.observe(figure.querySelector('.margin-art'));
    figure.querySelector('img').addEventListener('load', positionFigures);
  });
  wide.addEventListener('change', positionFigures);
  document.fonts.ready.then(positionFigures);
  positionFigures();

  let scrollFrame;
  function updateContents() {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      let current = headings[0];
      headings.forEach(heading => { if (heading.getBoundingClientRect().top <= 120) current = heading; });
      contents.querySelectorAll('a').forEach(link => {
        if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }
  window.addEventListener('scroll', updateContents, { passive: true });
  updateContents();
})();
