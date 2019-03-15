import { observable } from 'mobx';
import { DCE } from './utilities.js'; 

class Messages {
  @observable asdf = 1;
  element = document.getElementById('messages');
  constructor() {
    this.messages = [];
    for(let i = 0; i < 40; i++) {this.createMessage();}
  }

  createMessage = (text) => {
    if(!text) text = `I am a message ${this.element.children.length}`;
    let node = DCE({text, className:'message'});
    this.element.appendChild(node);
  }
}

export default (new Messages);