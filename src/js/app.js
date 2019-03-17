import Application from './classes/application';
import Footer from './classes/footer';
import GlobalState from './classes/globalstate';
import Header from './classes/header';
import Messages from './classes/messages';
import Modal from './classes/modal';
import Wrapper from './classes/wrapper';

class App {
  application = Application;
  footer = Footer;
  header = Header;
  messages = Messages;
  modal = Modal;
  wrapper = Wrapper;
  constructor() {
  }
}

export default (new App)