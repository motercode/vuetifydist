export function getScrollParent(el) {
  while (el) {
    if (hasScrollbar(el)) return el;
    el = el.parentElement;
  }

  return document.scrollingElement;
}
export function getScrollParents(el) {
  const elements = [];

  while (el) {
    if (hasScrollbar(el)) elements.push(el);
    el = el.parentElement;
  }

  return elements;
}
export function hasScrollbar(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
  const style = window.getComputedStyle(el);
  return style.overflowY === 'scroll' || style.overflowY === 'auto' && el.scrollHeight > el.clientHeight;
}
//# sourceMappingURL=getScrollParent.mjs.map