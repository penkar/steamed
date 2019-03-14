import { DCE } from './utilities.js';
class Footer {
  element = document.getElementById('footer');
  constructor() {
    [{
      link:'GitHub',
      href:'https://github.com/penkar'
    },{
      link:'HomePage',
      href:`http://jspenkar.com`
    }].forEach(link => {
      this.element.appendChild( DCE({
        type:'a',
        text:link.link,
        className:'link',
        href:link.href,
      }) );
    });
  }
}

export default (new Footer);