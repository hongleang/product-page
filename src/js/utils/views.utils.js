export function getElement(selector, el) {
  if (el) return el.querySelector(selector);
  return document.querySelector(selector);
}

export function getAllElements(selector){
  return document.querySelectorAll(selector)
}