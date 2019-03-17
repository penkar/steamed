/* Document Create Element */
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

/* Dispatch Event */
export function DE(title, type, payload) {
  const newEvent = new CustomEvent(title, {
    bubbles:true,
    detail:{
      type,
      payload
    }});
  document.body.dispatchEvent(newEvent);
}

/* Setup Call Back */
export function SCB(title, callback) {
  document.body.addEventListener(title, callback);
}