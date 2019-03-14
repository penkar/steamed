export function DCE({type, text, className}) {
  const element = document.createElement(type || 'div');
  if(text) element.innerText = text;
  if(className) element.classList = [className];
  return element;
}