import { DCE } from './utilities';

class Header {
  element = document.getElementById('header');
  constructor() {
    this.element.appendChild( DCE({type:'span', text:'Steamed | ', className:'title'}) );
  }
}

export default (new Header);