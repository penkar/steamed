require('./index.scss');
import App from './js/app.js'


function init() {
  window.app = App;
  console.log('hello');
}

window.onload = init();