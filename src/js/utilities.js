export function DCE({type, text, className, href, id, click, contextMenu}) {
  const element = document.createElement(type || 'div');
  if(text) element.innerText = text;
  if(className) element.classList = [className];
  if(href) element.href = href;
  if(id) element.id = id;
  if(click) element.addEventListener('click', click);
  if(contextMenu) element.addEventListener('contextMenu', contextMenu);

  return element;
}