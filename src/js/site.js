// Explicit conversion events complement page views. No identifiers or query strings.
// A store click measures intent, not an install; reconcile with App Store Connect.
document.addEventListener('click', function (event) {
  const link = event.target.closest('a');
  if (!link) return;
  const url = new URL(link.href, location.href);
  if (url.hostname !== 'apps.apple.com') return;
  if (window.posthog && typeof window.posthog.capture === 'function') {
    window.posthog.capture('app_store_click', {
      page_path: location.pathname,
      placement: link.dataset.cta || (link.closest('header') ? 'navigation' : link.closest('footer') ? 'footer' : 'content')
    });
  }
});
const answer = document.getElementById('clue-answer');
if (answer) answer.addEventListener('toggle', function () {
  if (answer.open && window.posthog && typeof window.posthog.capture === 'function') {
    window.posthog.capture('sample_clue_revealed', { page_path: location.pathname });
  }
}, { once: true });

// Match the blank to the answer's actual typographic width in this font.
// The answer already exists in the reveal; no network request is needed.
const clueBlank = document.querySelector('.clue-blank');
if (clueBlank && answer) {
  function sizeClueBlank() {
    const revealedWord = answer.querySelector('.answer-reveal');
    if (!revealedWord) return;
    const style = getComputedStyle(clueBlank);
    const context = document.createElement('canvas').getContext('2d');
    if (!context) return;
    context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const wordWidth = context.measureText(revealedWord.textContent.trim().toLowerCase()).width;
    const blank = clueBlank.textContent;
    const run = clueBlank.querySelector('.blank-run');
    if (run && blank.length > 1) run.style.letterSpacing = `${(wordWidth - context.measureText(blank).width) / (blank.length - 1)}px`;
  }
  sizeClueBlank();
  document.fonts.ready.then(sizeClueBlank);
  window.addEventListener('resize', sizeClueBlank);
}
