import App from '../components/App.js';

const app = new App();
const appDom = app.render();

const root = document.getElementById('app');
root.appendChild(appDom);
