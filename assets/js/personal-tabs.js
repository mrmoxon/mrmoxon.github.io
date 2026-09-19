document.querySelectorAll('.personal-tabs').forEach(function (tablist) {
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const writing = document.getElementById('panel-writing');
  const art = document.getElementById('panel-art');
  const strip = art.querySelector('.art-strip');
  const track = strip.querySelector('.art-items-single');
  const originals = Array.from(track.children);
  let cycleWidth = 0;
  let loopReady = false;
  function cloneItems() {
    const fragment = document.createDocumentFragment();
    originals.forEach(item => {
      const copy = item.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.querySelector('a').tabIndex = -1;
      fragment.appendChild(copy);
    });
    return fragment;
  }
  function prepareLoop() {
    if (art.hidden || !originals.every(item => item.querySelector('img').complete)) return;
    if (!loopReady) {
      track.prepend(cloneItems());
      track.append(cloneItems());
    }
    const nextWidth = originals[0].getBoundingClientRect().left - track.firstElementChild.getBoundingClientRect().left;
    if (!loopReady || nextWidth !== cycleWidth) {
      cycleWidth = nextWidth;
      strip.scrollLeft = cycleWidth;
    }
    loopReady = true;
  }
  // Matching copies on either side let us recenter without a visible jump.
  strip.addEventListener('scroll', function () {
    if (!loopReady || !cycleWidth || art.hidden) return;
    if (strip.scrollLeft < cycleWidth * 0.5) strip.scrollLeft += cycleWidth;
    else if (strip.scrollLeft >= cycleWidth * 1.5) strip.scrollLeft -= cycleWidth;
  }, { passive: true });
  originals.forEach(item => {
    item.querySelector('img').addEventListener('load', prepareLoop);
    item.querySelector('img').addEventListener('error', prepareLoop);
  });
  window.addEventListener('resize', prepareLoop);
  function activate(tab) {
    tabs.forEach(function (item) {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(item.getAttribute('aria-controls'));
      if (panel === writing) {
        writing.classList.toggle('is-inactive', !selected);
        writing.inert = !selected;
        writing.setAttribute('aria-hidden', String(!selected));
      } else {
        panel.hidden = !selected;
      }
    });
    prepareLoop();
  }
  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { activate(tab); });
    tab.addEventListener('keydown', function (event) {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      activate(tabs[next]);
      tabs[next].focus();
    });
  });
});
