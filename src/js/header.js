import { DCE } from './utilities';

class Header {
  element = document.getElementById('header');
  constructor() {
    this.element.appendChild( DCE({type:'span', text:'Steamed | ', className:'title'}) );
    this.element.addEventListener('aaa', this.cb);
  }
}

export default (new Header);