// In-page nav scrolls to the target section without writing a #fragment into
// the URL bar. The href stays on the anchor so middle-click, open-in-new-tab,
// and no-JS loads all still work; we only intercept the plain left-click.
export default function scrollToSection(event, href) {
  // Let the browser handle modified clicks (new tab, new window, download).
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();

  // No behavior option: this inherits `scroll-behavior: smooth` from the html
  // rule in styles.css, so scrolling looks identical to native hash nav.
  target.scrollIntoView();

  // Native hash nav also moves focus. Preserve that for keyboard and screen
  // reader users; preventScroll stops focus() from jumping past the animation.
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}
