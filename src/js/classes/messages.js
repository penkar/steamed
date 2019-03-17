import { DCE } from '../utilities.js'; 

class Messages {
  element = document.getElementById('messages');
  body = document.body;
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