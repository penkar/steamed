import { DCE, DE } from '../utilities';

class Header {
  element = document.getElementById('header');
  body = document.body;
  constructor() {
    this.element.appendChild( DCE({type:'span', text:'Steamed | ', className:'title'}) );
    // this.element.addEventListener('click', this.cb);
  }

  // cb = () => {
  //   DE('cb', 'asdf', {asdfasdfasdf:123123123})
  // }
}

export default (new Header);