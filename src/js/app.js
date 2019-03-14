import Application from './application';
import Footer from './footer';
import Header from './header';
import Messages from './messages';
import Modal from './modal';
import Wrapper from './wrapper';

class App {
  application = Application;
  footer = Footer;
  header = Header;
  messages = Messages;
  modal = Modal;
  wrapper = Wrapper;
  constructor() {
    console.log(this);
  }
}

export default (new App)