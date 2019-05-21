import template from './template.js';
import htmlToDOM from './html-to-DOM.js';
import todos from '../data/todo-data.js';

const list = document.getElementById('todo-list');

todos.forEach(todos => {
    const html = template(todos);
    const dom = htmlToDOM(html);
    list.appendChild(dom);

});