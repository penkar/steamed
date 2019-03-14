require('./index.scss');
import App from './js/app.js'


function init() {
  window.app = App;
}

window.onload = init();