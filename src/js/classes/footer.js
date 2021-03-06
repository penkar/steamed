import { DCE, SCB } from '../utilities.js';
class Footer {
  element = document.getElementById('footer');
  body = document.body;
  constructor() {
    [{
      link:'GitHub',
      href:'https://github.com/penkar',
    },{
      link:'HomePage',
      href:`http://jspenkar.com`,
    }].forEach(link => {
      this.element.appendChild( DCE({
        type:'a',
        text:link.link,
        className:'link',
        href:link.href,
      }) );
    });

    // SCB('cb', this.cb)
  }

  // cb = (event) => console.log(event.detail);
}

export default (new Footer);